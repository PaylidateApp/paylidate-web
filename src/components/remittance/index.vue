<template>
  <div>
        <!-- <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur vitae animi, similique excepturi deleniti nobis soluta placeat fuga doloremque nihil error modi maxime libero ab labore nisi cupiditate reprehenderit!
        </div> -->


        <div class="row q-gutter-md q-my-lg">
          <RequestComp /> <SendComp />
        </div>

        <div class="flex q-gutter-sm flex-center">
            <q-card class="text-center" flat bordered>
              <q-card-section class="q-pb-xs text-h6">
                Transaction this Month
              </q-card-section>
              <q-separator />
              <q-card-section class="">
                <div class="">
                  Recieved
                </div>
                <div class="text-h5 text-weight-bold">
                  10,000 NGN
                </div>
                <div class="">
                  Spent
                </div>
                <div class="text-h5 text-weight-bold">
                  200 NGN
                </div>
              </q-card-section>
            </q-card>

            <q-card class="text-center" flat bordered>
              <q-card-section class="q-pb-xs text-h6">
                All Transactions
              </q-card-section>
              <q-separator />
              <q-card-section class="">
                <div class="">
                  10,000 NGN
                </div>
                <div class="text-h5 text-weight-bold">
                  recieve
                </div>
                <div class="">
                  Spent
                </div>
                <div class="text-h5 text-weight-bold">
                  200 NGN
                </div>
              </q-card-section>
            </q-card>
        </div>

  </div>
</template>

<script>
import RequestComp from './partials/request'
import SendComp from './partials/send'
export default {
  components:{
    RequestComp,SendComp
  }
}
</script>

<style>

</style>
