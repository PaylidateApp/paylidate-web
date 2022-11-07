<template>
  <div>
    <q-card flat square class="bg-primary column flex-center q-py-xl">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary">
          Start Creating Product
        </div>
        <div class="row q-gutter-sm">
          <!-- <sell />
          <buy /> -->

          <CreateProduct btnType='create'/>
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

<!-- {{ content[0] }} -->

</div>

    <q-table
      title="Products/Services"
      :data="content"
      :columns="columns"
      row-key="name"
      square
    >
      <template v-slot:top-right>
        <eExport :array="content" :columns="columns" />
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

          <q-td key="transaction_type" :props="props">
            <q-badge color="primary">
              {{ props.row.transaction_type }}
            </q-badge>
           <!--  <q-badge v-if="props.row.transaction_type === 'sell'" color="primary">
              {{ props.row.user_id === user.id ? 'sell' : 'buy' }}
            </q-badge> -->
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
           <q-td key="product_status" :props="props">
            <q-badge v-if="props.row.product_status" color="positive">
               Enabled
            </q-badge>
            <q-badge v-else color="negative">
               Disabled
            </q-badge>
          </q-td>

           <q-td key="link" :props="props">
            <q-btn label="Copy Link" @click="copy_link(props.row.slug)" flat size="sm" no-caps class="bg-grey" >
              <q-tooltip>
                    {{copyL}}
                  </q-tooltip>
            </q-btn>
          </q-td>

           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

            <q-td key="view" :props="props" class="column">
            <q-btn :to="{name: 'product', params: {slug: props.row.slug}}" label="View Product" class="bg-secondary" color="white" flat size="sm" no-caps />
            <!-- <q-btn @click="canceledDelivery(props.row.id)" color="negative" size="xs" no-caps label="Cancel Order" /> -->
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
        { name: 'price', label: 'Price per Product', field: 'price', sortable: true,  align: 'left'  },
        { name: 'transaction_type', label: 'Transaction Type', field: 'transaction_type', sortable: true,  align: 'center'  },
        // { name: 'confirmed', label: 'Confirmation', field: 'confirmed', align: 'left', sortable: true },
        // { name: 'payment_status', label: 'Payment', field: 'payment_status',align: 'left', sortable: true },
        { name: 'product_status', label: 'Product Status', field: 'product_status',  align: 'left', sortable: true },
        { name: 'link', label: 'Product link', field: '', align: 'center', sortable: true },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'view', label: 'View', field: '', align: 'center', sortable: true },

      ],
      content:[],
      payment_url: `${window.location.href}/product/`,
      url: '',
      copyLink:'Copy link',
    }
  },

  mounted() {
    if (!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login" });
    }
    this.getProduct();
  },

  computed:{
    copyL(){return this.copyLink},
    user(){return this.$store.getters["auth/user"] },
  },

  methods: {

      async getProduct(){
        try{
        this.$q.loading.show({
          message: 'Hold on, fetching product',
          spinnerColor: 'secondary'

        })
        const req = await this.$axios.get(process.env.Api + '/api/product')
        const res = req.data

        this.content = res.data;
        //console.log(res.data);
         this.$q.loading.hide();
        }
        catch(err){
          this.$q.loading.hide();
          }
          finally{
              this.$q.loading.hide();
          }
      },

      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },

       copy_link(slug){
      navigator.clipboard.writeText(window.location.origin+'/product/'+slug)
      this.copyLink = 'copied!';
       setTimeout(() => this.copyLink = 'Copy Link', 2000);

    },

      sum_ammount(type,user_id){
      if(this.content){
        const sort_ammounts = this.content.filter(function(item) {

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
