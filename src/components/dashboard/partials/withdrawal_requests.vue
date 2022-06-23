<template>
  <div>

    <q-table
      title="Withdrawal Requests"
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
          {{ props.row.transaction.transaction_ref }}
          </q-td>
          
          <q-td key="account_number" :props="props">
            {{ props.row.bank.account_number }}
          </q-td>
          <q-td key="bank" :props="props">
            <span class="">{{ props.row.bank.bank_name }}</span>
          </q-td>
          
          <q-td key="amount" :props="props">
            {{ currency(props.row.transaction.amount) }}          
          </q-td>
          
          <q-td key="narration" :props="props">
            {{ props.row.narration}}
          </q-td>
          
           <q-td key="status" :props="props">
            <q-badge v-if="props.row.status == true" color="positive">
               Comleted
            </q-badge>
            <q-badge v-else color="negetive">
               Pending
            </q-badge> 
          </q-td>

           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="auto_confirm" :props="props">
            <q-btn v-if="props.row.status == true" disable color="secondary" size="sm" no-caps label="Authomatic"/>           
            <q-btn v-else color="secondary" size="sm" no-caps label="Authomatic" @click="confirm(props.row.id)" />           
           
          </q-td>

          <q-td key="manual_confirm" :props="props">
            <q-btn color="primary" disable size="sm" no-caps label="Manual" />           
           
          </q-td>

        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import eExport from 'components/common/export'

export default {

  // name: 'PageName',
  props:[],
    mounted() {
    this.getRequest();
  },
components:{
    eExport
  },
  data() {
    return {

            columns: [
        // { name: 'src', field: 'src' },
        { name: 'transaction_ref', label: 'Transaction ref', field: 'transaction', align: 'left' , sortable: true,},
        { name: 'account_number', label: 'Account Number', field: 'account_number', align: 'left' , sortable: true, },
        { name: 'bank', label: 'Bank Name', field: 'bank_name', sortable: true,  align: 'left'  },
        { name: 'amount', label: 'Withdrwal Amount', field: 'transaction', sortable: true,  align: 'left'  },
        { name: 'narration', label: 'Narration', field: 'arration', align:'center', sortable: true },
        { name: 'status', label: 'Withdrawal Status', field: 'status', sortable: true,  align: 'center'  },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'auto_confirm', label: 'Confirm Automatically', field: '',  align: 'left', sortable: true },
        { name: 'manual_confirm', label: 'Confirm Manually', field: '',  align: 'left', sortable: true },
      ],
      contents:[],
      

    }
  },
  computed:{
    // content(){return this.contents},
    user(){return this.$store.getters["auth/user"] },

  },

  methods:{

        async getRequest(){

                try{ 
        this.$q.loading.show({
          message: 'Hold on, fetching withdrawal request',
          spinnerColor: 'secondary'
          
        })
        //console.log(this.request_withdrawal);
              
      const req = await this.$axios.get(process.env.Api + '/api/withdraw-requests')
      
      const res = req.data
      this.contents = res.data
      
         this.$q.loading.hide();
      }
      catch(error){
        //console.log(error.response.data.message);
         this.$q.loading.hide();
        this.$q.notify({message: 'Error:: withdrawal not successfull', color: 'red', position: 'top' })

        // // console.log(second);
      }
      finally{
        
        this.$q.loading.hide();
      }

    },

    async confirm(id){

      try{ 
        this.$q.loading.show({
          message: 'Hold on, Transfering money',
          spinnerColor: 'secondary'
          
        })
        
      let transfer = this.contents.find(x => x.id == id);

      if(transfer.status == true){
        this.$q.notify({message: 'Warning:: Withdrawal has been made on this transaction', type: 'warning', icon: 'error', position: 'top'})
      return
      }
      
      let transferDetails = {

        account_bank: transfer.bank.bank_code,
        account_number: transfer.bank.account_number,
        amount: transfer.transaction.amount,
        narration: transfer.narration,
        currency: 'NGN', 
        reference: transfer.transaction.transaction_ref, 
        debit_currency: transfer.debit_currency,
        id: id,
        payment_id: transfer.payment_id

      }
          
              
      const req = await this.$axios.post(process.env.Api + '/api/transfer_to_bank', transferDetails)
      //console.log(req);
      const res = req.data
        this.$q.notify({message: 'Transfer successfull', color: 'positive', position: 'top' })

         this.$q.loading.hide();
        this.getRequest()
     
      }
      catch(error){
        //console.log(error.response.data.message);
         this.$q.loading.hide();
        this.$q.notify({message: 'Error:: Transfer not successfull', color: 'red', position: 'top' })

        // // console.log(second);
      }
      finally{
        
        this.$q.loading.hide();
      }
      },

          formatDate(dateString){
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },

      

      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },
  },

}
</script>
