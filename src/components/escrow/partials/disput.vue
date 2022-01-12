<template>
  <div>
    <q-btn size="sm" color="warning" label="Open Dispute" @click="open = true" />
    <q-dialog v-model="open">
      <q-card>
        <q-card-section>
          <div class="text-h6">How to initiate a dispute</div>
        </q-card-section>
        <q-card-section>
            <!-- 1. Sale/Delivery is incomplete but the seller has clicked on "confirm delivery"
            2. Sale/Delivery is complete but the product delivered is different from what was ordered. -->


            <div class="text-bold">
              Send an email to paylidate@gmail.com with the following details:
            </div>

            <div>Email Subject: Dispute</div>

            <div>Cause of dispute:</div>

            <div>Product Link: </div>

        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat size="sm" label="Cancel" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style>

</style>
