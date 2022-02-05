<template>
  <div>

    <q-dialog v-model="open" persistent>
    <q-card style="max-width:300px">

      <div class="row q-pa-sm cursor-pointer justify-between">
      <div class="col-4">
        <img src="../../../statics/icons/favicon-128x128.png" style="max-width: 40px">
      </div>
      <div class="col-8" align="right">
        
             <br>
            <label class=" float-right">Pay <strong>{{this.$q.localStorage.getItem('PaymentDetails').currency}} {{this.$q.localStorage.getItem('PaymentDetails').amount}}</strong> </label>
       
       
      </div>
    </div>

      <q-separator />
    <q-card-section>
      <div class=" text-h6 text-blue-grey-8">{{this.$q.localStorage.getItem('PaymentDetails').title}}</div>
    </q-card-section>
    <q-card-section class="q-gutter-y-none">


      <div v-if="error" class="text-negative">{{error}}</div>      
        <q-input dense square outlined maxlength="19" required :value="formatCardNumber" @keyup="updateCardNo"  stack-label placeholder="0000 0000 0000 0000" label="CARD NUMBER">
        <template v-slot:append>
          <q-icon name="payment" />
        </template>
        </q-input>
    <div class="row q-col-gutter-xs q-my-xs">
      <div class="col-6">
         <q-input dense square outlined :value="formatCardExpireDate" @keyup="updateEpireDate" maxlength="5"  stack-label placeholder="MM/YY" label="VALID TILL"/>
      </div>
      <div class="col-6">
          <q-input dense square outlined v-model.number="form.cvv" maxlength="3" stack-label placeholder="123" label="CVV"/>
      </div>
    </div>
          <q-input dense square outlined v-model="form.pin" maxlength="4" type= "password" stack-label placeholder="...." label="PIN"/>

     <q-checkbox v-model="form.save_card" label="save this card" size="xs" color="negative" />
    <q-btn unelevated no-caps class="full-width" color="primary" label="Pay" :loading="loading" @click="makePayment()" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Cancel" no-caps color="negative" @click="close()" />
    </q-card-actions>
    </q-card>
    </q-dialog>



        <q-dialog v-model="otp_model" persistent transition-show="scale" transition-hide="scale">
      <q-card class="" style="width: 300px">
        <q-card-section>
          <div class="text-h6">OTP</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div> 
          To Complete this transaction, please enter the OTP sent to your bank registered number.
          </div>
          <div>
          <q-input dense square outlined v-model.number="otp" type="number" maxlength="5" label="Enter OTP"/>          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" color="primary" :loading="otp_loading" @click="validatePayment()" />
          <q-btn flat label="Close" color="negative" @click="close_otp_model()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>

