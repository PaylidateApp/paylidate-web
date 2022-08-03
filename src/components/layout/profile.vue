<template>
  <q-btn flat dense>
    <q-avatar color="primary" text-color="white">
      {{user.name.match(/\b(\w)/g).join('')}}
    </q-avatar>

            <!-- <q-menu>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <q-toggle v-model="mobileData" label="Disable All Cards" />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px" color="primary" text-color="white">
                   {{user.name.match(/\b(\w)/g).join('')}}
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">{{user.name}}</div>

                  <LogOut :size="'sm'"/>

                </div>
              </div>
            </q-menu> -->
  </q-btn>
</template>

<script>
export default {
  props:['user'],

  data(){
    return {
      mobileData: true,
        bluetooth: false,
    }
  }

}
</script>

<style>

</style>
