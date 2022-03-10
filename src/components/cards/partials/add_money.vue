<template>
  <div>

    <q-btn unelevated no-caps color="primary" label="Add Money" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Add Money</div>
    </q-card-section>

    <q-card-section>
      <div> Note: Transaction Charges also applies</div>
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
         
        },
         error: '',
         options:[]
      }
    },

    
    computed: {
      user(){return this.$store.getters["auth/user"] },

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
       this.getCards();
    },
    methods:{
      async getCards(){
        const req = await this.$axios.get(process.env.Api + '/api/card')
       
        let cards = req.data.data;
        
       // console.log("first call");
        //console.log(cards);

        cards =  cards.map(card => {
        //console.log(card);

          return {
            'value': card.card_id,
            'label': card.data.name_on_card,
          }
        })
        this.options = cards
        //console.log('last call')
        //console.log(this.options)
      },
      close_dialog(){
        this.form.virtual_card_id = ''
        this.form.currency = 'NGN'
        this.form.amount = null
        this.open = false;
        this.error=""
      },
      async makePayment() {
        
        const amount = this.form.amount
        if (!amount || amount < 200) {
          this.error = 'Amount cannot be less than 200'
          return
        }

     const virtual_card_id = this.form.virtual_card_id
        if (!virtual_card_id) {
          this.error = 'Please select a virtual card'
          return
        }
        

      let charge = (3/100 * this.form.amount).toFixed(2)
      let original_amount = parseInt(this.form.amount);
        if(charge < 100){
          this.form.amount = original_amount + 100
          
        }
        else if( charge > 2500){
          this.form.amount = original_amount + 2500;
          
        }
        else {
          this.form.amount = original_amount + parseInt(charge);
       
        }
          this.$q.localStorage.set('amount', this.form.amount);
          this.$q.localStorage.set('currency', this.form.currency);
          this.$q.localStorage.set('virtual_card_id', this.form.virtual_card_id);
          
    
          FlutterwaveCheckout({
          public_key: process.env.Flutterwave_public_key,
         tx_ref:'PD' + this.user.id + (new Date()).getTime(),
          amount: this.form.amount,
          currency: this.form.currency,
          country: "",
           redirect_url: `${window.location.href}/fund-card/${this.form.virtual_card_id}`,
          
          payment_options: " ",
                   meta: {
            consumer_id: this.user.id,
            consumer_mac: "",
          },
          customer: {
            email: this.user.email,
            phone_number: this.user.phone,
            name: this.user.name,
          },
      callback: function (data) {
        if(data.status == 'successful'){
        this.fundCard();
       
        this.open = false;
        this.loading = false;
        this.error=""; 
        }
        else{
          this.open = false;
        this.loading = false;
        this.error=""; 
          this.$q.notify({message: 'Transaction Error ', color: 'red'})
        }
      },
      onclose: function() {
        
        this.error=""; 
      },
      customizations: {
        title: "Add money to card",
        description: "Crediting virtual card",
        logo: "https://res.cloudinary.com/philzy/image/upload/v1646896866/paylidate-logo_2_lanfvz.png",
      },
    });
      
        this.open = false;
        this.error="";       
        
      },

      async fundCard(){
      
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