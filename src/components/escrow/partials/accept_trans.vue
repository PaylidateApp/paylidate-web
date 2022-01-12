<template>
  <div>

    <q-btn size="sm" color="primary" label="Accept Transaction" @click="open = true" />

    <q-dialog v-model="open">
    <q-card>
    <q-card-section>
      <div class="text-h6">Review Transaction Details</div>
    </q-card-section>
    <q-card-section>
        <div class="text-bold">Product Name: {{product.name}}</div>
        <div class="text-bold">Quantity: {{product.quantity}}</div>
        <div class="text-bold">Price: {{formatAsNaira(product.price)}}</div>
        <div class="text-bold">Description: {{product.description}}</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn size="sm" color="primary" label="Accept Transaction" @click="acceptTransaction(product.id)" :loading="loading" />
      <q-btn flat size="sm" label="Cancel" color="negative" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: ['data', 'slug'],
  data() {
    return {
      open: false,
      loading: false,
      product: this.data ? this.data : null
    }
  },

  methods: {
    async acceptTransaction(id){
      try{
        this.loading = true
        const req = await this.$axios.get(process.env.Api + '/api/product/accept/'+ id)
        const res = req.data
        this.product = res.data
        this.loading = false
        this.open = false
        this.getProduct()
      }catch(err){
        this.loading = false
      }
    },
    async getProduct(){
      const req = await this.$axios.get(process.env.Api + '/api/product/'+ this.slug)
      const res = req.data
      this.product = res.data
    },
    
    formatAsNaira(number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(number)
    },
  },
}
</script>

<style>

</style>
