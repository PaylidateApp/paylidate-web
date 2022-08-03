<template>
  <div>
    <q-btn v-if="!alert" round dense flat color="primary" icon="ion-information-circle"  @click="alert = true" />
    <q-dialog v-model="alert" no-backdrop-dismiss no-esc-dismiss :position="content.position">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{content.title}}</div>
        </q-card-section>
        <q-card-section class="text-overlay">
          {{content.info}}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" @click="closeFnc" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['content'],
  data () {
    return {
      alert: false
    }
  },
  methods: {
    closeFnc(){
      this.alert = false
    }
  },
  mounted(){
    this.alert = this.content.alert
  }
}
</script>
