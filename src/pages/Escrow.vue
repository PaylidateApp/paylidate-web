<template>
  <q-page class="bg-grey-2" padding>
    <Products v-if="$route.name == 'products'" />
    <Transactions v-else-if="$route.name == 'transactions'" />
    <Product v-else-if="$route.name == 'product'" />
    <Product v-else-if="$route.name == 'refer_product'" />
    <Transaction v-else-if="$route.name == 'transaction'" />
    <Payment v-else-if="$route.name == 'payment'" />
    <Dispute v-else-if="$route.name == 'disputes'" />
    <Referral v-else-if="$route.name == 'referral'" />
    <Escrow v-else />
  </q-page>
</template>

<script>
import Products from 'components/escrow/products'
import Transactions from 'components/escrow/escrowTransactions'
import Referral from 'components/escrow/referralBonus'
import Product from 'components/escrow/product'
import Transaction from 'components/escrow/escrowTransaction'
import Dispute from 'components/escrow/transactionDisputes'
import Payment from './Payment.vue'
export default {
  name: 'PageName',
  components:{
    Products, Product, Payment, Dispute, Transactions, Transaction, Referral
  },

  data() {
    return {

    }
  },

}
</script>
