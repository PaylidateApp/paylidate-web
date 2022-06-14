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
    <q-card flat square class="bg-primary">
      <q-card-section class="row flex-center no-padding q-gutter-sm">
        <div class="text-secondary text-center text-uppercase">
          <div class="text-h5 text-bold">{{currency(sum_ammount('received',user.id))}}</div>
          <div style="font-size: 10px">PAYMENTS RECEIVED</div>
        </div>
        <q-separator spaced  vertical dark />
        <div class="text-secondary text-center text-uppercase">
          <div class="text-h5 text-bold">{{currency(sum_ammount('made',user.id))}}</div>
          <div style="font-size: 10px">PAYMENTS MADE</div>
        </div>
      </q-card-section>
    </q-card>

<div>

<!--
###TODO <br>
add confirm or reject request <br>
add disbut messaging <br>
add status badge <br>
add payment remitance date automatically on all transaction <br> -->

<!-- {{ contents[0] }} -->

</div>

    <q-table
      title="Transactions"
      :data="contents"
      :columns="columns"
      row-key="name"
      square
    >
      <template v-slot:top-right>
        <eExport :array="contents" :columns="columns" />
        <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
      </template>

       <template v-slot:body="props">
        <q-tr :props="props">
          <!-- <q-td key="name" :props="props">
            <img :src="props.row.image" style="width: 50px" />
          </q-td> -->
          <q-td key="transaction_ref" :props="props">

          <q-btn class="text-blue" :to="{name: 'transaction', params: {T_ref: props.row.transaction_ref}}" flat size="md" no-caps>
            {{ props.row.transaction_ref }} 
           
           </q-btn>
           <br>
           <q-btn class="text-blue" :to="{name: 'transaction', params: {T_ref: props.row.transaction_ref}}" flat size="md" no-caps>
             
           click to view transition
           </q-btn>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.product.name }}
          </q-td>
          <q-td key="quantity" :props="props">
            <span class="text-bold">{{ props.row.quantity }}</span>
          </q-td>
          <q-td key="amount" :props="props">

          <q-badge v-if="props.row.amount > 0"  color="negative">
              {{ currency(props.row.amount) }}
            </q-badge>
            <q-badge v-else color="negative">
              {{ currency(props.row.product.price * props.row.quantity) }}
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
          <!-- <q-td key="confirmed" :props="props">
            <q-badge :color="props.row.secondary_user_id ? 'steal' : 'negative'">
              {{ props.row.secondary_user_id ? 'Confirmed' : 'Un-confirmed' }}
            </q-badge>
          </q-td> -->
          <!-- <q-td key="payment_status" :props="props">
            <q-badge v-if="props.row.payment_status" color="steal">
               {{ 'Paid' }}
            </q-badge>
            <q-badge v-else-if="props.row.type === 'sell' && !props.row.payment" color="negative">
               {{ 'Un-Paid' }}
            </q-badge>
            <Payment v-else :amount="props.row.price" :T_ref="props.row.T_ref" :product="props.row" :url="payment_url+props.row.T_ref+'/payment'"/>
          </q-td> -->
           <q-td key="link" :props="props">
            <q-btn label="Copy Link" @click="copy_link(props.row.transaction_ref)" flat size="sm" no-caps class="bg-grey" >
              <q-tooltip>
                    {{copyL}}
                  </q-tooltip>
            </q-btn>
          </q-td>

          <!-- <q-td key="action" :props="props" class=""
            v-if="props.row.type === 'sell' && props.row.user_id == user.id || props.row.type === 'buy' && props.row.user_id != user.id" >
            <q-btn v-if="props.row.delivery_status == 0" @click="startDelivery(props.row.id)" color="warning" size="xs" no-caps label="Start Delivery" />
            <q-btn v-if="props.row.delivery_status == 1" @click="orderDelivered(props.row.id)" color="negative" size="xs" no-caps label="Order Completed" />
            <Disput v-if="props.row.delivery_status == 1" />
          </q-td>
          <q-td key="action" :props="props" class=""
            v-if="props.row.type === 'buy' && props.row.user_id == user.id || props.row.type === 'sell' && props.row.user_id != user.id">
            <span v-if="props.row.delivery_status == 0" class="text-bold">Awaiting Delivery</span>
            <q-btn v-if="props.row.delivery_status == 1" @click="orderRecieved(props.row.id)" color="warning" size="xs" no-caps label="Recieved Delivery" />
            <Disput  />
          </q-td> -->


            <!-- TODO paid unpaid in-dispute complete -->
           
           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="transaction_status" :props="props">
            <q-badge v-if="props.row.accept_transaction == null" color="steal">
               Awaiting acceptance
            </q-badge>
            <q-badge v-else-if="props.row.accept_transaction == false" color="negetive">
               Not Accepted
            </q-badge>            
            <q-badge v-else-if="props.row.status == 0" color="secondary">
               Transaction accepted but Pending
            </q-badge>
            <q-badge v-else-if="props.row.status == 1" color="positive">
               Transaction completed
            </q-badge>
            <q-badge v-else color="negative">
               Transaction cancel               
            </q-badge>
          </q-td>

        </q-tr>
      </template>

    </q-table>
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
        { name: 'transaction_ref', label: 'Transaction ref', field: 'transaction', align: 'left' , sortable: true,},
        { name: 'name', label: 'Product Name', field: 'name', align: 'left' , sortable: true, },
        { name: 'quantity', label: 'Total Quantity', field: 'transaction', sortable: true,  align: 'left'  },
        { name: 'amount', label: 'Total Price', field: 'transaction', sortable: true,  align: 'left'  },
        { name: 'transaction_type', label: 'Transaction Type', field: 'transaction_type', sortable: true,  align: 'center'  },
        // { name: 'confirmed', label: 'Confirmation', field: 'confirmed', align: 'left', sortable: true },
        // { name: 'payment_status', label: 'Payment', field: 'payment_status',align: 'left', sortable: true },
        { name: 'link', label: 'Transaction link', field: '', align: 'center', sortable: true },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'transaction_status', label: 'Status', field: 'transaction',  align: 'left', sortable: true },
      ],
      contents:[],
      payment_url: `${window.location.href}/product/`,
      copyLink:'Copy link',
    }
  },
  mounted() {
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
          const options = { year: "numeric", month: "long", day: "numeric" }
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