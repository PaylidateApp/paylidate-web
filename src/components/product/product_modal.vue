<template>
  <div>
     <q-btn color="secondary" text-color="primary" no-caps label="Create a Product" @click="confirm = true" />
    <q-dialog v-model="confirm">
      <q-card class="my-card">
        <q-card-section class="text-bold q-pb-none text-h5">
          CREATE A PRODUCT
        </q-card-section>
        <q-card-section>
          <q-input accept="image/*" ref="uploader" class="" outlined stack-label label="Upload a picture" @input="addFiles" multiple type="file"/>
          <q-input v-model="form.name" type="text" label="Product Name" />
          <q-input v-model="form.product_number" type="text" label="Product Model/Number" />
          <div class="row">
            <div class="q-pa-xs col-6">
              <q-input v-model="form.price" type="text" label="Unit Price" />
            </div>
            <div class="q-pa-xs col-6">
              <q-input v-model="form.quantity" type="text" label="Quantity in Stock" />
            </div>
          </div>
          <q-input v-model="form.description" type="text" label="Product Description" />
        </q-card-section>
        <q-card-actions vertical align="center">
          <q-btn unelevated no-caps color="primary" label="Create Product" @click="createProduct" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { authRuleMixin } from '../mixins/index';
export default {
  // name: 'ComponentName',
  mixins:[authRuleMixin],
  data () {
    return {
      confirm:false,
      form:{
        name:'',
        product_number: '',
        price: '',
        quantity: '',
        description: '',
      },
      files: null,
      uploadedImages: [],
      loadingInfo:{
        message: 'Creating your Product',
        spinnerColor: 'secondary'
      }
    }
  },
  methods: {
    addFiles(files) {
      const maxAllowedSize = 2 * 1024 * 1024;

      for (let index = 0; index < files.length; index++) {
        if (files[index].size > maxAllowedSize) {
          this.$refs.uploader.$refs.input.value = ''
          Notify.error('Maximum file size is 2MB')
          return
        }
      }
      this.files = files
    },

    async uplaodImage(){
      const formData = new FormData();
      for (let i = 0; i < files.length; i++){
        let file = files[i];
        formData.append("file", file);
        this.$axios.post(`https://api.cloudinary.com/v1_1/${process.env.Cloud_name}/image/upload`, form, { headers: { 'Content-Type': 'multipart/form-data' } })
      }
    },
    
    async createProduct(){
      this.$q.loading.show(this.loadingInfo)
      await this.$axios.post(process.env.Api + '/api/product', this.form)
      .then(() => {
        this.$store.dispatch('auth/product')
        this.$q.loading.hide()
        this.confirm = false
        this.$q.notify({ message: 'Product Created', color: 'orange', position: 'top', type: 'success' })
      })
      .catch(error=>{
        this.loading = false
        this.$q.loading.hide()
        this.errorHandling(error)

      })
    }
  },
  mounted(){
    this.$q.loading.show({
      message: 'Getting All your Products',
      spinnerColor: 'secondary'
    })
    this.$store.dispatch('auth/product')
    this.$q.loading.hide()
    // console.log(this.$router)
  },
}
</script>
