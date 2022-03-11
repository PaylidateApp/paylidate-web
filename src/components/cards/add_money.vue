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
        let verify = this.$q.localStorage.getItem('verify');
        let amount = this.$q.localStorage.getItem('amount');
        let virtual_card_id = this.$q.localStorage.getItem('virtual_card_id');
        
        

        if(this.form.status == 'successful' && currency && amount && virtual_card_id && verify){             
    
        this.$q.localStorage.remove("verify");
        this.$store.commit('card/payment',{currency:currency, amount:amount, virtual_card_id:virtual_card_id })
          
          this.$q.loading.hide()
          this.$router.push({ name: "fund-card-status"})

        }
        else{

          this.$q.localStorage.remove("verify");
            this.$q.loading.hide()
          this.$router.push({ name: "fund-card-status"})
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },
        
    }
}
</script>

<style>

</style>
