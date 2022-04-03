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
        
        //let response = JSON.parse(this.$route.query.response)
   

        let currency = this.$q.localStorage.getItem('currency');
        let amount = this.$q.localStorage.getItem('amount');
        const slug = this.$q.localStorage.getItem('slug');
        
        

        if((this.form.status == 'successful' || this.form.status == 'completed' ) && currency && amount && slug){
    
        
        this.$q.localStorage.remove("amount");
        this.$q.localStorage.remove("currency");
        this.$q.localStorage.remove("PaymentDetails");
        
        this.$store.commit('card/payment',{slug:slug})

          this.$router.push("/product-payment")
          this.$q.loading.hide()

 


        }
        else{
          this.$q.localStorage.remove("amount");
          this.$q.localStorage.remove("currency");
          this.$q.localStorage.remove("slug");
          this.$router.push({ name: "escrow"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },

      




//  const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
//         const res = req.data;
        
//         if(res.status != 'success'){}


  }
}
</script>
