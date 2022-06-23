<template>
  <q-page class="bg-grey-2"  padding>
    <Products v-if="$route.name == 'products'"/>
    <Product v-else-if="$route.name == 'product'"/>
    <Payment v-else-if="$route.name == 'payment'"/>
    <Dispute v-else-if="$route.name == 'dispute'"/>
    <Escrow v-else />
  </q-page>
</template>

<script>
import Products from 'components/escrow/products'
import Product from 'components/escrow/product'
import Dispute from 'components/escrow/product'
import Payment from './Payment.vue'
export default {
  name: 'PageName',
  components:{
    Products,Product,Payment,Dispute
  },

  data() {
    return {

    }
  },

}
</script>
