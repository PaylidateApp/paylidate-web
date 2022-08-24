<template>
  <div>
        <q-dialog v-model="chat" :style="chatModelStyle">
      <q-card>
        <q-card-section>
          <div class="text-h6">Dispute Chat</div>
        </q-card-section>
        <q-card-section v-if="dispute_chat_messages" style="overflow-y: scroll; height:300px;">
        

          <span v-for="dispute_chat in dispute_chat_messages" :key="dispute_chat.id">
          
            <div><strong> {{dispute_chat.sender}} </strong></div>
            <div> {{dispute_chat.message}} </div>
            <div class="row">
            <div class="justify-end"> <strong>{{formatDate(dispute_chat.created_at)}} </strong> </div>
            </div>
             <q-separator />
             <br/>
          </span>
            
            

        </q-card-section>
        <q-card-section v-else>
        
          <div>No message available</div>           

        </q-card-section>
        <div class="q-px-sm">
        <q-input outlined dense v-model="chatForm.message" label="message" />
        </div>
        <q-card-actions align="right">
          <q-btn flat size="md" label="Cancel" color="negative" v-close-popup />
          <q-btn v-if="chatForm.message" flat size="md" label="Send" color="green" @click="send_message(chatForm.transaction_id, chatForm.dispute_id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

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
            <q-btn  label="reply/view dispute" @click="disputeChats(props.row.transaction_id, props.row.id, props.row.dispute_chat)" class="bg-secondary" color="white" flat size="sm" no-caps />
            <span class="q-mx-sm">
            <q-btn v-if="props.row.user_id == user.id && props.row.dispute_solved == false " label="End Dispute" @click="reslove_despute(props.row.id, props.row.transaction_id, props.row.user_id)" class="bg-secondary" color="white" flat size="sm" no-caps />
            <q-btn v-else disable label="End Dispute" class="bg-secondary" color="white" flat size="sm" no-caps />
           </span>
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
      chat: false,
      dispute: null,
      title: null,
      T_id: this.$route.params.transaction_id,
      dispute_chat_messages: null,
      dispute_chats: null,
      chatForm:{
        transaction_id: null,
        dispute: null,
        message: null,

      },
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
    chatModelStyle(){ return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px"},


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
        //console.log(req.data.data);
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

      async send_message(){
       
          this.$q.loading.show({
          message: 'Hold on, Sending message',
          spinnerColor: 'secondary'
          
        })
        try{
        const req = await this.$axios.post(process.env.Api + '/api/send-dispute-chat', this.chatForm)
        const res = req.data.data
        //console.log(res.data['0']);
        //return
        //this.contents = this.contents.map((dispute)=>dispute.id == res.data['0'].id ? res.data['0'] :dispute)
        this.$q.notify({message: 'Message sent', color: 'positive', position: 'top' })
        this.dispute_chat_messages.push(res);
        this.getTransactionDispute();

        }
        catch(error){
        //console.log(error.response.data.message);
        this.$q.notify({message: 'error', color: 'red', position: 'top' })
         this.$q.loading.hide();
        }
        finally{
          this.chatForm.message = null;
            this.$q.loading.hide();
        }
      },

    disputeChats(transaction_id, dispute_id, chats){
        
        this.chat = true;
        this.chatForm.transaction_id = transaction_id;
        this.chatForm.dispute_id = dispute_id;
        this.dispute_chat_messages = chats
        //console.log(transaction_id, dispute_id);
      
      },
      

        formatDate(dateString){
          const options = { year: "numeric", month: "long", day: "numeric", hour:"numeric", minute:"numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },

  }
}
</script>