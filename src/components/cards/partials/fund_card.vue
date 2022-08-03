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

    mounted() {
    this.verifyPayment();
  },

    methods:{
          async verifyPayment(){
        this.$q.loading.show({
          message: 'Hold on, While payment is been verified',
          spinnerColor: 'secondary'
          
        })
        
        let response = JSON.parse(this.$route.query.response)

        let currency = this.$q.localStorage.getItem('PaymentDetails').currency;
        let amount = this.$q.localStorage.getItem('PaymentDetails').amount;

        if(response.status == 'successful' && response.currency == currency && response.amount == amount){
        let txRef = response.txRef
    
 
        const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
        const res = req.data;
        
        
        if(res.status == 'success'){
          // execute what you want to happen if verification is ok          
         
          this.fundCard (res.data.currency, res.data.amount);
        }
        else{
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})


        }

        }
        else{
          this.$router.push({ name: "escrow"})
            this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },
        async fundCard (currency, amount) {
       this.$q.loading.show({
          message: 'Hold on, Card funding in progress',
        spinnerColor: 'secondary'
          
        })

       try{
      let virtual_card_id = this.$q.localStorage.getItem('PaymentDetails').virtual_card_id;
          const req = await this.$axios.post(process.env.Api + '/api/fund', {virtual_card_id, currency, amount});
      const res = req.data
        this.$q.localStorage.removeItem("PaymentDetails");

        if(res.status == 'success') { 
          this.$q.loading.hide()
          this.$q.notify({message: 'Money has been added to your virtual card', color: 'green'})
        }
        else{
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Error while trying to fund Card', color: 'red'})
        }

        }catch(err){
          this.$q.localStorage.removeItem("PaymentDetails");
          this.$q.loading.hide()
          this.$q.notify({message: 'Error while trying to fund Card', color: 'red'})
           this.$router.push({ name: "escrow"})
          
        }
     
    },
    }
}
</script>

<style>

</style>
