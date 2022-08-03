<template>
  <div >
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer" @click="$router.push({name: 'login'})">
        <img src="../../statics/icons/favicon-128x128.png" style="max-width: 100px">
        <div class=" text-weight-light text-caption text-weight-bolder">
          Paylidate
        </div>
      </div>

      <q-card-section class="q-gutter-sm">
        <div v-if="error" class="text-red">Your 6 Digit PIN does not Match</div>
        <q-input outlined dense v-model="form.name" label="Your Full Name" />
        <q-input outlined dense v-model="form.phone" label="Enter Phone Number" maxlength="11" inputmode="numeric" pattern="[0-9]*" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense v-model="form.email" label="Enter E-mail" inputmode="email" />
        <q-input outlined dense type="password" v-model="form.password" label="Create Your Password" />
        <q-input outlined dense type="password" v-model="form.password_confirmation" label="Confirm Password" />
      </q-card-section>
      <q-card-section>
        <q-btn :loading="loading" color="primary" no-caps label="Sign Up" class="full-width" @click="signup()" />
      </q-card-section>
      <q-card-actions align="center" class="text-secondary">
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{name : 'login'}" label="Already Have an Account? Login" />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
import { authRuleMixin } from '../mixins/index';
export default {
  // name: 'ComponentName',
  mixins:[authRuleMixin],
  data () {
    return {
      error:false,
      loading:false,
      form:{
        name:'',
        phone:'',
        email: '',
        password: '',
        password_confirmation: ''
      },
      loadingInfo:{
        message: 'Creating an Account for you',
        spinnerColor: 'secondary'
      }
    }
  },
  methods: {
    async signup(){
      if (this.form.password == this.form.password_confirmation) {
        this.error = false
        this.loading = true
        this.$q.loading.show(this.loadingInfo)
       this.$axios.post(process.env.Api + '/api/signup', this.form)
        .then(response => {
          this.$q.notify({message: 'Paylidate Account Created', color: 'green', position: 'top', type: 'success' })
          this.loading = false
          this.$q.loading.hide()
          this.$q.localStorage.set('paylidate_token', 'Bearer '+response.data.access_token)
          this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ response.data.access_token
          this.$store.commit('auth/login', 'Bearer '+response.data.access_token)
          this.$store.commit('auth/user', response.data.data)
          this.$store.commit('auth/account', response.data.account)
          this.$router.push({ name: "transactions"})
        })
        .catch(error=>{
          this.loading = false
          this.$q.loading.hide()
          if(error.response){
            this.$q.notify({message: 'Email or Phone Number already exist' , color: 'red'})
          } else if (error.request) {
            this.loading = false
            this.$q.notify({message: error.request, color: 'orange'})
          } else {
            this.loading = false
            this.$q.notify({message: error.message, color: 'orange'})
          }

        })
      }else{
        this.error = true
      }

    },

  },
}
</script>
