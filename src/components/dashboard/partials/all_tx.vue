<template>
  <div>
    <q-card class="text-center" flat bordered>
      <q-card-section class="q-pb-xs text-h5 text-weight-bold">
        All Transactions
      </q-card-section>
      <q-separator />
      <q-card-section class="q-py-xs">
        <div class="text-h6 text-left q-py-sm">
          Escrow
        </div>
        <div class="text-weight-bold row q-pa-sm">
          <div class="col-6 text-left">Recieved</div>
          <div class="col-6 text-right">0 NGN</div>
        </div>
        <div class="text-weight-bold row q-pa-sm">
          <div class="col-6 text-left">Paid</div>
          <div class="col-6 text-right">0 NGN</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <!-- <q-card-section class="q-py-xs">
        <div class="text-h6 text-left q-py-sm">
          Remitance
        </div>
        <div class="text-weight-bold row q-pa-sm">
          <div class="col-6 text-left">Recieved</div>
          <div class="col-6 text-right">10,000 NGN</div>
        </div>
        <div class="text-weight-bold row q-pa-sm">
          <div class="col-6 text-left">Paid</div>
          <div class="col-6 text-right">200 NGN</div>
        </div>
      </q-card-section> -->
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
