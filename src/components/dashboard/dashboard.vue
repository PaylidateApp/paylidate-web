<template>
  <div>
    <q-card flat class="q-pa-sm bg-transparent">
      <div class="text-h5">
        Welcome, {{ user.name }}

        <!-- <ActivateCard v-if="!account || !Object.keys(account).length" /> -->
        <AddMoney />
      </div>
      <!-- <div class="text-bold text-h6 text-grey q-pt-sm">
        {{account ? account.bank_name : ""}}
      </div>
      <div class="text-bold text-h4 text-grey q-pb-sm">
        {{account ? account.account_number : ""}}
      </div> -->
    </q-card>
    <div class="row">

      <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
        <div class="column q-gutter-sm">
          <!-- <WalletCard v-if="account" :account="account" :card="cards[0].data" /> -->
          <WalletCard :account="account" :card="cards[0].data" />

          <!-- <WalletCard /> -->
          <!-- <TxMonth :content="account" /> -->
        </div>
      </div>

      <!-- <div class="col-md-8 col-sm-12 col-xs-12 q-pa-xs">
        <AllTx v-if="account" :content="account" />
      </div> -->

    </div>
  </div>
</template>

<script>
import WalletCard from './partials/wallet_card'
import AllTx from './partials/all_tx'
import TxMonth from './partials/tx_month'
import ActivateCard from 'components/cards/partials/activate_card'
import AddMoney from 'components/cards/partials/add_money'
export default {
  // name: 'ComponentName',
  components:{
    WalletCard,
    AllTx,
    TxMonth,
    ActivateCard,
    AddMoney
  },

  data () {
    return {

    }
  },

  computed: {
    user(){return this.$store.getters["auth/user"] },
    cards(){return this.$store.getters["card/cards"] },
    account(){ return this.$store.getters["auth/account"] }
  },

  mounted() {
    this.getProduct();
  },

  methods: {
    async getProduct(){
      const req = await this.$axios.get(process.env.Api + '/api/product')
      const res = req.data
      this.contents = res.data;
    },

    currency(amount){
      return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
    },

    formatDate(dateString){
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>
