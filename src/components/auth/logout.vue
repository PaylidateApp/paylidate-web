<template>
  <div>
    <q-item v-if="variant == 'large'"
      clickable
      @click="open = true"
      class="bg-red-1 text-negative"
    >
      <q-item-section
        avatar
      >
        <q-icon name="ion-power" />
      </q-item-section>

      <q-item-section>
        <q-item-label>Logout</q-item-label>
      </q-item-section>
    </q-item>
    <q-btn v-else
        color="negative"
        label="Logout"
        :size="size ? size : 'md'"
        no-caps
        v-close-popup
        @click="open = true"
      />

    <q-dialog v-model="open">
      <q-card style="min-width:300px">
        <q-card-section>
          <div class="text-h6">Confirm</div>
          </q-card-section>
          <q-card-section>
          Are you sure you want to Logout?
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="cancel" color="green-3" text-color="green" v-close-popup />
            <q-btn flat label="Continue" color="red-3" text-color="red" @click="logout()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

</template>

<script>
export default {
  props:['variant', 'size'],
  data () {
    return {
      open:false
    }
  },
  methods: {
    async logout(){
      await this.$axios.get(process.env.Api + '/api/logout')
      this.$store.commit('auth/logout')
      this.$router.push({name: 'index'})
    }
  },
}
</script>
