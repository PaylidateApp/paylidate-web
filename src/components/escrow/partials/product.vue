<template>
  <div id="targetPage" ref="targetPage">
    <q-btn unelevated no-caps color="secondary" label="Create Product" @click="open = true" :style="{width: '150px'}"/>
    <q-dialog v-model="open">
      <q-card class="" style="min-width: 300px">

        <q-card-section class="q-gutter-xs col-md-6 col-sm-12 col-xs-12">
          <div class="text-h6">Create Product</div> <br>
          <q-form @submit="createProduct()" class="q-gutter-md" autocomplete="off" >        
            
                <q-input accept="image/*" ref="uploader" :class="`q-mb-md overflow-hidden ${ rightInput }`" outlined stack-label label="Image" @input="addFiles" multiple type="file" bg-color="white"/>

            <q-select square outlined v-model="form.type" :options="type_option" label=" Type" />
            <q-input outlined dense v-model="form.product_number" label="Product Id" />
            <q-input outlined dense v-model="form.name" :rules="schema.name" label="Product/Service*" />
            <q-input outlined dense v-model="form.unit" :rules="schema.unit" label="Amount*" prefix="NGN" oninput="value=value.replace(/[^\d]/g,'')" />
            <q-input outlined dense v-model.number="form.quantity" :rules="schema.quantity" type="number" label="Quantity*" oninput="value=value.replace(/[^\d]/g,'')" />
            <q-input type="textarea" outlined dense v-model="form.description" label="Product Discription" />
          </q-form>
        </q-card-section>


        <q-card-actions>
          <!-- <q-btn unelevated no-caps color="primary" label="Create & Make Payment" @click="makePayment()" /> -->

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
                Product Link <a :href="url">{{url}}</a>
              </div>
        </q-card-section>
        <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import social from "components/common/social_share";
import { copyToClipboard } from 'quasar'
import router from 'src/router';
import { dDataMixin } from 'components/mixins/dataMixins'
import buySchema from '../../../validation/buy'
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
      type_option: ['Product', 'Service'],
      files: null,
      uploadedImages: [],
      schema: buySchema,
      form: {
        name: '',
        image:'',
        product_number: "",
        quantity: '',
        unit: '',
        description: '',
        type: 'Product',
        clients_email: '',
        delivery_period: ''
      },
      url: '',
    }
  },

  watch:{

  },

  methods: {
    makePayment() {

      this.$q.localStorage.set('paylidate-product', this.form)
      this.$q.localStorage.set('paylidate-product-payment-type', 'new')
      this.$q.localStorage.set('paylidate-product-slug', '')

      FlutterwaveCheckout({
        public_key: process.env.Flutterwave_public_key,
        tx_ref: 'paylidate ' + Math.floor(Math.random() * 1000000),
        amount: this.form.price,
        currency: "NGN",
        country: "NG",
        payment_options: "card,ussd",
        redirect_url: "/payment",
        customer: {
          email: 'syflex360@gmail.com',
          phone_number: '07067822618',
          name: 'Simon Moses',
        },
        customizations: {
          title: "Paylidate",
          description: "Payment for items details",
          // logo: "https://content.screencast.com/users/DanielAdegoke/folders/Default/media/f1a10ebf-f854-476f-bd5d-88e8c6cac998/Palidate%20Logo-19.png",
        },
      });
    },

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

    // async createProduct(data = false){
    //   try{
    //     this.loading = true;
    //     const req = await this.$axios.post(process.env.Api + '/api/product', this.form)
    //     const res = req.data
    //     if (res.status == 'success') {
    //       this.open = false
    //       this.alert = true
    //       this.loading = false
    //       this.url = process.env.Domain+'/escrow/product/'+res.data.slug
    //       this.clearForm();
    //       router.go();
    //     }
    //   }catch(err){
    //     this.loading = false
    //   }
    // },

    async createProduct(data = false){
      this.loading = true;
      this.$q.loading.show(buySchema.loadingInfo);
      const token = this.$q.localStorage.getItem('paylidate_token')
      console.log({ token })
      if(this.files) await this.uploadProductImage();
      
      this.$axios.defaults.headers.common["Authorization"] = token;
      try{
        console.log(process.env.Api );
        const req = await this.$axios.post(process.env.Api + '/api/product', this.form)
        const res = req.data
        console.log(req.data);
     

        if (res.status == 'success') {
          this.open = false
          this.alert = true
          this.loading = false
          // this.url = process.env.Domain+'/escrow/product/'+res.data.slug
          this.url = this.siteUrl+'/escrow/product/'+res.data.slug
          this.clearForm();
        }
        this.loading = false
        this.$q.loading.hide();
      }catch(err){
        console.log(err.dat);
        this.loading = false
        this.$q.notify({
          message: 'Product creation failed, kindly try again', 
          position:'top' , 
          color: 'orange', 
          textColor:'white'
        })
        this.$q.loading.hide();
      }finally {
        this.loading = false
        this.$q.loading.hide();
      }
    },

    clearForm(){
        this.form.name = ''
        this.form.quantity = ''
        this.form.unit = ''
        this.form.description =''
        this.form.type = 'buy'
    }

  
    // async addscript(url){
    //   let scriptTag = document.createElement("script");
    //   scriptTag.setAttribute('src', url);
    //   scriptTag.async = true
    //   document.head.appendChild(scriptTag)
    // },

    // clipboard(data){
    //   // let dJData = btoa(JSON.stringify(data))
    //   copyToClipboard(data)
    //   .then((response) => {
    //     this.$q.notify({message: 'Recieve Payment Link Copied', color: 'green'})
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // },


  },

  computed: {
    rightInput(){ return this.$q.screen.gt.sm ? "col-md-6 q-pr-xs" : "col-sm-12 q-pb-xs"},
    leftInput(){ return this.$q.screen.gt.sm ? "col-md-6 q-pl-xs" : "col-sm-12 q-pt-xs"}
  }

  // mounted() {
  //   this.addscript("https://checkout.flutterwave.com/v3.js")
  // }
}
</script>
