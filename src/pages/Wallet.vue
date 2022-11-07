<template>
  <q-page class="" padding>
    
    <div class="" style="max-width: 100%; max-width: 100%">
      <q-tabs
        v-model="tab"
        class=""
        dense
        align="center"
      > 
        <q-tab class="primary" name="wallet_balance" label="Wallet Balance" />
        <q-tab class="primary" name="wallet_history" label="Wallet History" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="wallet_balance">
          <walletBalance />
        </q-tab-panel>
        
        <q-tab-panel name="wallet_history">
          <walletHistory />
        </q-tab-panel>     
       
      </q-tab-panels>
    </div>
  
  </q-page>
</template>

<script>
import walletBalance from 'components/wallet/balance'
import walletHistory from 'components/wallet/history'
//import Forgot from 'components/instantPay/forgot'

export default {
  // name: 'ComponentName',
  components:{
    walletBalance, walletHistory
  },

  mounted() {
    // if (!this.$q.localStorage.getItem('paylidate_token')) {
    //   this.$router.push({ name: "login" });
    // }

  },
  computed: {

    //user() { return this.$store.getters["auth/user"] },

  },
  data () {
    return {
      tab: 'wallet_balance'
    }
  },
  computed: {
    theroute(){return this.$route.name}
  },
}
</script>

