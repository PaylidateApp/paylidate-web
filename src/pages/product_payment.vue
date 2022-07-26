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
        payment_ref: this.$route.query.tx_ref,
        payment_id: this.$route.query.transaction_id,
        transaction_id: this.$route.params.t_id,       
      },
      
    }
  },

  mounted() {
    this.verifyPayment();
  },

  methods:{
    
    async verifyPayment(){
      
       try{
        this.$q.loading.show({
          message: 'Hold on, While payment is been verified',
          spinnerColor: 'secondary'
          
        })
        
          const req = await this.$axios.post(process.env.Api + '/api/make-payment', this.form)
         const res = req.data;    
<<<<<<< HEAD
            
        
=======

         console.log(res)
            
         
>>>>>>> 3da087f5a796a3eec09ea965e6e074df2e711cbc
        if(res.status == 'success'){

          this.$router.push({ name: "transactions"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification successful', color: 'green'})

        }
        else{    
        
           
          this.$router.push({ name: "transactions"})
          this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})


        }

       }

<<<<<<< HEAD
       catch(error){
=======
       catch (error) {
         console.log(error.response.data.message);

>>>>>>> 3da087f5a796a3eec09ea965e6e074df2e711cbc
        this.$q.notify({message: 'Verification Failed', color: 'red'})

       }
        

        },

      




//  const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
//         const res = req.data;
        
//         if(res.status != 'success'){}


  }
}
</script>
