<template>
  <div>

    <q-btn color="secondary" size="xs" label="Make Payment" @click="open = true" />
    <q-dialog v-model="open">
      <q-card style="min-width:700px">
        <q-card-section>
          <div class="text-h6">{{ open && confirm ? 'Please Confirm': 'Make Payment' }}</div>
        </q-card-section>
        <q-card-section v-if="open && !confirm">
          <div v-if="error" class="text-negative">{{error}}</div>
          <q-input dense square outlined v-model="form.amount" label="Amount" disable prefix="NGN"/>
          <!-- <div class="text-caption q-pt-md">
              <div class="text-bold"> <span> - </span>Wallet Balance: {{ cards[0].data.amount }}</div>
              <div> <span class="text-bold"> - </span>USD Rate: {{ '1 at NGN' + rate }}</div>
          </div> -->
        </q-card-section>

        <q-card-section class="column flex-center full-width" v-if="confirm">
          <div class="q-py-xs text-center">
            <div class="text-caption text-weight-light">Amount</div>
            <div class="text-bold text-h5">NGN {{ product.price }}</div>
          </div>

          <div class="row flex-center full-width q-px-">
            <div class="column">
              <div class="q-py-xs text-right">
                <div class="text-caption text-weight-light">Product Name</div>
                <div class="text-bold text-h6">{{ product.name }}</div>
              </div>

              <div class="q-py-xs text-right">
                <div class="text-caption text-weight-light">Payment Type</div>
                <div class="text-bold ">{{ product.type }}</div>
              </div>
            </div>

            <div class="column">
              <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Quantity</div>
                <div class="text-bold text-h6">{{ product.quantity }}</div>
              </div>

              <!-- <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Payment Ref</div>
                <div class="text-bold">{{ '200000-sdsd-sdsd' }}</div>
              </div> -->

              <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Payment Status</div>
                <div class="text-bold ">{{ 'pending' }}</div>
              </div>
            </div>
          </div>

          <div class="q-py-xs text-center">
            <div class="text-bold text-caption ">{{ product.created_at }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn unelevated no-caps color="primary" label="Make Payment" v-if="!confirm" :loading="loading" @click="confirm = true; open = true" />
          <q-btn unelevated no-caps color="primary" label="Make Payment" v-if="confirm" :loading="loading" @click="makePayment()" />
          <q-btn flat label="Cancel" no-caps color="negative" @click="confirm = false; open = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// import router from 'src/router';
export default {
  props:['amount','slug','product','url'],
    data(){
      return {
        confirm: false,
        open: false,
        loading: false,
        rate: 0,
        form:{
          amount: this.amount,
          slug: this.slug,
          currency: 'NGN',
          redirect_url: this.url
        },
         error: ''
      }
    },

     computed: {
      cards(){return this.$store.getters["card/cards"] },
    },

    mounted() {
      this.get_rate()
    },

    methods:{
      async makePayment() {
        this.loading = true;

        const req = await this.$axios.post(process.env.Api + '/api/payment/link', this.form)
        const res = req.data
        window.location.href = res.data.link;

        // const req = await this.$axios.post(process.env.Api + '/api/make-payment', this.form)
        // const res = req.data
        // this.open = false;
        this.loading = false;
      },
       async get_rate() {
        const req = await this.$axios.post(process.env.Api + '/api/get-rate')
        const res = req.data
        this.rate = res.data.rate
      },
    }
}
</script>

<style>

</style>
