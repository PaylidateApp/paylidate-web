<template>
  
  <a v-if="link.includes('#')" :href="link">
  <q-item
    
    clickable
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
</a>
 <q-item
    v-else
    clickable
    :to="link"
    
    
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

  
</template>

<script>

export default {
  name: 'EssentialLink',
  props: ['title','caption','link','icon','is_authenticated'],
}
</script>
