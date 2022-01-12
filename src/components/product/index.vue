<template>
  <div>
    <q-toolbar class="">
      <q-space />
      <ProductModal />
    </q-toolbar>

    <div class="q-pa-xs row">
      <Product class="col-md-4 col-sm-6 col-xs-12" v-for="(item, index) in dProducts" :key="index" :content="item" />
    </div>

  </div>
</template>

<script>
import Product from './product_card'
import ProductModal from './product_modal'
import { mapGetters } from 'vuex';
export default {
  // name: 'ComponentName',
  components:{
    Product,
    ProductModal
  },
  data () {
    return {}
  },
  computed:{
    ...mapGetters({
      dProducts: 'auth/product',
    }),
  },
  mounted(){
    this.$q.loading.show({
      message: 'Getting All your Products',
      spinnerColor: 'secondary'
    })
    this.$store.dispatch('auth/product')
    this.$q.loading.hide()
    // console.log(this.$router)
  },
}
</script>
