<template>
  <div>
    <q-btn size="sm" color="warning" label="Open Dispute" @click="open = true" />
    <q-dialog v-model="close">
      <q-card>
        <q-card-section>
          <div class="text-h6">How to initiate a dispute</div>
        </q-card-section>
        <q-card-section>
            <!-- 1. Sale/Delivery is incomplete but the seller has clicked on "confirm delivery"
            2. Sale/Delivery is complete but the product delivered is different from what was ordered. -->


            <div class="text-bold">
              Send an email to paylidate@gmail.com with the following details:
            </div>

            <div>Email Subject: Dispute</div>

            <div>Cause of dispute:</div>

            <div>Product Link: </div>

        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat size="sm" label="Cancel" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="open" persistent>
      <q-card class="my-card" :style="ModelStyle">

        <q-form class="q-gutter-md" >
          <q-card-section class="q-py-sm">            
            <div class="text-caption ">OPEN DISPUTE</div>
          </q-card-section>
          
          <q-card-section class="q-gutter-sm">
            <p class="">Please ensure you explain this issue in detail. (The other party will get a notification about this dispute and will be able to respond)</p>
            <q-input outlined dense v-model="form.subject" :rules="schema.subject" label="Dispute Subject*"/>
            <q-input type="textarea" outlined dense v-model="form.description" :rules="schema.description" label="Describe Your Issue*" />
          
          </q-card-section>
          
          <q-card-actions align="right">
           <q-btn flat color="positive" size="md" :loading="loading" class="q-mx-sm" label="Open Dispute" @click="openDispute()" />
          <q-btn flat color="red" size="md" label="Cancel" v-close-popup /> 
          </q-card-actions>
        </q-form>
      </q-card>

    <!-- <Signup />  -->

    </q-dialog>

  </div>
</template>

<script>
import disputeSchema from '../../../validation/dispute'

export default {
  props:['transaction'],
  data() {
    return {
      schema: disputeSchema,
      close: false,
      open: false,
      loading: false,
      error: null,
      form: {
        subject: null,
        description: null,
        transaction: this.transaction
      }
    }
  },

    methods:{

    async openDispute(){
      let subject = this.form.subject
      let description = this.form.description
      if(!subject && !description){
        
        this.$q.notify({message: 'Error:: Dispute Subject and Issue desctription can not be empty', color: 'red', position: 'top', type: 'negetive' })
        return
      }
      if(!subject){
        
        this.$q.notify({message: 'Error:: Dispute Subject can not be empty', color: 'red', position: 'top', type: 'negetive' })
        return
      }
      if(!description){
        
        this.$q.notify({message: 'Error:: Issue desctription can not be empty', color: 'red', position: 'top', type: 'negetive' })
        
        return
      }
      this.$q.loading.show({
        message: 'Hold on, Openning Dispute',
        spinnerColor: 'secondary'
      })

      try {
        const req = await this.$axios.post(process.env.Api + '/api/open-dispute', this.form)
        
        const res = req.data 
        //console.log(res)       
        this.$q.loading.hide()
        this.open = false
        this.$q.notify({message: 'Dispute successfully opened', color: 'green', position: 'top', type: 'positive' })
        this.loading = false
        this.form.subject = null
        this.form.description = null
       

        }catch(error){
          //console.log(error.response.data.message)
         this.$q.loading.hide();
          this.loading = false
        this.$q.notify({message: 'Error:: Dispute not open', color: 'red', position: 'top', type: 'negetive' })


        }
        finally{
        
        this.$q.loading.hide();
        this.loading = false

        }
    },


    
  },

   computed:{

     ModelStyle(){ return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px"},
  },
}
</script>

<style>

</style>
