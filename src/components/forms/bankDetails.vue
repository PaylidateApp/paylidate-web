<template>
  <div>
    <q-card bordered flat class="my-card" :style="$q.screen.gt.sm ? 'min-width: 400px; min-height:350px' : ''">
      <q-card-section>
        <div class="text-h5 text-center">Bank Details</div>
      </q-card-section>
      <q-card-section class="q-gutter-xs col-md-6 col-sm-12 col-xs-12">
        <q-input outlined dense v-model="form.bank" label="Bank" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" />
        <q-input outlined dense v-model="form.name" label="Account Name" />
      </q-card-section>
      <q-card-actions align="center">
          <q-btn unelevated no-caps color="primary" label="Save Details" @click="makepayment()" />
        </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form:{
        account:'',
        name:'',
        amount:'',
        bank:''
      },
    }
  },

  methods:{
    makepayment(){

    }
  }
}
</script>