export default {

    data(){
      return {
     
        loading: false,
        otp_loading: false,
        otp_model: false,
        CardExpireDate: null,
        otp: null,
        authurl: null,
        
        form:{
          
          amount:null,
          currency:null,
          cvv: null,
          cardno: null,
          pin: null,
          expiryyear: null,
          expirymonth: null,
          redirect_url: null,
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
      },

      formatCardNumber(){
          return this.form.cardno ? this.form.cardno.match(/.{1,4}/g).join(' ') : '';
        },

      formatCardExpireDate(){
                return this.CardExpireDate ? this.CardExpireDate.match(/.{1,2}/g).join('/') : '';
              },
      
      payment_details(){
        return this.$q.localStorage.getItem('PaymentDetails')
      },
      open(){
        return this.$store.getters["card/PaymentModel"]
      }
    },

   mounted(){
      // this.getCards();
    },

    methods:{

      
      updateCardNo(e){
        this.form.cardno = e.target.value.replace(/ /g,'');          
        },

        updateEpireDate(e){
        if(Number.isInteger(e.target.value))
        {
          alert(hello)
        
        }

        this.CardExpireDate = e.target.value.replaceAll('/','');          
        },
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
      
      reset(){
          this.form.amount = null
          this.form.currency = null
          this.form.cvv = null
          this.form.cardno = null
          this.form.pin = null
          this.form.expiryyear = null
          this.form.expirymonth = null
          this.CardExpireDate = null
          this.close_otp_model();

      },

      close_otp_model(){

        this.loading = false;
        this.otp_loading = false;
        this.otp = null;
        this.otp_model= false;

      },

      close(){
        this.reset();    
       this.error = '';

        this.$store.commit('card/PaymentModel', false);

      },

      async makePayment() {
                
        this.form.expirymonth = this.CardExpireDate.substring(0, 2);
        this.form.expiryyear = this.CardExpireDate.substring(2);
        this.form.amount = this.payment_details.amount;
        this.form.currency = this.payment_details.currency;
        this.form.redirect_url = this.payment_details.redirect_url;
        

        if(this.form.cardno.length != 16){
          this.error ='Invalid card number, digits must be 16'
          return
        }
        if(/^\d+$/.test(this.form.cardno) == false){
          this.error ='Your card number can only take numbers 0-9'
          return
        }

        if(this.form.cvv.length != 3){
          this.error ='Invalid CVV, digits must be 3'
          return
        }
        if(/^\d+$/.test(this.form.cvv) == false){
          this.error ='CVV can only take numbers 0-9'
          return
        }

        if(this.CardExpireDate.length != 4){
          this.error ='Invalid date'
          return
        }
        if(/^\d+$/.test(this.CardExpireDate) == false){
          this.error ='Invalid date'
          return
        }

    this.loading = true;

    try {
      this.error = '';
        const req = await this.$axios.post(process.env.Api + '/api/pay-with-card', this.form)
        const res = req.data
        
        console.log(res)       
        

          if(res.status == 'success' && res.data.authurl != 'N/A'){
             this.reset();
             window.location.href = res.data.authurl;
           return
          }
        
        if(res.status == "success" && res.data.hasOwnProperty('flwRef')){
          
          this.$q.localStorage.set('flwRef', res.data.flwRef);
          this.otp_model = true;   
          return
        }

        this.reset();
        this.$q.notify({message: 'Transation Fail', color: 'red'})
        
       /*  if (this.$store.getters["card/PaymentDetails"].hasOwnProperty('redirect_url')){
          this.$q.localStorage.set('payment_info', this.payment_details);
          this.loading = false;
          this.$store.commit('card/PaymentModel', false);
          window.location.href = this.$store.getters["card/PaymentDetails"].redirect_url;
        } */ 
        //this.loading = false;

        //this.$q.notify({message: 'Transaction Successfull', color: 'green'})

        
    } catch (err) {      
        this.$store.commit('card/PaymentModel', false);
        this.reset();
        this.$q.notify({message: 'Transation Fail', color: 'red'})
           }

      },

      async validatePayment(){
        this.otp_loading = true
        let validation_info = {flwRef: this.$q.localStorage.getItem('flwRef'), otp: this.otp}

        const req = await this.$axios.post(process.env.Api + '/api/validate-payment',validation_info)
        const res = req.data;
    
        if(res.status == 'success'){

          this.verifyPayment(res.data.tx.txRef);       

        }
        else{
          this.otp_loading = false
          this.$q.notify({message: 'Transation Fail', color: 'red'})
        }

    },

      async verifyPayment(txRef){

        const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
        const res = req.data;
  
        
        if(res.status == 'success' && res.data.currency == this.form.currency && res.data.amount == this.form.amount){
          // execute what you want to happen if verification is ok
          
          
          this.close_otp_model();
          this.$store.commit('card/PaymentModel', false);
          this.reset();  
          let title = this.$q.localStorage.getItem('PaymentDetails').title
          this.$emit('data', {res, title})
        }
        else{
          this.close_otp_model();
          this.$q.notify({message: 'Verification Failed', color: 'red'})
          this.$q.localStorage.removeItem("PaymentDetails");
        }

        }

          
          }
}
</script>

<style>

</style>
