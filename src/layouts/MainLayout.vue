Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@philzy94 
syflex
/
paylidate_app
Private
Code
Issues
Pull requests
Actions
Projects
Security
Insights
paylidate_app/src/layouts/MainLayout.vue
@ferdie213
ferdie213 more on landing page responsiveness
Latest commit c188fea 4 hours ago
 History
 3 contributors
@philzy94@ferdie213@syflex
414 lines (361 sloc)  11.3 KB

<template>
  <q-layout view="hHh Lpr lFf">

    <q-header class="gt-sm"
      style="background-image: linear-gradient(to right, #FFF4D8 -0.12%, #FFD0B9 96.86% ); width: 100%;">
      <q-toolbar>

        <q-toolbar-title>
          <q-btn :to=" {name: isLoggedIn ? 'home' : 'index'}" flat dense stack no-caps>
            <img src="../statics/paylidate-logo.png" style="max-width: 100%">
          </q-btn>
        </q-toolbar-title>

        <div v-if="isLoggedIn" class="row">
          <!-- <ActivateCard v-if="!account || !Object.keys(account).length " /> -->
          <q-btn color="black" @click="userMode(true)" flat no-caps label="Admin Mode" v-if="false" />
          <q-btn color="black" @click="userMode(false)" flat no-caps label="User Mode" v-if="false" />
          <q-btn color="black" flat no-caps label="Escrow" :to="{name: 'escrow'}" v-if="$q.screen.gt.xs" />
          <!-- <Notifications class="q-mx-sm"/> -->
          <Profile v-if="user &&  Object.keys(user).length " :user="user" />
        </div>

        <div v-else class="row flex justify-between" style="width: 85%">

          <div class="col-7">
            <div class="nav">
              <a href="#escrow">Escrow</a>
              <a href="#support">Support</a>
              <a href="https://www.paylidate.com/about">About Us</a>
              <a href="https://www.paylidate.com/faq" style="text-align: center;">FAQ</a>
              <a href="#instant_pay">Instant Pay</a>
            </div>
          </div>
          <div class="col-5" style="padding: .9rem 0rem .9rem 9.3rem;">
            <span class="q-gutter-x-xs">
              <q-btn no-caps rounded-borders padding=".625rem 1.625rem" size=".875rem" class="Montserrat"
                color="secondary" label="Sign Up" :to="{name: 'register'}" />
              <q-btn class="Montserrat" rounded-borders padding=".625rem 1.625rem" size=".875rem" color="primary"
                no-caps label="Login" :to="{name: 'login'}" />
            </span>
          </div>
        </div>

        <q-btn color="secondary" flat dense round v-if="isLoggedIn && $q.screen.lt.sm && theauth" icon="menu"
          aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

      </q-toolbar>
    </q-header>

    <q-header class="lt-md"
      style="background-image: linear-gradient(to right, #FFF4D8 -0.12%, #FFD0B9 96.86% ); border-bottom: 1px solid #ecd2aa;">
      <q-toolbar>

        <q-toolbar-title>

          <img src="../statics/paylidate-logo.png" style="width: 95px; height: 30px;">

        </q-toolbar-title>

        <q-btn color="primary" flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="drag_handle" />


        <!-- <q-btn flat dense round v-if="isLoggedIn && $q.screen.lt.sm && theauth" icon="drag_handle"
          aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->


      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" :width="200" :breakpoint="500" overlay bordered class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list>

          <div v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </div>

        </q-list>
      </q-scroll-area>
    </q-drawer>



    <q-drawer v-if="$q.screen.lt.sm" class="black" :breakpoint="500" overlay v-model="leftDrawerOpen" show-if-above
      side="left" behavior="mobile" :width="350">
      <q-list>
        <q-item-label header class="text-secondary text-bold">
        </q-item-label>


        <EssentialLink v-for="(link, index) in dashboardMenu" :key="index" v-bind="link"
          v-if="linkStatus(link.is_authenticated)" />


        <LogOut v-if="isLoggedIn" :variant="'large'" class="fixed-bottom" />
      </q-list>
    </q-drawer>

    <!-- v-if="isLoggedIn && $q.screen.gt.xs" -->
    <q-drawer v-if="isLoggedIn && $q.screen.gt.xs && theauth" v-model="leftDrawerOpen" behavior="desktop" bordered
      show-if-above :width="200">
      <q-list>
        <q-item-label header class="text-secondary text-bold">
          <!-- Welcome  {{user.name}} -->
        </q-item-label>
        <template v-if="adminMode">
          <EssentialLink v-for="(link, index) in adminDashboardMenu" :key="index" v-bind="link"
            v-if="linkStatus(link.is_authenticated)" />
        </template>
        <template v-else>
          <EssentialLink v-for="(link, index) in dashboardMenu" :key="index" v-bind="link"
            v-if="linkStatus(link.is_authenticated)" />
        </template>
        <LogOut v-if="isLoggedIn" :variant="'large'" class="fixed-bottom" />
      </q-list>
    </q-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script >
