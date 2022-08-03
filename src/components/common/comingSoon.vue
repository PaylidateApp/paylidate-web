<template>
  <div>
    <q-item
    clickable
    @click="alert = true"
    :style="'border-right: 2px solid '+btn"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-dialog v-model="alert">
    <q-card style="min-width:300px">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        </q-card-section>
        <q-card-section>
        Coming Soon
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Continue" color="primary" @click="popUp" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  </div>
</template>

<script >


export default {
  name: 'CommingSoon',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },

  data(){
    return{
      alert: false
    }
  },
  methods: {
    popUp(){
      this.alert = false
      this.$route.back()
    }
  },
  computed: {
     btn(){
      if (this.$route.name == this.$props.link) return '#05202f; background-color: rgba(5, 32, 47, 0.1)'
      else return 'white'
    }
  },
};
</script>
