<template>
  <q-btn flat dense color="black" icon="notifications">
    <q-badge floating color="teal">0</q-badge>

    <q-menu transition-show="rotate" transition-hide="rotate">
      <q-list style="width: 400px">
        <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="../../statics/icons/favicon-128x128.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="3">
                Welcome to Paylidate! A new card 416046*******7650 was successfully created. Refer your friends to get more bonus credits
              </q-item-label>
            </q-item-section>

            <q-item-section side bottom>
              12/08/2020
            </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {

}
</script>

<style>

</style>
