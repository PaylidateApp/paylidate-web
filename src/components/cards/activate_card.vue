<template>
  <div>
    <q-card>
        <q-card-section>
            <!-- <div class="text-h6">Alert</div> -->
        </q-card-section>
        <q-card-section>
              <div class="text-center">
                <q-icon name="check_circle" color="primary" size="xl"/>
              </div>
              <div class="text-positive text-center">
                payment Successful
              </div>
              <q-space />
              <div class="text-center">
                 card successful
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

    }
  },

  mounted() {
    this.activateCard();
  },

  methods:{
    async activateCard(){

        const req = await this.$axios.post(process.env.Api + '/api/card', {
          amount: this.$q.localStorage.getItem('paylidate-card-amount'),
          currency: 'NGN',
          default: 1
        })

    },
  }
}
</script>
