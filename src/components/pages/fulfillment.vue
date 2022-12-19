<template>
  <div class="main-container" style="">
    <div class="column items-center q-py-md" style="height: 200px">
      <div class="col center-form">
        <q-card flat bordered style="min-width: 300px">
          <div class="column flex-center q-py-md">
            <img
              src="../../statics/paylidate-logo.png"
              style="max-width: 200px"
            />

            <div class="title q-py-md">Fulfillment</div>
            <div class="subtitle2 q-pt-lg">
              Product Number
              <span class=""> {{ product.product_number }}</span>
            </div>
          </div>

          <div class="center-card" align="center">
            <q-card flat bordered class="my-card" style="">
              <q-card-section>
                <div class="subtitle">
                  Sold by: <span>{{ product.sellers_name }}</span>
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="subtitle2">Confirmation of delivery for</div>
                <div class="subtitle q-pt-sm">{{ product.product_name }}</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="subtitle2">
                  Which was described by the seller as
                </div>
                <div class="subtitle q-pt-sm">
                  {{ product.product_description }}
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="subtitle2">To be delivered to</div>
                <div class="subtitle q-pt-sm">{{ product.buyers_name }}</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="subtitle2">Specification and delivery info:</div>
                <div class="subtitle q-pt-sm">{{ product.buyers_s_d }}</div>
              </q-card-section>
            </q-card>
          </div>

          <q-card-section>
            <div class="column flex-center">
              <div class="subtitle2 text-justify q-py-sm" style="width: 55%">
                Type buyer’s 5-digit code here to confirm this delivery
              </div>
              <img
                src="../../statics/arrow_down.png"
                style="max-width: 200px"
              />
              <q-input
                class="q-py-sm"
                outlined
                dense
                v-model="fulfillmentCode"
                label="Enter Code..."
                maxlength="5"
                inputmode="numeric"
                pattern="[0-9]*"
                oninput="value=value.replace(/[^\d]/g,'')"
              />
            </div>
          </q-card-section>

          <q-card-section class="q-mb-lg">
            <q-btn
              color="primary"
              no-caps
              label="Confirm"
              class="full-width"
              @click="sendCode"
            />
          </q-card-section>
          <q-card-section>
            <div class="column flex-center">
              <div class="subtitle2 text-justify q-py-sm" style="width: 75%">
                Please ask the buyer to confirm they are receiving what they
                ordered first
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="column flex-center q-py-md">
            <img
              src="../../statics/paylidate-logo.png"
              style="max-width: 200px"
            />

            <div class="title q-py-md">Fulfillment</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="">
            <q-card flat bordered class="my-card" style="max-width: 300px">
              <q-card-section>
                <div class="subtitle q-py-xl">
                  This transaction has now been marked as complete
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            color="primary"
            no-caps
            label="OK"
            v-close-popup
            :to="{ name: 'index' }"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: false,
      fulfillmentCode: null,
      hash: "",
      product: [],
    };
  },
  created() {
    const hash = this.$route.params.hash;
    //console.log(hash)
    this.hash = hash;
  },
  mounted() {
    this.getProdDetails();
  },
  methods: {
    async sendCode() {
      try {
        if (!this.fulfillmentCode) {
          this.$q.notify({
            message: "Please enter code to proceed",
            position: "top",
            color: "red",
            textColor: "white",
          });
          return;
        }
        this.$q.loading.show({
          message: "Please hold",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.post(
          process.env.Api + `/api/fulfillment/${this.hash}`,
          {
            code: this.fulfillmentCode,
          }
        );

        const res = req.data;
        console.log(res);

        if (res.status == "Success") {
          this.$q.loading.hide();
          this.alert = true;
          this.fulfillmentCode = "";
        }
        if (res.status == "Error") {
          this.$q.loading.hide();
          this.$q.notify({
            message: "Invalid Code",
            color: "red",
          });
        }
        if (res.status == "Used") {
          this.$q.loading.hide();
          this.$q.notify({
            message: "This transaction has already been completed!",
            color: "red",
            position: "top",
            textColor: "white",
          });
        }
      } catch (error) {
        //console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error sending code, please try again.",
          color: "red",
        });
      }
    },

    async getProdDetails() {
      try {
        this.$q.loading.show({
          message: "Hold on, loading data",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.get(
          process.env.Api + `/api/fulfillment/${this.hash}`
        );
        const res = req.data;

        this.product = res.data;
        this.$q.loading.hide();
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  /* position: relative; */
  height: 100%;
}

.title {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
}
.subtitle2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.75rem;
}
.subtitle {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 0.87rem;
  line-height: 1.06rem;
  text-align: center;
}

@media (min-width: 690px) {
  .center-card {
    width: 90%;
    padding-left: 3rem;
    /* display: flex;
  align-items: center;
  justify-content: center; */
  }
  .center-form {
    width: 33%;
  }
  .title {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 1.88rem;
    line-height: 2.4rem;
    text-align: center;
  }
  .subtitle2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
  }
  .subtitle {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-align: center;
  }
}
</style>
