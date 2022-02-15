<template>
  <q-page class="bg-grey-2"  padding>
    <q-splitter
      v-model="splitterModel"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          content-class="text-primary text-left align-left"
          align="left"
          no-caps

        >
        <!-- {{tab}} -->
        <q-item v-for="(item, index) in settingsNav" :key="index" clickable @click="tabChange(item.tab)" v-model="dBtn" :style="'border-right: 2px solid '+btn" >
          <q-item-section >
            <q-item-label>{{item.name}}</q-item-label>
          </q-item-section>
        </q-item>

          <!-- <q-tab class="text-left" name="profile" label="Profile" />
          <q-tab class="text-left" name="password" label="Change Password" />
          <q-tab class="text-left" name="pin" label="Change Transaction Pin" />
          <q-tab class="text-left" name="statement" label="Account Statement" />
          <q-tab class="text-left" name="help" label="Help & Support" /> -->
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="profile">
            <div class="text-h4 q-mb-md">Edit Profile</div>
            <q-card-section class="q-gutter-sm">
              <q-input dense square outlined readonly :value="user.name" label="Name" />
              <q-input dense square outlined readonly :value="user.email" label="Email" />
              <!-- <q-input square outlined readonly :value="card.data.cvv" label="Card CVV" /> -->
              <!-- <q-input square outlined readonly :value="card.data.city +'/'+ card.data.state" label="City/State" /> -->
              <!-- <q-input square outlined readonly :value="card.data.address_1" label="Card Billing Address" /> -->
              <!-- <q-input square outlined readonly :value="card.data.zip_code" label="Card Zip Code" /> -->
            </q-card-section>
             <!-- <q-btn color="white" text-color="black" label="Update Profile" /> -->

          </q-tab-panel>

          <q-tab-panel name="password">
            <div class="text-h4 q-mb-md">Change Password</div>
            <q-card-section class="q-gutter-sm">
              <q-input dense square outlined readonly :value="password.current" label="Current Password" />
              <q-input dense square outlined readonly :value="password.new" label="New Password" />
              <q-input dense square outlined readonly :value="password.confirm_new" label="Confirm New Password" />
              <q-btn color="negative" no-caps label="Change Password" disable/>
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="pin">
            <div class="text-h4 q-mb-md">Change Transaction Pin</div>
            <q-card-section class="q-gutter-sm">
              <q-input dense square outlined readonly :value="pin.current" label="Current Pin/Password" />
              <q-input dense square outlined readonly :value="pin.new" label="New Pin" />
              <q-input dense square outlined readonly :value="pin.confirm_new" label="Confirm New Pin" />
              <q-btn color="primary" no-caps label="Change Pin" disable/>
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="account">
            <div class="text-h4 q-mb-md">Account Details</div>
            <q-card-section class="q-gutter-sm">
              <q-select dense square v-model="bank.bank_code" :options="banks" option-value="code"
                option-label="name" emit-value map-options outlined label="Bank Name" />
              <q-input dense square v-model="bank.account_name" outlined label="Account Name" />
              <q-input dense square type="number" v-model="bank.account_number" outlined label="Account Number" />
              <q-btn v-if="update" color="primary" disable @click="accountDetail()" :loading="loading" no-caps label="update Account Details" />
              <q-btn v-if="!update" color="primary" @click="accountDetail()" :loading="loading" no-caps label="Save Account Details" />
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name="help">
            <div class="text-h4 q-mb-md">Help & Support</div>
            Call <a href="tel:+2348066984101">+2348066984101</a> or email <a href="mailto:hello@paylidate.com">hello@paylidate.com</a>
          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data(){
    return {
      loading : false,
      tab: 'profile',
      update:false,
      splitterModel: 20,
      dBtn:'',
      password:{
        current: '',
        new: '',
        confirm_new: ''
      },
      pin:{
        current: '',
        new: '',
        confirm_new: ''
      },
      bank:{
        bank_name: '',
        account_number: '',
        account_name: '',
        bank_code: ''
      },
      banks:[],

      settingsNav:[
        { name:'Profile', tab:'profile' },
        { name:'Change Password', tab:'password' },
        { name:'Change Transaction Pin', tab:'pin' },
        { name:'Account Details', tab:'account' },
        { name:'Help & Support', tab:'help' }
      ]
    }
  },

  computed: {
  
    user(){return this.$store.getters["auth/user"] },
    user_bank_acc(){return this.bank},
    btn(tab){
      if (this.tab == tab) return '#05202f; background-color: rgba(5, 32, 47, 0.1)'
      else return 'white'
    }
  },

  mounted(){
    this.getBanks()
    this.getUserBankDetails()
  },

  methods: {
    tabChange(tab){
      this.tab = tab
      if (this.tab == tab) return '#05202f; background-color: rgba(5, 32, 47, 0.1)'
      else return 'white'
    },

    async getBanks(){
   
      const req = await this.$axios.get(process.env.Api + '/api/get-banks')
      const res = req.data
      this.banks = res.data;
      console.log(res);
    },

      async getUserBankDetails(){

      const req = await this.$axios.get(process.env.Api + '/api/user-bank/'+ this.user.id)
      const res = req.data.data 

      this.banks.bank_name = res.bank_name,
        this.banks.account_number= res.account_number,
        this.banks.account_name= res.account_name,
        this.banks.bank_code= res.bank_code

        if(res){
         this.update = true
        }
        else{
          this.update = false

        }
     
    
    },

    async accountDetail(){

      let account_number = this.bank.account_number
      let account_name = this.bank.account_name
      let bank_code = this.bank.bank_code
      if(!account_name || account_name.length <3){
        return
      }
      if(!account_number || account_number.length !=10){
        return
      }
      if(!bank_code || bank_code.length !=3){
        return
      }
      let bank_name=this.banks.filter((value)=>{
        return  value.code == this.bank.bank_code
      });

      this.loading = true;

      this.bank.bank_name = bank_name['0'].name
    try{
      const req = await this.$axios.post(process.env.Api + '/api/user-bank', this.bank)
        const res = req.data
        console.log(res)
        if(res){
    this.getUserBankDetails()

          this.loading = false;
          this.$q.notify({message: 'Account details save successfully', color: 'green'})                   

        }
        else{

           this.loading = false;
          this.$q.notify({message: 'An error occured while saving account details', color: 'red'})                   

        }
        }catch(e){
         this.loading = false;
          this.$q.notify({message: 'An error occured while saving account details', color: 'red'})                   
      }
    }
  },
}
</script>
