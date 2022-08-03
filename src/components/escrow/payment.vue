<template>
  <q-page padding>
    <q-card>
        <q-card-section>
            <!-- <div class="text-h6">Alert</div> -->
        </q-card-section>
        <q-card-section>
              <div class="text-center">
                <q-icon name="check_circle" color="primary" size="xl"/>
              </div>
              <div class="text-positive text-center">
                Payment Made successfully
              </div>
              <!-- <q-space />
              <div class="text-center">
                Product Link <a :href="url">{{url}}</a>
              </div> -->
        </q-card-section>
        <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data() {
    return {
      // payment_details: this.$route.query,
      // url: ''
    }
  },

  mounted() {
    // this.createProduct();
  },

  methods:{
    async createProduct(){
      try{
        // this.loading = true

        let form_data         = this.$q.localStorage.getItem('paylidate-product')
        const payment_type    = this.$q.localStorage.getItem('paylidate-product-payment-type')
        const product_slug    = this.$q.localStorage.getItem('paylidate-product-slug')

        form_data["payment_details"]  = this.payment_details
        form_data["payment_type"]     = payment_type
        form_data["slug"]             = product_slug

        const req = await this.$axios.post(process.env.Api + '/api/product', form_data)
        const res = req.data

        if (res.status == 'success') {
          this.url = process.env.Domain+'/escrow/product/'+res.data.slug
        }

      }catch(err){
        // this.loading = false
      }
    },
  }
}
</script>
