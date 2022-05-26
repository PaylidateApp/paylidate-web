<template>
  <q-page class="flex justify-center">


    
    
    

    <!-- {{product}} -->
    <div>
    
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
          Product Details
        </div>
        <q-separator class="q-mb-sm" />
        <q-card flat bordered>
          <!-- {{ product.image !== 'default_product.png' ? product.image : base_image }} -->
          <img :src="product.image !== 'default_product.png' ? product.image : base_image">
          <q-card-section>
            <div class="text-bold">Product Number: {{product.product_number}}</div>
            <div class="text-bold">Product Name: {{product.name}}</div>
            <div class="text-bold">Transaction Type: {{product.transaction_type}}</div>
            <div class="text-bold">Type: {{product.type}}</div>
            <div class="text-bold">Available Quantity: {{product.quantity}}</div>
            <div class="text-bold">Product Status: 
            <span v-if="product.product_status == true">Enable</span>
            <span v-else>Disable</span>
            </div>
            <div class="text-bold">Price per Product: {{formatAsNaira(product.price)}}</div>
            <div class="text-bold">Description: {{product.description ? product.description : "No Description"}}</div>
          </q-card-section>
        </q-card>
      </q-card-section>

      

      <q-card-section class="column">
        <div v-if="product.user_id == user.id">
          <q-btn color="primary" size="md" class="q-mx-sm" label="Edit Product" @click="editTransaction()" />
          <q-btn v-if="product.transaction.length > 0" color="red" size="md" label="Delete Product" @click="deleteProduct()" />          
        </div>

        <div v-if="product.user_id != user.id">
        <span  v-if="product.product_status == true || product.quantity > 0">
          <q-btn v-if="Object.keys(user).length"  color="secondary" size="md" class="q-mx-sm" label="Buy Product" @click="accept_modal = true" />
          <q-btn v-else  color="secondary" size="md" class="q-mx-sm" label="Buy Product" @click="onLogin = true" />
        </span>
        <span  v-else>
         <q-badge  color="red" text-color="white" label="Sorry!!! This product is currently not available" />
          
        </span>
        </div>
        
      </q-card-section>

      

    </q-card>


    </div>

    <q-dialog v-model="accept_modal" persistent>
      <q-card class="my-card" :style="ModelStyle">

        <q-form class="q-gutter-md" >
          <q-card-section class="q-py-sm">            
            <div class="text-caption">ACCEPT PRODUCT</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm">
        
            <q-input outlined dense v-model="form.quantity" :rules="schema.quantity" type="number" label="Product Quantity*"/>
            <q-input type="textarea" outlined dense v-model="form.description" label="Transaction Description" />
          
          </q-card-section>
          
          <q-card-actions align="center">
           <q-btn color="primary" size="md" :loading="loading" class="q-mx-sm" label="Accept" @click="buyProduct()" />
          <q-btn color="red" size="md" label="Cancel" @click="accept_modal = false" /> 
          </q-card-actions>
        </q-form>
      </q-card>

    <!-- <Signup />  -->

    </q-dialog>



    <q-dialog v-model="onLogin" persistent>
      <q-card class="my-card" :style="ModelStyle">

        <q-form @submit="login() " class="q-gutter-md" >
          <q-card-section class="q-py-sm">
            <div class="text-h6">Login</div>
            <div class="text-caption">To complete your Transaction</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm">
             <q-input outlined dense v-model="form.email" label="Enter E-mail" inputmode="email" />
            <q-input outlined dense type="password" v-model="form.password" label="Create Your Password" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat type="submit" label="Login" />
          <q-btn flat text-color="red" size="md" label="Cancel" @click="onLogin = false" /> 
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
import buySchema from '../../validation/buy'

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
      copyLink:'Copy product link',
      slug: this.$route.params.slug,
      product: null,
      text: '',
      onLogin:false,
      schema: buySchema,
      base_image: 'https://res.cloudinary.com/godfadatun/image/upload/v1626034472/undraw_factory_dy0a_cqfjei.svg',
      loading: false,      
      accept_modal:false,
      form:{
       quantity: '',
       description: '',
       product_id: null

      },
      payment_url: `${window.location.href}/payment`
    }
  },

  computed:{


    dispute_state(){
      if(this.product.dispute === 0){
        return "Open Dispute";
      }
      else if(this.product.dispute === 2){
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
       setTimeout(() => this.copyLink = 'Copy product link', 2000);
      
    },

    async buyProduct(){

          if(this.form.quantity > this.product.quantity)
          {
          this.$q.notify({message: 'You can not request more than the available quantity', color: 'red'})
          return
          }
          else{
          try{
            this.$q.loading.show({
              message: 'Hold on, Request processing',
              spinnerColor: 'secondary'
              
            })
          const req = await this.$axios.post(process.env.Api + '/api/transaction', this.form)
          const res = req.data
          
          this. getProduct()
          this.$q.loading.hide()
          this.$q.notify({message: 'Request seccessfully', color: 'green'})
          this.$router.push({ name: "transactions"})
          
          }
          catch(error){
            
            console.log(error.response.data.message);
            this.$q.loading.hide()
          this.$q.notify({message: 'Error while trying create transaction', color: 'red'})
          }
          }
        },

    editTransaction(){

    },

    deleteProduct(){

    },
    acceptProcduct(){

    },


    async editProduct(id){
        try{
        
        if(this.product.dispute === 0 || this.product.dispute === 2){          

          this.$q.loading.show('Hold on, openning dispute', 'secondary');
          this.$axios.get(`${process.env.Api}/api/product/open-dispute/${id}`)
           this.product.dispute = 1
          this.$q.loading.hide()         
          this.$q.notify({message: 'Successful', color: 'green', position: 'top', type: 'positive'})
          

          return;
        }
        if(this.product.dispute === 1){

          this.$q.loading.show('Hold on, resolving dispute', 'secondary')
         this.$axios.get(`${process.env.Api}/api/product/resolve-dispute/${id}`)
          
          this.product.dispute = 2                 
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


    async getProduct(){

        this.$q.loading.show({
          message: 'Hold on, fetching product',
          spinnerColor: 'secondary'
          
        })
      const req = await this.$axios.get(process.env.Api + '/api/product/'+ this.slug)
      const res = req.data
      // console.log(res);
      this.product = res.data
      this.form.product_id = res.data.id
         this.$q.loading.hide();

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
          //// console.log(error.request);
          this.$q.notify({message: 'Logged Into Paylidate, Failed', color: 'orange', position: 'top', type: 'warning' })
        } else {
          // Something happened in setting up the request that triggered an Error
          //// console.log('Error', error.message);
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
        this.$axios.get(`${process.env.Api}/api/product/status/delivered/${data}`)
        this.getProduct();
      },

    orderRecieved(data){
        this.$axios.get(`${process.env.Api}/api/product/status/recieved/${data}`)
        this.getProduct();
      },

    canceledDelivery(data){
        this.$axios.get(`${process.env.Api}/api/product/status/canceled/${data}`)
        this.getProduct();
      }


    
  },

  mounted(){
    this.getProduct()
    // if(!this.$q.localStorage.getItem('paylidate_token')) this.onLogin = true
    // else this.getProduct()
  }
}
</script>
