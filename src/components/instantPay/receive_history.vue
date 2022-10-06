<template>
  <div class="">
    <q-card flat square class="bg-primary column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary text-center">
          Instant Pay Receive History
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
            
            <q-td key="amount" :props="props">
              {{currency(props.row.amount) }}
            </q-td>
            <q-td key="sender_name" :props="props">
              {{ props.row.sender_name}}
            </q-td>
            <q-td key="bank_name" :props="props">
              <span v-if="props.row.status == true">                
                {{ props.row.bank_name}}
              </span>
              <span v-else>                
                Empty
              </span>
            </q-td>
            <q-td key="account_name" :props="props">
              <span v-if="props.row.status == true">                
                {{ props.row.account_number}}
              </span>
              <span v-else>                
                Empty
              </span>
            </q-td>
            <q-td key="account_number" :props="props">
              <span v-if="props.row.status == true">                
                {{ props.row.account_number}}
              </span>
              <span v-else>                
                Empty
              </span>
            </q-td>
            <q-td key="withdrawal_pin" :props="props">
              {{ props.row.withdrawal_pin}}
            </q-td>
            <q-td key="link" :props="props">
              <span>                
                https://www.paylidate.com/recieve-instant-funds/{{props.row.link_token}}
              </span>
              
            </q-td>
            <q-td key="status" :props="props">
              <span v-if="props.row.status == false">
                Withdrawal Pendding
              </span>
              <span v-if="props.row.status == true">
                Withdrawal Complete
              </span>
              
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
        // { name: 'src', field: 'src' },
        { name: 'tracking_id', label: 'Tracking_id', field: 'tracking_id', align: 'left' , sortable: true,},
        { name: 'payment_ref', label: 'payment_ref', field: 'payment_ref', align: 'left' , sortable: true, },
        { name: 'amount', label: 'Amount', field: 'amount', sortable: true,  align: 'center'  },
        { name: 'sender_name', label: 'Sender Name', field: 'sender_name', sortable: true,  align: 'center'  },
        { name: 'bank_name', label: 'Bank Name', field: 'bank_name', align: 'center', sortable: true },
        { name: 'account_name', label: 'Account Name', field: 'account_name', align: 'center', sortable: true },
        { name: 'account_number', label: 'Account Number', field: 'account_number', align: 'center', sortable: true },
        { name: 'withdrawal_pin', label: 'withdrawal Pin', field: 'withdrawal_pin', align: 'center', sortable: true },
        { name: 'link', label: 'Withdrawal Link', field: 'link_token', align: 'center', sortable: false },
        { name: 'status', label: 'Status', field: 'transaction',  align: 'center', sortable: true },
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
        const req = await this.$axios.get(process.env.Api + '/api/instant-pay/history-receive')
        const res = req.data
          
        this.contents = res.data;
        //console.log(res)
        
         //this.$q.loading.hide();
        }catch(error){
         //console.log(error.response.data.message);
         this.$q.loading.hide();
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