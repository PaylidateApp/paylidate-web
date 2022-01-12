<template>
  <div>
    <q-card class="text-center" flat bordered>
        <q-card-section class="q-pb-xs text-h6">
          Your Wallet Balance
        </q-card-section>
        <q-separator />
        <q-card-section class="text-h4 text-weight-bold q-py-xs">
          <!-- {{account.amount ? account.amount : 0 }} NGN -->
          {{ card.amount }} {{card.currency}}
        </q-card-section>
         <q-card-section class="text-h6 text-weight-bold q-py-xs">
          <!-- Ledger Balance: {{account.amount ? account.amount : 0 }} NGN -->
        </q-card-section>
        <q-card-section class="text-caption q-py-xs">
          <!-- {{account.created_at}} -->
        </q-card-section>

      </q-card>
  </div>
</template>

<script>

export default {
  // name: 'PageName',
  props:['account','card'],
  data() {
    return {

    }
  },

}
</script>
