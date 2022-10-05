<template>
  <div class="flex flex-center q-pt-xl">
    <q-card v-if="alert" flat bordered style="min-width: 300px">
      <q-card flat bordered style="min-width: 300px">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6 text-weight-light text-center">Verify Account</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-select dense square :rules="schema.bank_code"  v-model="bank.bank_code" :options="banks" option-value="code"
                option-label="name" @input="bank.account_number = ''" emit-value map-options outlined label="Bank Name*" />          
                <q-input outlined dense :value="bank.account_number" :rules="schema.acc_num" @keyup="verify_account_number" label="Account Number*" inputmode="numeric" pattern="[0-9]*" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
              <q-input dense square v-model="bank.account_name" outlined disable label="Account Name" />
                <q-input outlined dense v-model="bank.withdrawal_pin" :rules="schema.wit_pin" inputmode="numeric" pattern="[0-9]*" label="Withdrawal Pin*" maxlength="6" oninput="value=value.replace(/[^\d]/g,'')" />
              </q-card-section>
        <q-card-section>
          <q-btn :loading="loading" color="primary" no-caps label="Verify" class="full-width" @click="verify()" />
        </q-card-section>
  
      </q-card>

    </q-card>
    

    <q-card v-if="!alert" flat bordered style="min-width: 300px; max-width: 400px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5 text-weight-light text-center">Recieve Payment</div>
      </q-card-section>
      <q-card-section v-if="details">
        <q-card flat bordered class="">
          <q-card-section>
          
            <div class="text-caption"> <span class="text-bold">Tracking Id:</span> {{ details.tracking_id }}</div>
            <div class="text-caption"> <span class="text-bold">Amount:</span>  ‎₦{{ details.amount }}</div>

            <div class="text-caption"> <span class="text-bold">Sender Name:</span>{{ details.sender_name }}</div>
            <div class="text-caption"> <span class="text-bold">Account Name:</span>  {{ details.account_name }}</div>
            <div class="text-caption"> <span class="text-bold">Account Number:</span> {{ details.account_number }}</div>
            <div class="text-caption" v-if="details.status == true"> <span class="text-bold">Withdrawal Status:</span> Completed</div>
            <div class="text-caption" v-else> <span class="text-bold">Withdrawal Status:</span> Pendding</div>
          </q-card-section>
        </q-card>

      </q-card-section>
      <q-card-section v-else>
        <q-card flat bordered class="">
          <q-card-section>
            Invalide link
          </q-card-section>
        </q-card>

      </q-card-section>

      <q-card-actions align="center" class="">
        <q-btn :loading="loading" v-if="details.status == false" color="primary" no-caps label="Withdraw Money" class="full-width" @click="withdraw()"/>
        <q-btn v-else color="primary" no-caps label="Withdraw Money" class="full-width" disable/>
      </q-card-actions>

       <!-- <div class="row flex-center">
        <div class="text-caption text-grey">Powered by</div>
        <img src="../../statics/paylidate-logo.png" style="max-width: 100px">
      </div> -->
    </q-card> 
    <div v-if="false" class="row flex-center q-py-md">
      <div class="text-caption text-grey">Powered by</div> 
      <img src="../../statics/paylidate-logo.png" style="max-width: 100px">
    </div>



  </div>
</template>

<script>
import disputeSchema from '../../validation/bank'

export default {
  // name: 'ComponentName',
  data () {
    return {
      schema: disputeSchema,
      thedata:null,
      loading: false,
      alert:true,
      details:null,

      bank:{
        bank_name: '',
        account_number: '',
        account_name: '',
        bank_code: '',
        withdrawal_pin: '',
        link_token:this.$route.params.token,

      },
      banks:[],

    }
  },

  mounted(){
    if(!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login"});
    }
    this.getBanks()
    // this.addscript("https://js.onepipe.io/v1")
    //this.addscript("https://checkout.flutterwave.com/v3.js")
    //this.viewPayment()
  },

  methods: {
    async getBanks(){
  
   const req = await this.$axios.get('https://paylidate.herokuapp.com/api/get-banks')
   const res = req.data
   //console.log(res);
   //this.banks = res.data;
   //console.log(res.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
   this.banks = res.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  
      },

    async verify_account_number(event){
      this.bank.account_number = event.target.value;
      try{
      if(event.target.value.length != 10){
          return
      }

      if(event.target.value == 10 && this.bank.bank_code == ''){
          this.$q.notify({message: 'Select bank' , color: 'red'})  
          this.bank.account_number = '' 
          return         

      }

         this.$q.loading.show({
          message: 'Hold on, verifying your account number',
          spinnerColor: 'secondary'
          
        }) 
      const req = await this.$axios.post('https://paylidate.herokuapp.com/api/verify-account', this.bank)
        const res = req.data
      this.$q.loading.hide();
      if(res.data == null)
      {
        this.bank.account_name = ''
        this.$q.notify({message: 'Invalid account number', color: 'red'}) 
        return                  
      }
        this.bank.account_name = res.data.account_name
        
        
        
        }catch(error){
          //console.log(error.response.data.message);
        this.bank.account_name = ''
         this.loading = false;
          this.$q.notify({message: 'Error while verifying your account number', color: 'red'})                   
      }
      finally{
         this.$q.loading.hide();

      }

      

    },

    async withdraw(){
      let id = this.details.id;
        if(!id || id == ''){
          this.$q.notify({message: 'Invalid transaction' , color: 'red'})  
          return
        }
        
        this.loading = true;
        this.$axios.post(process.env.Api + '/api/instant-pay/withdraw', {id})
       .then(response => {
         let data = response.data.data
         this.details = data
         this.alert = false
        this.loading = false;
         this.$q.notify({message: 'withdrawal successful', color: 'green', position: 'top', type: 'success' })
          
        })
      .catch(error=>{
        console.log(error.response.data.message);
        this.$q.notify({message: 'An error occured' , color: 'red'})  
        this.loading = false;
      })
    },

    async verify(){

        let withdrawal_pin = this.bank.withdrawal_pin 
        let account_number = this.bank.account_number
        let account_name = this.bank.account_name
        let bank_code = this.bank.bank_code
        let link_token = this.bank.link_token


        if(!bank_code || bank_code == ''){
          this.$q.notify({message: 'Select Bank' , color: 'red'})  
          return
        }
        if(!account_number || account_number == ''){
          this.$q.notify({message: 'Account number is required' , color: 'red'})  
          return
        }
        if(!account_name || account_name == ''){
          this.$q.notify({message: 'Invalid account number' , color: 'red'})  
          return
        }
        if(!link_token || link_token == ''){
          this.$q.notify({message: 'Invalid link' , color: 'red'})  
          return
        }
        
        if(!withdrawal_pin || withdrawal_pin == ''){
          this.$q.notify({message: 'Withdrawal pin' , color: 'red'})  
          return
        }
        let newBank = this.banks.filter((bank)=> {
          return bank.code == this.bank.bank_code;
        });
        
        this.bank.bank_name = newBank["0"].name
        
        this.loading = true
        this.$axios.post(process.env.Api + '/api/instant-pay/verify', this.bank)
       .then(response => {
         let data = response.data.data
         this.details = data
        this.loading = false
         this.alert = false
         //this.$q.notify({message: 'Payment was successful', color: 'green', position: 'top', type: 'success' })
          
        })
      .catch(error=>{
        console.log(error.response.data.message);
        this.loading = false
        this.$q.notify({message: 'An error occured' , color: 'red'})  

      })
    },

   


  },


}
</script>
