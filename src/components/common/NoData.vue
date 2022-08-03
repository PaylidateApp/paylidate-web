<template>
  <div class="column justify-center items-center">
    <img
      src="/empty.svg"
      :style="`width: ${width}`"
    />
    <div :class="`text-${textSize} text-center text-grey q-mt-xl`">{{ text }}</div>
    <div class="action q-mt-md" v-if="showAction">
      <q-btn v-if="clickAction" unelevated color="green-1" text-color="primary" no-caps icon="store" :label="actionLabel" @click="$emit('yourFunc')"/>
      <q-btn v-else unelevated color="green-1" text-color="primary" no-caps icon="store" :label="actionLabel" :to="actionRoute" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'no-data',
  props: {
    text: {
      type: String,
      default: ''
    },
    textSize: {
      type: String,
      default: 'h6',
    },
    width: {
      type: String,
      default: '550px'
    },
    showAction: {
      type: Boolean,
      default: false
    },
    actionRoute: {
      type: String,
      default: '/register'
    },
    actionLabel: {
      type: String,
      default: 'Create your Store'
    },
    clickAction:{
      type: Boolean,
      default: false
    }
  }
}
</script>
