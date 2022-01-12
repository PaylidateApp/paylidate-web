<template>
  <div>
     <q-btn color="white" text-color="black" label="Request Money" @click="open = true"/>

      <q-dialog v-model="open">
      <q-card>
      <q-card-section>
      <div class="text-h6">Request For Money</div>
      </q-card-section>
      <q-card-section>
        <q-input square outlined v-model="form.email" label="email" />
        <q-input square outlined v-model="form.amount" label="amount" />
        <q-select square outlined v-model="form.currency" :options="options" label="Currency" />
        <q-btn color="white" text-color="black" label="Request" />
      </q-card-section>
      <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
      </q-card>
      </q-dialog>

  </div>
</template>

<script>
export default {
  data(){
    return {
      open: false,
      form:{
        email: '',
        amount: '',
        currency: ''
      },
      options:['USD','NGN']
    }
  }
}
</script>

<style>

</style>
