<template>
  <div>
    <!-- {{this.$store.getters["Auth/user"]}} -->
    <q-card flat bordered :style="$q.screen.gt.sm ? 'min-width: 400px; min-height:350px' : 'min-width: 300px'" >
      <q-card-section class="text-primary">
        <div v-if="error" class="text-caption text-red">Sorry, You are Below 18</div>
        <div class="text-h5 text-center">User Details</div>
      </q-card-section>
      <!-- {{user}} -->

      <q-card-section class="q-gutter-sm">
        <q-input outlined dense v-model="form.name" label="Your Full Name"  />
        <!-- <q-select outlined dense v-model="form.gender" :options="gender" label="Select Gender" /> -->
        <!-- <q-select outlined dense v-model="form.location" :options="thestate" label="Select state" /> -->
        <!-- <q-input outlined dense v-model="form.date_of_birth" label="Date of Birth" mask="2019/02/01" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="form.date_of_birth" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input> -->
        <q-input outlined dense v-model="form.phone" label="Enter Phone Number" maxlength="11" inputmode="numeric" pattern="[0-9]*" oninput="value=value.replace(/[^\d]/g,'')"/>
        <q-input outlined dense v-model="form.email" label="Enter E-mail" inputmode="email" :rules="[
                val => !!val || '* Required',
                val => !!validEmail(val) || 'Enter a valid email',
              ]" />
      </q-card-section>

      <q-card-actions align="center" class="q-pt-none">
        <q-btn :loading="loading" color="primary" class="q-px-lg" no-caps label="Submit" @click="updateAccount()" />
      </q-card-actions>
    </q-card>

    <div v-if="theroute != 'settings'" class="row flex-center q-py-md">
      <div class="text-caption text-grey">Powered by</div>
      <img src="../../statics/paylidate-logo.png" style="max-width: 100px">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { authRuleMixin, requestMixin } from '../mixins/index';

export default {
  // name: 'ComponentName',
  mixins:[authRuleMixin, requestMixin],
  data () {
    return {
      loading: false,
      gender:[
        'Male',
        'Female'
      ],
      error: false,
      mystate:'',
      mycity:'',
      thecities:[],
      form:{
        name:'',
        gender:'',
        date_of_birth:'2019/02/01',
        location:'',
        phone:'',
        email:''
      },
      loadingInfo:{
        message: 'Updating your Account Profile',
        spinnerColor: 'secondary'
      }
    }
  },
  methods: {
  //   async acctUpdate(){
  //     this.loading = true
  //     this.error = false
  //     this.$axios.post('https://branchless.world/branposdev01/user/updateUser', this.form)
  //     .then(response => {
  //       console.log('response: ', response.data)
  //       this.loading = false
  //       this.$q.notify({message: 'Account Opening Completed', color: 'green'})
  //       this.$router.push({name: 'initAccount'})
  //     })
  //     .catch(error=>{
  //       this.errorHandling(error)
  //     })
  //   },

  //   errorHandling(error){
  //     if (error.response) {
  //       this.loading = false
  //       this.$q.notify({message: error.response, color: 'orange'})
  //     } else if (error.request) {
  //       console.log(error.request);
  //       this.loading = false
  //       this.$q.notify({message: error.request, color: 'orange'})
  //     } else {
  //       console.log('Error', error.message);
  //       this.loading = false
  //       this.$q.notify({message: error.message, color: 'orange'})
  //     }
  //   },

  //   eligibilityFnc(){
  //     let thedate = this.form.date_of_birth.split("/");
  //     console.log('thedate', thedate);
  //     var today = new Date();
  //     if (today.getFullYear() > thedate[0]) {
  //       let yeardiff = today.getFullYear() - thedate[0]
  //       console.log('yeardiff', yeardiff)
  //       if(yeardiff > 19){
  //         this.acctUpdate()
  //       }
  //       else if(yeardiff == 18){
  //         if(today.getMonth()+1 > thedate[1]){
  //           this.acctUpdate()
  //         }
  //         else if(today.getMonth()+1 == thedate[1]){
  //           if(today.getDate() >= thedate[2]){
  //             this.acctUpdate()
  //           }else{
  //             this.error = true
  //           }
  //         }else{
  //           this.error = true
  //         }
  //       }
  //       else{
  //         this.error = true
  //       }
  //     }else{
  //       this.error = true
  //     }
  //   }
  async updateAccount(){
    this.error = false
    this.loading = true
    this.$q.loading.show(this.loadingInfo)
    // this.postRequest('api/user/update', this.form)
    await this.$axios.post(process.env.Api + 'api/user/update', this.form)
    .then(()=>{
      this.$store.dispatch('auth/user')
      this.loading = false
      this.$q.loading.hide()
    })
    .catch(error => {
      this.loading = false
      this.$q.loading.hide()
      this.errorHandling(error)
    });
  },
  getInitialData(){
    const { form } =  this
    form = {
      name: this.user.name,
      phone: this.user.phone,
      email: this.user.email,
    }
  }
  },
  computed: {
    theroute(){return this.$route.name },
    ...mapGetters({
      user: 'auth/user',
    }),
    theauth(){
      let myroute = this.$route.name;
      if(myroute == 'login' || myroute == 'register' ||myroute == 'referrer' || myroute == 'forgot' || myroute == 'account' ||myroute == 'rfunds' ||myroute == 'agentsub' ||myroute == 'funds' ||myroute == 'initAccount'){
        return false
      }else{
        return true
      }
    },
  },

  mounted(){
    this.getInitialData()
  }

}
</script>
