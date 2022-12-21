<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="" style="background-color: white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn to="/" flat dense stack no-caps>
            <img src="../statics/paylidate-logo.png" style="max-width: 150px" />
          </q-btn>
        </q-toolbar-title>

        <div v-if="isLoggedIn" class="row">
          <!-- <q-btn  color="primary" size="13px" style="max-height: 33px; max-width: 104px; margin-top: 5px;" class="q-mx-sm q-pa-none"  v-if="isLoggedIn" no-caps label="Instant Pay" :to="{name: 'instant_pay'}" /> -->
          <!-- <ActivateCard v-if="!account || !Object.keys(account).length " /> -->
          <q-btn
            color="black"
            @click="userMode(true)"
            flat
            no-caps
            label="Admin Mode"
            v-if="false"
          />
          <q-btn
            color="black"
            @click="userMode(true)"
            flat
            no-caps
            label="Admin Mode"
            v-if="false"
          />
          <q-btn
            color="black"
            @click="userMode(false)"
            flat
            no-caps
            label="User Mode"
            v-if="false"
          />
          <q-btn
            color="black"
            flat
            no-caps
            label="Escrow"
            :to="{ name: 'escrow' }"
            v-if="$q.screen.gt.xs"
          />
          <!-- <Notifications class="q-mx-sm"/> -->
          <Profile v-if="user && Object.keys(user).length" :user="user" />
        </div>

        <div v-else class="q-gutter-y-xs">
          <a href="escrow-transactions">
            <q-btn color="black" flat no-caps label="Escrow" v-if="$q.screen.gt.xs" />
          </a>
          <a href="#support">
            <q-btn color="black" flat no-caps label="Support" v-if="$q.screen.gt.xs" />
          </a>
          <a href="about">
            <q-btn color="black" flat no-caps label="About Us" v-if="$q.screen.gt.xs" />
          </a>
          <a href="instant-pay">
            <q-btn
              color="black"
              flat
              no-caps
              tag="a"
              label="Instant Pay"
              v-if="$q.screen.gt.xs"
            />
          </a>
          <a href="faq">
            <q-btn color="black" flat no-caps label="FAQ" v-if="$q.screen.gt.xs" />
          </a>
          <span class="q-gutter-x-xs">
            <q-btn
              color="black"
              size="sm"
              v-if="isLoggedIn"
              no-caps
              label="Instant Pay"
              :to="{ name: 'instant_pay' }"
            />
            <q-btn
              color="secondary"
              size="sm"
              no-caps
              label="Signup"
              :to="{ name: 'register' }"
            />
            <q-btn
              color="black"
              size="sm"
              no-caps
              label="Login"
              :to="{ name: 'login' }"
            />
          </span>
        </div>
        <q-btn
          color="secondary"
          flat
          dense
          round
          v-if="$q.screen.lt.sm"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.lt.sm"
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      behavior="mobile"
      :width="250"
    >
      <q-list>
        <q-item-label header class="text-secondary text-bold"> </q-item-label>

        <EssentialLink
          v-for="(link, index) in dashboardMenu"
          :key="index"
          v-bind="link"
          v-if="linkStatus(link.is_authenticated)"
        />

        <LogOut v-if="isLoggedIn" :variant="'large'" class="fixed-bottom" />
      </q-list>
    </q-drawer>

    <!-- v-if="isLoggedIn && $q.screen.gt.xs" -->
    <q-drawer
      v-if="isLoggedIn && $q.screen.gt.xs && theauth"
      v-model="leftDrawerOpen"
      behavior="desktop"
      bordered
      show-if-above
      :width="200"
    >
      <q-list>
        <q-item-label header class="text-secondary text-bold">
          <!-- Welcome  {{user.name}} -->
        </q-item-label>
        <template v-if="adminMode">
          <EssentialLink
            v-for="(link, index) in adminDashboardMenu"
            :key="index"
            v-bind="link"
            v-if="linkStatus(link.is_authenticated)"
          />
        </template>
        <template v-else>
          <EssentialLink
            v-for="(link, index) in dashboardMenu"
            :key="index"
            v-bind="link"
            v-if="linkStatus(link.is_authenticated)"
          />
        </template>
        <LogOut v-if="isLoggedIn" :variant="'large'" class="fixed-bottom" />
      </q-list>
    </q-drawer>

    <q-dialog v-model="instantPay">
      <q-card>
        <q-card-section class="q-gutter-x-xs">
          <q-btn
            color="secondary"
            size="sm"
            no-caps
            label="Transfer money"
            :to="{ name: 'instant_pay' }"
          />
          <q-btn
            color="black"
            size="sm"
            no-caps
            label="Withdraw money"
            :to="{ name: 'recieve_instant_funds' }"
          />
        </q-card-section>
      </q-card>
    </q-dialog>



    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated v-if="display" class="footer">
      <q-toolbar>
        <q-toolbar-title class="footertitle">What happens when you make a payment with Paylidate?</q-toolbar-title>
      </q-toolbar>

      <div class="row footercontent">
        <div class="col-xs-3 col-sm-3 col-md-3 ">
             <div>
              <q-img
      src="../assets/icons/mdi_bell-check.png"
      spinner-color="white"
      style="height: 50px; max-width: 50px"
    />
             </div>

             <div style="width: 144px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px">
            1. &nbsp;&nbsp; The seller is notified of the payment
             </div>
        </div>

        <div class="col-xs-3 col-sm-3 col-md-3 ">

          <div>
              <q-img
      src="../assets/icons/padlock.png"
      spinner-color="white"
      style="height: 50px; max-width: 50px"
    />
             </div>

             <div style="width: 105px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px">
            2. &nbsp;&nbsp; The payment held in escrow
             </div>
        </div>

        <div class="col-xs-3 col-sm-3 col-md-3 ">
          <div>
              <q-img
      src="../assets/icons/mdi_truck-delivery.png"
      spinner-color="white"
      style="height: 50px; max-width: 50px"
    />
             </div>

             <div style="width: 145px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px">
              3. &nbsp;&nbsp;The seller to deliver what was agreed upon

             </div>
        </div>

        <div class="col-xs-3 col-sm-3 col-md-3 ">
          <div>
              <q-img
      src="../assets/icons/cash.png"
      spinner-color="white"
      style="height: 50px; max-width: 50px"
    />
             </div>

             <div style="width: 210px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px">
              4. &nbsp;&nbsp;On confirmation of delivery, the payment is released to the seller
             </div>
        </div>
      </div>

      <div class="row escrowagreement">
        <div class="col-xs-12 col-sm-12 col-md-12">
          Please click <a href="#" class="escrowagreementlink">here</a> to read through the escrow <a href="#" class="escrowagreementlink">agreement</a> if you haven’t done so
        </div>
      </div>

      <div class="row paymentsecurity">
        <div class="col-xs-12 col-sm-12 col-md-12">
          Your payment with paylidate is secured by Flutterwave
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import comingSoon from "components/common/comingSoon";
import Notifications from "components/layout/notification";
import Profile from "components/layout/profile";
import LogOut from "components/auth/logout.vue";
import ActivateCard from "components/cards/partials/activate_card";
export default {
  name: "MainLayout",

  components: {
    EssentialLink,
    LogOut,
    Notifications,
    Profile,
    ActivateCard,
    comingSoon,
  },

  data() {
    return {
      instantPay: false,
      display: false,
      leftDrawerOpen: false,
      name: "",
      mail: {
        title: "App Support",
        link:
          "mailto:paylidatesupport@lotusfort.com?subject=Paylidate%20Customer%20Support",
      },

      dashboardMenu: [
        {
          title: "Escrow",
          caption: "",
          icon: "verified_user",
          link: "#escrow",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "Support",
          caption: "",
          icon: "contact_support",
          link: "#support",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "About Us",
          caption: "",
          icon: "class",
          link: "#about",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "Team",
          caption: "",
          icon: "group",
          link: "#team",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "FAQ",
          caption: "",
          icon: "quiz",
          link: "#faq",
          is_active: true,
          is_authenticated: false,
        },

        {
          title: "Register",
          caption: "",
          icon: "how_to_reg",
          link: "register",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "Login",
          caption: "",
          icon: "login",
          link: "login",
          is_active: true,
          is_authenticated: false,
        },
        {
          title: "Dashboard",
          caption: "",
          icon: "verified_user",
          link: "user-dashboard",
          is_active: true,
          is_authenticated: true,
        },
        // {
        //   title: 'Products',
        //   caption: '',
        //   icon: 'production_quantity_limits',
        //   link: 'products',
        //   is_active: false,
        //   is_authenticated: true
        // },
        // {
        //   title: 'Home',
        //   caption: '',
        //   icon: 'foundation',
        //   link: 'home',
        //   is_active: true,
        //   is_authenticated: true
        // },
        {
          title: "Wallet",
          caption: "",
          icon: "account_balance_wallet",
          link: "wallet",
          is_active: false,
          is_authenticated: true,
        },
        //{
        //  title: 'Instant Pay',
        //  caption: '',
        //  icon: 'payments',
        //  link: 'instant-pay',
        //  is_active: true,
        //  is_authenticated: true
        //},

        // {
        //   title: 'Trade Points',
        //   caption: '',
        //   icon: 'savings',
        //   link: 'wallet',
        //   is_active: false,
        //   is_authenticated: true
        // },
        {
          title: "Referral",
          caption: "",
          icon: "account_balance_wallet",
          link: "referral",
          is_active: false,
          is_authenticated: true,
        },

        {
          title: "Settings",
          caption: "",
          icon: "settings",
          link: "settings",
          is_active: true,
          is_authenticated: true,
        },
        // {
        //   title: 'Crypto',
        //   caption: 'coming soon',
        //   icon: 'fa fa-coins',
        //   link: 'crypto',
        //   is_active: false
        // },
        // {
        //   title: 'Gift Card',
        //   caption: 'comming soon',
        //   icon: 'card_giftcard',
        //   link: 'gift-card',
        //   is_active: false
        // },
      ],

      adminDashboardMenu: [
        {
          title: "Dashboard",
          caption: "",
          icon: "verified_user",
          link: "#escrow",
          is_active: true,
          is_authenticated: true,
        },
        {
          title: "Users",
          caption: "",
          icon: "group",
          link: "#virtual_card",
          is_active: true,
          is_authenticated: true,
        },
        {
          title: "Transaction",
          caption: "",
          icon: "class",
          link: "#about",
          is_active: true,
          is_authenticated: true,
        },
        {
          title: "Disputes",
          caption: "",
          icon: "group",
          link: "#team",
          is_active: true,
          is_authenticated: true,
        },
        {
          title: "Support Tickets",
          caption: "",
          icon: "quiz",
          link: "#faq",
          is_active: true,
          is_authenticated: true,
        },
      ],
    };
  },

  computed: {
    adminMode() {
      return this.$q.localStorage.getItem("user_mode");
    },
    displayfooter() {
      if ( this.$route.path == "/products")
      {
        return this.display = !this.display;
      }
    },

    user() {
      return this.$store.getters["auth/user"];
    },
    isLoggedIn() {
      return this.$store.state.auth.token;
    },
    account() {
      return this.$store.getters["auth/account"];
    },
    theauth() {
      let myroute = this.$route.name;
      if (
        myroute == "login" ||
        myroute == "register" ||
        myroute == "forgot" ||
        myroute == "view" ||
        myroute == "checkout" ||
        myroute == "success" ||
        myroute == "details" ||
        myroute == "integration" ||
        myroute == "finish" ||
        myroute == "platform" ||
        myroute == "install" ||
        myroute == "bank" ||
        myroute == "product" ||
        myroute == "transaction" ||
        myroute == "disputes" ||
        myroute == "refer_product"
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.displayfooter();
  },
  methods: {
    linkStatus(status) {
      if (status && this.$store.state.auth.token) {
        return true;
      } else if (status && !this.$store.state.auth.token) {
        return false;
      } else if (!status && !this.$store.state.auth.token) {
        return true;
      }
      return false;
    },

    userMode(mode) {
      this.$q.localStorage.set("user_mode", mode);
    },


  },
};
</script>

<style  scoped>
a {
  text-decoration: none;
  color: inherit;
}

.footer {
  height: 258px;
  position: inherit;
  background: #f8f8f8;
  margin-top:-10%;
}
.footertitle
{
  color: black;
  text-align:center;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
}
.footercontent, .escrowagreement, .paymentsecurity
{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 12px;
text-align: center;

color: #000000;

}
.escrowagreement
{
  margin-top:42px;
}

.paymentsecurity
{
  margin-top:33px;
}

.escrowagreementlink
{
  color: #EB6117;
  text-decoration: none;

}

.escrowagreementlink:hover
{
  color: #EB6117;
}
</style>
