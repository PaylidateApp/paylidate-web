<template>
  <div>
    <q-card flat square class="bg-primary column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary">
          Instant Pay Transfer History
        </div>
        <div class="row q-gutter-sm">
         
        </div>
      </q-card-section>
    </q-card>



    <q-table title="" :data="contents" :columns="columns" row-key="name" square>
      <template v-slot:top-right>
        <eExport :array="contents" :columns="columns" />
        <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">

            <q-td key="tracking_id" :props="props">
              {{ props.row.tracking_id}}
            </q-td>
            <q-td key="payment_ref" :props="props">
              {{ props.row.payment_ref }}
            </q-td>
            <q-td key="receiver_number" :props="props">
              {{ props.row.receiver_number }}
            </q-td>
            <q-td key="amount" :props="props">
              {{currency(props.row.amount) }}
            </q-td>
            <q-td key="receiver_name" :props="props">
              {{ props.row.receiver_name}}
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

export default {
  // name: 'ComponentName',
  components:{
    eExport
  },
  data () {
    return {
      columns: [
        { name: 'tracking_id', label: 'Tracking_id', field: 'tracking_id', align: 'left' , sortable: true,},
        { name: 'payment_ref', label: 'payment_ref', field: 'payment_ref', align: 'left' , sortable: true, },
        { name: 'receiver_number', label: 'Receiver Number', field: 'receiver_number', sortable: true,  align: 'left'  },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true,  align: 'center'  },
        { name: 'receiver_name', label: 'Receiver Name', field: 'receiver_name', sortable: true,  align: 'center'  },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
      ],
      contents:[],

    }
  },
  mounted() {
    if(!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login"});
    }
    this.getInstantPay();
  },
  computed:{
     
    user(){return this.$store.getters["auth/user"] },

  },
  methods: {
    async getInstantPay(){
        //console.log('contents');
         this.$q.loading.show({
          message: 'Hold on, fetching records',
          spinnerColor: 'secondary'
          
        })
        try{
        const req = await this.$axios.get(process.env.Api + '/api/instant-pay/history-send')
        const res = req.data
        //console.log(res);
          
        this.contents = res.data;
        
         this.$q.loading.hide();
        }catch(error){
         this.$q.loading.hide();
         //console.log(error.response.data.message);
        }
        finally{
            this.$q.loading.hide();
        }
      },

      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },

      formatDate(dateString){
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },


  }
}
</script>