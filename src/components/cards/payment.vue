<template>
  <q-page padding>
    <div>

    </div>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data() {
    return {
      form:{
        status: this.$route.query.status,
        transaction_id: this.$route.query.transaction_id,
        tx_ref: this.$route.query.tx_ref,
        slug: this.$route.params.slug,
      },
      slug: this.$route.params.slug,
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
        
        this.$q.localStorage.removeItem("PaymentDetails");
 
        const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
        const res = req.data;
        
        
        if(res.status == 'success'){
          // execute what you want to happen if verification is ok          
         
          this.createCard (res.data.currency, res.data.amount);
        }
        else{
          this.$q.localStorage.removeItem("PaymentDetails");
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})


        }

        }
        else{
          this.$q.localStorage.removeItem("PaymentDetails");
          this.$router.push({ name: "escrow"})
            this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },

        async createCard (currency, amount) {
       this.$q.loading.show({
          message: 'Hold on, Card creation in progress',
        spinnerColor: 'secondary'
          
        })

       try{
      const req = await this.$axios.post(process.env.Api + '/api/card', {
        amount: amount,
          currency: currency,
          default: 1
      })
        const res = req.data
        if(res.status == 'success') { 
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Created successfully', color: 'green'})
        }
        else{
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
        }

        }catch(err){
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
           this.$router.push({ name: "escrow"})
          
        }
     
    },

  }
}
</script>
