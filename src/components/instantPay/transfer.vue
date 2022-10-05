<template>
  <div class="flex flex-center">
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer" @click="$router.push({name: 'login'})">
        <p></p>
        <img src="../../statics/icons/favicon-128x128.png" style="max-width: 50px">
        <div class=" text-weight-light text-caption text-weight-bolder">
          Paylidate Instant Pay
        </div>
      </div>

      <q-card-section class="q-gutter-sm">
       
        <q-input outlined dense v-model="form.amount" label="Amount*" inputmode="numeric" pattern="[0-9]*" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense :value="form.receiver_number"  @keyup="verify_user_number" label="Receiver's Phone Number*" maxlength="11" inputmode="numeric" pattern="[0-9]*" oninput="value=value.replace(/[^\d]/g,'')" />
        <span class="text-grey text-caption text-weight-bolder">{{ form.rec_name }}</span>
        <q-input type="textarea" outlined dense v-model="form.description" label="Description"/>
      </q-card-section>
      <q-card-section>
        <q-btn v-if="!form.amount || !form.receiver_number || form.amount < 200 || form.receiver_number.length != 11" disable color="primary" no-caps label="Transfer" class="full-width" />
        <q-btn v-else :loading="loading" color="primary" no-caps label="Transfer" class="full-width" @click="transfer_money()" />
      </q-card-section>

    </q-card>

  </div>
</template>

<script>
import { authRuleMixin } from '../mixins/index';
export default {
  // name: 'ComponentName',
  mixins:[authRuleMixin],
  data () {
    return {
      error:false,
      loading:false,
      form:{
        amount:'',
        sender_name:'',
        receiver_number: '',
        sender_email: '',
        description: '',
        rec_name: '',
        payment_ref: this.$route.query.tx_ref,
      },


      pay:{
        query: this.$route.query,
        status: this.$route.query.status,
        payment_ref: this.$route.query.tx_ref,
        payment_id: this.$route.query.transaction_id,
        
      }
      
    }
  },
  mounted() {
    if(!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login"});
    }
    this.transfer_confirmation();
  },
  computed: {

    user() {
      return this.$store.getters["auth/user"];
    },

  },
  methods: {
    async transfer_money() {
        let amount = this.form.amount
        let receiver_number = this.form.receiver_number

        if(!amount || amount == ''){
          this.$q.notify({message: 'Amount is required' , color: 'red'})
          return
        }
        if(amount < 200){
          this.$q.notify({message: 'Mininum Transfer is NGN 200' , color: 'red'})
          return
        }
        
        if(!receiver_number || receiver_number == ''){
          this.$q.notify({message: 'Receiver Number is required' , color: 'red'})
          return
        }
        if(receiver_number.length != 11){
          this.$q.notify({message: 'Invalid Phone number' , color: 'red'})
          return
        }
        this.form.sender_name = this.user.name;
        this.form.sender_email = this.user.email;

        this.loading = true;

          let ref = (new Date()).getTime();
          this.$q.localStorage.set('instant_pay', this.form);
          this.$q.localStorage.set('ref', ref);
          
        let charges = parseFloat(this.form.amount * 2.5 / 100);
        if(charges > 2500){
          charges = 2500
        }
  FlutterwaveCheckout({
    public_key: process.env.Flutterwave_public_key,
    tx_ref: 'PD' + ref,
    amount: parseFloat(this.form.amount) + charges,
    currency: "NGN",
    payment_options: "",
    redirect_url: `${window.location.href}`,
    meta: {
      consumer_id: ref,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: this.form.sender_email,
      phone_number: "09000000000",
      name: "Paylidate Instant Pay",
    },
    customizations: {
      title: "Instant Payment",
        description: "Instant Payment",
        logo: "https://res.cloudinary.com/philzy/image/upload/v1646896866/paylidate-logo_2_lanfvz.png",
    },
  });


                  this.open = false;


        this.loading = false;


        // const req = await this.$axios.post(process.env.Api + '/api/payment/link', this.form)
        // const res = req.data
        // window.location.href = res.data.link;

        // const req = await this.$axios.post(process.env.Api + '/api/make-payment', this.form)
        // const res = req.data
        // this.open = false;
      },
    async transfer_confrimation(){
      let form = this.$q.localStorage.getItem('instant_pay')
      let ref = 'PD' + this.$q.localStorage.getItem('ref')
      form.payment_ref = ref;
      
      
      if(!this.pay.payment_ref){
        return
      } 
      
      if(this.pay.payment_ref != ref){
        this.$q.notify({message: 'Error:: Invalid payment' , color: 'red'})  
        return
      } 
           
       this.$axios.post(process.env.Api + '/api/instant-pay/tranfer', form)
        .then(response => {
          localStorage.removeItem("instant_pay");
          localStorage.removeItem("ref");
          this.$q.notify({message: 'Payment was successful', color: 'green', position: 'top', type: 'success' })
          this.$router.push({ name: "instant_pay"})

          this.loading = false

        })
        .catch(error=>{
          localStorage.removeItem("instant_pay");
          localStorage.removeItem("ref");
          this.loading = false
          this.$q.notify({message: 'Error:: transaction error' , color: 'red'})          

        })

    },

    async verify_user_number(event){
      this.form.receiver_number = event.target.value;
      try{
      if(event.target.value.length != 11){
          return
      }


         this.$q.loading.show({
          message: 'Hold on, verifying phone number',
          spinnerColor: 'secondary'
          
        }) 
      const req = await this.$axios.get(process.env.Api + '/api/verify-number/'+ this.form.receiver_number)
        const res = req.data
      this.$q.loading.hide();
      if(res.name == null)
      {
        this.form.receiver_number = ''
        this.$q.notify({message: 'Userddd is not in Paylidate', color: 'red'}) 
        return                  
      }
        this.form.rec_name = res.name
        
        
        
        }catch(error){
          //console.log(error.response.data.message);
        this.form.receiver_number = ''
         this.loading = false;
          this.$q.notify({message: 'User is not in Paylidate', color: 'red'})                   
      }
      finally{
         this.$q.loading.hide();

      }

      

    },

  },
}
</script>
