<template>
  <div >
    <q-card flat bordered style="min-width: 300px">
      <div class="column flex-center cursor-pointer q-pt-lg" @click="$router.push({name: 'login'})">
        <img src="../../statics/icons/favicon-128x128.png" style="max-width: 50px">
        <div class=" text-weight-light text-caption text-weight-bolder q-py-lg">
          Reset Password
        </div>
      </div>
      <q-card-section>

        <q-card v-if="error" class="bg-red text-white row">
          <q-card-section class="">
            <div class="text-caption text-center">{{error}}</div>
          </q-card-section>
        </q-card>

      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <q-input outlined dense v-model="form.email" label="Enter E-mail" type="email" />
      </q-card-section>
      <div class="row justify-between">
        <q-card-actions class="text-secondary">
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{ name: 'register' }" label="Don’t have an account yet?" />
      </q-card-actions>
      <q-card-actions class="text-secondary">
        <q-btn class="text-weight-normal text-caption" no-caps flat :to="{name : 'login'}" label="Back to Login" />
      </q-card-actions>
      </div>
      <q-card-section class="text-secondary">
        <q-btn class="full-width" :loading="loading" color="secondary" no-caps label="Reset Password" @click="forgot()" />
      </q-card-section>
    </q-card>

    <div
      class="row full-width text-white justify-between Montserrat caption-two"
      style="padding-top: 4rem"
    >
      <p class="q-px-sm">Buyer Protection</p>
      |
      <p class="q-px-sm">Seller Verification</p>
      |
      <p class="q-px-sm">Transaction Security</p>
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      loading: false,
      error: null,
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
        this.error = null
        this.loading = true
        try {
          const response = await this.$axios.post(`${process.env.Api}/api/password/create`, this.form)
          // console.log(response)
          this.loading = false
          this.$q.notify({message: 'We have e-mailed your password reset link', color: 'green'})
        }
        catch (error) {
        this.loading = false
          //console.log(error.response.data.message)
          this.error = "Error:: Ensure your email is correct"
        }
      }else {
        this.error = "Enter your Email"
        this.loading = false
      }
    },

  },
}
</script>

<style scoped>
.caption-two {
  font-weight: 450;
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (max-width: 670px) {
  .caption-two {
    font-weight: 500;
    font-size: 0.6rem;
    line-height: 0.9rem;
    text-align: left;
    justify-content: space-between;
  }
}
</style>
