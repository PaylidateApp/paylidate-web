<template>
  <q-layout view="hHr LpR fFf" >
    <q-header v-if="theauth" class="bg-transparent">
      <q-toolbar :class="'text-black q-px-md '" :style="'background-color: rgba(0,0,0,0.1)'">
        <img class="cursor-pointer" src="../statics/paylidate-logo.png" style="max-width: 120px" @click="$router.push({name: 'home'})">
        <q-space />
        <!-- <q-btn no-caps unelevated color="secondary" label="Win ₦2000 Now" class="q-px-sm gt-sm"/> -->
        <Voucher class="gt-sm"/>
        <q-space />
        <q-btn flat no-caps @click="()=>{drawer = true; price = true; dFaq = false; about = false}" label="Pricing" v-if="!price" class="gt-sm" />
        <q-btn flat no-caps @click="()=>{drawer = true; dFaq = true; price = false; about = false}" label="FAQ" v-if="!dFaq" class="gt-sm" />
        <q-btn flat no-caps @click="()=>{drawer = true; about = true; price = false; dFaq = false}" label="About us" v-if="!about" class="gt-sm" />
        <q-btn no-caps flat color="primary" label="Login" class="q-px-sm gt-sm" :to="{name: 'login'}"/>
        <q-btn no-caps unelevated :size="$q.screen.gt.sm?'':'sm'" color="secondary" label="Create an Account" :to="{name: 'register'}" />

        <q-btn flat dense round @click="leftDrawer = !leftDrawer" aria-label="Menu" icon="menu" class="lt-md" />
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="leftDrawer"
        bordered
        :width="250"
        content-class=""
        side="left"
        v-if="theauth"
      >
        <q-scroll-area class="fit">
          <div class="flex flex-center">
            <img class="cursor-pointer" src="../statics/paylidate-logo.png" style="max-width: 200px" @click="$router.push({name: 'home'})">
          </div>
          <q-list class="">

          <q-item
            clickable :to="{name: 'login'}"
          >
            <q-item-section avatar>
              <q-icon name="ion-log-in" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Login</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            @click="drawer = !drawer"
          >
            <q-item-section avatar>
              <q-icon name="ion-pricetags" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Pricing</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a" :href="'mailto:sirlawattah@gmail.com?subject=Paylidate%20Customer%20Support%20'"
          >
            <q-item-section avatar>
              <q-icon name="ion-ios-chatbubbles" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Support</q-item-label>
            </q-item-section>
          </q-item>
          <!-- <q-btn class="full-width q-ma-sm" color="primary" unelevated no-caps @click="drawer = !drawer" aria-label="Menu" label="Pricing" /> -->

          <!-- <price /> -->

          <div class="fixed-bottom text-center" >
            <Voucher />
            <div class="row flex-center">
              <q-btn size="sm" round flat icon="ion-logo-twitter" type="a" :href="'https://twitter.com/paylidate'" target="_blank" />
              <q-btn size="sm" round flat icon="fab fa-facebook-f" type="a" :href="'https://web.facebook.com/paylidate'" target="__blank" />
              <q-btn size="sm" round flat icon="fab fa-instagram" type="a" :href="'https://www.instagram.com/paylidate/?hl=en'" target="_blank" class="q-mr-xs"/>
            </div>
            <div class="text-caption text-bold text-primary"><a class="text-primary" href="tel:+2348066984101">+2348066984101</a></div>
            <div class="text-caption text-grey-7">© 2020 Lotusfort Technologies. <br>All Rights Reserved</div>
          </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

       <q-drawer
        v-model="drawer"
        v-if="theauth"
        bordered
        :width="price?250:400"
        content-class=""
        side="right"
      >
        <q-scroll-area class="fit">
          <!-- <q-btn @click="dDrawer()" color="primary" flat round icon="ion-ios-arrow-forward" size="sm" class="q-ma-sm" v-if="drawer" /> -->
          <price @price="()=>{drawer =!drawer; price=!price}" v-if="price" />
          <FAQ @faq="()=>{drawer =!drawer; dFaq=!dFaq;}" v-if="dFaq" />
          <About @about="()=>{drawer =!drawer; about=!about;}" v-if="about" />
        </q-scroll-area>
      </q-drawer>

    <q-page-container class="bg-white"  >
      <router-view></router-view>
    </q-page-container>



  </q-layout>
</template>

<script>
// import EssentialLink from '../components/common/essentialLinks'
import Voucher from 'components/common/voucher'
import price from 'components/common/actions'
import FAQ from 'components/common/FAQ'
import About from 'components/common/about_us'
export default {
  name: 'LayoutDefault',

  components: {
    price,
    FAQ,
    Voucher,
    About
  },

  data () {
    return {
      leftDrawer: false,
      drawer: false,
      price:false,
      dFaq:false,
      about:false
    }
  },
  methods: {

    dBackground(){
      if(this.$route.name == 'seller') return '#E8F8F3'
      else return '#ffffff'
    },

    dDrawer(){
      // const { drawer, price, dFaq } = this
      this.drawer = !this.drawer
      this.price = !this.price
      this.dFaq = !this.dFaq
    },

  },
  computed: {
    theauth(){
      let myroute = this.$route.name;
      if(
        myroute == 'login' || myroute == 'register' || myroute == 'forgot'
        || myroute == 'view' || myroute == 'checkout' || myroute == 'success'
        || myroute == 'details' || myroute == 'integration' || myroute == 'finish'
        || myroute == 'platform' || myroute == 'install' || myroute == 'bank' || myroute == 'product'
        ){
        return false
      }else{
        return true
      }
    },

  },

}
</script>

<style>
</style>
