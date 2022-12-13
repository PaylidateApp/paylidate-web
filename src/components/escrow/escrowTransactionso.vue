<template>
  <div>
    <q-card flat square class="bg-primary column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary">
          Escrow Transactions
        </div>
        <div class="row q-gutter-sm">
          <!-- <sell />
          <buy /> -->


        </div>
      </q-card-section>
    </q-card>
    

    <div>

      
    </div>

    <!-- <q-table title="Transactions" :data="contents" :columns="columns" row-key="name" square>
      <template v-slot:top-right>
        <eExport :array="contents" :columns="columns" /> -->
        <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <!-- <q-td key="name" :props="props">
            <img :src="props.row.image" style="width: 50px" />
          </q-td> -->
          <q-td key="transaction_ref" :props="props">

            <q-btn class="text-blue" :to="{name: 'transaction', params: {T_ref: props.row.transaction_ref}}" flat
              size="md" no-caps>

              view
            </q-btn>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.product.name }}
          </q-td>
          <q-td key="quantity" :props="props">
            <span class="text-bold">{{ props.row.quantity }}</span>
          </q-td>
          <q-td key="amount" :props="props">

            <q-badge v-if="props.row.amount < 1" color="negative">
              {{ currency(props.row.product.price * props.row.quantity) }}
            </q-badge>
            <q-badge v-else-if="props.row.referer_id" color="negative">
              {{ currency(parseFloat(props.row.amount) + parseFloat(props.row.referral.amount)) }}
            </q-badge>
            <q-badge v-else color="negative">
              {{ currency(props.row.amount) }}
            </q-badge>


          </q-td>

          <q-td key="transaction_type" :props="props">
            <q-badge v-if="props.row.product.transaction_type === 'buy'" color="primary">
              {{ props.row.product.user_id === user.id ? 'buy' : 'sell' }}
            </q-badge>
            <q-badge v-if="props.row.product.transaction_type === 'sell'" color="primary">
              {{ props.row.product.user_id === user.id ? 'sell' : 'buy' }}
            </q-badge>
          </q-td>

          

          <!-- TODO paid unpaid in-dispute complete -->

          <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="transaction_status" :props="props">
            <q-badge v-if="props.row.accept_transaction == null" color="steal">
              <!-- Awaiting acceptance -->
              Pending
            </q-badge>
            <q-badge v-else-if="props.row.accept_transaction == false" color="negetive">
              Not Accepted
            </q-badge>
            <q-badge v-else-if="props.row.status == 0" color="secondary">
              <!-- Transaction accepted but Pending -->
              Accepted
            </q-badge>
            <q-badge v-else-if="props.row.status == 1" color="positive">
              Completed
            </q-badge>
            <q-badge v-else color="negative">
              <!-- Transaction cancelled -->
              Cancelled
            </q-badge>
          </q-td>

        </q-tr>
      </template>

    </q-table>

<template>

      
      

  <div class="q-pa-md" align: center id="trans">
    <q-card flat square class=" column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-dark">
          Transactions
        </div>
        <div class="row q-gutter-sm">
          <!-- <sell />
          <buy /> -->


        </div>
      </q-card-section>
    </q-card>

    <q-table
      :data="contents"
      :columns="columns"
      row-key="name"
      class="text-center"
    />
  </div>
</template>
  </div>
</template>

<script>
import eExport from 'components/common/export'
import buy from 'components/common/buy'
import sell from 'components/common/sell'
import Payment from 'components/common/make_payment'
import CreateProduct from './partials/create_product.vue'
import Disput from './partials/disput.vue'
export default {
  // name: 'ComponentName',
  components:{
    eExport, buy, sell, Payment, CreateProduct, Disput
  },
  data () {
    return {
      columns: [
        // { name: 'src', field: 'src' },
        { name: 'product', label: 'Product/Service', field: 'product', align: 'center' , sortable: true, },
        { name: 'quantity', label: 'Qty', field: 'quantity', sortable: true,  align: 'center'  },
        { name: 'amount', label: 'Price', field: 'amount', sortable: true,  align: 'center'  },
        { name: 'transaction_type', label: 'Type', field: 'transaction_type', sortable: true,  align: 'center'  },
        // { name: 'confirmed', label: 'Confirmation', field: 'confirmed', align: 'center', sortable: true },
        // { name: 'payment_status', label: 'Payment', field: 'payment_status',align: 'center', sortable: true },
        //{ name: 'link', label: 'Transaction link', field: '', align: 'center', sortable: true },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'status', label: 'Status', field: 'status',  align: 'center', sortable: true },
        { name: 'transaction_ref', label: 'Open', field: 'transaction_ref', align: 'center' , sortable: true,},
      ],

      contents: [
       /* {
          transaction_ref: 'Frozen Yogurt',
          name: "sentencessgjhjkhgkjk".slice(0,5),
          quantity: 6.0,
          amount: 24,
          transaction_type: 4.0,
          created_at: 87,
          transaction_status: '14%'
        },*/
        
      ],

      
      payment_url: `${window.location.href}/product/`,
      copyLink:'Copy link',
    }
  },
  mounted() {
    if (!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login" });
    }
    this.getTransactions();
  },
  computed:{
     copyL(){return this.copyLink},
    user(){return this.$store.getters["auth/user"] },

  },
  methods: {
    async getTransactions(){
        //console.log('contents');
         this.$q.loading.show({
          message: 'Hold on, fetching transaction records',
          spinnerColor: 'secondary'

        })
        try{
        const req = await this.$axios.get(process.env.Api + '/api/transaction')
        const res = req.data

        this.contents = res.data;
        console.log(res.data)
        //console.log(this.contents)

         this.$q.loading.hide();
        }catch(err){
         this.$q.loading.hide();
        }
        finally{
            this.$q.loading.hide();
        }
      },
       copy_link(T_ref){
      navigator.clipboard.writeText(window.location.origin+'/escrow-transaction/'+T_ref)
      this.copyLink = 'copied!';
       setTimeout(() => this.copyLink = 'Copy Link', 2000);
       },
      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },
      sum_ammount(type,user_id){
      if(this.contents){
        const sort_ammounts = this.contents.filter(function(item) {

            if (item.payment && item.payment.verified) {
              if (item.payment.user_id != user_id && type === 'received') {
                item.product.price =item.referer_id ? (parseFloat(item.amount) + parseFloat(item.referral.amount)): item.amount
                return item
              }
              if (item.payment.user_id == user_id && type === 'made') {
                return item
              }

            }
          })
        let sum = sort_ammounts.reduce((accumulator, current) => Number(accumulator) + Number(current.product.price), 0);
        return sum;
      }else{
        return 0;
      }
    },
      formatDate(dateString){
          const options = { year: "numeric", month: "numeric", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },
      startDelivery(data){
        this.$axios.get(`${process.env.Api}/api/product/status/delivery/${data}`)
        this.getTransactions();
      },
      orderDelivered(data){
        this.$axios.get(`${process.env.Api}/api/product/status/delivered/${data}`)
        this.getTransactions();
      },
      orderRecieved(data){
        this.$axios.get(`${process.env.Api}/api/product/status/recieved/${data}`)
        this.getTransactions();
      },
      canceledDelivery(data){
        this.$axios.get(`${process.env.Api}/api/product/status/canceled/${data}`)
        this.getTransactions();
      }
  }
}
</script>
