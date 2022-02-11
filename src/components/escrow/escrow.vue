<template>
  <div>
    <q-card flat square class="bg-primary column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary">
          Start your Transaction
        </div>
        <div class="row q-gutter-sm">
          <!-- <sell />
          <buy /> -->

          <CreateProduct />
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
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="quantity" :props="props">
            <span class="text-bold">{{ props.row.quantity }}</span>
          </q-td>
          <q-td key="price" :props="props">
            <q-badge color="negative">
              {{ currency(props.row.price) }}
            </q-badge>
          </q-td>
          <q-td key="carbs" :props="props">
            <q-badge color="orange">
              {{ props.row.carbs }}
            </q-badge>
          </q-td>
          <q-td key="transaction_type" :props="props">
            <q-badge v-if="props.row.transaction_type === 'buy'" color="primary">
              {{ props.row.user_id === user.id ? 'buy' : 'sell' }}
            </q-badge>
            <q-badge v-if="props.row.transaction_type === 'sell'" color="primary">
              {{ props.row.user_id === user.id ? 'sell' : 'buy' }}
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
            <Payment v-else :amount="props.row.price" :slug="props.row.slug" :product="props.row" :url="payment_url+props.row.slug+'/payment'"/>
          </q-td> -->
           <q-td key="view" :props="props" class="column">
            <q-btn :to="{name: 'product', params: {slug: props.row.slug}}" label="View Order" flat size="sm" no-caps />
            <!-- <q-btn @click="canceledDelivery(props.row.id)" color="negative" size="xs" no-caps label="Cancel Order" /> -->
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
           <q-td key="payment_status" :props="props">
            <q-badge v-if="props.row.payment_status" color="steal">
               {{ 'Paid' }}
            </q-badge>
            <q-badge v-else color="negative">
               {{ 'Un-Paid' }}
            </q-badge>
          </q-td>

           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
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
        { name: 'name', label: 'Product Name', field: 'name', align: 'left' ,
          sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'quantity', label: 'Quantity', field: 'quantity', sortable: true,  align: 'left'  },
        { name: 'price', label: 'Price', field: 'price', sortable: true,  align: 'left'  },
        { name: 'transaction_type', label: 'Transaction Type', field: 'transaction_type', sortable: true,  align: 'left'  },
        // { name: 'confirmed', label: 'Confirmation', field: 'confirmed', align: 'left', sortable: true },
        // { name: 'payment_status', label: 'Payment', field: 'payment_status',align: 'left', sortable: true },
        { name: 'view', label: 'View', field: '', align: 'left', sortable: true },
        { name: 'action', label: 'Status', field: '',  align: 'left' },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'left', sortable: true,  align: 'left'  },

      ],
      contents:[],
      payment_url: `${window.location.href}/product/`
    }
  },

  mounted() {
    this.getProduct();
  },

  computed:{
    user(){return this.$store.getters["auth/user"] },
  },

  methods: {
      async getProduct(){
        const req = await this.$axios.get(process.env.Api + '/api/product')
        const res = req.data
        this.contents = res.data;
      },

      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },

      sum_ammount(type,user_id){
      if(this.contents){
        const sort_ammounts = this.contents.filter(function(item) {

            if (item.payment_status) {
              if (item.transaction_type === 'buy' && item.user_id != user_id && type === 'received') {
                return item
              }
              if (item.transaction_type === 'buy' && item.user_id === user_id && type === 'made') {
                return item
              }
              if (item.transaction_type === 'sell' && item.user_id === user_id && type === 'received') {
                return item
              }
              if (item.transaction_type === 'sell' && item.user_id != user_id && type === 'made') {
                return item
              }
            }

          })
        let sum = sort_ammounts.reduce((accumulator, current) => Number(accumulator) + Number(current.price), 0);
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
        this.getProduct();
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
  }
}
</script>
