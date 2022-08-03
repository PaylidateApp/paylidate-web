<template>
  <div>

    <q-btn unelevated no-caps color="primary" label="Activate Naira Card" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section style="min-width: 300px">
      <div class="text-h6">Activate Card</div>
    </q-card-section>
    <q-card-section>
      <div v-if="error" class="text-negative">{{error}}</div>
      <q-input dense square outlined v-model="form.amount" label="Amount" prefix="NGN" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn unelevated no-caps color="primary" label="Activate Naira Card" @click="makePayment()" />
      <q-btn flat label="Cancel" color="negative" v-close-popup />
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
        },
        error: ''
      }
    },

    methods:{
      makePayment() {
        const amount = this.form.amount
        if (!amount || amount < 200) {
          this.error = 'Amount cannot be less than 200'
          return
        }

      this.$q.localStorage.set('paylidate-card-amount', this.form.amount)
      FlutterwaveCheckout({
        public_key: process.env.Flutterwave_public_key,
        tx_ref: 'paylidate ' + Math.floor(Math.random() * 1000000),
        amount: this.form.amount,
        currency: "NGN",
        country: "NG",
        payment_options: "card,ussd",
        redirect_url: "/activate-card",
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
