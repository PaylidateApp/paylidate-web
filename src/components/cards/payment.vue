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
        let verify = this.$q.localStorage.getItem('verify');
        
        

        if(this.form.status == 'successful' && currency && amount && verify){
        
        
          this.$q.localStorage.remove("verify");
          this.$store.commit('card/payment',{currency:currency, amount:amount})
          
          this.$router.push("/virtual-card/create")
          this.$q.loading.hide()
  
        }
        else{
          this.$q.localStorage.remove("verify");
          this.$router.push("/virtual-card")
            this.$q.loading.hide()
          this.$q.notify({message: 'Verification Failed', color: 'red'})

        }

        },

       

  }
}
</script>
