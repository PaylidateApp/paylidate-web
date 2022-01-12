<template>
  <div >
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer" @click="$router.push({name: 'login'})">
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
      <q-card-section class="q-gutter-sm">
        <q-input outlined dense v-model="form.email" label="Enter E-mail" type="email" />
      </q-card-section>
      <q-card-section class="text-secondary">
        <q-btn class="full-width" :loading="loading" color="primary" no-caps label="Reset Password" @click="forgot()" />
      </q-card-section>
      <q-card-actions align="center" class="text-secondary">
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{name : 'login'}" label="Login" />
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
      resender: '',
      timer: 60,
      form:{
        email: '',
      }
    }
  },

  methods: {
    async forgot(){
      if(this.form.email){
        this.error = false
        this.loading = true
        try {
          const response = await this.$axios.post(`${process.env.Api}/api/password/create`, this.form)
          this.loading = false
          this.$q.notify({message: 'We have e-mailed your password reset link', color: 'green'})
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
