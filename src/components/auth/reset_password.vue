<template>
  <div >
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer">
        <img src="../../statics/icons/favicon-128x128.png" style="max-width: 100px">
        <div class=" text-weight-light text-caption text-weight-bolder">
          Paylidate
        </div>
      </div>
      <q-card-section>
        <q-card v-if="error" class="bg-red text-white row">
          <q-card-section class="">
            <div class="text-caption text-center">Enter your Email</div>
          </q-card-section>
        </q-card>
      </q-card-section>
      <q-card-section v-if="token_status" class="q-gutter-sm">
        <q-input outlined dense v-model="form.email" label="Enter E-mail" readonly />
        <q-input outlined dense v-model="form.password" label="Enter Password" type="password" />
        <q-input outlined dense v-model="form.password_confirmation" label="Confirm Password" type="password" />
      </q-card-section>
      <q-card-section v-if="token_status" class="text-secondary">
        <q-btn class="full-width" :loading="loading" color="primary" no-caps label="Reset Password" @click="recover()" />
      </q-card-section>
       <q-card-section v-else class="text-secondary">
        Your token doesn't exist or it has expired, please restart the <q-btn no-wrap no-caps flat dense :to="{name : 'login'}" label="password recovery" /> again
      </q-card-section>
      <q-card-actions align="center">
        <q-btn no-caps flat :to="{name : 'login'}" label="Login" />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      loading: false,
      error: false,
      token_status: false,
      resender: '',
      timer: 60,
      form:{
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      }
    }
  },

  mounted() {
    // this.find();
  },

  methods: {
    async find(){
        try {
          const response = await this.$axios.get(`${process.env.Api}/api/password/find/${this.$route.params.token}`)
          this.form.token = this.$route.params.token;
          this.form.email= response.data.email
          this.token_status = true
        }
        catch (error) {
          this.token_status = false
        }
    },

    async recover(){
      if(this.form.password){
        this.error = false
        this.loading = true
        try {
          const response = await this.$axios.post(`${process.env.Api}/api/password/reset`, this.form)
          this.loading = false
          this.$q.notify({message: 'Password reset successful', color: 'green'})
          this.$router.push('login');
        }
        catch (error) {
          this.error = true
        }
      }else {
        this.error = true
      }
    },

  },
}
</script>
