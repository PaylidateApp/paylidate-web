<template>
  <div >

    <q-card flat bordered style="min-width: 300px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5 text-weight-light text-center">Request Payment</div>
      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <q-input outlined disable dense v-model="form.bank" label="Bank" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined disable dense v-model="form.account" label="Bank Account" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense disable v-model="form.name" label="Recievers Name" />
        <q-input outlined dense disable v-model="form.amount" prefix="NGN" label="Amount" oninput="value=value.replace(/[^\d]/g,'')" />

      </q-card-section>
      <q-card-section>
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-subtitle1 text-bold">Request Details</div>
            <div class="text-caption"> <span class="text-bold">Name:</span> {{details.name}}</div>
            <div class="text-caption"> <span class="text-bold">Product/Service:</span>  {{details.product}}</div>

            <div class="text-caption"> <span class="text-bold">Product Discription:</span>  {{details.details}}</div>
            <div class="text-caption"> <span class="text-bold">Quantity:</span>  {{details.qty}}</div>
            <div class="text-caption"> <span class="text-bold">Amount:</span> ‎₦{{details.amount}}</div>
          </q-card-section>
        </q-card>

      </q-card-section>
      <q-card-actions align="center" class="">
        <q-btn color="primary" no-caps label="Make Payment" class="full-width" @click="loadWallet()" />
        <q-btn class="text-weight-normal text-caption text-secondary full-width" no-caps flat :to="{name : 'login'}" label="Cancel Payment" />
      </q-card-actions>

       <!-- <div class="row flex-center">
        <div class="text-caption text-grey">Powered by</div>
        <img src="../../statics/paylidate-logo.png" style="max-width: 100px">
      </div> -->
    </q-card>
    <div class="row flex-center q-py-md">
      <div class="text-caption text-grey">Powered by</div>
      <img src="../../statics/paylidate-logo.png" style="max-width: 100px">
    </div>



  </div>
</template>

<script>


export default {
  // name: 'ComponentName',
  data () {
    return {
      thedata:null,
      alert:false,
      details:{
        name: 'John Doe',
        product: 'Air Jordans',
        details: 'lem ipsumor lorem ipsum lem ipsumor lem ipsumor',
        qty: '2',
        amount:'1000',
      },
      form:{
        account: this.$route.params.item.slice(0, 10),
        name: 'Lawrence Attah',
        bank: this.$route.params.item.slice(10),
        amount:'₦1000',
      }
    }
  },

  mounted(){
    // this.addscript("https://js.onepipe.io/v1")
    this.addscript("https://checkout.flutterwave.com/v3.js"),
    this.viewPayment()
  },

  methods: {

    async addscript(url){
      let scriptTag = document.createElement("script");
      scriptTag.setAttribute('src', url);
      scriptTag.async = true
      document.head.appendChild(scriptTag)
    },

    viewPayment(){
      let newData = JSON.parse(atob(this.$route.params.item))
      this.details.name = newData.name
      this.details.product = newData.product_name
      this.details.details = newData.description
      this.details.qty = newData.qty
      this.details.amount = newData.total
    },

    async loadWallet(){
      // this.$axios.post('https://branchless.world/branposdev01/user/initPaymentLink', this.form)
      //  .then(response => {
      //     console.log(response.data.data);
      //     let data = response.data.data
      //     // this.OnePipePay(data.ref, data.phone, data.amount)

      //   })
      // .catch(error=>{
      //   this.errorHandling(error)
      // })
      let txRef = 'Payidate ' + Math.floor(Math.random() * 1000000)
      this.makePayment(txRef, this.form.amount)
    },

    errorHandling(error){
      if (error.response) {
        this.loading = false
        this.$q.notify({message: error.response.data, color: 'orange'})
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

    makePayment(ref, phone, amount) {
      FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-e56dca3103f8b86426096bbb3e67e0e9-X",
        tx_ref: ref,
        amount: amount,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "https://paylidateapp.netlify.app/",
        customer: {
          email: this.$store.getters["Auth/user"].email,
          phone_number: this.$store.getters["Auth/user"].phone,
          name: this.form.name,
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

}
</script>
