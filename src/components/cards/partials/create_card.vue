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
        logo: "https://content.screencast.com/users/DanielAdegoke/folders/Default/media/f1a10ebf-f854-476f-bd5d-88e8c6cac998/Palidate%20Logo-19.png",
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
