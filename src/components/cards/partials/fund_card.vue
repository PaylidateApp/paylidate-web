<template>
  <div>

    <q-btn unelevated no-caps color="primary" label="Fund This Card" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Fund This Card</div>
    </q-card-section>
    <q-card-section>
      <q-input square outlined v-model="form.amount" label="Amount" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn unelevated no-caps color="primary" label="Fund Card" @click="makePayment()" />
      <q-btn flat label="Cancel" color="primary" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
    data(){
      return {
        open: false,
        form:{
          currency: 'NGN',
          amount: 250,
        }
      }
    },

    methods:{
      makePayment() {
      this.$q.localStorage.set('paylidate-add-amount', this.form.amount)
      FlutterwaveCheckout({
        public_key: process.env.Flutterwave_public_key,
        tx_ref: 'paylidate ' + Math.floor(Math.random() * 1000000),
        amount: this.form.amount,
        currency: "NGN",
        country: "NG",
        payment_options: "card,ussd",
        redirect_url: "/add-money",
        customer: {
          email: 'syflex360@gmail.com',
          phone_number: '07067822618',
          name: 'Simon Moses',
        },
        customizations: {
          title: "Paylidate",
          description: "Payment for items details",
          // logo: "https://content.screencast.com/users/DanielAdegoke/folders/Default/media/f1a10ebf-f854-476f-bd5d-88e8c6cac998/Palidate%20Logo-19.png",
        },
      });
    },
    }
}
</script>

<style>

</style>
