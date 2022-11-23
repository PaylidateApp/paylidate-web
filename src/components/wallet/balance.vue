<template>
  <div class="flex flex-center q-pt-xl">
    <div class=" bg-secondary q-pa-lg" style="border-radius: 14px; min-width: 400px">
       
      <div>
        <div class="text-subtitle2 text-white">Paylidate Wallet</div>
        <div class="flex justify-between">
          <div>
            <div class="text-h6 text-weight-bold text-white">Balance NGN 20,000.00</div>
            <div class="text-h6 text-weight-bold text-white">Bonus NGN 20,000.00</div>          
          </div>
          <q-icon size="xl" color="white" name="account_balance_wallet" />
        </div>
        <div class="text-subtitle2 text-white">1234567890</div>
      </div>
    </div>
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