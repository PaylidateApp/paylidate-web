<template>
<div class="row">
  <div class="col-md-6">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
            <span> <q-img
                src="../../assets/icons/material-symbols_confirmation-number.png"
                spinner-color="white"
                style="height: 25px; max-width: 25px"
                /></span> <span>{{ transaction.product.product_number }}</span>
          </div>

          <div class="col-6">
            <span> <q-img
                src="../../assets/icons/mdi_lightbulb-question.png"
                spinner-color="white"
                style="height: 25px; max-width: 25px"
                /></span> <span>Escrow</span>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="col-6 q-ml-xl q-mt-sm">
        <img
              style="width:300px; height:300px; border:solid 1px #000000; box-sizing: border-box;"
              :src="
                transaction.product.image !== 'default_transaction.png'
                  ? transaction.product.image
                  : base_image
              "
            />
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="row">
        <div class="col-12">
        <div class="row">
          <div class="col-4">
            <span> <q-img
                src="../../assets/icons/material-symbols_person-pin-rounded.png"
                spinner-color="white"
                style="height: 25px; max-width: 25px"
                /></span> <span> {{ transaction.bank.bank_name }}</span>
          </div>
        <div class="col-2">
          <span> <q-img
                src="../../assets/icons/boldtie.png"
                color="orange"
                style="height: 25px; max-width: 25px"
                /></span>
        </div>
        <div class="col-4 q-pr-md">
          <span> <q-img
                src="../../assets/icons/material-symbols_person-pin-rounded.png"
                spinner-color="white"
                style="height: 25px; max-width: 25px"
                /></span> <span>{{ transaction.product_initiator.name }}</span>
        </div>
        <div class="col-2">
          <span> 
            <q-btn
            size="12px"
            round
            flat
            color="primary"
            class=""
            icon="content_copy"
            @click="copy_link"
            copy link
          >
            <q-tooltip>
              {{ copyL }}
            </q-tooltip>
           </q-btn>
           <br/>
                Copy Link
                </span>
        </div>
        </div>
       </div>

      <div class="col-12"></div>
    </div>

    <div class="">
      <h5 class="text-bold text-uppercase q-mt-none"> {{ transaction.quantity }} {{ transaction.product.name }}</h5>
      <h6 class="q-mt-none">Amount to pay: {{ formatAsNaira(transaction.amount) }}</h6>
      <h6>Specification & Delivery: <br/>
         {{
                  transaction.description
                    ? transaction.description
                    : "No Description"
                }} 
        
      </h6>
    </div>


    <div>
    <!-- <q-btn
      color="secondary"
      size="sm"
      label="Make Payment"
      @click="open = true"
    />
    <q-dialog v-model="open">
      <q-card
        v-if="transaction.quantity > transaction.product.quantity"
        :style="$q.screen.gt.sm ? 'min-width: 600px' : 'min-width: 300px'"
      >
        <q-card-section>
          <div class="q-pa-md text-h6">
            This transaction can not continue because the quantity of product
            available in less than your request. <br />
            This can be as a result of you not completing the transaction early.
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            no-caps
            color="negative"
            @click="
              open = false;
              loading = false;
            "
          />
        </q-card-actions>
      </q-card>

      <q-card
        v-else
        :style="$q.screen.gt.sm ? 'min-width: 600px' : 'min-width: 300px'"
      >
        <q-card-section>
          <div class="text-h6">Please Confirm</div>
        </q-card-section>

        <q-card-section class="column flex-center full-width">
          <div class="q-py-xs text-center">
            <div>Note: {{ charges }}</div>
          </div>

          <div class="q-py-sm text-center">
            <div class="text-caption text-weight-light">Amount</div>
            <div class="text-bold text-h5">NGN {{ form.amount }}</div>
          </div>

          <div class="q-py-sm text-center">
            <div class="text-caption text-weight-light">Product Name</div>
            <div class="text-bold text-h6">{{ transaction.product.name }}</div>
          </div>

          <div class="q-py-sm text-center">
            <div class="text-caption text-weight-light">Payment Type</div>
            <div class="text-bold">{{ transaction.product.type }}</div>
          </div>

          <div class="q-py-sm text-center">
            <div class="text-caption text-weight-light">Quantity</div>
            <div class="text-bold text-h6">{{ transaction.quantity }}</div>
          </div> -->

          <!-- <div class="q-py-xs q-px-lg text-left">
                <div class="text-caption text-weight-light">Payment Ref</div>
                <div class="text-bold">{{ '200000-sdsd-sdsd' }}</div>
              </div> -->

          <!-- <div class="q-py-sm text-center">
            <div class="text-caption text-weight-light">Payment Status</div>
            <div class="text-bold">pending</div>
          </div>

          <div class="q-py-md">
            <div class=" text-caption text-weight-light text-center">How would you want to pay?</div>
            <q-radio
              class="text-bold"
              v-model="payment_method"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="wallet"
              label="From your wallet"
            />

            <q-radio
              class="text-bold"
              v-model="payment_method"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="card"
              label="Flutterwave Checkout"
            /><br />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            unelevated
            no-caps
            color="primary"
            label="Make Payment"
            v-if="open"
            :loading="loading"
            @click="paymentOption()"
          />
          <q-btn
            flat
            label="Cancel"
            no-caps
            color="negative"
            @click="
              open = false;
              loading = false;
            "
          />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <Payment
              v-if="
                transaction.product.user_id == user.id &&
                transaction.product.transaction_type == 'buy'
              "
              :transaction="transaction"
            />
            <Payment
              v-if="
                transaction.user_id == user.id &&
                transaction.product.transaction_type == 'sell'
              "
              :transaction="transaction"
            />




  </div>

    

  </div>

