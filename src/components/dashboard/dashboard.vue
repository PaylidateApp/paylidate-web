<template>
  <div>
    <span v-if="login">

      <q-card flat class="q-pa-sm bg-transparent">
        <div class="text-h5">
          Welcome, {{ user.name }}

          <!-- <ActivateCard v-if="!account || !Object.keys(account).length" /> -->

        </div>
        <!-- <div class="text-bold text-h6 text-grey q-pt-sm">
        {{account ? account.bank_name : ""}}
      </div>
      <div class="text-bold text-h4 text-grey q-pb-sm">
        {{account ? account.account_number : ""}}
      </div> -->
      </q-card>
      <span v-if="user.is_admin == true">
        <span v-if="$route.name == 'withdrawal_requests'" class="flex">
          <q-btn @click="withdrawal_type = 'withdrawal'" color="secondary"
            size="sm" no-caps label="Withdrawal" />          

          <q-btn @click="withdrawal_type = 'refund'" color="secondary q-mx-xs"
            size="sm" no-caps label="Refund" />

            <q-btn @click="withdrawal_type = 'referral'" color="secondary"
            size="sm" no-caps label="Referral" />


          <WithdrawalRequests v-if="withdrawal_type == 'withdrawal'" />
          <Refund v-if="withdrawal_type == 'refund'" />
          <ReferralWithdrawalRequests v-if="withdrawal_type == 'referral'" />
        </span>
      </span>
      <span v-else>
        <div class="text-h5">
          You are not authorized
        </div>
      </span>
      <!-- <div class="row">

      <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xs">
        <div class="column q-gutter-sm">
          <WalletCard />
          
        </div>
      </div>

       <div class="col-md-6 col-sm-12 col-xs-12 q-pa-xs">
        <AllTx />
      </div>

    </div> -->
    </span>
    <span v-else>
      <div class="text-h5">
        You are not logged in
      </div>
    </span>
  </div>
</template>

<script>
import WithdrawalRequests from './partials/withdrawal_requests'
import Refund from './partials/refund'
import AllTx from './partials/all_tx'
import TxMonth from './partials/tx_month'
import ReferralWithdrawalRequests from './partials/referral_withdrawal_requests'
import AddMoney from 'components/cards/partials/add_money'
export default {
  // name: 'ComponentName',
  components:{
    WithdrawalRequests,
    Refund,
    AllTx,
    TxMonth,
    ReferralWithdrawalRequests,
    AddMoney
  },

  data () {
    return {
      withdrawal_type: 'withdrawal',
        login: false,

    }
  },

  computed: {
    user(){return this.$store.getters["auth/user"] },
    cards(){return this.$store.getters["card/cards"] },
    account(){ return this.$store.getters["auth/account"] }
  },

  mounted() {
   // this.getProduct();

      if(!this.$q.localStorage.getItem('paylidate_token')) {
        this.login = false
        }
    else {
        this.login = true
      
    }
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
