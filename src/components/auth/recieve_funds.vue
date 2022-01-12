<template>
  <div >
    <q-card flat bordered style="min-width: 300px; max-width: 400px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5 text-weight-light text-center">To Recieve Payment</div>
      </q-card-section>
      <q-card-section>
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-subtitle1 text-bold">Buyer Details</div>
            <div class="text-caption"> <span class="text-bold">Name:</span> {{details.name}}</div>
            <div class="text-caption"> <span class="text-bold">Product/Service:</span>  {{details.product}}</div>

            <div class="text-caption"> <span class="text-bold">Product Discription:</span>  {{details.details}}</div>
            <div class="text-caption"> <span class="text-bold">Quantity:</span>  {{details.qty}}</div>
            <div class="text-caption"> <span class="text-bold">Amount:</span> ‎₦{{details.amount}}</div>
          </q-card-section>
        </q-card>

      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <q-input outlined dense v-model="form.bank" label="Bank" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense v-model="form.account" label="Bank Account" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense v-model="form.name" label="Recievers Name" />
      </q-card-section>
      <q-card-actions align="center" class="">
        <!-- <q-btn  color="primary" no-caps label="Recieve Money" class="full-width" @click="loadWallet()" />
        <q-btn class="text-weight-normal text-caption text-secondary full-width" no-caps flat :to="{name : 'login'}" label="Cancel Payment" /> -->
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
        account: '',
        name: 'Lawrence Attah',
        bank: 'Gtb',
        amount:'₦1000',
      }
    }
  },

  mounted(){
    // this.addscript("https://js.onepipe.io/v1")
    this.addscript("https://checkout.flutterwave.com/v3.js")
    this.viewPayment()
  },

  methods: {

    viewPayment(){
      let newData = JSON.parse(atob(this.$route.params.item))
      this.details.name = newData.user_name
      this.details.product = newData.name
      this.details.details = newData.description
      this.details.qty = newData.quantity
      this.details.amount = newData.total
    },

    async addscript(url){
      let scriptTag = document.createElement("script");
      scriptTag.setAttribute('src', url);
      scriptTag.async = true
      document.head.appendChild(scriptTag)
    },

    async loadWallet(){
      this.$axios.post('https://branchless.world/branposdev01/user/initPaymentLink', this.form)
       .then(response => {
          console.log(response.data.data);
          let data = response.data.data
          // this.OnePipePay(data.ref, data.phone, data.amount)
          this.makePayment(data.ref, data.phone, data.amount)
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



    async getAllBanks(){
      // this.$axios.defaults.headers.common["Access-Control-Allow-Origin"] = 'Bearer '+ 'FLWSECK-fe42c4841937b7dfdced0ff1ab0e39b9-X'
      // this.$axios.defaults.headers.common["AcceAccess-Control-Allow-Headers"] = 'Authorization'
      await this.$axios.get('https://api.flutterwave.com/v3/banks/NG', { headers: { Authorization: `Bearer FLWSECK-fe42c4841937b7dfdced0ff1ab0e39b9-X` }} )
      .then(response => {
        console.log('response: ',response)

        this.$axios.defaults.headers.common["Authorization"] = this.$q.localStorage.getItem('paylidate_token')
      })
      .catch((err) => {
        console.log(err)
      })
    }

  },


  mounted() {
    this.getAllBanks()
  },
}
</script>
