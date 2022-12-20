<template>
  <q-page class="" padding>
    <span v-if="$route.name == 'credit-wallet'">
      <creditWallet />
    </span>
    <span v-else>
      <div class="" style="max-width: 100%;">
        <wallet />
      </div>
    </span>
  </q-page>
</template>

<script>
import wallet from "components/wallet/wallet";
import creditWallet from "components/wallet/cardPayment";
//import Forgot from 'components/instantPay/forgot'

export default {
  // name: 'ComponentName',
  components: {
    wallet,
    creditWallet
  },

  mounted() {
    if (!this.$q.localStorage.getItem("paylidate_token")) {
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    //user() { return this.$store.getters["auth/user"] },
  },
  data() {
    return {
      tab: "wallet_balance"
    };
  },
  computed: {
    theroute() {
      return this.$route.name;
    }
  }
};
</script>
