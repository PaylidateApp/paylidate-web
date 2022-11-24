<template>
  <div class="flex flex-center q-pt-xl">
    <div class=" bg-primary q-pa-md" style="border-radius: 14px; min-width: 370px">
       
      <div>
        <div class="text-subtitle1 text-secondary">Paylidate Wallet</div>
        <div class="flex justify-between q-my-md">
          <div>
            <div class="row flex-center no-padding q-gutter-sm">
              <div class="text-secondary text-center text-uppercase">
                <div class="text-subtitle1 text-bold"><s>N</s>20,000.00</div>
                <div style="font-size: 10px">BALANCE</div>
              </div>
              <q-separator spaced vertical dark />
              <div class="text-secondary text-center text-uppercase">
                <div class="text-subtitle1 text-bold"><s>N</s>20,000.00</div>
                <div style="font-size: 10px">BONUS</div>
              </div>
            </div>
          </div>
          <q-icon size="xl" color="secondary" name="account_balance_wallet" />
        </div>
        <div class="text-subtitle1 text-secondary">1234567890</div>
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