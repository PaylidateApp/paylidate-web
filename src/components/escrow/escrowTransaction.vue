<template>
  <q-page class="flex justify-center">
      

    <!-- {{transaction}} -->
    <div>
    
    <q-card v-if="transaction" class="my-card" bordered flat style="max-width: 500px">
      <!-- <q-img :src="'/transaction.svg'" spinner-color="white"
      /> -->
      <q-card-section class="row">
      <div class="text-bold text-h6 text-uppercase">{{transaction.product.name}}</div>
      <q-space />
        <q-btn
            size="12px"
            round
            flat
            color="primary"
            class=""
            icon="content_copy"
            @click="copy_link"
          >

           <q-tooltip>
          {{copyL}}
        </q-tooltip>
            
          </q-btn>
      </q-card-section>
      <q-card-section class="column">
        <div>
          transaction Details
        </div>
        <q-separator class="q-mb-sm" />
        <q-card flat bordered>
          <!-- {{ transaction.image !== 'default_transaction.png' ? transaction.image : base_image }} -->
          <img :src="transaction.product.image !== 'default_transaction.png' ? transaction.product.image : base_image">
          <q-card-section>
            <div class="text-bold">Product Number: {{transaction.product.product_number}}</div>
           
            <div class="text-bold">Transaction Type: 
            <span v-if="transaction.product.transaction_type == 'buy' && user.id == transaction.product.user_id"> buy </span>
           
            <span v-else-if="transaction.product.transaction_type == 'sell' && user.id == transaction.product.user_id"> buy </span>
            <span v-else-if="transaction.product.transaction_type == 'buy'"> sell </span>
            <span v-else> buy </span>
            </div>

            <div class="text-bold">Type: {{transaction.product.type}}</div>
            <div class="text-bold">Total Quantity: {{transaction.quantity}}</div>
            
            <div class="text-bold" v-if="transaction.amount <= 1" >Total Price: {{formatAsNaira(transaction.product.price * transaction.quantity)}}</div>
            <div class="text-bold" v-else>Total Price: {{formatAsNaira(transaction.amount)}}</div>
            <div class="text-bold">Description: {{transaction.description ? transaction.description : "No Description"}}</div>
          </q-card-section>
        </q-card>
      </q-card-section>


 <q-card-section class="column">
        <div>
          Parties Details
        </div>
        <q-separator class="q-mb-sm" />
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              <div class="text-bold">Initiator</div>
              <div>Name: {{ transaction.product_initiator.name }}</div>
              <div>Email: {{transaction.product_initiator.email}}</div>
            </q-card-section>

            <q-separator vertical />

            <q-card-section v-if="transaction.secondary_user">
              <div class="text-bold">Reciever</div>
              <div>Name: {{ transaction.secondary_user.name ? transaction.secondary_user.name : 'Not Available' }}</div>
              <div>Email: {{transaction.secondary_user.email ? transaction.secondary_user.email : 'Not Available' }}</div>
            </q-card-section>

            <q-card-section v-else>
              <div class="text-bold">Reciever</div>
              <div>Name: {{ transaction.seller_email}}</div>
              <div>Email: Not Available</div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-card-section>

    <q-card-section class="column">

      <div v-if="transaction.status == 2 && transaction.accept_transaction == true">
              <div> <q-badge  color="red" text-color="white" label="Transaction has been canceled" /></div>
              
        </div>
        
        <div v-else-if="transaction.payment != null && transaction.payment.verified == true && transaction.status == 1 && transaction.accept_transaction == true">
              <div> <q-badge  color="green" text-color="white" label="Transaction completed" /></div>  
          <q-btn v-if="false" unelevated no-caps color="secondary" label="Make Withdrawal" :loading="loading" @click="makeWithdrawal()" />

        </div>
      
        <div v-else-if="transaction.payment != null && transaction.payment.verified && transaction.status == 0 && transaction.accept_transaction == true">
           <div> <q-badge  color="green" text-color="white" label="Payment completed. Waiting for transaction to be confirmed and approved" /></div>  
          
          <q-btn class="q-mx-sm" v-if="transaction.product.transaction_type == 'buy' && user.id == transaction.product.user_id" unelevated no-caps color="secondary" label="Confirm Transaction" :loading="loading" @click="confirm = true" />
          <q-btn v-if="transaction.product.transaction_type == 'buy' && user.id == transaction.product.user_id" unelevated no-caps color="primary" label="Confirm Transaction" :loading="loading" @click="cancelTransaction()" />
          
          <q-btn class="q-mx-sm" v-if="transaction.product.transaction_type == 'sell' && user.id == transaction.user_id" unelevated no-caps color="secondary" label="Confirm Transaction" :loading="loading" @click="confirm = true" />
          <q-btn v-if="transaction.product.transaction_type == 'sell' && user.id == transaction.user_id" unelevated no-caps color="primary" label="Cancel Transaction" :loading="loading" @click="cancelTransaction()" />

          <q-dialog v-model="confirm">
      <q-card style="min-width:300px">
        <q-card-section>
          <div class="text-h6">Confirm Transaction</div>
          </q-card-section>
          <q-card-section>
          Are you sure you want to Confirm Transaction?
          </q-card-section>
          <q-card-section>
          Note that once you click on the confirm button, you are confirming that you have received the product or service and 
          all disputes are settle and seller can withdraw the money. Paylidate will not be held responsible after that. 
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="red-3" text-color="red" @click="confirm = false" />
            <q-btn flat label="Confirm" color="green-3" text-color="green" @click="confirmTransaction()" />
        </q-card-actions>
      </q-card>
    </q-dialog>


        </div>
            
        <div v-else-if="transaction.accept_transaction == true">
              <div> <q-badge  color="orange" text-color="white" label="Transaction accepted, awaiting payment" /></div>  
              
              <Payment v-if="transaction.product.user_id == user.id && transaction.product.transaction_type == 'buy'" :transaction="transaction" />
              <Payment v-if="transaction.user_id == user.id && transaction.product.transaction_type == 'sell'" :transaction="transaction" />
        </div>
        <div v-else-if="transaction.accept_transaction == false">
              <div> <q-badge  color="negetive" text-color="white" label="Transaction not Accepted" /></div>  
        </div>
        <div v-else>
          <div> <q-badge  color="orange" text-color="white" label="Transaction awaiting acceptance" /></div>  
          <span v-if="user.id == transaction.user_id">
          
            <q-btn unelevated no-caps class="q-ma-sm" color="primary" label="Accept" :loading="loading" @click="acceptTransaction()" />
            <q-btn unelevated no-caps color="red" label="Decline" :loading="loading" @click="declineTransaction()" />
          </span>
        
        </div>        

      </q-card-section>

