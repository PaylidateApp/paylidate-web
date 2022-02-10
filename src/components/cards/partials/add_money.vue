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
      <q-input dense square outlined v-model="form.amount" type="number" label="Amount" prefix="NGN" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn unelevated no-caps color="primary" label="Add Money" :loading="loading" @click="makePayment()" />
      <q-btn flat label="Cancel" no-caps color="negative" @click="close_dialog()" />
    </q-card-actions>
    </q-card>
    </q-dialog>

 
  

  </div>
</template>

<script>
import chargeCard from '../../../payment/makePayment';

export default {

    components:{
    
  },
    data(){
      return {
        open: false,
        loading: false,
        
        form:{
          virtual_card_id: '',
          currency: 'NGN',
          amount: 0,
          redirect_url: `${window.location.href}/fund-card/`,
          title:"Add Money to Card",
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
      close_dialog(){
        this.form.virtual_card_id = ''
        this.form.currency = 'NGN'
        this.form.amount = null
        this.form.redirect_url = `${window.location.href}/fund-card/`
        this.open = false;
        this.error=""
      },
      async makePayment() {
        chargeCard.makePayment(1000)
        this.$q.localStorage.set('createCard', false);
        const amount = this.form.amount
        if (!amount || amount < 200) {
          this.error = 'Amount cannot be less than 200'
          return
        }

      /* const virtual_card_id = this.form.virtual_card_id
        if (!virtual_card_id || virtual_card_id < 200) {
          this.error = 'Please select a virtual card'
          return
        }
         */

        chargeCard.makePayment(this.form.amount,  this.form.currency,);
        return
        this.form.redirect_url += this.form.virtual_card_id;         
        
        this.$q.localStorage.set('PaymentDetails', this.form);
        this.$store.commit('card/PaymentModel', true);
        this.open = false;
        this.error="";       
        
      },

      async fundCard(value){
      
        this.$q.loading.show({
          message: 'Hold on, Card funding in progress',
        spinnerColor: 'secondary'
          
        })
      
          try{

        const req = await this.$axios.post(process.env.Api + '/api/fund', this.form);
        const res = req.data

         if(res.status == 'success'){
          this.$q.loading.hide()          
          this.$q.notify({message: 'Card funding was successful', color: 'green'})                   
         
        }
        else{
          this.$q.loading.hide()
          this.$q.notify({message: 'Card funding Failed', color: 'red'})


        }
      }catch(e){
        this.$q.loading.hide()
          this.$q.notify({message: 'Card funding Failed', color: 'red'})
      }
        

      }
    }
}
</script>

<style>
</style>