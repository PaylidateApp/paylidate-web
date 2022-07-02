<template>
  <div >
      <!-- {{thedata}} <br /><br />
      {{thedata.config.data}} -->
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer" @click="$router.push({name: 'login'})">
        <img src="../../statics/icons/favicon-128x128.png" style="max-width: 100px">
        <div class=" text-weight-light text-caption text-weight-bolder">
          Paylidate
        </div>
      </div>

      <q-card-section class="q-gutter-sm">
        <q-input outlined dense v-model="form.email" label="Enter E-mail" inputmode="email" />
        <q-input outlined type="password" dense v-model="form.password" label="Enter Your password" />

      </q-card-section>
      <q-card-section>
        <!-- <q-btn rounded color="primary" :to="{name : 'agentsub'}" no-caps label="agentsub" class="full-width" @click="login()" /> -->
        <q-btn :loading="loading" color="primary" no-caps label="Login" class="full-width" @click="login()" />
      </q-card-section>
      <q-card-actions align="center" class="text-secondary">
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{name : 'register'}" label="Don't Have an Account?" />
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{name : 'forgot'}" label="Forgot password?"  />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">You are about to Logout, are you sure?</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
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
      thedata:null,
      alert:false,
      loading:false,
      form:{
        email: '',
        password: '',
      },
      loadingInfo:{
        message: 'Hold on, you are being Logged In',
        spinnerColor: 'secondary'
      }
    }
  },

  methods: {
    async login(){
      this.loading = true
      this.$q.loading.show(this.loadingInfo)
      this.$axios.post(process.env.Api + '/api/login', this.form)
      .then(response => {
        this.$store.commit('auth/login', 'Bearer '+response.data.access_token)
        this.$store.commit('auth/user', response.data.data)

        // this.$store.commit('auth/account', response.data.account)

        this.$q.localStorage.set('paylidate_token', 'Bearer '+response.data.access_token)
        this.$axios.defaults.headers.common["Authorization"] = 'Bearer '+ response.data.access_token

        this.loading = false
        this.$q.loading.hide()
        this.$q.notify({message: 'Login successful', color: 'green'})
        this.$q.localStorage.set('user_id', response.data.data.id)

        this.$store.dispatch("card/cards");
        this.$router.push({ name: "transactions"})
      })
      .catch(error=>{
        this.loading = false
        this.$q.loading.hide()
        //this.errorHandling(error)
        if (error.response) {
          this.loading = false
          this.$q.notify({message: error.response.data.message,  type: 'warning', icon: 'error', position: 'top'})
        } else if (error.request) {
          this.$q.notify({message: 'Error: please try again', type: 'warning', icon: 'error', position: 'top'})
          this.loading = false
        } else {
          this.$q.notify({message: 'Error: please try again', type: 'warning', icon: 'error', position: 'top'})
          this.loading = false
        }
      })
    },
  },

}
</script>
