<template>

<div class="q-pa-lg">
    <span>
      <q-card flat class="q-pa-sm bg-transparent">
        <div class="text-h6">
          Welcome, {{ user.name }}
        </div>
      </q-card>

      <div class="q-pa-md items-start q-gutter-md">
        <div class="text-h2">Overview</div>
        <div class="row full-width items-start justify-between">
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total Number of Users</div>
                <div class="text-h5">1,000,000.00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="text-black">
                <div class="text-subtitle2">Total Number of Transactions</div>
                <div class="text-h5">40,000,000.00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total Transactions Amount</div>
                <div class="text-h5">400,000,000.00</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row full-width items-start justify-between">
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total Number of Disputes</div>
                <div class="text-h5">10,000,000.00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">Total Number of Refunds</div>
                <div class="text-h5">9,000,000.00</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card class="my-card">
              <q-card-section class="bg-white text-black">
                <div class="text-subtitle2">
                  Total Number of Referrals(By Code)
                </div>
                <div class="text-h5">500,000.00</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <div class="q-pa-md row styling text-white" style="background-color:#2F80ED;">
        <div class="row justify-evenly">
          <div class="col-8">
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
              <q-btn class="q-pa-xs" color="white" text-color="blue" size="lg" rounded no-caps label="Learn more" />
            </q-card-actions>
          </div>
          <div class="col-4">
            <img
            src="../../statics/admin_dashboard_assets/dashboard_img.png"
            style="width: 320px;"
          />
          </div>
        </div>
      </div>

      <!-- Wallet -->
      <div class="styling">
        <div class="text-h6 q-my-md">Wallet</div>
        <div class="demo text-h6 q-my-md">
          <div class="q-py-lg">NGN 12,000,000,000.00</div>
        </div>
        <div class="q-my-md">
          <q-btn color="secondary" size="md" rounded no-caps label="View more" />
        </div>
      </div>

      <!-- Disputes -->
      <div class="styling q-pa-md">
        <q-table
          title="Disputes"
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
        <div class="q-my-md">
          <q-btn color="secondary" size="md" rounded no-caps label="View more" />
        </div>
      </div>
      <!-- End of Disputes -->

      <!-- Transactions -->
      <div id="transaction" class="styling q-pa-md">
        <q-table
          title="Transactions"
          :rows="rows2"
          :columns="columns2"
          row-key="name"
        />
        <div class="q-my-md">
          <q-btn color="secondary" size="md" rounded no-caps label="View more" />
        </div>
      </div>
      <!-- End of Transactions -->
    </span>
  </div>
</template>

<script>

export default {

  data() {
    return {
        login: false,
      columns: [
        {
          name: "transId",
          required: true,
          label: "Transaction ID",
          align: "left",
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
        { name: "action", align: "left", label: "Action", field: "action" },
      ],

      rows: [
        {
          transId: "qrt109998020201",
          initiator: "Realtech Computers",
          secParty: "Vera",
          action: "View",
        },
        {
          transId: "qrt107267189763",
          initiator: "Ibrahim Abdulhameed",
          secParty: "Hajiya Asabe",
          action: "View",
        },
        {
          transId: "qrt10999828763",
          initiator: "Iyawo Restuarant",
          secParty: "Paul Walker",
          action: "View",
        },
        {
          transId: "qrt10999000000",
          initiator: "Nurudeen & Associates",
          secParty: "Abigail Johnson Peter",
          action: "View",
        },
        {
          transId: "qrt187283928763",
          initiator: "Spoutes Collections",
          secParty: "Mr. Thomas Ayowale",
          action: "View",
        },
        {
          transId: "qrt109990948273",
          initiator: "Samsung Mobile",
          secParty: "Peter Piper",
          action: "View",
        },
      ],

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
          align: "left",
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
          align: "left",
          label: "Status",
          field: "status",
          sortable: true,
        },
        { name: "action", align: "left", label: "Action", field: "action" },
      ],

      rows2: [
        {
          date: "10/09/21",
          transId: "qrt109998020201",
          type: "Product",
          product: "HP Laptop",
          value: "NGN 150,000.00",
          commission: "NGN 2,000.00",
          status: "Completed",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt107267189763",
          type: "Services",
          product: "Legal Representation",
          value: "NGN 40,000.00",
          commission: "NGN 300.00",
          status: "In Progress",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt10999828763",
          type: "Services",
          product: "Car Repairs",
          value: "NGN 40,000.00",
          commission: "NGN 300.00",
          status: "Failed",
          action: "View",
        },
        {
          date: "10/09/21",
          transId: "qrt10999828763",
          type: "Product",
          product: "Suits",
          value: "NGN 40,000.00",
          commission: "NGN 300.00",
          status: "Failed",
          action: "View",
        },
      ],
    };
  },

  computed: {
    user(){return this.$store.getters["auth/user"] },
    account(){ return this.$store.getters["auth/account"] }
  },

  mounted() {
    this.getProduct();

      if(!this.$q.localStorage.getItem('paylidate_token')) {
        this.login = false
        }
    else {
        this.login = true

    }
  },

  methods: {
    async getProduct(){
      const req = await this.$axios.get(process.env.Api + '/api/product')
      const res = req.data
      console.log(res)
      this.contents = res.data;
    },

    currency(amount){
      return (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount));
    },

    formatDate(dateString){
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26)
  border-radius: 10px
  width: 100%
  max-width: 300px

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
  margin: 1rem
  padding: 1rem
  text-align: center
  background: #FFFFFF
  border: 2px solid #F0F0F0
  border-radius: 10px

.styling > div
  padding: 1rem

.demo
  width: 300px
  height: 120px
  margin: auto
  padding: 1rem
  border: 2px solid #ccc
  border-radius: 10px
  text-align: center
</style>
