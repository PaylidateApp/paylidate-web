<template>
  <div>
    <q-item clickable @click="alert = true">
      <q-item-section>Delete Product</q-item-section>
    </q-item>
    <q-dialog v-model="alert">
      <q-card style="min-width:300px">
        <q-card-section>
          <div class="text-h6">Confirm</div>
          </q-card-section>
          <q-card-section>
            <!-- {{content}} -->
          Are you sure you want to Delete this Product ?
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="cancel" color="green-3" text-color="green" v-close-popup />
            <q-btn flat label="Continue" color="red-3" text-color="red" @click="deleteProduct()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['content'],
  data () {
    return {
      alert: false,
      loadingInfo:{
        message: 'Deleting Product',
        spinnerColor: 'secondary'
      }
    }
  },
  methods: {
    async deleteProduct(content){
      this.$q.loading.show(this.loadingInfo)
      await this.$axios.delete(`api/product/${content}`)
      .then(response => {
        this.$store.dispatch('auth/product')
        this.$q.loading.hide()
        this.$q.notify({ message: 'Product Deleted', color: 'orange', position: 'top', type: 'success' })
        
      })
    }
  },
}
</script>