<!--       <q-card-section class="column">
        <div>
          Order Status
        </div>
        <q-separator class="q-mb-sm" />
        <div class="q-gutter-sm">
          <div v-if="Object.keys(user).length">
            <div v-if="product.secondary_user">
              <div v-if="product.user.id !== user.id">
                 Transaction Status: <q-badge  color="positive" text-color="black" label="You Accept This Transaction" />
                 
              </div>
              <div v-else>
                 Transaction Status: <q-badge color="positive" text-color="black" label="Transaction Accepted" />
              </div>
            </div>

            <div v-else>
               Transaction Status: <q-badge v-if="product.user.id === user.id" color="negative" text-color="white" label="Transaction Wating to be accepted" />
              <AcceptTransaction v-else :data="product" :slug="slug"/>
            </div>

            <div >
                Delivery Status: <q-badge :color="product.delivery_status == 3 ? 'positive' : 'orange'"  :label="deliveryStatus(product.delivery_status)" /> <br />
                Product Status: <q-badge color="orange" :label="product.payment_status ? 'Paid' : 'Unpaid'" />  <br />
                Delivery Period: <q-badge color="orange" :label="product.delivery_period" /> days <br />
                Dispute: <q-badge v-if="product.dispute === 0" color="orange" label="NO" />
                          <q-badge v-else-if="product.dispute === 1" color="negative" label="YES" />
                          <q-badge v-else color="positive" label="Dispute Resolved" />

                
            </div> 

          </div>

          
          <div v-if="product.delivery_status != 3 && user.is_admin" class="row flex q-gutter-sm">
          
          <div>
          <div>
          <q-btn v-if="product.delivery_status != 3 && product.delivery_status != 4" @click="canceledDelivery(product.id)" color="negative" size="sm" no-caps label="Cancel Order" />
          
          </div>
          </div>

          <div>
              <q-btn size="sm" color="warning" :label="dispute_state" @click="dispute(product.id)" />
          </div>

          <div v-if="product.secondary_user">
            <div class="flex row q-gutter-sm" v-if="Object.keys(user).length && (product.payment || product.payment_status === 1)"> 
              <span v-if="product.delivery_status != 4">
              
                <DiliveredRecieved :data="product" :status="'delivered'"/>

                <DiliveredRecieved :data="product" :status="'received'"/>
                
              </span>
            </div>
          </div>
          


          </div>
          
          <div v-if="product.delivery_status != 3 && product.delivery_status != 4 && !user.is_admin" class="row flex q-gutter-x-sm">
          
          <div>
          <Disput />
          </div>

            <div v-if="product.secondary_user">
          <div v-if="Object.keys(user).length && (product.payment || product.payment_status === 1)"> 
            <DiliveredRecieved
            v-if="(product.transaction_type === 'buy'
              &&  product.user.id === user.id
              &&  product.payment_status === 1)
              ||  (product.transaction_type === 'sell'
              &&  product.user.id === user.id
              &&  product.payment_status === 1)"

            :data="product" :status="'delivered'"/>

            <DiliveredRecieved v-else  :data="product" :status="'received'"/>
            
          
            
          </div>

            </div>

          
          <div v-if="product.secondary_user || product.user.id === user.id">
          <div  v-if="(product.transaction_type === 'sell'
              &&  product.user.id === user.id) || (product.transaction_type === 'buy'
              &&  product.user.id != user.id && product.secondary_user.id == product.secondary_user_id)">
          <q-btn v-if="product.delivery_status != 3" @click="canceledDelivery(product.id)" color="negative" size="sm" no-caps label="Cancel Order" />
          
          </div>
          </div>

          </div>
        </div>
      </q-card-section> -->

      <!-- <q-card-section class="column">

        <div>
          Payment Details
        </div>

        <q-separator class="q-mb-sm" />
           <div>
              Status: <q-badge color="orange" :label="product.payment_status ? 'Paid' : 'Unpaid'" />
           </div>

          <div v-if="product.payment">
            <div class="self-center full-width no-outline">Transaction ID:      {{ product.payment.transaction_id }}</div>
            <div class="self-center full-width no-outline">Payment Ref:         {{ product.payment.payment_ref }}</div>
            <div class="self-center full-width no-outline">Transaction Ref:     {{ product.payment.transaction_ref }}</div>
            <div class="self-center full-width no-outline">Transaction Status:  {{ product.payment.status }}</div>
          </div>

          <div v-if="!product.payment_status && product.transaction_type === 'buy'  &&  product.user.id === user.id || product.transaction_type === 'sell'  &&  product.user.id !== user.id">
              <Payment v-if="product.secondary_user" :amount="product.price" :slug="product.slug" :product="product" :url="payment_url"/>
              <div v-else>Transaction must be accepted before payment can be done</div>
          </div>
      </q-card-section>
 -->
    </q-card>


    </div>


    <q-dialog v-model="onLogin" persistent>
      <q-card class="my-card" :style="ModelStyle">

        <q-form @submit="signup && onLogin ? register() : login() " class="q-gutter-md" >
          <q-card-section class="q-py-sm">
            <div class="text-h6">{{ signup ? `SignUp Please` :`Your Email Please` }}</div>
            <div class="text-caption">To complete your Transaction</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm">
            <q-input v-if="signup" outlined dense v-model="form.name" label="Your Full Name" />
            <q-input v-if="signup" outlined dense v-model="form.phone" label="Enter Phone Number" maxlength="11" inputmode="numeric" pattern="[0-9]*" oninput="value=value.replace(/[^\d]/g,'')" />
            <q-input outlined dense v-model="form.email" label="Enter E-mail" inputmode="email" />
            <q-input outlined dense type="password" v-model="form.password" label="Create Your Password" />
            <q-input v-if="signup" outlined dense type="password" v-model="form.password_confirmation" label="Confirm Password" />
          </q-card-section>
          <q-card-actions vertical align="right">
            <q-btn flat type="submit" label="Login" />
            <q-btn dense flat v-if="signup" @click="signup = false" class="text-weight-normal text-caption" no-caps label="I have an account" />
          </q-card-actions>
        </q-form>
      </q-card>

    <!-- <Signup />  -->

    </q-dialog>

    </q-page>
