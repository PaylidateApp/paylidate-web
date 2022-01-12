<template>
  <div >
    <q-btn no-caps unelevated color="secondary" label="Refer a Friend" class="q-px-sm" @click="alert = true"/>
    <!-- <q-btn unelevated dense stack no-caps :color="$q.screen.gt.sm?'primary':'black'" :text-color="$q.screen.gt.sm?'white':'primary'" class="passbtn q-px-md q-py-xs" label="Win ₦2000 Voucher" @click="alert = true" /> -->
    <q-dialog v-model="alert" position="top" >
      <!-- <q-form @submit="voucher"> -->

      <q-card flat class="">
        <q-card-section class="q-py-none text-center text-primary ">
          <div class="text-weight-bolder text-h6 q-pt-xs gt-sm">Tag the social media vendor you Love</div>
          <div class="text-weight-bolder text-bold lt-md">Tag the social media vendor you Love</div>
          <div :class="$q.screen.gt.sm?'text-caption text-bold ':'text-caption '">Please provide genuine info</div>
          <q-separator />
        </q-card-section >
          <q-card class="row q-pt-none flex-center">
            <q-card-section class="column flex-center q-gutter-sm col-md-6 col-sm-12 col-xs-12 q-py-none">
              <div class="text-overline">Fill your social information</div>
              <q-input square outlined dense v-model="my.whatsapp" label="Whatsapp" >
                <template v-slot:prepend>
                  <div class="row flex-center">
                    <q-icon name="ion-logo-whatsapp" />
                    <div class="q-px-sm">|</div>
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="my.instagram" label="Instagram" >
                <template v-slot:prepend>
                  <div class="row flex-center">
                    <q-icon name="ion-logo-instagram" />
                    <div class="q-px-sm">|</div>
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="my.facebook" label="Facebook" >
                <template v-slot:prepend>
                  <div class="row flex-center">
                    <q-icon name="ion-logo-facebook" />
                    <div class="q-px-sm">|</div>
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="my.twitter" label="Twitter" >
                <template v-slot:prepend>
                  <div class="row flex-center">
                    <q-icon name="ion-logo-twitter" />
                    <div class="q-px-sm">|</div>
                  </div>
                </template>
              </q-input>

            </q-card-section>
            <q-card-section class="column flex-center q-gutter-sm col-md-6 col-sm-12 col-xs-12 q-py-none">
              <div class="text-overline">Seller's information</div>
              <q-input square outlined dense v-model="your.whatsapp" label="Whatsapp" >
                <template v-slot:append>
                  <div class="row flex-center">
                    <div class="q-px-sm">|</div>
                    <q-icon name="ion-logo-whatsapp" />
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="your.instagram" label="Instagram" >
                <template v-slot:append>
                  <div class="row flex-center">
                    <div class="q-px-sm">|</div>
                    <q-icon name="ion-logo-instagram" />
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="your.facebook" label="Facebook" >
                <template v-slot:append>
                  <div class="row flex-center">
                    <div class="q-px-sm">|</div>
                    <q-icon name="ion-logo-facebook" />
                  </div>
                </template>
              </q-input>
              <q-input square outlined dense v-model="your.twitter" label="Twitter" >
                <template v-slot:append>
                  <div class="row flex-center">
                    <div class="q-px-sm">|</div>
                    <q-icon name="ion-logo-twitter" />
                  </div>
                </template>
              </q-input>

            </q-card-section>
          </q-card>

          <q-card-actions vertical align="center">
            <q-btn unelevated :loading="loading" size="sm" no-caps color="secondary" text-color="white" class="q-px-md q-py-xs" label="Submit" @click="voucher()" />
            <div class="row flex-center q-py-xs">
              <div class="text-caption text-grey" style="font-size: 10px">Secured by</div>
              <img src="../../statics/paylidate-logo.png" style="max-width: 80px">
            </div>
          </q-card-actions>
        </q-card>
      <!-- </q-form> -->
    </q-dialog>



  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['userId'],
  data () {
    return {
      error:false,
      alert:false,
      loading:false,
      my:{
        whatsapp: '',
        instagram: '',
        facebook: '',
        twitter: '',
      },
      your:{
        whatsapp: '',
        instagram: '',
        facebook: '',
        twitter: '',
      }
    }
  },
  methods: {

    async voucher(){
      this.loading = true
      if (this.your.whatsapp != '' && this.my.whatsapp != '') {
        let dForm = {
          id:this.$props.userId,
          sellerWhatsApp:this.your.whatsapp,
          sellerIG:this.your.instagram,
          sellerFacebook:this.your.facebook,
          sellerTwitter:this.your.twitter,
          userWhatsApp:this.my.whatsapp,
          userIG:this.my.instagram,
          userFacebook:this.my.facebook,
          userTwitter:this.my.twitter
        }
        try {
          let response = await this.$axios.post('https://pass-checkout.herokuapp.com/voucher/refer', dForm)
          const req = response.data
          this.$q.notify({message: 'Social Info Added', color: 'green'})
          this.loading = false
          this.alert = false
          this.clear()
          console.log('req',req)
        } catch (error) {
          this.loading = false
          this.errorHandling(error)
          this.alert = false
          this.clear()
        }
      } else {
        this.$q.notify({message: "You can't submit an empty social info", color: 'orange'})
        this.loading = false
      }

    },

    clear(){
      this.my = {
          whatsapp: '',
          instagram: '',
          facebook: '',
          twitter: '',
        },
        this.your = {
          whatsapp: '',
          instagram: '',
          facebook: '',
          twitter: '',
        }
    },

    errorHandling(error){
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        this.$q.notify({message: error.response, color: 'orange'})
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        this.$q.notify({message: error.request, color: 'orange'})
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        this.$q.notify({message: error.message, color: 'orange'})
      }
    },

  },

}
</script>
