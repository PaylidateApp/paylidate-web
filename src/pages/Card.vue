<template>
  <q-page class="bg-grey-2"  padding>
    <!-- content -->
    <!-- <ActivateCard v-if="$route.name == 'activate-card'"/> -->
    <CardPaid v-if="$route.name == 'virtual-card-payment'"/>
    <FundCard v-else-if="$route.name == 'fund-card'"/>
    <Cards v-else/>
  </q-page>
</template>

<script>
import Cards from 'components/cards/index'
import ActivateCard from 'components/cards/activate_card'
import CardPaid from "components/cards/payment.vue";
import FundCard from "components/cards/add_money.vue";
export default {
  // name: 'PageName',

  components:{
    Cards,ActivateCard,CardPaid,FundCard
  }
}
</script>
