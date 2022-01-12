<template>
  <div class="q-pa-xs">
    <q-card :bordered="!card.data.default" :flat="!card.data.default" :class="`text-bold ${card.data.default ? 'bg-primary text-white' : 'bg-white text-primary' }`" :style="`width: 280px; background-color:black `">
      <q-card-section class="row flex-center q-pb-xs">
        <div class="text-left col">

          <div class="row">
            <div class="text-uppercase self-end q-pb-xl">{{card.data.name_on_card}}</div>
            <q-space />
            <div v-if="card.data.default" class="text-weight-light text-italic text-caption">default</div>
          </div>

          <div class="q-mb-md">
            <div class="text-h6" style="line-height: 1rem;">{{card.data.card_pan.match(/.{1,4}/g).join(' ')}}</div>
            <div style="font-size:8px">{{card.data.masked_pan.substring(0, 4)}}</div>
          </div>

          <div class="row text-uppercase">
            <div>
              <div>
                  Current Balance
              </div>
              <div>
                  {{card.data.currency}} {{card.data.amount}}
              </div>
            </div>
            <q-space />
            <div>
              <div>VALID THRU</div>
              <!-- <div>{{card.data.expiration.substring(2, 4)}}/{{card.expiration.data.slice(-2)}}</div> -->
              <div>{{card.data.expiration}}</div>

            </div>
          </div>

        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props:['card'],

  data () {
    return {}
  },

  methods: {

  },
}
</script>
