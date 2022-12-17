<template>
  <div class="q-pa-md">
    <q-card flat square class="column flex-center">
      <q-card-section class="column flex-center q-gutter-sm">
        <div class="text-h5 text-bold text-dark">Transactions</div>
        <div class="row q-gutter-sm">
          <!-- <sell />
          <buy /> -->
        </div>
      </q-card-section>
    </q-card>
    

    

    <q-table
      title=""
      :data="contents"
      :columns="columns"
      row-key="name"
      square
      :dense="$q.screen.lt.md"
    >
      <template v-slot:top-right>
        <!-- <eExport :array="contents" :columns="columns" /> -->
        <!-- <q-btn unelevated color="primary" icon-right="archive" label="Download Table" no-caps @click="exportTable" /> -->
      </template>

      <template v-slot:body="props" :dense="$q.screen.lt.md">
        <q-tr :props="props" :dense="$q.screen.lt.md">
          <!-- <q-td key="name" :props="props">
            <img :src="props.row.image" style="width: 50px" />
          </q-td> -->

          <q-td
            key="name"
            :props="props"
            :id="'product_' + props.row.product.id"
            @mouseover="showFullText('product_' + props.row.product.id)"
            @mouseout="showSliceText('product_' + props.row.product.id)"
          >
            <span id="showfull" class="hidden">{{
              props.row.product.name
            }}</span>
            <span id="showslice">{{
              props.row.product.name.slice(0, 15)
            }}</span>
          </q-td>
          <q-td key="quantity" :props="props">
            <span class="text-bold">{{ props.row.quantity }}</span>
          </q-td>
          <q-td key="amount" :props="props">
            <q-badge v-if="props.row.amount < 1" color="negative">
              {{ currency(props.row.product.price * props.row.quantity) }}
            </q-badge>
            <q-badge v-else-if="props.row.referer_id" color="negative">
              {{
                currency(
                  parseFloat(props.row.amount) +
                    parseFloat(props.row.referral.amount)
                )
              }}
            </q-badge>
            <q-badge v-else color="negative">
              {{ currency(props.row.amount) }}
            </q-badge>
          </q-td>

          <q-td key="transaction_type" :props="props">
            <q-badge
              v-if="props.row.product.transaction_type === 'buy'"
              color="primary"
            >
              {{ props.row.product.user_id === user.id ? "buy" : "sell" }}
            </q-badge>
            <q-badge
              v-if="props.row.product.transaction_type === 'sell'"
              color="primary"
            >
              {{ props.row.product.user_id === user.id ? "sell" : "buy" }}
            </q-badge>
          </q-td>

          
          <!-- TODO paid unpaid in-dispute complete -->

          <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>

          <q-td key="transaction_status" :props="props">
            <q-badge v-if="props.row.accept_transaction == null" color="steal">
              <!-- Awaiting acceptance -->
              Pending
            </q-badge>
            <q-badge
              v-else-if="props.row.accept_transaction == false"
              color="negetive"
            >
              Not Accepted
            </q-badge>
            <q-badge v-else-if="props.row.status == 0" color="secondary">
              <!-- Transaction accepted but Pending -->
              Accepted
            </q-badge>
            <q-badge v-else-if="props.row.status == 1" color="positive">
              Completed
            </q-badge>
            <q-badge v-else color="negative">
              <!-- Transaction cancelled -->
              Cancelled
            </q-badge>
          </q-td>
          <q-td key="transaction_ref" :props="props">
            <q-btn
              class="text-blue"
              :to="{
                name: 'transaction',
                params: { T_ref: props.row.transaction_ref },
              }"
              flatsize="md"
              no-caps
            >
              view
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import eExport from "components/common/export";
import buy from "components/common/buy";
import sell from "components/common/sell";
import Payment from "components/common/make_payment";
import CreateProduct from "./partials/create_product.vue";
import Disput from "./partials/disput.vue";
export default {
  // name: 'ComponentName',
  components: {
    eExport,
    buy,
    sell,
    Payment,
    CreateProduct,
    Disput,
  },
  data() {
    return {
      columns: [
        // { name: 'src', field: 'src' },
        {
          name: "name",
          label: "Product/Service",
          field: "name",
          align: "left",
          sortable: true,
        },
        {
          name: "quantity",
          label: "Qty",
          field: "transaction",
          sortable: true,
          align: "left",
        },
        {
          name: "amount",
          label: "Price",
          field: "transaction",
          sortable: true,
          align: "left",
        },
        {
          name: "transaction_type",
          label: "Type",
          field: "transaction_type",
          sortable: true,
          align: "center",
        },
        // { name: 'confirmed', label: 'Confirmation', field: 'confirmed', align: 'left', sortable: true },
        // { name: 'payment_status', label: 'Payment', field: 'payment_status',align: 'left', sortable: true },
        //{ name: 'link', label: 'Transaction link', field: '', align: 'center', sortable: true },
        {
          name: "created_at",
          label: "Date Created",
          field: "created_at",
          align: "center",
          sortable: true,
        },
        {
          name: "transaction_status",
          label: "Status",
          field: "transaction",
          align: "left",
          sortable: true,
        },
        {
          name: "transaction_ref",
          label: "Open",
          field: "transaction",
          align: "left",
          sortable: true,
        },
      ],
      contents: [],
      payment_url: `${window.location.href}/product/`,
      copyLink: "Copy link",
    };
  },

  mounted() {
    if (!this.$q.localStorage.getItem("paylidate_token")) {
      this.$router.push({ name: "login" });
    }
    this.getTransactions();
  },
  computed: {
    copyL() {
      return this.copyLink;
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  methods: {
    showFullText: function (id) {
      let parent = document.getElementById(id);
      let showslice = parent.querySelector("#showslice");
      let showfull = parent.querySelector("#showfull");
      showslice.className = "hidden";
      showfull.className = "visible";
    },

    showSliceText: function (id) {
      let parent = document.getElementById(id);
      let showslice = parent.querySelector("#showslice");
      let showfull = parent.querySelector("#showfull");
      showslice.className = "visible";
      showfull.className = "hidden";
    },

    async getTransactions() {
      //console.log('contents');
      this.$q.loading.show({
        message: "Hold on, fetching transaction records",
        spinnerColor: "secondary",
      });
      try {
        const req = await this.$axios.get(process.env.Api + "/api/transaction");
        const res = req.data;

        this.contents = res.data;
        //console.log(this.contents)

        this.$q.loading.hide();
      } catch (err) {
        this.$q.loading.hide();
      } finally {
        this.$q.loading.hide();
      }
    },
    copy_link(T_ref) {
      navigator.clipboard.writeText(
        window.location.origin + "/escrow-transaction/" + T_ref
      );
      this.copyLink = "copied!";
      setTimeout(() => (this.copyLink = "Copy Link"), 2000);
    },
    currency(amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
    sum_ammount(type, user_id) {
      if (this.contents) {
        const sort_ammounts = this.contents.filter(function (item) {
          if (item.payment && item.payment.verified) {
            if (item.payment.user_id != user_id && type === "received") {
              item.product.price = item.referer_id
                ? parseFloat(item.amount) + parseFloat(item.referral.amount)
                : item.amount;
              return item;
            }
            if (item.payment.user_id == user_id && type === "made") {
              return item;
            }
          }
        });
        let sum = sort_ammounts.reduce(
          (accumulator, current) =>
            Number(accumulator) + Number(current.product.price),
          0
        );
        return sum;
      } else {
        return 0;
      }
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    startDelivery(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/delivery/${data}`);
      this.getTransactions();
    },
    orderDelivered(data) {
      this.$axios.get(
        `${process.env.Api}/api/product/status/delivered/${data}`
      );
      this.getTransactions();
    },
    orderRecieved(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/recieved/${data}`);
      this.getTransactions();
    },
    canceledDelivery(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/canceled/${data}`);
      this.getTransactions();
    },
  },
};
</script>
