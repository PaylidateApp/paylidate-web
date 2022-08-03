<template>
  <q-page :class="$q.screen.gt.sm?'text-primary row q-pt-md':'text-primary row'" class="" style="scroll-behavior: smooth; font-family:'Mukta', sans-serif;">

    <div class="q-pa-sm q-pa-sm-xl q-mt-lg full-width flex justify-center" >
    <div style="max-width:1200px" class="">
      <div class="row items-center justify-center reverse">
      <div class="col-12 col-sm-5 align-center">

          <img src="../../statics/Secure_data_paylidate.png" spinner-color="white" style="width: 100%;" />

        </div>

        <div class="col-12 col-sm-7">
          <div class="text-h3 gt-sm text-weight-light" style="max-width:600px">
            Keep your <span class="text-weight-bolder text-secondary">money within</span> your <span class="text-weight-bold text-secondary">reach</span> even <span class="text-weight-bold text-secondary">after</span> making <span class="text-weight-bold text-secondary">payment</span>
          </div>
          <div class="text-h5 text-weight-light text-center lt-md" style="max-width:600px">
            Keep your <span class="text-weight-bolder text-secondary">money within</span> your <span class="text-weight-bold text-secondary">reach</span> even <span class="text-weight-bold text-secondary">after</span> making <span class="text-weight-bold text-secondary">payment</span>
          </div>
          <div class="text-h6 q-py-lg text-weight-medium Montserrat" style="max-width:400px">
           Providing  escrow services for guaranteed safe transactions
           </div>
          <div class="text-weight-light q-gutter-sm q-py-sm" style="max-width:600px">
            <q-btn color="primary" no-caps class="q-pa-xs Montserrat" icon="play_arrow" label="Play Demo" @click="play = true" />
            <q-btn color="secondary" no-caps class="q-pa-xs Montserrat" label="Start Using Paylidate" :to="{name: 'register'}" />

          </div>
        </div>

      </div>

      <div class="text-center q-py-lg">
              <div class="q-py-sm text-secondary Montserrat">Powered by</div>
              <div class="">
              <img src="../../statics/partners/lotusfort1.png" style="width:160px; " />

              </div>

      </div>

    </div>
    </div>

    <div id="escrow" class="q-pa-sm q-pa-sm-xl full-width bg-grey-2 flex justify-center">
      <div style="max-width:1200px" class="q-py-xl full-width text-center">
        <div class="text-center text-h6 flex justify-center text-weight-light">
          <div  style="max-width:700px">
            Escrow is the use of <span class="text-secondary">Paylidate</span> to hold your funds before they are transferred from one party to another.
          </div>
        </div>
        <div class="row full-width q-py-xl Montserrat">
          <div class=" col-6 col-sm-3 align-center" >
            <div class="text-center flex justify-center">
              <div>
                  <img src="../../statics/icon_frame/Frame1.png" style="width:60px" />
                  <div class="q-py-md" style="max-width:150px">
                    Buyer and Seller agree on terms
                  </div>
              </div>
            </div>

          </div>
          <div class=" col-6 col-sm-3 align-center" >
            <div class="text-center flex justify-center">
              <div>
                  <img src="../../statics/icon_frame/Frame2.png" style="width:60px" />
                  <div class="q-py-md" style="max-width:150px">
                    The seller delivers on agreement
                  </div>
              </div>
            </div>

          </div>
          <div class=" col-6 col-sm-3 align-center" >
            <div class="text-center flex justify-center">
              <div>
                  <img src="../../statics/icon_frame/Frame3.png" style="width:60px" />
                  <div class="q-py-md" style="max-width:150px">
                    Customer confirms delivery
                  </div>
              </div>
            </div>

          </div>
          <div class=" col-6 col-sm-3 align-center" >
            <div class="text-center flex justify-center">
              <div>
                  <img src="../../statics/icon_frame/Frame4.png" style="width:60px" />
                  <div class="q-py-md" style="max-width:150px">
                    Money is paid into seller's account
                  </div>
              </div>
            </div>

          </div>

        </div>

        <div class="text-weight-light q-gutter-sm q-py-xs  text-center flex justify-center" :class="$q.screen.gt.sm?'q-pb-lg':'q-pb-none'">
            <q-btn color="primary" no-caps class="q-pa-xs Montserrat"  :to="{name: 'register'}"  label="Start Using Paylidate" />
            <q-btn color="secondary" no-caps class="q-pa-xs Montserrat" label="Learn More About Palidate" :to="{name: 'about'}" />

        </div>

        <div class="row q-mt-xl">
          <div class="col-12 col-sm-6">

          <img src="../../statics/Paylidate_escrow_1.png" spinner-color="white" style="width: 75%; " />

        </div>
          <div class="col-12 col-sm-6 self-end text-h6 text-weight-light" :class="$q.screen.gt.sm?'text-left':'text-center q-pt-lg'">
          Buy and sell <span class="text-bold">vehicles, device, furniture, fashion items, render services and lots more</span> on Paylidate using our escrow service
          <div class="text-weight-light  q-pt-lg text-center flex" :class="$q.screen.gt.sm?'justify-start':'justify-center'">
            <q-btn color="primary" no-caps class="q-pa-xs Montserrat" label="Start Using Paylidate" :to="{name: 'register'}"  />

            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="q-pa-sm q-pa-sm-xl full-width flex justify-center">
      <div style="max-width:1200px" class="q-py-lg q-py-sm-xl full-width">
      <div class="row">
        <div class="col-12 col-sm-7 flex justify-center">
        <div class="text-secondary  lt-sm q-pb-xl text-h4">About Us</div>
          <img src="../../statics/about_us.png" spinner-color="white" style="width: 90%; height: 90%; " />
        </div>
        <div class="col-12 col-sm-5 flex text-justify">
         <div class="text-secondary  gt-xs text-h4">About Us</div>
         <div class="text-h6 q-py-xl q-py-sm-none text-weight-light Montserrat" :style="$q.screen.gt.sm?'':'line-height:normal'">
         Paylidate is a product of Lotusfort Technologies, a company with the goal of creating solutions
         to everyday problems using Technology. Our mission for developing Paylidate is to stand as a
         secure third party payment platform which ensures security for businesses and their customers
         to make and receive payments upfront without the fear of being swindled.  <br/>
         The Paylidate team is passionate about the growth of your business and the trust of your customers.
         We want to help businesses to become more profitable by maximizing engagements and reducing the
         question of trust between two parties to the barest minimum.
         <br/><br/>
            <q-btn color="secondary" no-caps class="q-pa-xs Montserrat" label="Learn More About Palidate" :to="{name: 'about'}" />

         </div>


        </div>
      </div>
      </div>
    </div>

    <div id="team" class="q-pa-sm q-pa-sm-xl full-width flex flex-center" style="scroll-behavior: smooth;">
      <div style="max-width:1200px" class="q-py-none q-py-sm-xl flex column flex-center">
        <div class="text-secondary q-pb-xl text-h4">Meet Our Team</div>
        <div class="q-gutter-xl flex flex-center">
          <q-card class="my-card" square style="max-width: 190px">
            <img src="../../statics/team_members/lawrence1.jpg" style="max-width: 250px">

            <q-card-section>
              <div class="text-h6 text-bold">Attah Lawrence</div>
              <div class="text-subtitle2 text-secondary">Founder / CEO</div>
              <div class="q-pt-xs q-gutter-sm text-grey-7" style="font-size: 1.5em" >
              <q-btn flat padding="none" size="sm" href="https://www.linkedin.com/in/lawrence-ojonugwa-attah/" target="_blank">
                  <q-icon name="ion-logo-linkedin" class=""/>
                </q-btn>
              <q-btn flat padding="none" size="sm" href="https://m.facebook.com/Lawrence.ojonugua.attah" target="_blank">
                <q-icon name="fab fa-facebook-f"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="#" target="_blank">
              <q-icon name="fab fa-instagram"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://twitter.com/theOjonugwa?t=0CxxQsGvmHqWj_Mhzyfs-g&s=08" target="_blank">
              <q-icon name="ion-logo-twitter"/>
              </q-btn>

            </div>
            </q-card-section>


          </q-card>
          <q-card class="my-card" square style="max-width: 190px">
            <img src="../../statics/team_members/daniel.png" style="max-width: 250px">

            <q-card-section>
              <div class="text-h6 text-bold">Adegoke Daniel</div>
              <div class="text-subtitle2 text-secondary">Software Engineer</div>
              <div class="q-pt-xs q-gutter-sm text-grey-7" style="font-size: 1.5em" >
              <q-btn flat padding="none" size="sm" href="https://linkedin.com/in/danieladegoke" target="_blank">
                  <q-icon name="ion-logo-linkedin" class=""/>
                </q-btn>
              <q-btn flat padding="none" size="sm" href="#" target="_blank">
                <q-icon name="fab fa-facebook-f"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="#" target="_blank">
              <q-icon name="fab fa-instagram"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://www.twitter.com/pecular" target="_blank">
              <q-icon name="ion-logo-twitter"/>
              </q-btn>

            </div>
            </q-card-section>


          </q-card>
          <q-card class="my-card" square style="max-width: 190px">
            <img src="../../statics/team_members/simon.png" style="max-width: 250px">

            <q-card-section>
              <div class="text-h6 text-bold">Simon Onazi</div>
              <div class="text-subtitle2 text-secondary">Software Engineer</div>
              <div class="q-pt-xs q-gutter-sm text-grey-7" style="font-size: 1.5em" >
              <q-btn flat padding="none" size="sm" href="https://www.linkedin.com/in/simon-onazi-moses/" target="_blank">
                  <q-icon name="ion-logo-linkedin" class=""/>
                </q-btn>
              <q-btn flat padding="none" size="sm" href="https://m.facebook.com/profile.php?id=100001012312875" target="_blank">
                <q-icon name="fab fa-facebook-f"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="#" target="_blank">
              <q-icon name="fab fa-instagram"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://twitter.com/syflex" target="_blank">
              <q-icon name="ion-logo-twitter"/>
              </q-btn>

            </div>
            </q-card-section>


          </q-card>
          <q-card class="my-card" square style="max-width: 195px">
            <img src="../../statics/team_members/philemon.png" style="max-width: 250px">

            <q-card-section>
              <div class="text-h6 text-bold">Philemon Shekari</div>
              <div class="text-subtitle2 text-secondary">Software Engineer</div>
              <div class="q-pt-xs q-gutter-sm text-grey-7" style="font-size: 1.5em" >
              <q-btn flat padding="none" size="sm" href="https://www.instagram.com/paylidate/?hl=enhttps://www.linkedin.com/mwlite/in/shekari-philemon-85882a179" target="_blank">
                  <q-icon name="ion-logo-linkedin" class=""/>
                </q-btn>
              <q-btn flat padding="none" size="sm" href="https://m.facebook.com/philemon.shekari" target="_blank">
                <q-icon name="fab fa-facebook-f"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="#" target="_blank">
              <q-icon name="fab fa-instagram"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://twitter.com/Philzy94?t=ySyers_FVqvKAO6FWUmjWA&s=08" target="_blank">
              <q-icon name="ion-logo-twitter"/>
              </q-btn>

            </div>
            </q-card-section>


          </q-card>
          <q-card class="my-card" square style="max-width: 190px">
            <img src="../../statics/team_members/umar.png" style="max-width: 250px">

            <q-card-section>
              <div class="text-h6 text-bold">Salihu Umar</div>
              <div class="text-subtitle2 text-secondary">Product Design</div>
              <div class="q-pt-xs q-gutter-sm text-grey-7" style="font-size: 1.5em" >
              <q-btn flat padding="none" size="sm" href="www.linkedin.com/in/umarinusasalihu" target="_blank">
                  <q-icon name="ion-logo-linkedin" class=""/>
                </q-btn>
              <q-btn flat padding="none" size="sm" href="https://web.facebook.com/i.umarsalihu" target="_blank">
                <q-icon name="fab fa-facebook-f"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://www.instagram.com/i_umarsalihu/" target="_blank">
              <q-icon name="fab fa-instagram"/>
              </q-btn>
              <q-btn flat padding="none" size="sm" href="https://twitter.com/i_umarsalihu" target="_blank">
              <q-icon name="ion-logo-twitter"/>
              </q-btn>

            </div>
            </q-card-section>


          </q-card>
        </div>

      </div>


    </div>

    <div id="faq" class="q-pa-sm q-pa-sm-xl full-width flex justify-center">
      <div style="max-width:1200px" class="q-py-xl full-width text-center">

        <div class="row q-mt-xl">
          <div class="col-12 col-sm-6">

          <img src="../../statics/FAQs.png" spinner-color="white" style="width: 75%; " />

        </div>
          <div class="col-12 col-sm-6 text-subtitle1 Montserrat" :class="$q.screen.gt.sm?'':'q-pt-sm'">
          <div>

          <div class="flex justify-between text-grey-8">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''">What is an Escrow?</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q1 = !FAQs.Q1"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q1">
          Escrow generally means money held by a third party on behalf of parties involved in a transaction.
          </div>

          <div class="flex justify-between text-grey-8 q-pt-lg">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''">Is paylidate a bank?</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q2 = !FAQs.Q2"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q2">
            Paylidate is not a bank, but an escrow service provider
          </div>

          <div class="flex justify-between text-grey-8 q-pt-lg">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''" class="text-left">How safe is paylidate?</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q3 = !FAQs.Q3"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q3">
          By using paylidate, transactions can be carried out safely without the risk of losing money, your product or logistics expenses due to fraud.
          </div>


          <div class="flex justify-between text-grey-8 q-pt-lg">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''" class="text-left">How much does Paylidate charge per transaction?</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q4 = !FAQs.Q4"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q4">
         Paylidate charges  3% for each transaction, (NB: For transaction below NGN 3,334 there is a fix charges of N100, and for transaction above NGN 83,334 their is a fix charges of N2500)
          </div>


          <div class="flex justify-between text-grey-8 q-pt-lg">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''" class="text-left">How long do i wait to make a withdrawal after a payment is validated? (for sallers)</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q5 = !FAQs.Q5"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q5">
          Your money is made available for withdrawal immediately it is validated
          </div>


          <div class="flex justify-between text-grey-8 q-pt-lg">
          <div style="max-width:350px" :style="$q.screen.lt.sm?'max-width:300px':''" class="text-left">What happens if i don't receive what i ordered for?</div>
          <q-icon name="arrow_drop_down" size="2rem" @click="FAQs.Q6 = !FAQs.Q6"/>
          </div>
          <q-separator/>

          <div class="text-justify text-grey-7 text-subtitle2" v-if="FAQs.Q6">
          If a delivery fails to reach you (the buyer) or you (the buyer ) gets a different product from what you ordered, you will have to initiate a dispute to start the process of getting your money back
          </div>





          </div>
          <div class="text-weight-light  q-pt-lg text-center flex" :class="$q.screen.gt.sm?'justify-start':'justify-center'">
            <q-btn color="primary" no-caps class="q-pa-xs Montserrat" label="See More FAQs" :to="{name: 'faq'}"  />

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="full-width flex justify-center">
      <div class="full-width flex justify-center Montserrat">
        <div class="bg-orange-1 full-width flex justify-center text-center">
        <div class="full-width" style="max-width:1200px">
            <img src="../../statics/comment/comment2.png" class="q-mt-xl" style="">

         <div class="text-secondary text-h4">What Our Clients Say</div>

        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          infinite
          :autoplay="autoplay"
          swipeable
          animated
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          padding
          control-color="secondary"
          arrows
          class="bg-orange-1 "
          style="max-width: 1200px"
        >

          <q-carousel-slide :name="1" class="column no-wrap">

            <div class="row fit justify-center items-center full-white q-col-gutter no-wrap">
            <div class="row" style="max-width: 500px;">

            <div class="col-12">
            <img src="../../statics/testimony/ogdesigns.png" style="max-width:150px;">
            </div>
            <div class="col-12 text-h6 text-bold text-secondary q-pb-lg">OG Designs</div>
            <div class="col-12 text-primary" style="line-height:normal">

              I have built websites for several clients all over Nigeria and sometimes, it's hard to get the final payment tranche but with Paylidate, I can comfortably see the total payment before I begin to work and I receive the final payment without any stress. I believe Paylidate is doing the escrow payments thing just right.
            </div>
            </div>
            </div>

          </q-carousel-slide>


          <q-carousel-slide :name="2" class="column no-wrap">

            <div class="row fit justify-center items-center full-white q-col-gutter no-wrap">
            <div class="row" style="max-width: 500px;">

            <div class="col-12">
            <img src="../../statics/testimony/XclusiveMall.png" style="max-width:150px;">
            </div>
            <div class="col-12 text-h6 text-bold text-secondary q-pb-lg">Xclusive mall</div>
            <div class="col-12 text-primary" style="line-height:normal">
              For my business, "Payment validates order" is how I get to know customers that are really committed to buying after showing interest. Sometimes, customers prefer to pay on delivery but that can be disastrous if they don't pay as promised or cancel the delivery due to inability to pay. With Paylidate, it's easier to get all my payment first because of the 100% customer protection and money-back guarantee provided by them. So yeah, Paylidate is the way to go!!!
            </div>
            </div>
            </div>

          </q-carousel-slide>


          <q-carousel-slide :name="3" class="column no-wrap">

            <div class="row fit justify-center items-center full-white q-col-gutter no-wrap">
            <div class="row" style="max-width: 500px;">

            <div class="col-12">
            <img src="../../statics/testimony/unishop.png" style="max-width:900px;">
            </div>
            <div class="col-12 text-h6 text-bold text-secondary q-pa-lg">Unishop</div>
            <div class="col-12 text-primary" style="line-height:normal">
                Online marketplaces are very helpful to buy and sell items that are not easily found everywhere. Buyers and sellers always need to meet to complete transactions. With paylidate, no one needs to leave their rooms, they can make payment, get their product delivered to them and confirm the payment once it's what they ordered. It's a simple and effective way to reduce the risks in a marketplace where everyone is a stranger.
            </div>
            </div>
            </div>

          </q-carousel-slide>



        </q-carousel>
        </div>

        <div id="support" class=" bg-white full-width flex justify-center text-center">
        <div style="max-width:1200px" class="q-py-xl full-width text-center">
          <div class="text-center text-h6 flex justify-center text-weight-light">
            <div class="text-secondary text-h4">Contact Us</div>
          </div>
          <div class="row full-width q-py-xl Montserrat">
            <div class=" col-6 col-sm-4 align-center" >
              <div class="text-center flex justify-center">
                <div>
                    <img src="../../statics/contact_us/call.png" style="width:60px" />
                    <div class="q-py-md" style="max-width:150px">
                      +234 8066984101
                    </div>
                </div>
              </div>

            </div>
            <div class=" col-6 col-sm-4 align-center" >
              <div class="text-center flex justify-center">
                <div>
                    <img src="../../statics/contact_us/location.png" style="width:60px" />
                    <div class="q-py-md" style="max-width:150px">

                      14 Oluwasogo Street, Ikeja, Lagos. Nigeria

                    </div>
                </div>
              </div>

            </div>
            <div class=" col-6 col-sm-4 align-center" >
              <div class="text-center flex justify-center">
                <div>
                    <img src="../../statics/contact_us/message.png" style="width:60px" />
                    <div class="q-py-md" style="max-width:150px">
                    paylidatesupport@lotusfort.com
                    </div>
                </div>
              </div>

            </div>

          </div>

        </div>
        </div>

          </div>
      </div>
    </div>

    <div class="full-width q-px-sm q-px-sm-xl bg-grey-3">
    <div class="full-width q-py-xl q-py-sm-xl flex justify-center text-center">
      <div style="max-width:1200px" class="full-width text-center">
        <div class="text-center text-h6 flex flex-center text-weight-light">
          <div class="q-gutter-y-sm">
          <div class="text-secondary text-h4">Join Our Community</div>
          <div class="text-subtitle1 text-bold">Sign Up Today!</div>
          </div>
        </div>
        <div class="row full-width flex justify-center q-py-lg">

         <div :class="$q.screen.gt.sm?'flex justify-center':'flex q-gutter-y-md'">

            <q-input v-model="text" class="" style="min-width:300px;" type="email" label="Enter your email address" />
            <q-btn color="primary" style="margin-top:15px"  no-caps no-wrap class="q-pa-none" label="Join our community" />
         </div>


        </div>

      </div>
      </div>
    </div>


    <div class="full-width q-px-sm q-px-sm-xl flex justify-center bg-grey-2">
    <div style="max-width:1200px" class=" full-width ">
        <div class="q-pt-lg q-gutter-sm text-grey-9" style="font-size: 1.2em" >
             <q-btn flat padding="none" size="md" href="https://www.linkedin.com/company/ourpasskey" target="_blank">
             <q-icon name="ion-logo-linkedin" class=""/>
             </q-btn>

             <q-btn flat padding="none" size="md" type="a" href="https://web.facebook.com/paylidate" target="__blank">
              <q-icon classs="clickable" name="fab fa-facebook-f" />
             </q-btn>

             <q-btn flat padding="none" size="md" href="https://www.instagram.com/paylidate/?hl=en" target="_blank">
              <q-icon name="fab fa-instagram" />
             </q-btn>

             <q-btn flat padding="none" size="md" href="https://twitter.com/paylidate" target="_blank">
              <q-icon name="ion-logo-twitter" type="a"/>
             </q-btn>

        </div>
        <div class="text-primary text-bold " :class="$q.screen.gt.sm?'flex justify-between':''">
          <div class="text-caption text-bold q-pt-lg">© 2020 lotusfort technologies. All Rights Reserved</div>
          <div class=" q-pt-none" style="margin-left:-50px">
          <ul class="flex text-weight-bolder " >
          <li>
           <q-btn class="text-weight-bolder" color="black" href="#escrow" flat no-caps label="Escrow"   />
          </li>
          <li>
          <q-btn class="text-weight-bolder" color="black" href="#support" flat no-caps label="Support"  />

          </li>
          <li>
          <q-btn class="text-weight-bolder" color="black" href="#about" flat no-caps label="About Us"  />
          </li>
          <li>
          <q-btn class="text-weight-bolder" color="black" href="#team" flat no-caps tag="a" label="Team"  />
          </li>
          <li>
          <q-btn class="text-weight-bolder" color="black" href="#faq" flat no-caps label="FAQ"  />
          </li>
          </ul>
          </div>
        </div>
      </div>
    </div>



  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data() {
    return {
      play: false,
      slide: 1,
      autoplay: true,
      FAQs:{
        Q1: false,
        Q2: false,
        Q3: false,
        Q4: false,
        Q5: false,
        Q6: false,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  display: block;

  text-align: center;

  text-decoration: none;

}

.font-Nexa-Light{
  font-family: Nexa Light;
}

.Montserrat{
    font-family: 'Montserrat', sans-serif;
}
</style>
