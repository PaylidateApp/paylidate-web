<template>
  <div id="targetPage" ref="targetPage">
    <q-btn unelevated no-caps color="secondary" label="Sell" @click="open = true" :style="{width: '120px'}"/>
    <q-dialog v-model="open">
      <q-card class="" style="min-width: 300px">


        <q-card-section class="q-gutter-xs col-md-6 col-sm-12 col-xs-12">
          <div class="text-h6">You are Selling ?</div>
          <q-form @submit="createProduct()" class="q-gutter-md" autocomplete="off" >
            {{ files }}
            <q-input accept="image/*" ref="uploader" :class="`q-mb-md overflow-hidden`" outlined stack-label label="Image" @input="addFiles" multiple type="file" bg-color="white"/>
            <q-input outlined dense v-model="form.name" label="Product/Service" />
            <q-input outlined dense v-model="form.unit" label="Amount" prefix="NGN" oninput="value=value.replace(/[^\d]/g,'')" />
            <q-input outlined dense v-model="form.quantity" type="number" label="Quantity" oninput="value=value.replace(/[^\d]/g,'')" />
            <q-input outlined dense disable v-model="form.price" label="Total" prefix="NGN" readonly />
            <q-input type="textarea" outlined dense v-model="form.description" label="Product Discription" />

            <div class="text-h6">Client Connect ?</div>
            <q-input outlined dense v-model="form.clients_email" label="Clients Emails" />
            <q-input outlined dense v-model="form.delivery_period" type="number" label="Estimated Delivery Period (In Days)" />
          </q-form>
          
          

        </q-card-section>


        <q-card-actions>
          <q-btn align="right" :loading="loading" unelevated no-caps color="secondary" label="Create Product" @click="createProduct()" />
        </q-card-actions>

      </q-card>

    </q-dialog>


    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
            <!-- <div class="text-h6">Alert</div> -->
        </q-card-section>
        <q-card-section>
              <div class="text-center">
                <q-icon name="check_circle" color="primary" size="xl"/>
              </div>
              <div class="text-positive text-center">
                Product created successfully
              </div>
              <q-space />
              <div class="text-center">
                Product Link <a target="__blank" :href="url">{{url}}</a>
              </div>
        </q-card-section>
        <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" @click="$router.push('home')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import social from "components/common/social_share";
import { copyToClipboard } from 'quasar'
import { dDataMixin } from 'components/mixins/dataMixins'
export default {
  // name: 'ComponentName',
  components: {
    social
  },
  mixins:[dDataMixin],
  data () {
    return {
      open: false,
      alert: false,
      loading: false,
      files: null,
      uploadedImages: [],
      form: {
        name: '',
        quantity: '',
        unit: '',
        price: '',
        description: '',
        type: 'sell',
        clients_email: '',
        delivery_period: ''
      },
      url: '',
    }
  },

  watch:{
    'form.quantity':function(new_qty) {
      this.form.price = Number(new_qty) * Number(this.form.unit);
    },
    'form.unit':function(new_unit) {
      this.form.price = Number(new_unit) * Number(this.form.quantity);
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
    
    uploadProductImage() {
      delete this.$axios.defaults.headers.common["Authorization"];

      return new Promise(async (resolve, reject) => {
        for (let i = 0; i < this.files.length; i++) {
          const form = new FormData();
          let image = this.files[i];

          form.append("file", image);
          form.append("upload_preset", "paylidate_images");
          const dImage = await this.$axios.post( "https://api.cloudinary.com/v1_1/godfadatun/image/upload", form,
              { headers: { "Content-Type": "multipart/form-data" } }
            );
          console.log({dImage: dImage.data.secure_url});
            try {
              const { data } = dImage;
              this.uploadedImages.push(data.secure_url);
              this.form.image = this.uploadedImages[0];
              if ( i === this.files.length - 1 && this.uploadedImages.length === this.files.length ) resolve(data);
            } catch (error) {
              this.loading = false
              this.$q.loading.hide();
              this.$q.notify({
                message: 'Image Upload failed, kindly try again', 
                position:'top' , 
                color: 'orange', 
                textColor:'white'
              })
              reject(error); 
            } 
        }
      });
    },

    async createProduct(data = false){
      this.loading = true
      this.$q.loading.show(buySchema.loadingInfo);
      const token = this.$q.localStorage.getItem('paylidate_token')
      console.log({ token })
      if(this.files) await this.uploadProductImage();
      
      this.$axios.defaults.headers.common["Authorization"] = token;
      try{        
        const req = await this.$axios.post(process.env.Api + '/api/product', this.form)
        const res = req.data
        if (res.status == 'success') {
          this.open = false
          this.alert = true
          this.loading = false
          this.url = this.siteUrl+'/escrow/product/'+res.data.slug
          // this.url = process.env.Api+'/escrow/product/'+res.data.slug
          this.clearForm();
        }
      }catch(err){
        this.loading = false
      }
    },

    clearForm(){
        this.form.name = ''
        this.form.quantity = ''
        this.form.unit = ''
        this.form.price = ''
        this.form.description =''
        this.form.type = 'buy'
    }
  },
}
</script>
