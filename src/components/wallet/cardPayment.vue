<template>
  <q-page padding>
    <div></div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      form: {
        tx_ref: this.$route.query.tx_ref,
        payment_id: this.$route.query.transaction_id,
        narration: "Credit wallet using Flutterwave",
        amount: null
      }
    };
  },

  mounted() {
    this.verifyPayment();
  },

  methods: {
    async verifyPayment() {
      try {
        this.$q.loading.show({
          message: "Hold on, While payment is been verified",
          spinnerColor: "secondary"
        });

        if (
          !this.$q.localStorage.getItem("amount") ||
          !this.$q.localStorage.getItem("tx_ref") ||
          this.$q.localStorage.getItem("tx_ref") != this.form.tx_ref
        ) {
          localStorage.removeItem("amount");
          localStorage.removeItem("tx_ref");
          this.$router.push({ name: "wallet" });
          this.$q.loading.hide();
          this.$q.notify({ message: "Error:: Invalid", color: "red" });
          return;
        }

        this.form.amount = this.$q.localStorage.getItem("amount");

        const req = await this.$axios.post(
          process.env.Api + "/api/credit-wallet",
          this.form
        );
        const res = req.data;

        //console.log(res)

        if (res.status == "success") {
          this.$router.push({ name: "wallet" });
          this.$q.loading.hide();
          this.$q.notify({ message: "Successful", color: "green" });
        } else {
          localStorage.removeItem("amount");
          localStorage.removeItem("tx_ref");
          this.$router.push({ name: "wallet" });
          this.$q.loading.hide();
          this.$q.notify({ message: "Error:: Failed", color: "red" });
        }
      } catch (error) {
        //.log(error.response.data.message);
        localStorage.removeItem("amount");
        localStorage.removeItem("tx_ref");
        this.$q.notify({ message: "Error:: Failed", color: "red" });
        this.$router.push({ name: "wallet" });
      } finally {
        localStorage.removeItem("amount");
        localStorage.removeItem("tx_ref");
        this.$q.loading.hide();
      }
    }

    //  const req = await this.$axios.post(process.env.Api + '/api/verify-payment', {txRef})
    //         const res = req.data;

    //         if(res.status != 'success'){}
  }
};
</script>
