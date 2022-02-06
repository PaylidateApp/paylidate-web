<template>
  <div>
    <q-btn unelevated no-caps color="secondary" label="Create Card" @click="open = true" />

    <q-dialog v-model="open">
    <q-card :style="$q.screen.gt.sm ? 'min-width: 500px' : 'min-width: 300px'">
      <q-card-section>
        <div class="text-h6">Create Card</div>
      </q-card-section>

    <q-card-section class="q-gutter-sm">
      <div v-if="error" class="text-negative">{{error}}</div>
      <q-select square outlined v-model="form.currency" :options="options" label="Currency" dense />
      <q-input square outlined readonly v-model="form.amount" label="Amount" dense />
      <div v-if="form.currency === 'USD'">
        <!-- Convertion Rate: {{ rate }} NGN to 1 USD -->
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" label="Create Card"  @click="chargeCard()" />
      <!-- <q-btn color="secondary" label="Cancel" @click="getRate()" /> -->
      <q-btn flat label="cancel" color="primary" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>
   <ChargeCard v-if="this.$q.localStorage.getItem('PaymentDetails')" @data="createCard"/>
  </div>
</template>

<script>
import ChargeCard from 'components/cards/partials/charge_card'

export default {
  props:['cards'],
      components:{
    ChargeCard
  },
    data(){
      return {
        open: false,
        error: '',
        form:{
          currency: 'NGN',
          amount: 250,
          redirect_url: `${window.location.href}/payment`, 
          title:"Create Card",        
        },
        options: [
        'USD','NGN'
      ],
      rate: 0,

      loadingInfo:{
        message: 'Hold on, Card creation in progress',
        spinnerColor: 'secondary'
      }
      }
  },

   watch: {
    'form.currency': function (val) {
      this.form.amount = val === 'NGN' ? 250 : 3
    }
  },

  mounted() {
    this.getRate();
  },

  methods:{
   
    async chargeCard(){
        this.$q.localStorage.set('createCard', true);
      
      try{
        const currency = this.form.currency
        const amount = this.form.amount
        if (!amount) {
          this.error = 'Amount cannot be empty'
          return
        }else if(currency === 'USD' && amount < 3){
          this.error = 'Amount cannot be less than 3'
          return
        }else if(currency === 'NGN' && amount < 200){
          this.error = 'Amount cannot be less than 200'
          return
        }


        //this.$q.localStorage.set('currency', this.form.currency)
        //this.$q.localStorage.set('amount', this.form.amount)
        this.$q.localStorage.set('PaymentDetails', this.form);
        this.$store.commit('card/PaymentModel', true);
        this.open = false;
        this.error="";



        // const req = await this.$axios.post(process.env.Api + '/api/card', this.form)
        // const res = req.data
        // this.$q.notify({message: 'Card Created Successfully', color: 'green'})
        // this.open = false
      }catch(err){

      }

    },

     async createCard (value) {
       
       this.$q.loading.show(this.loadingInfo)
       
       try{
      const req = await this.$axios.post(process.env.Api + '/api/card', {
        amount: this.form.amount,
          currency: this.form.currency,
          default: 1
      })
        const res = req.data
        if(res.status == 'success') { 
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Created successfully', color: 'green'})
        }
        else{
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
        }

        }catch(err){
          this.$q.loading.hide()
          this.$q.notify({message: 'Card Creation Failed', color: 'red'})
          
        }
     
    },

    async getRate(){
      try{
        const req = await this.$axios.post(process.env.Api + '/api/get-rate')
        const res = req.data
        this.rate = res.data.rate
      }catch(err){

      }

    },
  }
}
</script>

<style>

</style>
