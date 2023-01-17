<template>
  <q-page class="bg-grey-2" padding>
    <DashboardComponent />
  </q-page>
</template>

<script >
import DashboardComponent from 'src/components/dashboard/admin-dashboard.vue';
export default {
  name: 'AdminDashboard',
  components: {
    DashboardComponent
  },

  data(){
    return{

    }
  },

  computed: {
    user: function() { return this.$store.getters["auth/user"]; },
  },

  methods: {

  }

};
</script>

