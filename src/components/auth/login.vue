<template>
  <div>
    <div>
    <!-- {{thedata}} <br /><br />
      {{thedata.config.data}} -->
    <q-card flat bordered style="min-width: 300px">
      <div
        class="column flex-center cursor-pointer q-pt-md"
        @click="$router.push({ name: 'login' })"
      >
        <img
          src="../../statics/icons/favicon-128x128.png"
          style="max-width: 50px"
        />
        <div class="text-weight-light text-caption text-weight-bolder">
          Login
        </div>
      </div>

      <q-card-section class="q-gutter-sm">
        <q-input
          outlined
          dense
          v-model="form.email"
          label="Enter E-mail"
          inputmode="email"
        />
        <q-input
          outlined
          type="password"
          dense
          v-model="form.password"
          label="Enter Your password"
        />
      </q-card-section>
      <div class="row justify-between q-pb-lg text-secondary">
        <q-btn
          class="text-weight-normal text-caption"
          no-caps
          flat
          :to="{ name: 'register' }"
          label="Don't Have an Account?"
        />
        <q-btn
          class="text-weight-normal text-caption"
          no-caps
          flat
          :to="{ name: 'forgot' }"
          label="Forgot password?"
        />
      </div>
      <q-card-section>
        <!-- <q-btn rounded color="primary" :to="{name : 'agentsub'}" no-caps label="agentsub" class="full-width" @click="login()" /> -->
        <q-btn
          :loading="loading"
          color="secondary"
          no-caps
          label="Login"
          class="full-width"
          @click="login()"
        />
      </q-card-section>
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
  <div class="row full-width justify-between caption-two text-white" style="padding-top: 4rem;">
      <p class="  ">Buyer Protection <span class="q-px-sm">|</span></p>
      <p class=" ">Seller Verification <span class="q-px-sm">|</span></p>
      <p class=" ">Transaction Security</p>
  </div>
  </div>
</template>

<script>
import { authRuleMixin } from "../mixins/index";
export default {
  // name: 'ComponentName',
  mixins: [authRuleMixin],
  data() {
    return {
      thedata: null,
      alert: false,
      loading: false,
      form: {
        email: "",
        password: "",
      },
      loadingInfo: {
        message: "Hold on, you are being Logged In",
        spinnerColor: "secondary",
      },
    };
  },

  methods: {
    async login() {
      this.loading = true;
      this.$q.loading.show(this.loadingInfo);
      this.$axios
        .post(process.env.Api + "/api/login", this.form)
        .then((response) => {
          this.$store.commit(
            "auth/login",
            "Bearer " + response.data.access_token
          );
          this.$store.commit("auth/user", response.data.data);

          // this.$store.commit('auth/account', response.data.account)

          this.$q.localStorage.set(
            "paylidate_token",
            "Bearer " + response.data.access_token
          );
          this.$axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access_token;

          this.loading = false;
          this.$q.loading.hide();
          this.$q.notify({ message: "Login successful", color: "green" });
          this.$q.localStorage.set("user_id", response.data.data.id);

          this.$store.dispatch("card/cards");
          this.$router.push({ name: "user_dashboard" });
        })
        .catch((error) => {
          this.loading = false;
          this.$q.loading.hide();
          //this.errorHandling(error)
          if (error.response) {
            this.loading = false;
            this.$q.notify({
              message: error.response.data.message,
              type: "warning",
              icon: "error",
              position: "top",
            });
          } else if (error.request) {
            this.$q.notify({
              message: "Error: please try again",
              type: "warning",
              icon: "error",
              position: "top",
            });
            this.loading = false;
          } else {
            this.$q.notify({
              message: "Error: please try again",
              type: "warning",
              icon: "error",
              position: "top",
            });
            this.loading = false;
          }
        });
    },
  },
};
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