import EssentialLink from 'components/EssentialLink.vue'
import comingSoon from 'components/common/comingSoon'
import Notifications from 'components/layout/notification'
import Profile from 'components/layout/profile'
import LogOut from 'components/auth/logout.vue'
import ActivateCard from 'components/cards/partials/activate_card'
export default {
  name: 'MainLayout',
  components: {
    EssentialLink, LogOut, Notifications, Profile, ActivateCard, comingSoon
  },
  data() {
    return {
      leftDrawerOpen: false,
      name: '',
      mail: {
        title: 'App Support',
        link: 'mailto:paylidatesupport@lotusfort.com?subject=Paylidate%20Customer%20Support',
      },
      dashboardMenu: [
        {
          title: 'Escrow',
          caption: '',
          icon: 'verified_user',
          link: '#escrow',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'Support',
          caption: '',
          icon: 'credit_card',
          link: '#contact',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'About Us',
          caption: '',
          icon: 'class',
          link: '#about',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'Instant Pay',
          caption: '',
          icon: 'payment',
          link: '#instant',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'FAQ',
          caption: '',
          icon: 'quiz',
          link: '#faq',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'Register',
          caption: '',
          icon: 'how_to_reg',
          link: 'register',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'Login',
          caption: '',
          icon: 'login',
          link: 'login',
          is_active: true,
          is_authenticated: false
        },
        {
          title: 'Escrow Service',
          caption: '',
          icon: 'verified_user',
          link: 'escrow-transactions',
          is_active: true,
          is_authenticated: true
        },
        {
          title: 'Products',
          caption: '',
          icon: 'production_quantity_limits',
          link: 'products',
          is_active: false,
          is_authenticated: true
        },
        // {
        //   title: 'Home',
        //   caption: '',
        //   icon: 'foundation',
        //   link: 'home',
        //   is_active: true,
        //   is_authenticated: true
        // },
        {
          title: 'Wallet',
          caption: '',
          icon: 'account_balance_wallet',
          link: 'wallet',
          is_active: false,
          is_authenticated: true
        },
        {
          title: 'Trade Points',
          caption: '',
          icon: 'savings',
          link: 'wallet',
          is_active: false,
          is_authenticated: true
        },
        {
          title: 'Referral',
          caption: '',
          icon: 'account_balance_wallet',
          link: 'referral',
          is_active: false,
          is_authenticated: true
        },
        {
          title: 'Settings',
          caption: '',
          icon: 'settings',
          link: 'settings',
          is_active: true,
          is_authenticated: true
        },
        // {
        //   title: 'Crypto',
        //   caption: 'comming soon',
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
          title: 'Dashboard',
          caption: '',
          icon: 'verified_user',
          link: '#escrow',
          is_active: true,
          is_authenticated: true
        },
        {
          title: 'Users',
          caption: '',
          icon: 'group',
          link: '#virtual_card',
          is_active: true,
          is_authenticated: true
        },
        {
          title: 'Transaction',
          caption: '',
          icon: 'class',
          link: '#about',
          is_active: true,
          is_authenticated: true
        },
        {
          title: 'Disputes',
          caption: '',
          icon: 'group',
          link: '#team',
          is_active: true,
          is_authenticated: true
        },
        {
          title: 'Support Tickets',
          caption: '',
          icon: 'quiz',
          link: '#faq',
          is_active: true,
          is_authenticated: true
        },
      ]
    }
  },
  computed: {
    adminMode() { return this.$q.localStorage.getItem('user_mode') },
    user() { return this.$store.getters["auth/user"] },
    isLoggedIn() { return this.$store.state.auth.token },
    account() { return this.$store.getters["auth/account"] },
    theauth() {
      let myroute = this.$route.name;
      if (
        myroute == 'login' || myroute == 'register' || myroute == 'forgot'
        || myroute == 'view' || myroute == 'checkout' || myroute == 'success'
        || myroute == 'details' || myroute == 'integration' || myroute == 'finish'
        || myroute == 'platform' || myroute == 'install' || myroute == 'bank' || myroute == 'product'
        || myroute == 'transaction' || myroute == 'disputes' || myroute == 'refer_product'
      ) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    linkStatus(status) {
      if (status && this.$store.state.auth.token) {
        return true
      } else if (status && !this.$store.state.auth.token) {
        return false
      } else if (!status && !this.$store.state.auth.token) {
        return true
      }
      return false
    },
    userMode(mode) {
      this.$q.localStorage.set('user_mode', mode);
    }
  },
}
</script>

<style>
.nav {
  text-align: left;
  padding-top: 30px;
  padding-bottom: 15px;
}

.nav a {
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  width: 95px;
  height: 60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #76716F;
}
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
paylidate_app/MainLayout.vue at update · syflex/paylidate_app