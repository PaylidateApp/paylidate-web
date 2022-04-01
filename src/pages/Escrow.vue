<template>
  <q-page class="bg-grey-2"  padding>
    <Escrow v-if="$route.name == 'escrow'"/>
    <Product v-else-if="$route.name == 'product'"/>
    <Payment v-else-if="$route.name == 'payment'"/>
    <Dispute v-else-if="$route.name == 'dispute'"/>
    <Escrow v-else />
  </q-page>
</template>

<script>
import Escrow from 'components/escrow/escrow'
import Product from 'components/escrow/product'
import Dispute from 'components/escrow/product'
import Payment from './Payment.vue'
export default {
  name: 'PageName',
  components:{
    Escrow,Product,Payment,Dispute
  },

  data() {
    return {

    }
  },

}
</script>
