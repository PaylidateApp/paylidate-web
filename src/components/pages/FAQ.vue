<template>
  <div class="q-pa-md">
      <p class="title text-h6">FAQ</p>
      <div v-for="(item, index) in faq_cards" :key="index" class="q-pa-xs">
        <q-card flat bordered class="my-card">
          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            :label="item.title"
            header-class="text-bold"

          >
            <q-card>
              <q-card-section>
                {{item.content}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card>
    </div>

  </div>
</template>

<script>
export default {
    data () {
    return {
      faq_cards:[
        {
          title:'What is an escrow?',
          content:'Escrow generally means money held by a third party on behalf of parties involved in a transaction.'
        },
        {
          title:'Is paylidate a bank?',
          content:'Paylidate is not a bank, but an escrow service provider'
        },
        {
          title:'How safe is paylidate?',
          content:'By using paylidate, transactions can be carried out safely without the risk of losing money, your product or logistics expenses due to fraud.'
        },
        {
          title:'How much does paylidate charge per transaction? ',
          content:'paylidate charges  2% + #100 for each transaction, (NB: Our charges never goes beyond N2000)'
        },
        {
          title:'How long do I wait to make a withdrawal after a payment is validated?(for sellers)',
          content:'Your money is made available for withdrawal immediately it is validated'
        },
        {
          title:'What happens if I don’t receive what I ordered for? ',
          content:'if a delivery fails to reach you (the buyer) or you (the buyer ) gets a different product from what you ordered, you will have to initiate a dispute to start the process of getting your money back'
        }
      ]
    }
  }
}
</script>

<style>

</style>
