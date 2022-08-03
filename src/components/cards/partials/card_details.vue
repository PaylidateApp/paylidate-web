<template>
  <div class="row q-gutter-xs">
    <q-card class="my-card" square>
      <q-card-section>
        Card details & Settings
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-sm">
        <q-input square dense outlined readonly :value="card.data.name_on_card" label="Card Name" />
        <q-input square dense outlined readonly :value="card.data.card_pan" label="Card Number" />
        <q-input square dense outlined readonly :value="card.data.cvv" label="Card CVV" />
        <q-input square dense outlined readonly :value="card.data.city +'/'+ card.data.state" label="City/State" />
        <q-input square dense outlined readonly :value="card.data.address_1" label="Card Billing Address" />
        <q-input square dense outlined readonly :value="card.data.zip_code" label="Card Zip Code" />
      </q-card-section>
      <!-- <q-card-section>
        <div class="row q-gutter-md">
          <FundCard /><q-space /><Withdraw />
        </div>
        <div class="row q-mt-md">
          Status: <q-badge color="orange" label="Active" />
          <q-space />
          <q-btn flat dense label="Delete Card" />
        </div>
      </q-card-section> -->
    </q-card>

    <!-- <q-card class="my-card" square>
      <q-card-section>
        Card transactions
      </q-card-section>
      <q-card-section>
        No Transaction
      </q-card-section>
    </q-card> -->
  </div>
</template>

<script>
import Withdraw from './withdraw'
import FundCard from './fund_card'
export default {
  props: ['card'],
  components:{
    Withdraw,FundCard
  },
  data(){
    return {
      // name: this.card ? this.card.data.name_on_card : '',
      // number: this.card ? this.card.data.card_pan : '',
      // cvv: this.card ? this.card.data.cvv : '',
      // city_state: this.card ? this.card.data.city + '/' + this.card.data.state : '',
      // address: this.card ? this.card.data.address_1 : '',
      // zip_code: this.card ? this.card.data.zip_code : '',
      // status: this.card ? this.card.data.is_active : ''
    }
  }
}
</script>

<style>

</style>
