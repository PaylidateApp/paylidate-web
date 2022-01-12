<template>
  <div>

    <q-btn size="sm" color="primary" :label="status === 'delivered' ? 'Product Delivered' : 'Product Received'" @click="open = true" />

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
      <q-btn size="sm" color="primary" :label="status === 'delivered' ? 'Product Delivered' : 'Product Received'" @click="updateProduct(product.id,status)" :loading="loading" />
      <q-btn flat size="sm" label="Cancel" color="negative" v-close-popup />
    </q-card-actions>
    </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: ['data','status'],
  data() {
    return {
      open: false,
      loading: false,
      product: this.data ? this.data : null
    }
  },

  methods: {
    async updateProduct(id,status){
      try{
        this.loading = true
        const req = await this.$axios.get(process.env.Api + `/api/product/status/${id}?status=${status}`)
        const res = req.data
        this.product = res.data
        this.loading = false
      }catch(err){
        this.loading = false
      }
    },
    formatAsNaira(number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(number)
    },
  },
}
</script>

<style>

</style>
