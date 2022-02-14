<template>
  <div>

    <!-- {{product}} -->

    <q-card v-if="product" class="my-card" bordered flat style="max-width: 500px">
      <!-- <q-img :src="'/product.svg'" spinner-color="white"
      /> -->
      <q-card-section class="row">
      <div class="text-bold text-h6 text-uppercase">{{product.name}}</div>
      <q-space />
        <q-btn
            size="12px"
            round
            flat
            color="primary"
            class=""
            icon="more_vert"
            @click="copy_link"
          >

           <q-tooltip>
          {{copyL}}
        </q-tooltip>
            
          </q-btn>
      </q-card-section>
      <q-card-section class="column">
        <div>
          Product Details
        </div>
        <q-separator class="q-mb-sm" />
        <q-card flat bordered>
          <!-- {{ product.image !== 'default_product.png' ? product.image : base_image }} -->
          <img :src="product.image !== 'default_product.png' ? product.image : base_image">
          <q-card-section>
            <div class="text-bold">Transaction Type: {{product.transaction_type}}</div>
            <div class="text-bold">Quantity: {{product.quantity}}</div>
            <div class="text-bold">Price: {{formatAsNaira(product.price)}}</div>
            <div class="text-bold">Product Number: {{product.product_number}}</div>
            <div class="text-bold">Description: {{product.description ? product.description : "No Description"}}</div>
            <div class="text-bold">Delivery Period: {{product.delivery_period}}</div>
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
              <div>Email: {{product.user.email}}</div>
              <div>Name: {{ product.user.name }}</div>
            </q-card-section>

            <q-separator vertical />

            <q-card-section>
              <div class="text-bold">Reciever</div>
              <div>Name: {{ product.secondary_user ? product.secondary_user.name : 'Not Available' }}</div>
              <div>Email: {{product.secondary_user ? product.secondary_user.email : 'Not Available' }}</div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section class="column">
        <div>
          Order Status
        </div>
        <q-separator class="q-mb-sm" />
        <div class="q-gutter-sm">
          <div v-if="Object.keys(user).length">
            <div v-if="product.secondary_user">
              <div v-if="product.user.id !== user.id">
                 Transaction Status: <q-badge  color="positive" text-color="black" label="You Accept This Transaction" />
                  <!-- <span v-if="!product.payment_status">Please proceed to payment</span> -->
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
              Delivery Status: <q-badge color="orange" :label="deliveryStatus(product.delivery_status)" /> <br />
              Product Status: <q-badge color="orange" :label="product.payment_status ? 'Paid' : 'Unpaid'" />  <br />
              Delivery Period: <q-badge color="orange" :label="product.delivery_period" /> days
              <!-- <br /> <div v-if="product.payment">Please deliver in time to avoid cancelation</div> -->
          </div>

          </div>

          <!-- <div v-if="Object.keys(user).length && product.payment">
            <DiliveredRecieved
            v-if="product.type === 'buy'
              &&  product.user.id === user.id
              &&  product.status === 1
              ||  product.type === 'sell'
              &&  product.user.id === user.id
              &&  product.status === 1"

            :data="product" :status="'delivered'"/>

            <DiliveredRecieved v-else :data="product" :status="'received'"/>
          </div> -->

        </div>
      </q-card-section>

      <q-card-section class="column">

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

<!-- payment_status -->
          <div v-if="!product.payment_status && product.transaction_type === 'buy'  &&  product.user.id === user.id || product.transaction_type === 'sell'  &&  product.user.id !== user.id">
              <Payment :amount="product.price" :slug="product.slug" :product="product" :url="payment_url"/>
          </div>
      </q-card-section>

    </q-card>

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


  </div>
</template>

<script>
import AcceptTransaction from "./partials/accept_trans";
import Payment from 'components/common/make_payment';
import DiliveredRecieved from "./partials/dilivered_recieved"
import Signup from "components/auth/register"
import Login from "components/auth/login"
export default {
  // name: 'PageName',
  components:{
    AcceptTransaction,
    Payment,
    DiliveredRecieved,
    Signup,
    Login
  },

  data() {
    return {
      copyLink:'Copy product link',
      slug: this.$route.params.slug,
      product: null,
      text: '',
      base_image: 'https://res.cloudinary.com/godfadatun/image/upload/v1626034472/undraw_factory_dy0a_cqfjei.svg',
      loading: false,
      signup:false,
      onLogin:false,
      form:{
        email: '',
        password: '',
      },
      payment_url: `${window.location.href}/payment`
    }
  },

  computed:{
    copyL(){return this.copyLink},
     user(){return this.$store.getters["auth/user"] },
     ModelStyle(){ return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px"},
  },

  methods:{
    copy_link(){
      navigator.clipboard.writeText(window.location)
      this.copyLink = 'copied!';
       setTimeout(() => this.copyLink = 'Copy product link', 2000);
      
    },
    async getProduct(){
      const req = await this.$axios.get(process.env.Api + '/api/product/'+ this.slug)
      const res = req.data
      this.product = res.data
    },
    formatAsNaira(number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(number)
    },

    productStatus(status){
      if (status === 0) {
        return 'Awaiting Fulfillment'
      } else if(status === 1) {
        return 'In Transit'
      } else if(status === 2) {
        return 'Delivered'
      } else if(status === 3) {
        return 'Recieved'
      }
    },

    async login(){
      this.$q.loading.show({
        message: 'Hold on, you are being Logged In',
        spinnerColor: 'secondary'
      })
      try {
        const response = await this.$axios.post('https://paylidate.herokuapp.com/api/login', this.form)

        this.$store.commit('auth/login', 'Bearer '+response.data.access_token)
        this.$store.commit('auth/user', response.data.data)
        this.$q.localStorage.set('paylidate_token', 'Bearer '+response.data.access_token)
        this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ response.data.access_token;

        this.getProduct()

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
          console.log(error.request);
          this.$q.notify({message: 'Logged Into Paylidate, Failed', color: 'orange', position: 'top', type: 'warning' })
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
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
        const response = await this.$axios.post('https://paylidate.herokuapp.com/api/signup', this.form)

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
    }
  },

  mounted(){
    if(!this.$q.localStorage.getItem('paylidate_token')) this.onLogin = true
    else this.getProduct()
  }
}
</script>
