<template>
  <div class="main-container" style="">
    <img
      class="gt-sm"
      src="../../statics/register_assets/young_millennials_african_friends.png"
      style="width: 100%; padding-top: 10rem"
    />

    <div class="centered row justify-evenly column-style" style="width: 100%">
      <div class="col-6 text-white Montserrat small-box-style">
        <div class="row small-box-style">
          <h2 class="big-title">
            Providing a secure and
            <span style="color: #eb6117"> reliable way for buyers and</span>
            sellers to transact online
          </h2>
          <div
            class="row caption-one text-center justify-between q-py-sm lt-md small-box-style"
          >
            <p>Make Payments</p>
            <div class="q-pt-xs">
              <img
                src="../../statics/register_assets/Vector.png"
                style="width: 0.9rem; height: 0.9rem"
              />
            </div>

            <p>Receive Delivery</p>
            <div class="q-pt-xs">
              <img
                src="../../statics/register_assets/Vector.png"
                style="width: 0.9rem; height: 0.9rem"
              />
            </div>
            <P>Validate Payment</P>
          </div>
          <p class="subtitle-one q-pb-xl">
            Join the thousands of Nigerian buyers and sellers already protecting
            their online transactions with Paylidate.
          </p>
          <div
            class="row caption-one text-center justify-between q-py-lg gt-sm"
          >
            <p>Make Payments</p>
            <div class="q-pt-xs q-px-md">
              <img
                src="../../statics/register_assets/Vector.png"
                style="width: 0.9rem; height: 0.9rem"
              />
            </div>

            <p>Receive Delivery</p>
            <div class="q-pt-xs q-px-md">
              <img
                src="../../statics/register_assets/Vector.png"
                style="width: 0.9rem; height: 0.9rem"
              />
            </div>
            <P>Validate Payment</P>
          </div>
          <div
            class="row full-width justify-between caption-two q-py-xl gt-sm"
            style="padding-top: 6rem"
          >
            <p>Buyer Protection</p>
            |
            <p>Seller Verification</p>
            |
            <p>Transaction Security</p>
          </div>
        </div>
      </div>
      <div class="col-5 register-form">
        <q-card flat bordered style="min-width: 300px">
          <div class="column flex-center q-py-md">
            <img
              src="../../statics/icons/favicon-128x128.png"
              style="max-width: 50px"
            />

            <div class="form-title q-py-sm">Sign Up</div>
            <div class="form-subtitle q-py-sm">
              Already have an account?
              <span
                class="text-secondary cursor-pointer"
                @click="$router.push({ name: 'login' })"
              >
                Log in</span
              >
            </div>
          </div>

          <q-card-section class="q-gutter-sm">
            <div v-if="error" class="text-red">
              Your 6 Digit PIN does not Match
            </div>
            <q-input
              outlined
              dense
              v-model="form.name"
              label="Your Full Name"
            />
            <q-input
              outlined
              dense
              v-model="form.phone"
              label="Enter Phone Number"
              maxlength="11"
              inputmode="numeric"
              pattern="[0-9]*"
              oninput="value=value.replace(/[^\d]/g,'')"
            />
            <q-input
              outlined
              dense
              v-model="form.email"
              label="Enter E-mail"
              inputmode="email"
            />
            <q-input
              outlined
              dense
              type="password"
              v-model="form.password"
              label="Create Your Password"
            />
            <q-input
              outlined
              dense
              type="password"
              v-model="form.password_confirmation"
              label="Confirm Password"
            />
          </q-card-section>

          <q-card-section align="center">
            <div class="column flex-center">
              <div class="form-footer-text q-py-sm">
                By signing up, I agree to Paylidate’s
                <span class="text-secondary">terms and conditions.</span>
              </div>

              <div class="form-footer-text q-py-sm" style="max-width: 20rem">
                See our <span class="text-secondary"> Privacy policy</span> to
                understand how we manage user personal data
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-mb-lg">
            <q-btn
              :loading="loading"
              color="secondary"
              no-caps
              label="Sign Up"
              class="full-width"
              @click="signup()"
            />
          </q-card-section>
        </q-card>
      </div>
      <div
        class="row full-width text-white justify-between caption-two q-pt-xl lt-md"
        style=""
      >
        <p>Buyer Protection</p>
        |
        <p>Seller Verification</p>
        |
        <p>Transaction Security</p>
      </div>
    </div>

    <div class="row full-width lt-md">
      <img
        src="../../statics/register_assets/young_millennials_african_friends.png"
        style="width: 100%; padding-top: 55rem"
      />
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
      error: false,
      loading: false,
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      loadingInfo: {
        message: "Creating an Account for you",
        spinnerColor: "secondary",
      },
    };
  },
  methods: {
    async signup() {
      if (this.form.password == this.form.password_confirmation) {
        this.error = false;
        this.loading = true;
        this.$q.loading.show(this.loadingInfo);
        this.$axios
          .post(process.env.Api + "/api/signup", this.form)
          .then((response) => {
            this.$q.notify({
              message: "Paylidate Account Created",
              color: "green",
              position: "top",
              type: "success",
            });
            this.loading = false;
            this.$q.loading.hide();
            this.$q.localStorage.set(
              "paylidate_token",
              "Bearer " + response.data.access_token
            );
            this.$axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.access_token;
            this.$store.commit(
              "auth/login",
              "Bearer " + response.data.access_token
            );
            this.$store.commit("auth/user", response.data.data);
            this.$store.commit("auth/account", response.data.account);
            this.$router.push({ name: "transactions" });
          })
          .catch((error) => {
            this.loading = false;
            this.$q.loading.hide();
            if (error.response) {
              this.$q.notify({
                message: "Email or Phone Number already exist",
                color: "red",
              });
            } else if (error.request) {
              this.loading = false;
              this.$q.notify({ message: error.request, color: "orange" });
            } else {
              this.loading = false;
              this.$q.notify({ message: error.message, color: "orange" });
            }
          });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  /* background-image: url("../../statics/register_assets/young_millennials_african_friends.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  position: relative;
  height: 100%;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.big-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.5rem;
}
.subtitle-one {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.75rem;
}
.caption-one {
  font-weight: 450;
  font-size: 0.9rem;
  line-height: 1.4rem;
}
.caption-two {
  font-weight: 450;
  font-size: 1.1rem;
  line-height: 1.5rem;
}
.form-title {
  font-family: "Montserrat";
  font-weight: 450;
  font-size: 1.5rem;
  line-height: 1.8rem;
}
.form-subtitle {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;
}
.form-footer-text {
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 0.88rem;
  line-height: 1.25rem;
}

@media (max-width: 690px) {
  .column-style {
    display: flex;
    flex-direction: column;
  }
  .big-title {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.2rem;
    text-align: center;
  }
  .subtitle-one {
    font-weight: 300;
    font-size: 0.7rem;
    line-height: 0.8rem;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .caption-one {
    font-weight: 550;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    justify-content: space-evenly;
  }
  .caption-two {
    font-weight: 500;
    font-size: 0.7rem;
    line-height: 0.8rem;
    text-align: center;
    justify-content: space-evenly;
  }
  .form-display-style {
    display: flex;
    flex-direction: column;
  }
}
@media (min-width: 480px) and (max-width: 690px) {
  .register-form {
    margin-left: 3rem;
    margin-right: 3rem;
    padding-left: 4rem;
  }
  .small-box-style {
    width: 30rem;
  }
}
@media (max-width: 479px) {
  .register-form {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .small-box-style {
    width: 23rem;
  }
}
</style>
