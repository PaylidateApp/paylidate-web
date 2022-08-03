<template>
  <div>
    <q-btn unelevated no-caps color="secondary" label="Transfer" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Transfer</div>
    </q-card-section>

    <q-card-section>
      <div v-if="error" class="text-negative">{{error}}</div>
      <q-input dense square outlined v-model="form.amount" label="Amount" prefix="NGN" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" no-caps label="Transfer" />
      <q-btn flat label="cancel" no-caps color="negative" v-close-popup />
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
          currency: 'USD',
          amount: 1,
        },
        options: [
        'USD', 'NGN'
      ],
        error: ''
      }
  },

  methods:{
    async createCard(){
      try{
        const req = await this.$axios.post(process.env.Api + '/api/card', this.form)
        const res = req.data
        this.$q.notify({message: 'Card Created Successfully', color: 'green'})
        this.open = false
      }catch(err){

      }

    },
  }
}
</script>

<style>

</style>
