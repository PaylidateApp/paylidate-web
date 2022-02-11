<template>
  <div>

  </div>
</template>

<script>
export default {
      data() {
    return {
      form:{
        status: this.$route.query.status,
        transaction_id: this.$route.query.transaction_id,
        tx_ref: this.$route.query.tx_ref,
      },
      
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
        
        let currency = this.$q.localStorage.getItem('currency');
        let amount = this.$q.localStorage.getItem('amount');
        
        

        if(this.form.status == 'successful' && currency && amount){
        let txRef = this.form.tx_ref        
    
        this.$q.localStorage.remove("amount");
        this.$q.localStorage.remove("currency");
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
      let virtual_card_id = this.$q.localStorage.getItem('virtual_card_id');
          const req = await this.$axios.post(process.env.Api + '/api/fund', {virtual_card_id, currency, amount});
      const res = req.data
        
        this.$q.localStorage.remove("virtual_card_id");

        if(res.status == 'success') { 
          this.$q.loading.hide()
          this.$router.push({ name: "escrow"})
          this.$q.notify({message: 'Money has been added to your virtual card', color: 'green'})
          return
        }
        else{
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Error while trying to fund Card', color: 'red'})
          this.$q.localStorage.remove("amount");
          this.$q.localStorage.remove("currency");
        }

        }catch(err){
          this.$q.localStorage.remove("amount");
          this.$q.localStorage.remove("currency");
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
