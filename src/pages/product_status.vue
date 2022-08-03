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
      
    }
  },

  mounted() {
    this.paymentStatus(this.slug);
  },
  computed:{
      slug(){return this.$store.getters["card/payment"].slug }
  },

  methods:{
    

      async paymentStatus(slug){

       
        if(!slug){
           this.$router.push({ name: "escrow"})          
          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})
          this.$store.commit('card/payment',{ });

          return
        }

        
        try{
        const req = await this.$axios.get(`${process.env.Api}/api/product/paid/${slug}`)          
          const res = req.data
        this.$q.localStorage.remove("slug");
        this.$store.commit('card/payment',{ });



           this.$q.loading.show({
          message: 'Hold on, Processing Payment status',
        spinnerColor: 'secondary'
          
        })
          if(res.status == 'success'){
           this.$q.loading.hide()
           this.$router.push({ name: "escrow"})
          this.$q.notify({message: 'Successful ', color: 'green'})
          return
          }
          this.$q.localStorage.remove("slug");
        this.$store.commit('card/payment',{ });

           this.$router.push({ name: "escrow"})

          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})


        }catch(err){
          this.$q.localStorage.remove("slug");
         this.$store.commit('card/payment',{ });
           this.$router.push({ name: "escrow"})          
          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})

        }

        
      },


  }
}
</script>
