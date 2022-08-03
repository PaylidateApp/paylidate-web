<template>
  <div>
    <Login v-if="theroute == 'login'" />
    <Register v-if="theroute == 'register'" />
    <Forgot v-if="theroute == 'forgot'" />
    <ResetPassword v-if="theroute == 'reset-password'" />
    <Account v-if="theroute == 'account'"  />
    <Funds v-if="theroute == 'funds'" />
    <rFunds v-if="theroute == 'rfunds'" />
    <Init v-if="theroute == 'initAccount'" />
  </div>
</template>

<script>
import Login from 'components/auth/login'
import Register from 'components/auth/register'
import Forgot from 'components/auth/forgot'
import Account from 'components/auth/account'
import Funds from 'components/auth/pay_seller'
import rFunds from 'components/auth/recieve_funds'
import Init from 'components/auth/initAccount'
import ResetPassword from 'components/auth/reset_password'
export default {
  // name: 'ComponentName',
  components:{
    Login, Register, Forgot, Account, Funds, Init, rFunds, ResetPassword
  },
  data () {
    return {}
  },
  computed: {
    theroute(){return this.$route.name}
  },
}
</script>
