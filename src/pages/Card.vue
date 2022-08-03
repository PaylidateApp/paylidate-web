<template>
  <q-page class="bg-grey-2"  padding>
    <!-- content -->
    <!-- <ActivateCard v-if="$route.name == 'activate-card'"/> -->
    <CardPaid v-if="$route.name == 'virtual-card-payment'"/>
    <CreateCard v-else-if="$route.name == 'create-card'"/>
    <FundCard v-else-if="$route.name == 'fund-card'"/>
    <FundCardStatus v-else-if="$route.name == 'fund-card-status'"/>
    <Cards v-else/> <!-- Add money and create card header -->
  </q-page>
</template>

<script>
import Cards from 'components/cards/index'
import ActivateCard from 'components/cards/activate_card'
import CardPaid from "components/cards/payment.vue";
import CreateCard from "components/cards/create_card.vue";
import FundCard from "components/cards/add_money.vue";
import FundCardStatus from "components/cards/add_money_status.vue";
export default {
  // name: 'PageName',

  components:{
    CreateCard, Cards,ActivateCard,CardPaid,FundCard,FundCardStatus
  }
}
</script>
