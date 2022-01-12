<template>
  <q-page padding class="flex flex-center bg-accent">
    <!-- content -->
    <Auth />
  </q-page>
</template>

<script>
import Auth from 'components/auth'
export default {
  name: 'Authrntication',
  components:{
    Auth
  },

}
</script>
