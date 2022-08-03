<template>
  <div class="q-pa-md">
    <q-btn @click="$emit('price')" color="primary" flat round icon="ion-ios-arrow-forward" size="sm" class="q-ma-sm" />
      <p class="title text-h6">Pricing</p>
      <div v-for="(item, index) in price_cards" :key="index" class="q-pa-xs">
        <q-card flat bordered class="bg-blue-grey-1 text-center" >
          <q-card-section >
              <div class="text-weight-bold text-uppercase text-caption">{{item.title}}</div>
          </q-card-section>
          <q-card-section class="theFont text-h5">
              {{ item.offer }}
            <div v-if="item.extra" class="text-caption"> {{ item.extra }} </div>
          </q-card-section>

          <q-separator />
          <q-card-actions>
            <q-btn no-caps size="sm" unelevated class="q-pa-xs" color="secondary" label="Subscribe" type="a" :href="'https://paylidateapp.netlify.app/register'" />
          </q-card-actions>
        </q-card>
    </div>

  </div>
</template>

<script>
export default {
    data () {
    return {
      price_cards:[
        {
          title:'local transactions',
          offer:'2% + 100 naira '
        }
      ]
    }
  }
}
</script>

<style>

</style>
