<template>
  <div>

  </div>
</template>

<script>
export default {
    data(){
      return {
        
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