</template>

<script>
import AcceptTransaction from "./partials/accept_trans";
import Payment from 'components/common/make_payment';
import DiliveredRecieved from "./partials/dilivered_recieved"
import Disput from './partials/disput.vue'
import Signup from "components/auth/register"
import Login from "components/auth/login"
export default {
  // name: 'PageName',
  components:{
    AcceptTransaction,
    Payment,
    DiliveredRecieved,
    Signup,
    Login,
    Disput,
  },

  data() {
    return {
      dispute_status: null,
      copyLink:'Copy transaction link',
      T_ref: this.$route.params.T_ref,
      transaction: null,
      text: '',
      confirm: false,
      base_image: 'https://res.cloudinary.com/godfadatun/image/upload/v1626034472/undraw_factory_dy0a_cqfjei.svg',
      loading: false,
      signup:false,
      onLogin:false,
      form:{
        email: '',
        password: '',
      },
      //payment_url: `${window.location.href}/payment`
    }
  },

  computed:{
    dispute_state(){
      if(this.transaction.dispute === 0){
        return "Open Dispute";
      }
      else if(this.transaction.dispute === 2){
        return "Open Dispute";
      }
      else{
        return "Resolve Dispute";
      }
      
    },
    copyL(){return this.copyLink},
     user(){return this.$store.getters["auth/user"] },
     ModelStyle(){ return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px"},
  },

  methods:{
    copy_link(){
      navigator.clipboard.writeText(window.location)
      this.copyLink = 'copied!';
       setTimeout(() => this.copyLink = 'Copy transaction link', 2000);
      
    },

    async cancelTransaction(){
        try{
        this.$q.loading.show({
          message: 'Hold on, Cancelling transaction',
          spinnerColor: 'secondary'
          
        })
      const req = await this.$axios.post(process.env.Api + '/api/transaction/cancel/'+ this.transaction.id)
      const res = req.data
      
      this. getTransaction()
      this.$q.loading.hide()
      this.$q.notify({message: 'Transaction cancelled', color: 'green'})
      
      }
      catch(error){
        
        // // console.log(error.response.data.message);
        this.$q.loading.hide()
      this.$q.notify({message: 'Error while trying to cancel transaction', color: 'red'})
      }
    },

    async confirmTransaction(){
        try{
        this.$q.loading.show({
          message: 'Hold on, Transation is been confirmed',
          spinnerColor: 'secondary'
          
        })
      const req = await this.$axios.post(process.env.Api + '/api/transaction/confirm/'+ this.transaction.id)
      const res = req.data
      
      this. getTransaction()
      this.$q.loading.hide()
      this.$q.notify({message: 'Transaction confirm seccessfully', color: 'green'})
      
      }
      catch(error){
        
        // // console.log(error.response.data.message);
        this.$q.loading.hide()
      this.$q.notify({message: 'Error while trying to confirm transaction', color: 'red'})
      }
    },

    async acceptTransaction(){
      try{
        this.$q.loading.show({
          message: 'Hold on, Request processing',
          spinnerColor: 'secondary'
          
        })
      const req = await this.$axios.post(process.env.Api + '/api/transaction/accept/'+ this.transaction.id)
      const res = req.data
      
      this. getTransaction()
      this.$q.loading.hide()
      this.$q.notify({message: 'Transaction accepted seccessfully', color: 'green'})
      
      }
      catch(error){
        
        // // console.log(error.response.data.message);
        this.$q.loading.hide()
      this.$q.notify({message: 'Error while trying to accept transaction', color: 'red'})
      }

    },

    async declineTransaction(){

       try{
        this.$q.loading.show({
          message: 'Hold on, Request processing',
          spinnerColor: 'secondary'
          
        })
      const req = await this.$axios.post(process.env.Api + '/api/transaction/decline/'+ this.transaction.id)
      const res = req.data
      
      this. getTransaction()
      this.$q.loading.hide()
      this.$q.notify({message: 'Transaction decline seccessfully', color: 'green'})
      
      }
      catch(error){
        
        // // console.log(error.response.data.message);
        this.$q.loading.hide()
      this.$q.notify({message: 'Error while trying to decline transaction', color: 'red'})
      }
    },


    async dispute(id){
        try{
        
        if(this.transaction.dispute === 0 || this.transaction.dispute === 2){          

          this.$q.loading.show('Hold on, openning dispute', 'secondary');
          this.$axios.get(`${process.env.Api}/api/transaction/open-dispute/${id}`)
           this.transaction.dispute = 1
          this.$q.loading.hide()         
          this.$q.notify({message: 'Successful', color: 'green', position: 'top', type: 'positive'})
          

          return;
        }
        if(this.transaction.dispute === 1){

          this.$q.loading.show('Hold on, resolving dispute', 'secondary')
         this.$axios.get(`${process.env.Api}/api/transaction/resolve-dispute/${id}`)
          
          this.transaction.dispute = 2                 
          this.$q.loading.hide()         
          this.$q.notify({message: 'Successful', color: 'green', position: 'top', type: 'positive'})
          
          return;
          
        }
      }catch(err){
       
        this.loading = false
        this.$q.loading.hide()
        
        this.$q.notify({message: 'Error', color: 'orange', position: 'top', type: 'warning' })

      }
    },


    async getTransaction(){
      try{ 
        this.$q.loading.show({
          message: 'Hold on, fetching transaction record',
          spinnerColor: 'secondary'
          
        })
        // // console.log(this.T_ref);
      const req = await this.$axios.get(process.env.Api + '/api/transaction/'+ this.T_ref)
      const res = req.data
      
      // // console.log(res);
      this.transaction = res.data
      
         this.$q.loading.hide();

      
      }
      catch(error){
         this.$q.loading.hide();
        this.$q.notify({message: 'Record not fetch', color: 'red', position: 'top' })

        // // console.log(second);
        // // console.log(error.response.data.message);
      }
    },
    formatAsNaira(number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(number)
    },

    transactionStatus(status){
      if (status === 0) {
        return 'Awaiting Fulfillment'
      } else if(status === 1) {
        return 'In Transit'
      } else if(status === 2) {
        return 'Delivered'
      } else if(status === 3) {
        return 'Recieved'
      }
       else if(status === 4) {
        return 'Canceled'
      }
    },

    async login(){
      this.$q.loading.show({
        message: 'Hold on, you are being Logged In',
        spinnerColor: 'secondary'
      })
      try {
        const response = await this.$axios.post(process.env.Api + '/api/login', this.form)

        this.$store.commit('auth/login', 'Bearer '+response.data.access_token)
        this.$store.commit('auth/user', response.data.data)
        this.$q.localStorage.set('paylidate_token', 'Bearer '+response.data.access_token)
        this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ response.data.access_token;

        this.getTransaction()

        this.$q.loading.hide()
        this.$q.notify({message: 'Logged Into Paylidate', color: 'green', position: 'top', type: 'positive' })
        this.onLogin = false

      } catch (error) {
        this.$q.loading.hide()
        if (error.response) {
          if(error.response.data.message !== "Unauthorized") this.$q.notify({message: 'Logged Into Paylidate, Failed', color: 'orange', position: 'top', type: 'warning' })
          this.signup = true
        } else if (error.request) {
          // The request was made but no response was received
          //// // console.log(error.request);
          this.$q.notify({message: 'Logged Into Paylidate, Failed', color: 'orange', position: 'top', type: 'warning' })
        } else {
          // Something happened in setting up the request that triggered an Error
          //// // console.log('Error', error.message);
          this.$q.notify({message: 'Logged Into Paylidate, Failed', color: 'orange', position: 'top', type: 'warning' })
        }

      }
    },

    async register(){
      this.$q.loading.show({
        message: 'Creating an Account for you',
        spinnerColor: 'secondary'
      })
      try {
        const response = await this.$axios.post(process.env.Api + '/api/signup', this.form)

        this.$store.commit('auth/login', 'Bearer '+response.data.access_token)
        this.$store.commit('auth/user', response.data.data)
        this.$q.localStorage.set('paylidate_token', 'Bearer '+response.data.access_token)
        this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ response.data.access_token

        this.$q.loading.hide()
        this.$q.notify({message: 'Paylidate Account Created', color: 'green', position: 'top', type: 'positive' })
        this.onLogin = false

      } catch (error) {
        this.$q.loading.hide()
        this.$q.notify({message: 'Account Creation Failed', color: 'orange', position: 'top', type: 'warning' })

      }
    },

    deliveryStatus(status){
      if (status === 0) {
        return 'Awaiting Fulfillment'
      } else if(status === 1) {
        return 'In Transit'
      } else if(status === 2) {
        return 'Delivered'
      } else if(status === 3) {
        return 'Recieved'
      }
       else if(status === 4) {
        return 'Canceled'
      }
    },

    orderDelivered(data){
        this.$axios.get(`${process.env.Api}/api/transaction/status/delivered/${data}`)
        this.getTransaction();
      },

    orderRecieved(data){
        this.$axios.get(`${process.env.Api}/api/transaction/status/recieved/${data}`)
        this.getTransaction();
      },

    canceledDelivery(data){
        this.$axios.get(`${process.env.Api}/api/transaction/status/canceled/${data}`)
        this.getTransaction();
      }


    
  },

  mounted(){
    this.getTransaction()
    //if(!this.$q.localStorage.getItem('paylidate_token')) this.onLogin = true
    //else this.getTransaction()this.getTransaction()
  }
}
</script>
