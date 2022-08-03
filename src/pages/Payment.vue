<template>
  <q-page padding>
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
        <q-btn flat label="OK" color="primary" @click="goBack()" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data() {
    return {
      form:{
        status: this.$route.query.status,
        transaction_id: this.$route.query.transaction_id,
        tx_ref: this.$route.query.tx_ref,
        slug: this.$route.params.slug,
      },
      slug: this.$route.params.slug,
    }
  },

  mounted() {
    this.createProduct();
  },

  methods:{
    async createProduct(){
      if (this.$route.query.status == 'successful') {
        try{
        const req = await this.$axios.get(`${process.env.Api}/api/product/paid/${this.slug}`)
          // const req = await this.$axios.get(process.env.Api + '/api/payment', this.form)
          const res = req.data
        }catch(err){

        }
      }
    },

    goBack(){
      this.$router.push({ name: "escrow"})
    }
  }
}
</script>
