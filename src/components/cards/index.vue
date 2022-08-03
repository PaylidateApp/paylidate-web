<template>
  

    <q-page class="window-height window-width row justify-center items-center">
    <div class="text-h3 text-weight-bolder text-secondary">COMING SOON</div>
  </q-page>

</template>

<script>
import ActivateCard from './partials/activate_card'
import CreateCard from './partials/create_card'
import AddMoney from './partials/add_money'
import Withdraw from './partials/withdraw'
import Transfer from './partials/transfer'
import Card from './partials/card'
import CardDetails from './partials/card_details'

import NoData from '../common/NoData'
import Info from '../common/info_dialog'
export default {
  components:{
    ActivateCard,CreateCard,AddMoney,Withdraw,Transfer,
    Card,CardDetails,
    NoData, Info
  },
  data(){
    return {
        card: null,
        loadingInfo:{
        message: 'Getting your Cards',
        spinnerColor: 'secondary'
      }
    }
  },

  mounted(){
      this.getCards();
  },

  computed: {
    cards(){return this.$store.getters["card/cards"] },
  },

  methods:{
    async getCards(){
      // this.$q.loading.show(this.loadingInfo)
      // const req = await this.$axios.get(process.env.Api + '/api/card')
      // const res = req.data
      // this.cards = res.data
      // this.$q.loading.hide()
    },

    clickedCard(card){
      console.log(card);
      this.card = card;
    }
  }

}
</script>

<style>

</style>
