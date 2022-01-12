<template>
  <div>

      <div class="row q-gutter-sm">

         <div>
            Just like your regular cards, you can pay for your online shopping with your Pay Card.
         </div>

          <q-space />

          <AddMoney />
          <!-- <Transfer /> -->
          <CreateCard :cards="cards"/>
      </div>
      <q-separator class="q-my-sm" />

      <!-- <div class="row q-gutter-md q-my-lg">
         <CreateCard /> <Transfer />
      </div> -->

      <div class="row">
        <Card v-for="(card, index) in cards" :key="index" :card="card" v-on:click.native="clickedCard(card)"/>
      </div>

      <CardDetails v-if="card" :card="card"/>
      <!-- <NoData v-else :text="'Getting Your Cards'" /> -->



  </div>
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
