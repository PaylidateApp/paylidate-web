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
        
        //let response = JSON.parse(this.$route.query.response)
   

        let currency = this.$q.localStorage.getItem('currency');
        let amount = this.$q.localStorage.getItem('amount');
        let slug = this.$q.localStorage.getItem('slug');
        
        

        if(this.form.status == 'successful' && currency && amount && slug){
        let txRef = this.form.tx_ref
        
        this.$q.localStorage.remove("amount");
        this.$q.localStorage.remove("currency");
 
        const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
        const res = req.data;
        
        
        if(res.status == 'success'){
          // execute what you want to happen if verification is ok          
         
          this.paymentStatus (slug);
        }
        else{
          this.$q.localStorage.remove("PaymentDetails");
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})


        }

        }
        else{
          this.$q.localStorage.remove("PaymentDetails");
          this.$router.push({ name: "escrow"})
            this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },

      async paymentStatus(slug){

        
        try{
        const req = await this.$axios.get(`${process.env.Api}/api/product/paid/${slug}`)          
          const res = req.data
        this.$q.localStorage.remove("slug");


           this.$q.loading.show({
          message: 'Hold on, Processing Payment',
        spinnerColor: 'secondary'
          
        })
          if(res.status == 'success'){
           this.$q.loading.hide()
           this.$router.push({ name: "escrow"})
          this.$q.notify({message: 'Payment Successful ', color: 'green'})
          return
          }

          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})


        }catch(err){

        }

        
      },


  }
}
</script>
