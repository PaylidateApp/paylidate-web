<template>

<!-- Old layout for wallet page -->

<div class="flex-block flex-center ">
    <q-dialog v-model="fundWallet">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-primary q-pt-md">
            <strong>
              To fund your wallet, you can either use bank transfer or pay via
              card using flutterwave checkout <br /><br />
            </strong>
            <strong> Via Bank Transfer<br /> </strong>
            {{ wallet.account_number }} <br />
            {{ wallet.bank_name }}<br /><br />
            <div class="flex">
              <strong> Via flutterwave checkout (Card)<br /> </strong>
              <q-input
                outlined
                dense
                v-model="form.amount"
                type="number"
                label="Enter Amount"
                maxlength="11"
                inputmode="numeric"
              />

              <q-btn
                class="q-ml-sm"
                :loading="loading"
                no-caps
                color="primary"
                label="Confirm"
                @click="creditWalletWithFLW()"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-secondary q-pr-md">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="prompt" persistent>
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-red">
            You don't have a paylidate wallet, please enter your BVN below to
            create your wallet
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            :rules="schema.bvn"
            type="number"
            v-model="bvn"
            autofocus
            @keyup.enter="createWallet()"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-secondary q-pr-md">
          <q-btn
            label="Create Wallet"
            :loading="loading"
            color="secondary"
            @click="createWallet()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div
      v-if="!prompt"
      class=" bg-primary q-pa-md"
      style="border-radius: 14px; max-width: 400px"
    >
      <div>
        <div class="flex justify-between">
          <div class="text-subtitle1 text-secondary">Paylidate Wallet</div>

          <q-btn
            unelevated
            no-caps
            color="secondary"
            label="Fund wallet"
            @click="fundWallet = true"
          />
        </div>
        <div class="flex justify-between q-my-md">
          <div>
            <div class="row flex-center no-padding q-gutter-sm">
              <div class="text-secondary text-center text-uppercase">
                <div class="text-subtitle1 text-bold">
                  ₦ {{ currency(parseFloat(wallet.balance)) }}
                </div>
                <div style="font-size: 11px">BALANCE</div>
              </div>
              <q-separator spaced vertical dark />
              <div class="text-secondary text-center text-uppercase">
                <div class="text-subtitle1 text-bold">
                  ₦ {{ currency(parseFloat(wallet.bonus)) }}
                </div>
                <div style="font-size: 11px">BONUS</div>
              </div>
            </div>
          </div>
          <q-icon size="xl" color="secondary" name="account_balance_wallet" />
        </div>
        <div class="flex justify-between">
          <div class="text-subtitle1 text-secondary">{{ user.name }}</div>
          <div class="text-secondary no-padding text-center text-uppercase">
            <div class="text-subtitle1 text-secondary">
              {{ wallet.account_number }}
            </div>
            <div style="font-size: 11px">{{ wallet.bank_name }}</div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div v-if="!prompt">
      <q-table
        title="WALLET HISTORY"
        :data="contents"
        :columns="columns"
        row-key="name"
        square
      >
        <template v-slot:top-right>
          <eExport :array="contents" :columns="columns" />
          <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="type" :props="props">
              {{ props.row.type }}
            </q-td>
            <q-td key="narration" :props="props">
              {{ props.row.narration }}
            </q-td>
            <q-td key="amount" :props="props">
              ₦ {{ currency(props.row.amount) }}
            </q-td>
            <q-td key="balance_before" :props="props">
              ₦ {{ currency(props.row.balance_before) }}
            </q-td>
            <q-td key="balance_after" :props="props">
              ₦ {{ currency(props.row.balance_after) }}
            </q-td>

            <q-td key="created_at" :props="props">
              {{ formatDate(props.row.created_at) }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>

  <!-- New Layout for wallet page -->

  <!-- <div class="flex-block flex-center">
    <q-dialog v-model="fundWallet">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-primary q-pt-md">
            <strong>
              To fund your wallet, you can either use bank transfer or pay via
              card using flutterwave checkout <br /><br />
            </strong>
            <strong> Via Bank Transfer<br /> </strong>
            {{ wallet.account_number }} <br />
            {{ wallet.bank_name }}<br /><br />
            <div class="flex">
              <strong> Via flutterwave checkout (Card)<br /> </strong>
              <q-input
                outlined
                dense
                v-model="form.amount"
                type="number"
                label="Enter Amount"
                maxlength="11"
                inputmode="numeric"
              />

              <q-btn
                class="q-ml-sm"
                :loading="loading"
                no-caps
                color="primary"
                label="Confirm"
                @click="creditWalletWithFLW()"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-secondary q-pr-md">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


    <div v-if="!prompt" class="bg-primary q-pa-md wallet">
      <div class="row walletsection">
        <div class="col-xs-6 col-sm-6 col-md-6 wallettitle">
          Paylidate Wallet
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 fundwalletcontainer">
          <q-btn
            unelevated
            no-caps
            color="secondary"
            label="Fund wallet"
            @click="fundWallet = true"
            class="fundwallet"
          />
        </div>
      </div>

      <div class="row walletbalance">
        <div class="col-xs-6 col-sm-6 col-md-6 balancecontainer">
          <div class="balance">BALANCE</div>
          <div class="text-subtitle1">
            N {{ currency(parseFloat(wallet.balance)) }}
          </div>
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 bonuscontainer">
          <div class="bonus">BONUS</div>
          <div class="text-subtitle1">
            N {{ currency(parseFloat(wallet.bonus)) }}
          </div>
        </div>
      </div>

      <div class="row useract">
        <div class="col-xs-6 col-sm-6 col-md-6 walletusername">
          {{ user.name }}
        </div>

        <div class="col-xs-6 col-sm-6 col-md-6 userwalletact">
          <div class="text-subtitle2">{{ wallet.account_number }}</div>
          <div class="text-subtitle2">{{ wallet.bank_name }}</div>
        </div>
      </div>
    </div>
    <br />

    <div v-if="!prompt">
      <q-table
        title="WALLET HISTORY"
        :data="contents"
        :columns="columns"
        row-key="name"
        square
        class="wallethistory"
      >
        <template v-slot:top-right>
          <eExport :array="contents" :columns="columns" /> -->
          <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
        <!-- </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="type" :props="props">
              {{ props.row.type }}
            </q-td>
            <q-td key="narration" :props="props">
              {{ props.row.narration }}
            </q-td>
            <q-td key="amount" :props="props">
              ₦ {{ currency(props.row.amount) }}
            </q-td>
            <q-td key="balance_before" :props="props">
              ₦ {{ currency(props.row.balance_before) }}
            </q-td>
            <q-td key="balance_after" :props="props">
              ₦ {{ currency(props.row.balance_after) }}
            </q-td>

            <q-td key="created_at" :props="props">
              {{ formatDate(props.row.created_at) }}
            </q-td>
          </q-tr>
        </template>
      </q-table> -->

      <!-- <q-table title="WALLET HISTORY" title-align="center" :data="contents" :columns="columnsformobile" row-key="name" square class="wallethistoryformobile">
            <template v-slot:top-right>
              <eExport :array="contents" :columns="columnsformobile" /> -->
              <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
            <!-- </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="amount" :props="props">
                  ₦ {{currency(props.row.amount) }}
                </q-td>
                <q-td key="balance_after" :props="props">
                  ₦ {{ currency(props.row.balance_after) }}
                </q-td>

                <q-td key="created_at" :props="props">
                  {{ formatDate(props.row.created_at) }}
                </q-td>

              </q-tr>
            </template>

          </q-table>
        </div> -->

    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import { authRuleMixin } from "../mixins/index";
import disputeSchema from "../../validation/bank";
import eExport from "components/common/export";

export default {
  name: "Wallet",
  components: {
    eExport,
  },
  mixins: [authRuleMixin],
  data() {
    return {
      schema: disputeSchema,
      loading: false,
      prompt: false,
      fundWallet: false,
      form: {
        amount: "",
      },
      wallet: {
        balance: 0,
        bonus: 0,
        account_number: "0000000000",
        bank_name: "  ",
      },
      bvn: null,

      columns: [
        {
          name: "type",
          label: "Type",
          field: "type",
          align: "center",
          sortable: true,
        },
        {
          name: "narration",
          label: "Narration",
          field: "narration",
          sortable: true,
          align: "center",
        },
        {
          name: "amount",
          label: "Transaction Amount",
          field: "amount",
          sortable: true,
          align: "center",
        },
        {
          name: "balance_before",
          label: "Balance Before",
          field: "balance_before",
          sortable: true,
          align: "center",
        },
        {
          name: "balance_after",
          label: "Balance After",
          field: "balance_after",
          sortable: true,
          align: "center",
        },
        {
          name: "created_at",
          label: "Date Created",
          field: "created_at",
          align: "center",
          sortable: true,
        },
      ],

      columnsformobile: [
        {
          name: "amount",
          label: "Transaction Amount",
          field: "amount",
          sortable: true,
          align: "center",
        },
        {
          name: "balance_after",
          label: "Balance After",
          field: "balance_after",
          sortable: true,
          align: "center",
        },
        {
          name: "created_at",
          label: "Date Created",
          field: "created_at",
          align: "center",
          sortable: true,
        },
      ],
      contents: [],
    };
  },
  mounted() {
    if (!this.$q.localStorage.getItem("paylidate_token")) {
      this.$router.push({ name: "login" });
    }
    this.getWallet();
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  methods: {
    async getWallet() {
      this.$q.loading.show({
        message: "Hold on, fetching wallet records",
        spinnerColor: "secondary",
      });
      try {
        const req = await this.$axios.get(process.env.Api + "/api/get-wallet");
        const res = req.data;
        //console.log(res);

        if (!res.data) {
          this.$q.loading.hide();
          this.prompt = true;
          return;
        }
        this.wallet = res.data;
        this.contents = res.data.wallet_history.reverse();

        this.$q.loading.hide();
      } catch (error) {
        this.$q.loading.hide();
        this.$q.notify({
          message: "Error while trying to fatch wallet record",
          color: "red",
        });
        //console.log(error.response.data.message);
      } finally {
        this.$q.loading.hide();
      }
    },

    async createWallet() {
      let bvn = this.bvn;
      if (!bvn || bvn.length != 11) {
        return;
      }
      this.loading = true;
      try {
        const req = await this.$axios.post(
          process.env.Api + "/api/create-wallet",
          { bvn }
        );
        const res = req.data;
        //console.log(res);

        if (res.status != "success") {
          this.loading = false;
          this.$q.notify({ message: res.message, color: "red" });
          return;
        }
        this.loading = false;
        this.prompt = false;
        this.getWallet();
      } catch (error) {
        this.loading = false;
        this.$q.notify({ message: error.response.data.message, color: "red" });
        //console.log(error.response.data.message);
      } finally {
        this.loading = false;
      }
    },

    async creditWalletWithFLW() {
      if (!this.form.amount || this.form.amount < 50) {
        this.$q.notify({
          message: "Minimum credit amount is ₦50",
          color: "red",
        });
        return;
      }
      const t_ref = "PD" + this.user.id + new Date().getTime();
      this.$q.localStorage.set("amount", this.form.amount);
      this.$q.localStorage.set("tx_ref", t_ref);

      this.loading = true;
      FlutterwaveCheckout({
        public_key: process.env.Flutterwave_public_key,

        tx_ref: t_ref,
        amount: this.form.amount,
        currency: "NGN",
        country: "",
        payment_options: "",
        redirect_url: `${window.location.href}/credit`,
        meta: {
          consumer_id: this.user.id,
          consumer_mac: "",
        },
        customer: {
          email: this.user.email,
          phone_number: this.user.phone,
          name: this.user.name,
        },

        onclose: function () {
          this.error = "";
        },
        customizations: {
          title: "Credit Wallet",
          description: "Crediting user wallet",
          logo: "https://res.cloudinary.com/philzy/image/upload/v1646896866/paylidate-logo_2_lanfvz.png",
        },
      });

      this.fundWallet = false;

      this.loading = false;
    },

    currency(amount) {
      return new Intl.NumberFormat().format(amount);
    },

    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
/* .wallet {
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  width: 500px;
  height: 250px;
}
.useract {
  margin-top: 24px;
}
.wallettitle {
  margin-top: 10px;
  margin-left: 22px;
  width: auto;
}
.walletbalance {
  margin-top: 29px;
}
.fundwallet {
  border-radius: 10px;
  margin-top: 5px;
}
.username {
  margin-top: 44px;
}

.walletusername {
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  margin-left: 22px;
}
.userwalletact {
  margin-left: 200px;
}
.walletusername,
.userwalletact {
  width: auto;
  font-size: 16px;
}
.fundwalletcontainer {
  width: auto;
  margin-left: 170px;
}
.walletsection,
.bonus,
.balance {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
}
.text-subtitle1 {
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  margin-top: 6px;
}
.text-subtitle2 {
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
}

.balancecontainer {
  width: auto;
  margin-left: 22px;
}
.bonuscontainer {
  width: auto;
  margin-left: 260px;
}

@media screen and (max-width: 480px) {
  .walletsection,
  .bonus,
  .balance {
    font-size: 14px;
  }

  .text-subtitle1 {
    font-size: 16px;
  }
  .text-subtitle2 {
    font-size: 14px;
  }
  .wallet {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }

  .fundwalletcontainer {
    width: auto;

  }
  .wallettitle, .balancecontainer, .fundwalletcontainer, .bonuscontainer, .walletusername, .userwalletact
  {
    margin-left: 0px;
  }

  .bonuscontainer {
    width: auto;

  } */

  /**d */
  /* .walletsection, .walletbalance, .useract
  {
    justify-content:space-between;
  }
  .wallethistory {
    display: none;
  }
} */


/**for tablets upwards to hide table with 3 columns */
/* @media only screen and (min-width: 768px) {
  .wallethistoryformobile {
    display: none;
  }
} */

/**for medium screens and upwards table will be disabled */
</style>

