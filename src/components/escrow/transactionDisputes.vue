<template>
  <div>
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
          <q-td key="subject" :props="props">

          {{ props.row.subject }}
          
          </q-td>
          <q-td key="dispute" :props="props">
            {{ props.row.dispute }}
          </q-td>

          <q-td key="user_email" :props="props">
            {{ props.row.user.email }}
          </q-td>

          <q-td key="dispute_solved" :props="props">
          <q-badge v-if="props.row.dispute_solved == false"  color="negative">
              Not solved
            </q-badge>
            <q-badge v-else color="negative">
              Solved
            </q-badge>
            
          </q-td>

           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="solve_dispute" :props="props">
            <q-btn :to="{name: 'product', params: {slug: props.row.id}}" label="Confirm" class="bg-secondary" color="white" flat size="sm" no-caps />

          </q-td>

        </q-tr>
      </template>

    </q-table>

  </div>
</template>

<script>
import eExport from 'components/common/export'
//import Disput from './partials/disput.vue'
export default {
  // name: 'ComponentName',
  components:{
    eExport, 
  },
  data () {
    return {
      title: null,
      T_id: this.$route.params.transaction_id,
      columns: [
        // { name: 'src', field: 'src' },
        { name: 'subject', label: 'Dispute Subject', field: 'subject', align: 'left' , sortable: true,},
        { name: 'dispute', label: 'Dispute', field: 'dispute', align: 'left' , sortable: true, },
        { name: 'user_email', label: 'Dispute Opened by', field: 'user', sortable: true,  align: 'left'  },
        { name: 'dispute_solved', label: 'Dispute Status', field: 'dispute_solved', sortable: true,  align: 'left'  },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'solve_dispute', label: 'Confirm in dipute solved', field: '',  align: 'left', sortable: true },
      ],
      contents:[],     
    }
  },
  mounted() {
    this.getTransactionDispute();
  },
  computed:{
    user(){return this.$store.getters["auth/user"] },

  },
  methods: {
    async getTransactionDispute(){
        //console.log('contents');
         this.$q.loading.show({
          message: 'Hold on, fetching transaction disputes',
          spinnerColor: 'secondary'
          
        })
        try{
        const req = await this.$axios.get(process.env.Api + '/api/transaction-disputes/1')
        
        this.contents = req.data.data;
        this.$q.loading.hide();

        }catch(error){
        console.log(error.response.data.message);

         this.$q.loading.hide();
        }
        finally{
            this.$q.loading.hide();
        }
      },

            formatDate(dateString){
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },

  }
}
</script>