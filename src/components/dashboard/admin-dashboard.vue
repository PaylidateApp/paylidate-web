<template>
  <div class="q-pa-lg">
    <span>
      <q-card flat class="q-pa-sm bg-transparent">
        <div class="text-h6">Welcome, {{ user.name }}</div>
      </q-card>

      <div class="q-pa-md items-start q-gutter-md">
        <div class="text-h6 ">Overview</div>
        <div class="row full-width justify-between">
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total No. of Users</div>
                <div class="text-h5">
                  {{ dashboardContent.Total_registered_users }}
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="text-black">
                <div class="text-subtitle2">Total No. of Transactions</div>
                <div class="text-h5">
                  {{ dashboardContent.Total_Transactions_completed }}
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total Transactions Amount</div>
                <div class="text-h5">
                   {{ currency(dashboardContent.Total_Transactions_completed_amount) }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row full-width items-start justify-between">
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total No. of Disputes</div>
                <div class="text-h5">{{ dashboardContent.Total_Dispute }}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total No. of Refunds</div>
                <div class="text-h5">{{ dashboardContent.Total_Refund }}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-4 q-pt-sm">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">
                  Total No. of Referrals(By Code)
                </div>
                <div class="text-h5">
                  {{
                    dashboardContent.Total_Referral
                      ? dashboardContent.Total_Referral
                      : "0"
                  }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div
        class="q-py-md row styling text-white"
        style="background-color: #2f80ed"
      >
        <div class="row justify-evenly">
          <div class="col-12 col-md-8 q-pt-sm">
            <q-card-section>
              <div class="text-h6 text-justify text-white">
                Welcome to Paylidate Admin Dashboard
              </div>
              <div class="text-subtitle1 text-justify q-pt-sm">
                This page will keep you updated on all the activities on
                Paylidate. Please if you are graced to manage this admin
                dashboard, do so with utmost diligence. Your users are counting
                on you.
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                class="q-pa-xs"
                color="white"
                text-color="blue"
                size="lg"
                rounded
                no-caps
                label="Learn more"
              />
            </q-card-actions>
          </div>
          <div class="col-12 col-md-4 q-pt-sm">
            <img
              src="../../statics/admin_dashboard_assets/dashboard_img.png"
              style="width: 100%"
            />
          </div>
        </div>
      </div>

      <!-- Wallet -->
      <div class="styling">
        <div class="text-h6 q-my-md">Total Wallet Bal.</div>
        <div class="demo text-h6 q-my-md">
          <div class="q-py-lg">
            NGN {{ dashboardContent.total_Wallet_Amount }}
          </div>
        </div>
        <div class="q-my-md">
          <q-btn
            color="secondary"
            size="md"
            rounded
            no-caps
            label="View more"
          />
        </div>
      </div>

      <!-- List of Disputes -->
      <div class="q-py-md">
        <q-table
          title="Disputes"
          :data="contentDispute"
          :columns="columns"
          row-key="name"
          square
        >
          <template v-slot:top-right>
            <eExport :array="contentDispute" :columns="columns" />
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="transId" :props="props">
                {{ props.row.transaction_id }}
              </q-td>

              <q-td key="initiator" :props="props">
                <span class="text-bold">{{ props.row.user.name }}</span>
              </q-td>

              <q-td key="secParty" :props="props">
                {{ props.row.secParty }}
              </q-td>

              <q-td key="action" :props="props" class="column">
                <q-btn
                  :to="{ name: 'product', params: { slug: props.row.action } }"
                  label="View"
                  class="bg-secondary"
                  color="white"
                  flat
                  rounded
                  size="sm"
                  no-caps
                />
                <!-- <q-btn @click="canceledDelivery(props.row.id)" color="negative" size="xs" no-caps label="Cancel Order" /> -->
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <!-- End of List of Disputes -->

      <!-- List of Transactions -->
      <div class="q-py-md">
        <q-table
          title="Transactions"
          :data="contentTrans"
          :columns="columns2"
          row-key="name"
          square
        >
          <template v-slot:top-right>
            <eExport :array="contentTrans" :columns="columns2" />
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="date" :props="props">
                {{ formatDate(props.row.created_at) }}
              </q-td>

              <q-td key="transId" :props="props">
                {{ props.row.id }}
              </q-td>

              <q-td key="type" :props="props">
                <q-badge color="primary">
                  {{ props.row.product.transaction_type }}
                </q-badge>
              </q-td>

              <q-td key="product" :props="props">
                {{ props.row.product.name }}
              </q-td>

              <q-td key="value" :props="props">
                <q-badge color="negative">
                  {{ currency(props.row.product.price) }}
                </q-badge>
              </q-td>

              <q-td key="commission" :props="props">
                {{
                  props.row.product.referral_amount
                    ? currency(props.row.product.referral_amount)
                    : "N/A"
                }}
              </q-td>

              <q-td key="status" :props="props">
                <q-badge
                  v-if="props.row.accept_transaction == null"
                  color="steal"
                >
                  <!-- Awaiting acceptance -->
                  Pending
                </q-badge>
                <q-badge
                  v-else-if="props.row.accept_transaction == false"
                  color="negative"
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

              <q-td key="action" :props="props" class="column">
                <q-btn
                  :to="{name: 'transaction', params: {T_ref: props.row.transaction_ref}}"
                  label="View"
                  class="bg-secondary"
                  color="white"
                  flat
                  size="sm"
                  no-caps
                />
                <!-- <q-btn @click="canceledDelivery(props.row.id)" color="negative" size="xs" no-caps label="Cancel Order" /> -->
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <!-- End of List of Transactions -->

      <!-- List of Users -->
      <div class="q-py-md">
        <q-table
          title="Users"
          :data="contentUsers"
          :columns="columns3"
          row-key="name"
          square
        >
          <template v-slot:top-right>
            <eExport :array="contentUsers" :columns="columns3" />
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="accStatus" :props="props">
                <q-badge v-if="props.row.active == true" color="positive">
                  Active
                </q-badge>
                <q-badge v-if="props.row.active == false" color="negative">
                  Inactive
                </q-badge>
              </q-td>

              <q-td key="userName" :props="props">
                <span class="text-bold">{{ props.row.name }}</span>
              </q-td>

              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>

              <q-td key="userTag" :props="props" class="column">
                @{{ props.row.name }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <!-- End of List of Users -->
    </span>
  </div>
</template>

<script>
import eExport from "components/common/export";

export default {
  components: {
    eExport,
  },

  data() {
    return {
      login: false,
      dashboardContent: [],
      columns: [
        {
          name: "transId",
          required: true,
          label: "Transaction ID",
          align: "center",
          field: (row) => row.transId,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "initiator",
          align: "left",
          label: "Initiator",
          field: "initiator",
          sortable: true,
        },
        {
          name: "secParty",
          align: "left",
          label: "2nd Party",
          field: "secParty",
          sortable: true,
        },
        { name: "action", align: "center", label: "Action", field: "action" },
      ],
      contentDispute: [],

      columns2: [
        {
          name: "date",
          required: true,
          label: "Date",
          align: "left",
          field: "date",
          sortable: true,
        },
        {
          name: "transId",
          required: true,
          label: "Transaction ID",
          align: "center",
          field: "transId",
          sortable: true,
        },
        {
          name: "type",
          align: "left",
          label: "Type",
          field: "type",
          sortable: true,
        },
        {
          name: "product",
          align: "left",
          label: "Product",
          field: "product",
          sortable: true,
        },
        {
          name: "value",
          align: "left",
          label: "Value",
          field: "value",
          sortable: true,
        },
        {
          name: "commission",
          align: "left",
          label: "Commission",
          field: "commission",
          sortable: true,
        },
        {
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true,
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],
      contentTrans: [],

      rows2: [],
      columns3: [
        {
          name: "accStatus",
          required: true,
          label: "Account Status",
          align: "left",
          field: (row) => row.accStatus,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "userName",
          align: "left",
          label: "User Name",
          field: "userName",
          sortable: true,
        },
        {
          name: "email",
          align: "left",
          label: "Email",
          field: "email",
          sortable: true,
        },
        { name: "userTag", align: "left", label: "User Tag", field: "userTag" },
      ],
      contentUsers: [],
      rows3: [],
    };
  },

  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    account() {
      return this.$store.getters["auth/account"];
    },
  },

  mounted() {
    this.getDashboardData();

    if (!this.$q.localStorage.getItem("paylidate_token")) {
      this.login = false;
    } else {
      this.login = true;
    }
  },

  methods: {
    async getDashboardData() {
      const req = await this.$axios.get(
        process.env.Api + "/api/admin/dashboard"
      );
      const res = req.data;
      console.log(res);
      this.dashboardContent = res.data;
      this.contentDispute = this.dashboardContent.list_Of_Disputes;
      this.contentTrans = this.dashboardContent.list_Of_Transactions;
      this.contentUsers = this.dashboardContent.list_Of_Users;
    },

    currency(amount) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },

    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style lang="sass" scoped>
.my-card
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26)
  border-radius: 10px
  width: 100%
  max-width: 18rem

.text-subtitle2
  font-style: normal
  font-weight: 700
  font-size: 1rem
  line-height: 1.25rem
  text-align: center
  color: #858585
  padding-top: 1rem

.text-subtitle1
  font-style: normal
  font-weight: 400
  font-size: .75rem
  line-height: 1.13rem


.text-h5
  font-style: normal
  font-weight: 700
  font-size: 2rem
  line-height: 2.5rem
  text-align: center
  color: #858585
  padding: 3rem 0px 1.5rem

.text-h6
  font-style: normal
  font-weight: 700
  font-size: 1rem
  line-height: 1.5rem
  color: #858585

.styling
  margin: 1rem 0rem
  padding: 1rem 0rem
  text-align: center
  background: #FFFFFF
  border: 2px solid #F0F0F0
  border-radius: 10px

.styling > div
  padding: 1rem

.demo
  width: 15rem
  height: 7.5rem
  margin: auto
  padding: 1rem
  border: 2px solid #ccc
  border-radius: 10px
  text-align: center
</style>
