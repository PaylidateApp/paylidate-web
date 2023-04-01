<template>
  <div class="row q-gutter-sm">
    <q-card bordered flat class="column flex-center" style="min-width: 300px">
      <q-card-section>
        <div class="h3 text-center text-capitalize">Welcome {{user.name}}</div>
        <div class="text-h6 text-center text-capitalize">
          Activate your Account
        </div>
        <div class="text-h4 text-center text-bold">
          ‎₦100 Charge
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn :loading="loading" no-caps color="primary" label="Activate" @click="acctUpdate()"/>
      </q-card-actions>
    </q-card>

    <!-- <q-dialog v-model="alert">
      <PINtx :theref="myref" :fnc="fnc" :bnkData="form" />
    </q-dialog> -->

    <div class="row flex-center fixed-bottom">
      <div class="text-caption text-grey">Powered by</div>
      <img src="statics/branchlessLogo.jpg" style="max-width: 100px">
    </div>
  </div>
</template>

<script>
// import PINtx from '../webApp/pinTX'
export default {
  // name: 'ComponentName',
  components:{
    // PINtx
    },
  data () {
    return {
      // plan: [],
      // alert: false,
      myref: '',
      loading: false,
      fnc:'Subscription',
      plans: '',
    }
  },
  computed:{
    user: function() { return this.$store.getters["Auth/users"]; },
  },
  methods:{
    async acctUpdate(){
      // initSubscription
      // this.form.amount = data.amount
      this.loading = true
      this.$axios.post('https://branchless.world/branposdev01/user/initAccount')
      .then(response => {
        console.log('response: ', response.data)
        let dData = response.data.data
        this.loading = false
        this.makePayment({
          ref: dData.ref,
          amount: dData.amount,
          phone: dData.phone,
          name: this.$store.getters["Auth/users"].name,
          })
      })
      .catch(error=>{
        this.errorHandling(error)
      })
    },

    errorHandling(error){
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        this.loading = false
        this.$q.notify({message: error.response.data.message, color: 'orange'})
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        this.loading = false
        this.$q.notify({message: error.request, color: 'orange'})
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        this.loading = false
        this.$q.notify({message: error.message, color: 'orange'})
      }
    },
    
    async addscript(url){
      let scriptTag = document.createElement("script");
      scriptTag.setAttribute('src', url);
      scriptTag.async = true
      document.head.appendChild(scriptTag)
    },
    makePayment(dData) {
      FlutterwaveCheckout({
        public_key: "FLWPUBK-4b7b5a9ed0f871bff8f2758190718d73-X",
        tx_ref: dData.ref,
        amount: dData.amount,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "https://app.branchless.io",
        customer: {
          email: '0'+dData.phone+"@gmail.com",
          phone_number: '0'+dData.phone,
          name: dData.name,
        },
        callback: function (data) {
          console.log(data);
        },
        customizations: {
          title: "Branchless",
          description: "Bank transfer",
          logo: "https://bitbucket.org/Godfadatun/branchless_webapp/src/master/src/statics/branchlessLogo.jpg",
        },
      });
    }
  },
  mounted(){
    // this.getPlans()
    this.addscript("https://checkout.flutterwave.com/v3.js")
  }
}
</script>
