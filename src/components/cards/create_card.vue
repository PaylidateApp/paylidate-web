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
    this.createCard(this.card_info.currency, this.card_info.amount);
  },
  computed:{
      card_info(){return this.$store.getters["card/payment"] }
  },

  methods:{

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
        const res = req.data;
        if(res.status == 'success') { 
        this.$store.commit('card/payment',{ });
        this.$q.localStorage.remove("currency");
        this.$q.localStorage.remove("amount");

          this.$q.loading.hide()
          this.$router.push("/virtual-card")

          this.$q.notify({message: 'Card Created successfully', color: 'green'})
          return
        }
        else{
          this.$q.localStorage.remove("currency");
        this.$q.localStorage.remove("amount");
        this.$store.commit('card/payment',{ });

          this.$q.loading.hide()
          this.$router.push("/virtual-card")
          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
        }

        }catch(err){
          this.$q.localStorage.remove("currency");
        this.$q.localStorage.remove("amount");
          this.$q.loading.hide()
        this.$store.commit('card/payment',{ });

          this.$router.push("/virtual-card")

          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
           
          
        }
     
    },




  }
}
</script>
