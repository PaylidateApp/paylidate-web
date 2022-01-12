<template>
  <div>

    <q-btn unelevated no-caps color="primary" label="Add Money" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Add Money</div>
    </q-card-section>
    <q-card-section class="q-gutter-sm">
      <div v-if="error" class="text-negative">{{error}}</div>
      <q-select square outlined v-model="form.virtual_card_id" :options="options"  emit-value
        map-options label="Cards" dense />
      <q-input dense square outlined v-model="form.amount" label="Amount" prefix="NGN" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn unelevated no-caps color="primary" label="Add Money" :loading="loading" @click="makePayment()" />
      <q-btn flat label="Cancel" no-caps color="negative" v-close-popup />
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
        loading: false,
        form:{
          virtual_card_id: '',
          currency: 'NGN',
          amount: 0,
          redirect_url: `${window.location.href}/fund-card/`
        },
         error: '',
        //  options:[]
      }
    },

    computed: {
      options(){
        return this.$store.getters["card/cards"].map(card => {
          return {
            label: card.data ? card.data.name_on_card : 'invalide card',
            value: card.card_id
          }
        })
      }
    },

   mounted(){
      // this.getCards();
    },

    methods:{

      // getCards(){
      //   let cards = this.$store.getters["card/cards"]
      //   console.table(cards);
      //   cards =  cards.map(card => {
      //     return {
      //       'value': card.card_id,
      //       'label': card.data.name_on_card,
      //     }
      //   })
      //   this.options = cards
      // },

      async makePayment() {
        const amount = this.form.amount
        if (!amount || amount < 200) {
          this.error = 'Amount cannot be less than 200'
          return
        }

        this.form.redirect_url += this.form.virtual_card_id;
        this.$q.localStorage.set('card_amount', this.form.amount);

        this.loading = true;

        const req = await this.$axios.post(process.env.Api + '/api/payment/link', this.form)
        const res = req.data
        window.location.href = res.data.link;
        this.loading = false;
      }
    }
}
</script>

<style>

</style>
