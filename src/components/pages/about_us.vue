<template>
  <div class=" q-px-sm q-px-sm-xl">
    <q-card class="" flat>
      <q-card-section horizontal>
        <div class="flex text-justify q-px-sm-xl">
         <div class="text-secondary text-bold text-h4">About Us</div>
         <div class="text-h6 q-py-xm q-py-sm-none q-px-sm-md text-weight-light" style="font-family: 'Montserrat', sans-serif;" :style="$q.screen.gt.sm?'':'line-height:normal'">
         Paylidate is a product of Lotusfort Technologies, a company with the goal of creating solutions 
         to everyday problems using Technology. Our mission for developing Paylidate is to stand as a 
         secure third party payment platform which ensures security for businesses and their customers 
         to make and receive payments upfront without the fear of being swindled.  <br/>  <br/>
         The Paylidate team is passionate about the growth of your business and the trust of your customers.
         We want to help businesses to become more profitable by maximizing engagements and reducing the 
         question of trust between two parties to the barest minimum. 
         <br/><br/>
         <div :class="$q.screen.gt.sm?'':'q-mb-sm'">
         <span class="text-bold"  >Taking a Stand for business growth without barriers</span> <br/>
         </div>

          Noting the explosion of e-commerce through the use of social media and online shops on various 
          platforms in amarket place environment that consists of millions of users with a desire to either 
          buy or sell something. Technology has played an important role in developing the environment for 
          these market places. However, the few challenges experienced pose a great threat to a sustainable 
          e-commerce culture especially in this part of the world. <br/><br/>
          Social media and Classified ads hold a 
          thousand opportunities for vendors to sell their products. This is hindered by alot of bad online 
          trade experiences. <br/><br/>
          Some of these experiences include: <br/>
          <ol>
            <li>(Payment before delivery) Paying an online vendor for a product and never getting the product 
          delivered to you</li><br/>
            <li>Paying and then getting a substandard product</li> <br/>
            <li>Getting your money back after a failed or wrong delivery</li><br/>
            <li>(Cash on delivery) A vendor expecting to be paid at the point of delivering a product but 
          not finding the buyer because they don't have the money, so all the logistics expenses are 
          wasted. etc.</li>
          </ol>
          
         <span class="text-bold">Lawrence Attah</span> <br/>
         Paylidate
         </div>
          
        
        </div>
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
