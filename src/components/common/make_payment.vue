<template>
  <div>

    <q-btn color="secondary" size="xs" label="Make Payment" @click="open = true" />
    <q-dialog v-model="open">
      <q-card :style="$q.screen.gt.sm ? 'min-width: 600px' : 'min-width: 300px'">
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
                      <div>Note: {{charges}} </div>
          </div>

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
          <q-btn flat label="Cancel" no-caps color="negative" @click="confirm = false; open = false; loading = false;" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
// import router from 'src/router';

export default {
  props:['amount','slug','product','url'],
    components:{
         
  },
    data(){
      return {
        confirm: false,
        open: false,
        loading: false,
        rate: 0,
        form:{
          amount: this.amount,
          total_amount: null,
          slug: this.slug,
          currency: 'NGN',
          
        },
         error: ''
      }
    },

     computed: {
      cards(){return this.$store.getters["card/cards"] },
      charges(){
      let charge = (3/100 * this.form.amount).toFixed(2)
        if(charge < 100){
          this.form.total_amount = this.form.amount + 100
          return "Your Transaction fee is NGN 100"
        }
        else if( charge > 2060){
          this.form.total_amount = this.form.amount + 2060;
          return "Your Transaction fee is NGN 2060"
        }
        else {
          this.form.total_amount = this.form.amount + charge
          return "Your Transaction fee is NGN " + charge
        }
    }
    },

    mounted() {
      this.get_rate()
    },

    methods:{
      async makePayment() {
        this.loading = true;

          this.$q.localStorage.set('amount', this.form.total_amount);
          this.$q.localStorage.set('currency', this.form.currency);
          this.$q.localStorage.set('slug', this.form.slug);

          FlutterwaveCheckout({
          public_key: process.env.Flutterwave_public_key,
      
          tx_ref:'PD' + this.user.id + (new Date()).getTime(),
          amount: this.form.total_amount,
          currency: this.form.currency,
          country: "",
          payment_options: "",
          redirect_url: `${window.location.href}/product-payment`,
                   meta: {
            consumer_id: this.user.id,
            consumer_mac: "",
          },
          customer: {
            email: this.user.email,
            phone_number: this.user.phone,
            name: this.user.name,
          },
      callback: function (data) {
        if(data.status == 'successful'){
        this.paymentStatus();
       
        this.open = false;
        this.error=""; 
        this.loading = false;

        }
        else{
          this.open = false;
        this.error="";
        this.loading = false;

          this.$q.notify({message: 'Transaction Error ', color: 'red'})
        }
      },
      onclose: function() {
        
        this.error=""; 
      },
      customizations: {
        title: "Payment for " + this.slug,
        description: "Paid for " + this.slug,
        logo: "https://content.screencast.com/users/DanielAdegoke/folders/Default/media/f1a10ebf-f854-476f-bd5d-88e8c6cac998/Palidate%20Logo-19.png",
      },
    });

        this.open = false;


        this.loading = false;


        // const req = await this.$axios.post(process.env.Api + '/api/payment/link', this.form)
        // const res = req.data
        // window.location.href = res.data.link;

        // const req = await this.$axios.post(process.env.Api + '/api/make-payment', this.form)
        // const res = req.data
        // this.open = false;
      },

      async paymentStatus(){

        
        try{
        const req = await this.$axios.get(`${process.env.Api}/api/product/paid/${this.slug}`)          
          const res = req.data

           this.$q.loading.show({
          message: 'Hold on, Processing Payment',
        spinnerColor: 'secondary'
          
        })
          if(res.status == 'success'){
           this.$q.loading.hide()
          this.$q.notify({message: 'Payment Successful ', color: 'green'})
          return
          }

          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})


        }catch(err){

        }

        
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
