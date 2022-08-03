<template>
  <div>

    <q-btn color="secondary" size="xs" label="Make Payment" @click="open = true" />
    
    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Make Payment</div>
    </q-card-section>
    <q-card-section>
      <div v-if="error" class="text-negative">{{error}}</div>
      <q-input dense square outlined v-model="form.amount" label="Amount" disable prefix="NGN"/>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn unelevated no-caps color="primary" label="Make Payment" :loading="loading" @click="makePayment()" />
      <q-btn flat label="Cancel" no-caps color="negative" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>

  </div>
</template>

<script>
// import router from 'src/router';
export default {
  props:['amount','slug','type'],
    data(){
      return {
        open: false,
        loading: false,
        form:{
          // currency: 'NGN',
          amount: this.amount,
          slug: this.slug,
          // redirect_url: `${window.location.href}/product/${this.slug}/payment`
        },
         error: ''
      }
    },

    methods:{
      async makePayment() {
        this.loading = true;
        const req = await this.$axios.post(process.env.Api + '/api/make-payment', this.form)
        const res = req.data
        this.open = false;
        this.loading = false;
      },
    }
}
</script>

<style>

</style>
