<template>
  <q-page class="" padding>
    <recieveInstantFunds v-if="theroute == 'recieve_instant_funds'" />
    <div v-else class="" style="max-width: 100%">
      <q-tabs
        v-model="tab"
        class=""
        dense
        align="justify"
      >
        <q-tab class="primary" name="tranfer_fund" label="Tranfer Fund" />
        <q-tab class="primary" name="tranfer_history" label="Tranfer History" />
        <q-tab class="primary" name="receive_history" label="Receive History" />        
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tranfer_fund">
          <instantPay />
        </q-tab-panel>
        
        <q-tab-panel name="tranfer_history">
          <sendHistory />
        </q-tab-panel>
        <q-tab-panel name="receive_history">
          <receiveHistory />
        </q-tab-panel>
       
      </q-tab-panels>
    </div>
    <!-- <instantPay v-if="theroute == 'instant_pay'" />
    <recieveInstantFunds v-if="theroute == 'recieve_instant_funds'" />
    <receiveHistory v-if="theroute == 'recieve_history'" />
    <sendHistory v-if="theroute == 'send_history'" />     -->
  </q-page>
</template>

<script>
import instantPay from 'components/instantPay/transfer'
import recieveInstantFunds from 'components/instantPay/recieve_funds'
import receiveHistory from 'components/instantPay/receive_history'
import sendHistory from 'components/instantPay/send_history'
//import Forgot from 'components/instantPay/forgot'

export default {
  // name: 'ComponentName',
  components:{
    instantPay, recieveInstantFunds, receiveHistory, sendHistory
  },
  data () {
    return {
      tab: 'tranfer_fund'
    }
  },
  computed: {
    theroute(){return this.$route.name}
  },
}
</script>
