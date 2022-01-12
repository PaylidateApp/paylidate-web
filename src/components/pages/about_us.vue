<template>
  <div class="">
    <q-card class="" flat>
      <q-card-section horizontal>
        <img class="col-7" src="https://res.cloudinary.com/godfadatun/image/upload/v1619664344/undraw_team_spirit_hrr4_olqtai.svg">
        <q-card flat class="flex flex-center">          
          <q-card-section class="column ">
            <div class="title text-h5 q-py-md text-uppercase text-weight-bolder">
              About Us
            </div>
            {{content}}
            <div class="column q-py-md">
              <div class="text-h6">{{dname}}</div>
              <div class="text-bold">{{company}}</div>
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>
      
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content:'We stand for commerce without barriers. Paylidate is an escrow payment service developed by Lotusfort Technologies. We are driven by a passion to stand for businesses to grow without any barriers so as to maximize the potentials of the magnanimous market place environment that is actively growing every day. Paylidate helps businesses and their customers to secure funds during a transaction prior to the delivery of a product or execution of a service until the final validation of the transaction by the buyer, ensuring that the customer’s fund is secure in case the vendor fails to deliver the product. The vendor also increases sales because trust will now be based on the security of our service.',
      salutation:'',
      dname:'Lawrence Attah',
      company:'Paylidate'
    }
  }
}
</script>

<style>

</style>
