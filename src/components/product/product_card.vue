<template>
  <div>
    <q-card class="my-card" style="max-width: 300px">
      <q-img
        :src="'/product.svg'"
      />
      <q-card-section class="row">
      <div class="text-bold text-h6">{{content.name}}</div>
      <q-space />
        <q-btn
            size="12px"
            round
            flat
            color="primary"
            class=""
            icon="more_vert"
          >
            <q-menu anchor="bottom right" self="center right">
              <q-item clickable @click="editProduct">
                <q-item-section>Edit Product</q-item-section>
              </q-item>
              <DDelete :content="content.id" />
            </q-menu>
          </q-btn>
      </q-card-section>
      <q-card-section class="row">
        <div>
          <div class="text-bold">{{content.quantity}} in Stock</div>
          <div class="text-bold">{{formatAsNaira(content.price)}}</div>
          <div class="text-bold">{{content.product_number}}</div>
          <div class="text-bold">{{content.description}}</div>
        </div>

      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import { formatterMixin, dDataMixin, displayMixins } from '../mixins/index'
import DDelete from './delete_dialog'
export default {
  // name: 'ComponentName',
  mixins: [displayMixins, formatterMixin, dDataMixin],
  props:['content'],
  components:{
    DDelete,
  },
  data () {
    return {}
  }
}
</script>
