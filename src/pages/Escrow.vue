<template>
  <q-page class="bg-grey-2"  padding>
    <Products v-if="$route.name == 'products'"/>
    <Transactions v-else-if="$route.name == 'transactions'"/>
    <Product v-else-if="$route.name == 'product'"/>
    <Transaction v-else-if="$route.name == 'transaction'"/>
    <Payment v-else-if="$route.name == 'payment'"/>
    <Dispute v-else-if="$route.name == 'disputes'"/>
    <Escrow v-else />
  </q-page>
</template>

<script>
import Products from 'components/escrow/products'
import Transactions from 'components/escrow/escrowTransactions'
import Product from 'components/escrow/product'
import Transaction from 'components/escrow/escrowTransaction'
import Dispute from 'components/escrow/transactionDisputes'
import Payment from './Payment.vue'
export default {
  name: 'PageName',
  components:{
    Products,Product,Payment,Dispute,Transactions,Transaction
  },

  data() {
    return {

    }
  },

}
</script>
