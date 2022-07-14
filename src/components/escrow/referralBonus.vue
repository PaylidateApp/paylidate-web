<template>
  <div>
    <q-dialog v-model="withdraw">
      <q-card>
        <q-card-section>
          <div class="text-h6">Request for bonus withdrawal</div>
        </q-card-section>
        <span v-if="bank">
          <q-card-section>
            <div class="text-bold text-red">
              Ensure that your bank account details are correct before you request for withdrawal. You can change your
              bank account details from the settings tab
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-bold">
              Your money will be sent into your account within 2 hours once your request is successfull
            </div>
          </q-card-section>

          <q-card-section v-if="bank">


            <div>Acount Number: {{bank.account_number}}</div>

            <div>Account Name: {{bank.account_name}}</div>

            <div>Bank: {{bank.bank_name}}</div>
            <div>Amount to Withdraw: {{ currency(sum_ammount('withdraw')) }}</div>

          </q-card-section>
        </span>
        <span v-else>
          <q-card-section>
            <div class="text-bold text-red">
              You can not request for withdrwal while you are yet to add your account details. You can add your bank
              account details from the settings tab
            </div>
          </q-card-section>

        </span>
        <q-card-actions align="right">
          <q-btn v-if="bank != ''" flat size="md" label="Request Withdrawal"
            @click="withdrawBonus(sum_ammount('withdraw'))" color="positive" />
          <q-btn flat size="md" label="Cancel" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <q-card flat square class="bg-primary column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-secondary">
          REFERRAL BONUS
        </div>
        <div class="row q-gutter-sm">
          <q-btn align="right" :loading="loading" unelevated no-caps color="secondary" label="Withdraw Bonus"
            @click="withdraw = true" />
        </div>
      </q-card-section>
    </q-card>
    <q-card flat square class="bg-primary">
      <q-card-section class="row flex-center no-padding q-gutter-sm">
        <div class="text-secondary text-center text-uppercase">
          <div class="text-h6 text-bold">{{currency(sum_ammount())}}</div>
          <div style="font-size: 10px">TOTAL BONUS EARNED</div>
        </div>
        <q-separator spaced vertical dark />
        <div class="text-secondary text-center text-uppercase">
          <div class="text-h6 text-bold">{{ currency(sum_ammount('withdrawn'))}}</div>
          <div style="font-size: 10px">BONUS WITHDRAWN </div>
        </div>
        <q-separator spaced vertical dark />
        <div class="text-secondary text-center text-uppercase">
          <div class="text-h6 text-bold">{{ currency(sum_ammount('withdraw'))}}</div>
          <div style="font-size: 10px">BONUS DUE FOR WITHDRAWAL </div>
        </div>
      </q-card-section>
    </q-card>


    <q-table title="Referral Commission" :data="contents" :columns="columns" row-key="name" square>
      <template v-slot:top-right>
        <eExport :array="contents" :columns="columns" />
        <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">

          <q-td key="transaction_ref" :props="props">
            {{ props.row.transaction.transaction_ref }}
          </q-td>
          <q-td key="amount" :props="props">
            {{ props.row.amount }}
          </q-td>
          <q-td key="withdrawal_status" :props="props">
            <q-badge v-if="props.row.withdrawal_status " color="positive">
              Completed
            </q-badge>
            <q-badge v-else color="primary">
              Pending
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
export default {
  // name: 'ComponentName',
  components:{
    eExport
  },
  data () {
    return {
      loading: false,
      withdraw: false,
      bank: '',
      columns: [
       
        { name: 'transaction_ref', label: 'Transaction ref', field: 'transaction', align: 'left' , sortable: true,},
        { name: 'amount', label: 'Amount', field: 'amount', align: 'left' , sortable: true, },
        { name: 'withdrawal_status', label: 'Withdrawal Status', field: 'withdrawal_status', sortable: true,  align: 'left'  },
        { name: 'created_at', label: 'Date Created', field: 'created_at', align: 'center', sortable: true, },
      ],
      contents:[],
      
    }
  },
  mounted() {
    this.getRefrralBonus();
  },
  computed:{
    user(){return this.$store.getters["auth/user"] },

  },
  methods: {
    async getRefrralBonus(){
         this.$q.loading.show({
          message: 'Hold on, fetching referral commissions',
          spinnerColor: 'secondary'
          
        })
        try{
          const req = await this.$axios.get(process.env.Api + '/api/referral-bonus')
          
          const res = req.data;
          
          this.bank = res.data['1'];
          this.contents = res.data['0'];
        
         this.$q.loading.hide();
        } catch (error){
          //console.log(error.response.data.message);
        }
        finally{
            this.$q.loading.hide();
        }
      },

    async withdrawBonus(bonus) {

      if (bonus < 3000) {
        this.$q.notify({ message: 'Your referral bonus must be at least NGN 3,000', color: 'red', position: 'top' })
        return
      }

      try {
        this.$q.loading.show({
          message: 'Hold on, sending withdrawal request',
          spinnerColor: 'secondary'

        })
        //this.withdraw = false

        const req = await this.$axios.post(process.env.Api + '/api/request-referral-bonus-withdrawal', { debit_currency: 'NGN', amount: bonus })

        const res = req.data
        //console.log(res);

        this.getRefrralBonus();
        this.$q.loading.hide();
        this.withdraw = false
        this.$q.notify({ message: 'Withdrawal request has been sent successfully', color: 'green', position: 'top' })
      }
      catch (error) {
        console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({ message: 'Error:: withdrawal request error', color: 'red', position: 'top' })

        // // console.log(second);
      }
      finally {

        this.$q.loading.hide();
      }
    },
      currency(amount){
        return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
      },
      sum_ammount(type = null){
      if(this.contents){
        const sort_amounts = this.contents.filter(function(item) {
            
            if (item.amount > 0) {
              if (type == null) {
                
                return item
              }
              if (item.withdrawal_status == true && type == 'withdrawn') {
                return item
              }

              if (item.withdrawal_status == false && type == 'withdraw') {
                return item
              }
              
            }
          })
        let sum = sort_amounts.reduce((accumulator, current) => Number(accumulator) + Number(current.amount), 0);
        return sum;
      }else{
        return 0;
      }
    },
      formatDate(dateString){
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)
      },


  }
}
</script>