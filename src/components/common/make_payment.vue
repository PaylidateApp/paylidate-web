<template>
  <div>

    <q-btn color="secondary" size="sm" label="Make Payment" @click="open = true" />
    <q-dialog v-model="open">

      <q-card v-if="transaction.quantity > transaction.product.quantity" :style="$q.screen.gt.sm ? 'min-width: 600px' : 'min-width: 300px'">
        <q-card-section>
        <div class="q-pa-md text-h6">
          This transaction can not continue because the quantity of product available in less than your request. <br/>
          This can be as a result of you not completing the transaction early.
        </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" no-caps color="negative" @click="open = false; loading = false;" />
        </q-card-actions>
        
      </q-card>

      <q-card v-else :style="$q.screen.gt.sm ? 'min-width: 600px' : 'min-width: 300px'">
        <q-card-section>
          <div class="text-h6">Please Confirm</div>
        </q-card-section>


        <q-card-section class="column flex-center full-width">
         
          <div class="q-py-xs text-center">
                      <div>Note: {{charges}} </div>
          </div>

          <div class="q-py-xs text-center">
            <div class="text-caption text-weight-light">Amount</div>
            <div class="text-bold text-h5">NGN {{ form.amount }}</div>
          </div>

          <div class="row flex-center full-width q-px-">
            <div class="column">
              <div class="q-py-xs text-right">
                <div class="text-caption text-weight-light">Product Name</div>
                <div class="text-bold text-h6">{{ transaction.product.name }}</div>
              </div>

              <div class="q-py-xs text-right">
                <div class="text-caption text-weight-light">Payment Type</div>
                <div class="text-bold ">{{ transaction.product.type }}</div>
              </div>
            </div>

            <div class="column">
              <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Quantity</div>
                <div class="text-bold text-h6">{{ transaction.quantity }}</div>
              </div>

              <!-- <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Payment Ref</div>
                <div class="text-bold">{{ '200000-sdsd-sdsd' }}</div>
              </div> -->

              <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Payment Status</div>
                <div class="text-bold ">{{ 'pending' }}</div>
              </div>
            </div>
          </div>
          
        </q-card-section>
        <q-card-actions align="right">
          <q-btn unelevated no-caps color="primary" label="Make Payment" v-if="open" :loading="loading" @click="makePayment()" />
          <q-btn flat label="Cancel" no-caps color="negative" @click="open = false; loading = false;" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
// import router from 'src/router';

export default {
  props:['transaction'],
    components:{
         
  },
    data(){
      return {
        
        open: false,
        loading: false,
        rate: 0,
        form:{
          T_id: this.transaction.id,
          amount: this.transaction.product.price * this.transaction.quantity,
          total_amount: null,
          T_ref: this.transaction.transaction_ref,
          currency: 'NGN',
          
        },
         error: ''
      }
    },

     computed: {
    user(){return this.$store.getters["auth/user"] },

      cards(){return this.$store.getters["card/cards"] },
      charges(){
      let charge = (3/100 * this.form.amount).toFixed(2)
      let original_amount = parseInt(this.form.amount);

        if(charge < 100){
          this.form.total_amount = original_amount + 100
          return "Your Transaction fee is NGN 100"
        }
        else if( charge > 2500){
          this.form.total_amount = original_amount + 2060;
          return "Your Transaction fee is NGN 2500"
        }
        else {
          this.form.total_amount = original_amount + parseInt(charge);
          return "Your Transaction fee is NGN " + charge
        }
    }
    },

    mounted() {
      this.get_rate()
    },

    methods:{
      async makePayment() {
        this.loading = true;

          //this.$q.localStorage.set('transaction_id', this.form.T_id);
          //this.$q.localStorage.set('description', this.form.T_ref);

          FlutterwaveCheckout({
          public_key: process.env.Flutterwave_public_key,
      
          tx_ref:'PD' + this.user.id + (new Date()).getTime(),
          amount: this.form.total_amount,
          currency: this.form.currency,
          country: "",
          payment_options: "",
          redirect_url: `${window.location.href}/${this.transaction.id}/payment`,
                   meta: {
            consumer_id: this.user.id,
            consumer_mac: "",
          },
          customer: {
            email: this.user.email,
            phone_number: this.user.phone,
            name: this.user.name,
          },
      
      onclose: function() {
        
        this.error=""; 
      },
      customizations: {
        title: "Payment for " + this.transaction.product.name,
        description: "Paid for " + this.transaction.product.name,
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

      async paymentStatus(){

        
        try{
        const req = await this.$axios.get(`${process.env.Api}/api/product/paid/${this.T_ref}`)          
          const res = req.data

           this.$q.loading.show({
          message: 'Hold on, Processing Payment',
        spinnerColor: 'secondary'
          
        })
          if(res.status == 'success'){
           this.$q.loading.hide()
          this.$q.notify({message: 'Payment Successful ', color: 'green'})
          return
          }

          this.$q.loading.hide()
          this.$q.notify({message: 'Transaction Error ', color: 'red'})


        }catch(err){

        }

        
      },


       async get_rate() {
        const req = await this.$axios.post(process.env.Api + '/api/get-rate')
        const res = req.data
        this.rate = res.data.rate
      },
    }
}
</script>

<style>

</style>
