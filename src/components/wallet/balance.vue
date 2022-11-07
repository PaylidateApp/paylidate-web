<template>
  <div class="flex flex-center q-pt-xl" style="border-radius: 100">
    <q-card class="my-card q-pl-xs" style="border-radius: 20px">
       
      <q-card-section>
        <div class="text-h5 text-weight-medium text-blue-grey-4">MY BALANCE</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { authRuleMixin } from '../mixins/index';
export default {
  // name: 'ComponentName',
  mixins:[authRuleMixin],
  data () {
    return {
      loading: false,
      wallet: null,     
      
    }
  },
  mounted() {
    if (!this.$q.localStorage.getItem('paylidate_token')) {
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
        message: 'Hold on, fetching records',
        spinnerColor: 'secondary'

      })
      try {
        const req = await this.$axios.get(process.env.Api + '/api/wallet')
        const res = req.data
        console.log(res);

        this.wallet = res;

        this.$q.loading.hide();
      } catch (error) {
        this.$q.loading.hide();
        this.$q.notify({ message: 'Error while trying to fatch record', color: 'red' })
        //console.log(error.response.data.message);
      }
      finally {
        this.$q.loading.hide();
      }

    },


  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 400px

</style>