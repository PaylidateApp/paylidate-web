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
    this.fundCard(this.fund_card_info.currency, this.fund_card_info.amount, this.fund_card_info.virtual_card_id);
  },

   computed:{
      fund_card_info(){return this.$store.getters["card/payment"] }
  },

    methods:{
          async fundCard (currency, amount, virtual_card_id) {
       this.$q.loading.show({
          message: 'Hold on, Card funding in progress',
        spinnerColor: 'secondary'
          
        })

       try{
          const req = await this.$axios.post(process.env.Api + '/api/fund', {virtual_card_id, currency, amount});
      const res = req.data

        this.$store.commit('card/payment',{ });
        this.$q.localStorage.remove("currency");
        this.$q.localStorage.remove("amount");
        this.$q.localStorage.remove("virtual_card_id");
        

        if(res.status == 'success') { 
          this.$q.loading.hide()
          this.$router.push({ name: "virtual-card"})
          this.$q.notify({message: 'Money has been added to your virtual card', color: 'green'})
          return
        }
        else{
          this.$q.loading.hide()
          this.$q.localStorage.remove("amount");
          this.$q.localStorage.remove("virtual_card_id");
          this.$store.commit('card/payment',{ });
          this.$q.localStorage.remove("currency");
          this.$router.push({ name: "virtual-card"})
          this.$q.notify({message: 'Error while trying to fund Card', color: 'red'})
        }

        }catch(err){
          this.$q.localStorage.remove("amount");
        this.$q.localStorage.remove("virtual_card_id");
          this.$q.localStorage.remove("currency");
          this.$q.loading.hide()
          this.$router.push({ name: "virtual-card"})
        this.$store.commit('card/payment',{ });
          this.$q.notify({message: 'Error while trying to fund Card', color: 'red'})
          
        }
     
    },
    }
}
</script>

<style>

</style>
