<template>
  <div>
      <q-dialog v-model="disputeModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Dispute Detail</div>
        </q-card-section>
        <q-card-section>

            <div> {{dispute}} </div>

        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat size="md" label="Cancel" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-table
      title="Disputes"
      :data="getContents"
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

            <q-btn label="View" @click="viewDispute( props.row.dispute)"  class="bg-secondary" color="white" flat size="sm" no-caps />

          </q-td>

          <q-td key="user_email" :props="props">
            {{ props.row.user.email }}
          </q-td>

          <q-td key="dispute_solved" :props="props">
          <q-badge v-if="props.row.dispute_solved == false"  color="negative">
              Unresolved
            </q-badge>
            <q-badge v-else color="positive">
              Resolved
            </q-badge>
            
          </q-td>

           <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="solve_dispute" :props="props">
            <q-btn v-if="props.row.user_id == user.id && props.row.dispute_solved == false " label="End Dispute" @click="reslove_despute(props.row.id, props.row.transaction_id, props.row.user_id)" class="bg-secondary" color="white" flat size="sm" no-caps />
            <q-btn v-else disable label="End Dispute" class="bg-secondary" color="white" flat size="sm" no-caps />

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
      disputeModal: false,
      dispute: null,
      title: null,
      T_id: this.$route.params.transaction_id,
      columns: [
        // { name: 'src', field: 'src' },
        { name: 'subject', label: 'Dispute Subject', field: 'subject', align: 'left' , sortable: true,},
        { name: 'dispute', label: 'Dispute', field: 'dispute', align: 'left' , sortable: true, },
        { name: 'user_email', label: 'Dispute Opened by', field: 'user', sortable: true,  align: 'left'  },
        { name: 'dispute_solved', label: 'Dispute Status', field: 'dispute_solved', sortable: true,  align: 'left'  },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
        { name: 'solve_dispute', label: '', field: '',  align: 'left', sortable: true },
      ],
      contents:[],     
    }
  },
  mounted() {
    this.getTransactionDispute();
  },
  computed:{
    user(){return this.$store.getters["auth/user"] },
    getContents(){return this.contents },

  },
  methods: {
    async getTransactionDispute(){
        //console.log('contents');
         this.$q.loading.show({
          message: 'Hold on, fetching transaction disputes',
          spinnerColor: 'secondary'
          
        })
        try{
        const req = await this.$axios.get(process.env.Api + '/api/transaction-disputes/'+ this.T_id)
       
        this.contents = req.data.data;
        this.$q.loading.hide();

        }catch(error){
        //console.log(error.response.data.message);

         this.$q.loading.hide();
        }
        finally{
            this.$q.loading.hide();
        }
      },

      viewDispute(dispute){

        this.dispute = dispute
        this.disputeModal = true

      },

      async reslove_despute(id, transaction_id, user_id){
        
          this.$q.loading.show({
          message: 'Hold on, Resolving disputes',
          spinnerColor: 'secondary'
          
        })
        try{
        const req = await this.$axios.post(process.env.Api + '/api/resolve-dispute', {id, transaction_id, user_id})
        const res = req.data
        //console.log(res.data['0']);
        //return
        this.contents = this.contents.map((dispute)=>dispute.id == res.data['0'].id ? res.data['0'] :dispute)

        this.$q.notify({message: 'Dispute resolved', color: 'positive', position: 'top' })

        }
        catch(error){
        //console.log(error.response.data.message);
        this.$q.notify({message: 'Dispute not resolved', color: 'red', position: 'top' })
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