</div>

</template>

<script>
import AcceptTransaction from "./partials/accept_trans";
import Payment from "components/common/make_payment";
import DiliveredRecieved from "./partials/dilivered_recieved";
import Disput from "./partials/disput.vue";
import Signup from "components/auth/register";
import Login from "components/auth/login";
export default {
  // name: 'PageName',
  components: {
    AcceptTransaction,
    Payment,
    DiliveredRecieved,
    Signup,
    Login,
    Disput,
  },

  data() {
    return {
      withdraw: false,
      report: false,
      refund: false,
      dispute_status: null,
      copyLink: "Copy transaction link",
      T_ref: this.$route.params.T_ref,
      transaction: null,
      text: "",
      confirm: false,
      base_image:
        "https://res.cloudinary.com/godfadatun/image/upload/v1626034472/undraw_factory_dy0a_cqfjei.svg",
      loading: false,
      signup: false,
      onLogin: false,
      request_withdrawal: {
        transaction_id: "",
        payment_id: "",
        bank_id: "",
        narration: "",
        debit_currency: "",
      },
      form: {
        email: "",
        password: "",
      },
      report_form: {
        sellerEmail: "",
        reportT: "",
        otherReasons: "",
      },
      //payment_url: `${window.location.href}/payment`
    };
  },

  computed: {
    dispute_state() {
      if (this.transaction.dispute === 0) {
        return "Open Dispute";
      } else if (this.transaction.dispute === 2) {
        return "Open Dispute";
      } else {
        return "Resolve Dispute";
      }
    },
    copyL() {
      return this.copyLink;
    },
    user() {
      return this.$store.getters["auth/user"];
    },
    ModelStyle() {
      return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px";
    },
  },

  methods: {
    copy_link() {
      navigator.clipboard.writeText(window.location);
      this.copyLink = "copied!";
      setTimeout(() => (this.copyLink = "Copy transaction link"), 2000);
    },

    //cancel a transaction
    async cancelTransaction() {
      try {
        this.$q.loading.show({
          message: "Hold on, Cancelling transaction",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.post(
          process.env.Api + "/api/transaction/cancel/" + this.transaction.id
        );
        const res = req.data;

        this.getTransaction();
        this.$q.loading.hide();
        this.$q.notify({ message: "Transaction cancelled", color: "green" });
      } catch (error) {
        // // console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error while trying to cancel transaction",
          color: "red",
        });
      }
    },

    //report a transaction
    async reportTransaction() {
      try {
        // this.$q.loading.show({
        //   message: "Hold on, Reporting transaction",
        //   spinnerColor: "secondary",
        // });
        // console.log(this.report);
        let report = null;
        if (this.report_form.reportT == "Other Reasons") {
          report = this.report_form.otherReasons;
        } else {
          report = this.report_form.reportT;
        }
        if (!report) {
          this.$q.notify({
            message: "You must select a reason for report",
            color: "red",
          });
          return;
        }
        const req = await this.$axios.post(
          process.env.Api +
            "/api/transaction/report-transaction/" +
            this.transaction.id,
          { report: report, sellerEmail: this.report_form.sellerEmail }
        );

        //console.log(req)
        this.report = false;
        this.$q.loading.hide();
        this.$q.notify({
          message: "Your Report has been successfully sent!",
          color: "green",
        });

        this.getTransaction();
      } catch (error) {
        //console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error reporting transaction",
          color: "red",
        });
      }
    },

    async confirmTransaction() {
      try {
        this.$q.loading.show({
          message: "Hold on, Transaction is been confirmed",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.post(
          process.env.Api + "/api/transaction/confirm/" + this.transaction.id
        );
        const res = req.data;

        this.getTransaction();
        this.$q.loading.hide();
        this.$q.notify({
          message: "Transaction confirm successfully",
          color: "green",
        });
      } catch (error) {
        // // console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error while trying to confirm transaction",
          color: "red",
        });
      }
    },

    async acceptTransaction() {
      try {
        this.$q.loading.show({
          message: "Hold on, Request processing",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.post(
          process.env.Api + "/api/transaction/accept/" + this.transaction.id
        );
        const res = req.data;

        this.getTransaction();
        this.$q.loading.hide();
        this.$q.notify({
          message: "Transaction accepted successfully",
          color: "green",
        });
      } catch (error) {
        // // console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error while trying to accept transaction",
          color: "red",
        });
      }
    },

    async declineTransaction() {
      try {
        this.$q.loading.show({
          message: "Hold on, Request processing",
          spinnerColor: "secondary",
        });
        const req = await this.$axios.post(
          process.env.Api + "/api/transaction/decline/" + this.transaction.id
        );
        const res = req.data;

        this.getTransaction();
        this.$q.loading.hide();
        this.$q.notify({
          message: "Transaction decline successfully",
          color: "green",
        });
      } catch (error) {
        // // console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error while trying to decline transaction",
          color: "red",
        });
      }
    },

    async dispute(id) {
      try {
        if (this.transaction.dispute === 0 || this.transaction.dispute === 2) {
          this.$q.loading.show("Hold on, opening dispute", "secondary");
          this.$axios.get(
            `${process.env.Api}/api/transaction/open-dispute/${id}`
          );
          this.transaction.dispute = 1;
          this.$q.loading.hide();
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
            type: "positive",
          });
          return;
        }
        if (this.transaction.dispute === 1) {
          this.$q.loading.show("Hold on, resolving dispute", "secondary");
          this.$axios.get(
            `${process.env.Api}/api/transaction/resolve-dispute/${id}`
          );

          this.transaction.dispute = 2;
          this.$q.loading.hide();
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
            type: "positive",
          });

          return;
        }
      } catch (err) {
        this.loading = false;
        this.$q.loading.hide();

        this.$q.notify({
          message: "Error",
          color: "orange",
          position: "top",
          type: "warning",
        });
      }
    },

    //request for refund after an unsuccessful transaction
    async requestRefund() {
      try {
        this.$q.loading.show({
          message: "Hold on, sending refund request",
          spinnerColor: "secondary",
        });
        this.request_withdrawal.narration =
          "Refund for a cancelled transaction";
        const req = await this.$axios.post(
          process.env.Api + "/api/request-refund",
          this.request_withdrawal
        );
        const res = req.data;
        this.transaction = res.data;
        this.getTransaction();
        this.$q.loading.hide();
        this.$q.notify({
          message: "Refund request has been sent successfully",
          color: "green",
          position: "top",
        });
      } catch (error) {
        //console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error:: Refund request error",
          color: "red",
          position: "top",
        });

        // // console.log(second);
      } finally {
        this.$q.loading.hide();
      }
    },

    //request for withdrawal after a successful transaction
    async requestWithdrawal() {
      try {
        this.$q.loading.show({
          message: "Hold on, sending withdrawal request",
          spinnerColor: "secondary",
        });
        //this.withdraw = false

        const req = await this.$axios.post(
          process.env.Api + "/api/request-withdrawal",
          this.request_withdrawal
        );
        const res = req.data;
        this.$q.notify({
          message: "Withdrawal request has been sent successfully",
          color: "green",
          position: "top",
        });
        this.getTransaction();
        this.$q.loading.hide();
      } catch (error) {
        //console.log(error.response.data.message);
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error:: withdrawal request error",
          color: "red",
          position: "top",
        });

        // console.log(second);
      } finally {
        this.$q.loading.hide();
      }
    },

    async getTransaction() {
      try {
        this.$q.loading.show({
          message: "Hold on, fetching transaction record",
          spinnerColor: "secondary",
        });
        // // console.log(this.T_ref);
        const req = await this.$axios.get(
          process.env.Api + "/api/transaction/" + this.T_ref
        );
        const res = req.data;

        if (!res.data) {
          this.$q.notify({
            message: "record not found",
            color: "red",
            position: "top",
          });
          return;
        }

        this.transaction = res.data;
        this.report_form.sellerEmail = this.transaction.seller_email;
        //console.log(res.data)

        let bank = res.data.bank;
        if (bank) {
          this.request_withdrawal.transaction_id = res.data.id;
          this.request_withdrawal.payment_id = res.data.payment.id;
          this.request_withdrawal.bank_id = res.data.bank.id;
          this.request_withdrawal.narration =
            "Payment for " + res.data.product.name;
          this.request_withdrawal.debit_currency = "NGN";
        }
        // console.log(this.request_withdrawal)

        this.$q.loading.hide();
      } catch (error) {
        this.$q.loading.hide();

        // // console.log(second);
        // // console.log(error.response.data.message);
      } finally {
        this.$q.loading.hide();
      }
    },
    formatAsNaira(number) {
      return new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "NGN",
      }).format(number);
    },

    transactionStatus(status) {
      if (status === 0) {
        return "Awaiting Fulfillment";
      } else if (status === 1) {
        return "In Transit";
      } else if (status === 2) {
        return "Delivered";
      } else if (status === 3) {
        return "Recieved";
      } else if (status === 4) {
        return "Canceled";
      }
    },

    async login() {
      this.$q.loading.show({
        message: "Hold on, you are being Logged In",
        spinnerColor: "secondary",
      });
      try {
        const response = await this.$axios.post(
          process.env.Api + "/api/login",
          this.form
        );

        this.$store.commit(
          "auth/login",
          "Bearer " + response.data.access_token
        );
        this.$store.commit("auth/user", response.data.data);
        this.$q.localStorage.set(
          "paylidate_token",
          "Bearer " + response.data.access_token
        );
        this.$q.localStorage.set("user_id", response.data.data.id);
        this.$axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;

        this.getTransaction();

        this.$q.loading.hide();
        this.$q.notify({
          message: "Logged Into Paylidate",
          color: "green",
          position: "top",
          type: "positive",
        });
        this.onLogin = false;
      } catch (error) {
        this.$q.loading.hide();
        if (error.response) {
          if (error.response.data.message !== "Unauthorized")
            this.$q.notify({
              message: "Logged Into Paylidate, Failed",
              color: "orange",
              position: "top",
              type: "warning",
            });
          this.signup = true;
        } else if (error.request) {
          // The request was made but no response was received
          //// // console.log(error.request);
          this.$q.notify({
            message: "Logged Into Paylidate, Failed",
            color: "orange",
            position: "top",
            type: "warning",
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          //// // console.log('Error', error.message);
          this.$q.notify({
            message: "Logged Into Paylidate, Failed",
            color: "orange",
            position: "top",
            type: "warning",
          });
        }
      }
    },

    async register() {
      this.$q.loading.show({
        message: "Creating an Account for you",
        spinnerColor: "secondary",
      });
      try {
        const response = await this.$axios.post(
          process.env.Api + "/api/signup",
          this.form
        );

        this.$store.commit(
          "auth/login",
          "Bearer " + response.data.access_token
        );
        this.$store.commit("auth/user", response.data.data);
        this.$q.localStorage.set(
          "paylidate_token",
          "Bearer " + response.data.access_token
        );
        this.$axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;

        this.$q.loading.hide();
        this.$q.notify({
          message: "Paylidate Account Created",
          color: "green",
          position: "top",
          type: "positive",
        });
        this.onLogin = false;
      } catch (error) {
        this.$q.loading.hide();
        this.$q.notify({
          message: "Account Creation Failed",
          color: "orange",
          position: "top",
          type: "warning",
        });
      }
    },
  },

  mounted() {
    this.getTransaction();
    //if(!this.$q.localStorage.getItem('paylidate_token')) this.onLogin = true
    //else this.getTransaction()this.getTransaction()
  },
};
</script>


<style scoped>

</style>
