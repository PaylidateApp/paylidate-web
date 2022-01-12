<template>
  <div>
    <q-card>
        <q-card-section>
            <!-- <div class="text-h6">Alert</div> -->
        </q-card-section>
         <q-card-section v-if="this.$route.query.status == 'successful'">
              <div class="text-center">
                <q-icon name="check_circle" color="primary" size="xl"/>
              </div>
              <div class="text-positive text-center">
                Payment Successful
              </div>
        </q-card-section>
        <q-card-section v-else>
              <div class="text-center">
                <q-icon name="error" color="negative" size="xl"/>
              </div>
              <div class="text-negative text-center">
                Un-Successful Payment
              </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="back" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
  </div>
</template>

<script>

export default {
  // name: 'PageName',
  data() {
    return {
        form: {
          status: this.$route.query.status,
          transaction_id: this.$route.query.transaction_id,
          tx_ref: this.$route.query.tx_ref,
          card_id: this.$route.params.card_id,
          amount: 0,
        },
    }
  },

  mounted() {
    this.fund_card();
    this.form.amount = this.$q.localStorage.getItem('card_amount')
  },

  methods:{
    async fund_card(){
      try{

        const req = await this.$axios.post(process.env.Api + '/api/fund', this.form);
        console.log(req);
      }catch(e){
        console.log(e);
      }
    },
  }
}
</script>
