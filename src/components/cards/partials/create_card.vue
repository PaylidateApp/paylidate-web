<template>
  <div>
    <q-btn unelevated no-caps color="secondary" label="Create Card" @click="open = true" />

    <q-dialog v-model="open">
    <q-card :style="$q.screen.gt.sm ? 'min-width: 500px' : 'min-width: 300px'">
      <q-card-section>
        <div class="text-h6">Create Card</div>
      </q-card-section>

      <q-card-section>
          <div>{{charges_fee}} </div>
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
      <q-btn color="primary" label="Create Card"  @click="makePayment()" />
      <!-- <q-btn color="secondary" label="Cancel" @click="getRate()" /> -->
      <q-btn flat label="cancel" color="primary" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  props:['cards'],

    data(){
      return {
        open: false,
        error: '',
        form:{
          currency: 'NGN',
          amount: 250,
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
  computed: {
    user(){return this.$store.getters["auth/user"] },

    charges_fee(){
    if(this.form.currency == "NGN"){
      return 'Note: Your Transaction fee is NGN 100 and NGN 150 will be added to your card '
    }
    else{
      
      return 'Note: Your Transaction fee is USD 1 and USD 2 will be added to your card '
    
    }
    
  }
  },

  

  methods:{
   
    async makePayment(){
        
      
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
        
        
          this.$q.localStorage.set('amount', this.form.amount);
          this.$q.localStorage.set('currency', this.form.currency);
          


          FlutterwaveCheckout({
          public_key: process.env.Flutterwave_public_key,
      
          tx_ref:'PD' + this.user.id + (new Date()).getTime(),
          amount: this.form.amount,
          currency: this.form.currency,
          country: "",
          payment_options: " ",
          redirect_url:  `${window.location.href}/payment`,
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
          this.$q.loading.show(this.loadingInfo)
          return
        this.createCard();
       
        this.open = false;
       
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
        title: "Create Card",
        description: "Creating a Virtual Card",
        logo: "data:image/png;base64,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",

       },
    });

        this.open = false;
        this.error="";

           


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
