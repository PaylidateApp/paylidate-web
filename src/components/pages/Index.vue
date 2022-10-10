<template>
  <q-page
    :class="$q.screen.gt.sm ? 'text-primary row q-pt-md' : 'text-primary row'"
    class="bg-orange-1 font-Nexa-Light"
    style="scroll-behavior: smooth; font-family: 'Mukta', sans-serif"
  >
    <div class="q-pr-xl q-mt-lg full-width flex justify-center bg-orange-1">
      <q-dialog v-model="play">
        <q-card style="min-width: 300px">
          <q-card-section>
            <div class="text-h4"></div>
          </q-card-section>

          <q-card-section>
            <div>
              <iframe
                width="420"
                height="345"
                src="https://www.youtube.com/embed/7CiyRLBaDDA?controls=0"
              ></iframe>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="cancel"
              color="green-3"
              text-color="red"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div style="max-width: 1200px" class="q-pb-none">
        <div class="row items-center justify-center reverse">
          <div
            class="col-12 col-sm-5 align-center q-pt-md gt-sm"
          >
            <img
              src="../../statics/girlie.png"
              spinner-color="white"
              style="
                width: 100%;
                height: 500px;
                padding-top: 25px;
                padding-bottom: 0px;
              "
            />
          </div>

          <div class="col-12 col-sm-7 font-Nexa-Light">
            <div
              class="q-pt-lg q-pb-none text-h2 text-weight-bold text-primary gt-sm font-Nexa-Light"
              style="
                max-width: 600px;
                /* font-family: 'font-Nexa-Light', sans-serif; */
              "
            >
              Fast and secured <span>digital payments</span>
              guaranteed
            </div>
            <div
              class="text-h6 q-py-md text-weight-light gt-sm"
              style="max-width: 500px"
            >
              Helping millions of Nigerian buyers and sellers transact safely
              from anywhere without doubt or fear
            </div>

            <div
              class="row items-start text-h6 q-gutter-sm text-weight-light gt-sm"
            >
              <div class="col">Transaction Security</div>
              <q-separator vertical />
              <div class="col text-center flex justify-center">
                Seller Guarantee
              </div>
              <q-separator vertical />
              <div class="col text-center flex justify-center">
                Buyer Protection
              </div>
            </div>
            <div
              class="text-weight-light q-gutter-sm q-py-lg gt-sm"
              style="max-width: 600px"
            >
              <q-btn
                color="primary"
                no-caps
                size="18px"
                class="q-px-xl Montserrat"
                label="Register"
                :to="{ name: 'register' }"
              />
              <!-- <q-btn color="secondary" no-caps class="q-pa-xs Montserrat" icon="play_arrow" label="Play Demo" @click="play = true" /> -->
            </div>
          </div>
        </div>

        <!-- <div class="text-center q-py-lg">
              <div class="q-py-sm text-secondary Montserrat">Powered by</div>
              <div class="">
              <img src="../../statics/partners/lotusfort1.png" style="width:160px; " />

              </div>

      </div> -->
      </div>
    </div>

    <!-- Mobile Responsiveness -->
    <div
      class="lt-md text-center item-center full-width flex flex justify-center bg-orange-1 font-Nexa-Light"
    >
      <div
        class="text-h6 text-weight-bold text-primary font-Nexa-Light"
      >
        Fast and secured <span>digital payments</span>
        guaranteed
      </div>
      <div
        class="q-px-lg q-py-md text-subtitle1 text-weight-light text-center lt-md"
        style="max-width: 600px"
      >
        Helping millions of Nigerian buyers and sellers transact safely from
        anywhere without doubt or fear
      </div>

      <div
        class="row q-px-lg q-py-sm items-start text-subtitle2 q-gutter-sm text-weight-bold"
      >
        <div class="col">Transaction Security</div>
        <q-separator vertical />
        <div class="col text-center flex justify-center">Seller Guarantee</div>
        <q-separator vertical />
        <div class="col text-center flex justify-center">Buyer Protection</div>
      </div>

      <div
        class="text-primary q-py-lg"
        style="max-width: 500px"
      >
        <q-btn
          color="primary"
          no-caps
          size="10px"
          class="q-px-lg q-py-sm Montserrat"
          label="Register"
          :to="{ name: 'register' }"
        />
      </div>

      <div
        class="text-primary flex item-center "
      >

        <img
          src="../../statics/girlie.png"
          spinner-color="white"
          style="width: 100%; padding-right: 80px;"
        />

      </div>
    </div>

    <!-- What Paylidate will do for you -->
    <div class="q-pa-sm q-pa-sm-xl full-width bg-grey-1 flex justify-center">
      <div style="max-width: 1200px" class="q-py-xl full-width text-center">
        <div
          class="gt-sm text-center flex justify-center"
        >
          <div
            class="text-h2 text-weight-bold text-primary font-Nexa-Light"
            style="max-width: 500px"
          >
            What Paylidate can do for you.
          </div>
        </div>

        <div class="gt-sm row full-width q-py-xl Circular">
          <div class="col-md-3 col-sm-3 align-left">
            <div class="text-left flex justify-left">
              <div>
                <div
                  class="q-py-md text-h6 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  01/ Payments
                </div>
                <div class="q-py-md text-subtitle1 text-justify" style="max-width: 300px">
                  Make payments quickly, easily and safely. Payment would be
                  held in escrow until you confirm the delivery
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 offset-md-6 col-sm-3 align-center">
            <div class="text-left flex justify-left">
              <div>
                <div
                  class="q-py-md text-h6 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  02/ Disputes
                </div>
                <div class="q-py-md text-subtitle1 text-justify" style="max-width: 300px">
                  Raise disputes to clear out issues with a transaction
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gt-sm row full-width q-py-xl Circular">
          <div class="col-md-3 col-sm-3 align-left">
            <div class="text-left flex justify-left">
              <div>
                <div
                  class="q-py-md text-h6 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  03/ Refunds
                </div>
                <div class="q-py-md text-subtitle1 text-justify" style="max-width: 300px">
                  Get a refund if what you got is different from what was
                  specified by the vendor
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 offset-md-6 col-sm-3 align-center">
            <div class="text-left flex justify-left">
              <div>
                <div
                  class="q-py-md text-h6 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  04/ Bonuses
                </div>
                <div class="q-py-md text-subtitle1 text-justify" style="max-width: 300px">
                  Earn points from referrals, connecting vendors with buyers and
                  meeting transaction milestone.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="lt-md text-center text-h6 flex justify-center text-weight-light"
        >
          <div
            class="text-h5 text-weight-bold text-primary font-Nexa-Light"
            style="max-width: 500px"
          >
            What Paylidate can do for you.
          </div>
        </div>

        <div class="lt-md column full-width q-py-md q-px-lg circular">
          <div class="col align-left">
            <div class="text-justify flex">
              <div>
                <div
                  class="q-py-sm text-subtitle1 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  01/ Payments
                </div>
                <div
                  class="q-py-sm text-subtitle2 text-justify"
                  style="max-width: 400px"
                >
                  Make payments quickly, easily and safely. Payment would be
                  held in escrow until you confirm the delivery
                </div>
              </div>
            </div>
          </div>
          <div class="col align-left q-py-md">
            <div class="text-justify flex">
              <div>
                <div
                  class="q-py-sm text-subtitle1 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  02/ Disputes
                </div>
                <div
                  class="q-py-sm text-subtitle2 text-justify"
                  style="max-width: 400px"
                >
                  Raise disputes to clear out issues with a transaction
                </div>
              </div>
            </div>
          </div>
          <div class="col align-left q-py-md">
            <div class="text-justify flex">
              <div>
                <div
                  class="q-py-sm text-subtitle1 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  03/ Refunds
                </div>
                <div
                  class="q-py-sm text-subtitle2 text-justify"
                  style="max-width: 400px"
                >
                  Get a refund if what you got is different from what was
                  specified by the vendor
                </div>
              </div>
            </div>
          </div>
          <div class="col align-left q-py-md">
            <div class="text-justify flex">
              <div>
                <div
                  class="q-py-sm text-subtitle1 text-weight-bold align-left"
                  style="max-width: 300px"
                >
                  04/ Bonuses
                </div>
                <div
                  class="q-py-sm text-subtitle2 text-justify"
                  style="max-width: 400px"
                >
                  Earn points from referrals, connecting vendors with buyers and
                  meeting transaction milestone.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How Paylidate Works -->
    <div
      class="q-pa-sm q-pa-sm-xl full-width bg-blue-grey-10 flex justify-center"
    >
      <div style="max-width: 1200px" class="q-py-xl full-width text-center">
        <div
          class="gt-sm text-center flex justify-center"
        >
          <div
            class="text-h2 text-weight-bold text-white font-Nexa-Light"
            style="max-width: 700px"
          >
            How Paylidate works
          </div>
        </div>

        <div class="gt-sm row full-width q-pt-xl justify-evenly">
          <div
            class="text-center flex justify-center"
          >
            <div class="col-3 col-sm-3 q-pa-sm">
              <q-btn
                color="secondary"
                no-caps
                size="18px"
                class="q-px-xl q-py-xs Montserrat"
                label="For Sellers"
                disable
              />
            </div>
            <div class="col-3 col-sm-3 q-pa-sm">
              <q-btn
                color="primary"
                no-caps
                size="18px"
                class="q-px-xl q-py-xs Montserrat"
                label="For Buyers"
                disable
              />
            </div>
          </div>
        </div>

        <div class="gt-sm row">
          <q-card class="my-card bg-blue-grey-10" flat style="width: 100%">
            <div class="row full-width q-py-sm Circular">
              <q-card-section class="q-px-xl">
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        01/
                      </div>
                    </div>
                    <div class="col-4 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 200px"
                      >
                        Sign Up
                      </div>
                      <div
                        class="col-4 q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        A simple sign up page to get you on board.
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section>
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        02/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 200px"
                      >
                        Set Up Account
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        Add your account number in the settings and complete
                        your account setup
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section class="q-px-xl">
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        03/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 200px"
                      >
                        Create Product
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        Click the "create" button on the product page, add your
                        product/service details to create a product link.
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section>
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        04/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 300px"
                      >
                        Copy & Share Payment Link
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        Copy and share the generated product link
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section class="q-px-xl">
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        05/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 200px"
                      >
                        Receive Payments
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        When customers pay through your product link, you receive
                        an email alert of the payment
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section>
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        06/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 300px"
                      >
                        Deliver Product or Service
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        Complete the agreed delivery
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>

              <q-card-section class="q-px-xl">
                <div class="row q-py-lg">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div
                        class="q-py-md q-px-sm text-h5 text-white text-weight-bold align-left"
                        style="max-width: 100px"
                      >
                        07/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-h6 text-white text-justify text-weight-bold align-left"
                        style="max-width: 200px"
                      >
                        Withdraw Funds
                      </div>
                      <div
                        class="q-py-sm text-white text-subtitle1 text-justify"
                        style="width: 300px; height: 80px;"
                      >
                        When delivery is complete, withdrawal will be enabled
                      </div>
                    </div>
                    <div class="col-2">
                      <q-card-actions
                        vertical
                        class="q-pl-lg justify-around q-px-md"
                      >
                        <q-btn
                          outline
                          round
                          size="lg"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </q-card-section>
            </div>
          </q-card>
        </div>

        <!--Mobile  -->
        <div class="lt-md text-center flex justify-center">
          <div
            class="text-h6 text-weight-bold text-white font-Nexa-Light"
            style="max-width: 500px"
          >
            How Paylidate works
          </div>
        </div>
        <div class="lt-sm row full-width q-py-lg justify-evenly">
          <div class="text-center flex justify-center text-weight-light">
            <div class="col-3 col-sm-3 q-pa-sm">
              <q-btn
                color="secondary"
                no-caps
                size="10px"
                class="q-px-xl q-py-xs Montserrat"
                label="For Sellers"
                disable
              />
            </div>
            <div class="col-3 col-sm-3 q-pa-sm">
              <q-btn
                color="primary"
                no-caps
                size="10px"
                class="q-px-xl q-py-xs Montserrat"
                label="For Buyers"
                disable
              />
            </div>
          </div>
        </div>

        <q-card class="my-card flex bg-blue-grey-10 lt-md" flat style="width: 100%">
          <div class="row full-width flex justify-center q-py-sm Circular">
            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left "
                      style="max-width: 100px"
                    >
                      01/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Sign Up
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      A simple sign up page to get you on board.
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      02/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Set Up Account
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      Add your account number in the settings and complete your
                      account setup
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      03/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Create Product
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      Click the "create" button on the product page, add your
                      product/service details to create a product link.
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      04/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Copy & Share Payment Link
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      Copy and share the generated product link
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      05/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Receive Payments
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      When customers pay through your product link, you receive
                      an email alert of the payment
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      06/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Deliver Product or Service
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      Complete the agreed delivery
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>

            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm q-px-sm text-subtitle1 text-white text-weight-bold align-left"
                      style="max-width: 100px"
                    >
                      07/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm text-subtitle1 text-white text-justify text-weight-bold"
                      style="max-width: 200px"
                    >
                      Withdraw Funds
                    </div>
                    <div
                      class="col-4 q-py-sm text-subtitle2 text-white text-justify"
                      style="width: 180px"
                    >
                      When delivery is complete, withdrawal will be enabled
                    </div>
                  </div>
                  <div class="col-2">
                    <q-card-actions
                      vertical
                      class="q-pl-lg justify-around q-px-sm"
                    >
                      <q-btn
                        outline
                        round
                        size="md"
                        color="white"
                        icon="arrow_forward"
                      />
                    </q-card-actions>
                  </div>
                </div>
              </div>
              <q-separator dark inset />
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>

    <!--About Paylidate  -->
    <div class="q-pa-sm q-pa-sm-xl full-width flex justify-center" style="background-color: #319ed9;">
      <div style="max-width: 1200px" class="q-py-lg q-py-sm-xl full-width">
        <div class="row justify-evenly gt-sm">
          <div class="col-12 col-sm-5 flex justify-center">
            <div class="row q-pt-xl">
              <img
                src="../../statics/rectangle21.png"
                spinner-color="white"
                style="width: 100%; height: 80%"
              />
            </div>
            <!-- <div class="row">
              <div
                class="text-black text-weight-bold gt-xs text-h4"
                style="max-width: 400px"
              >
                Pay with no doubt and sell without fear
              </div>
            </div> -->
          </div>
          <div class="col-12 col-sm-5 flex text-justify">
            <div
              class="text-black text-weight-bold gt-xs text-h4 font-Nexa-Light"
              style="max-width: 400px"
            >
              Paylidate connects buyers and sellers
            </div>
            <div
              class="text-h6 q-py-lg q-py-sm-none text-weight-light Circular"
              :style="$q.screen.gt.sm ? '' : 'line-height:normal'"
            >
              We believe you should be able to choose how you want to pay
              during transactions online without being subjected to the risk of
              loosing your money.
              <br /><br />

              <div
                class="text-black text-weight-bold gt-xs text-h5 q-pb-md font-Nexa-Light"
                style="max-width: 400px"
              >
                Pay with no doubt and sell without fear
              </div>
              It's important that you stay focused on your goals without getting
              distracted by unnecessary worries. That is why Paylidate makes
              payments easy and protects you whether you are buying or selling.
              <br /><br />
              <!-- <q-btn
                color="secondary"
                no-caps
                class="q-pa-xs Montserrat"
                label="Learn More About Palidate"
                :to="{ name: 'about' }"
              /> -->
            </div>
          </div>
        </div>

        <!-- Mobile Responsiveness -->
        <div class="lt-md column full-width q-py-md q-px-lg">
          <div class="col flex text-justify">
            <div
              class="text-black text-weight-bold text-h6 font-Nexa-Light"
              style="max-width: 400px"
            >
              Paylidate connects buyers and sellers
            </div>
            <div class="text-subtitle1 q-py-md text-weight-light Circular">
              We believe you should be able to choose how you want to pay
              during transactions online without being subjected to the risk of
              loosing your money.
              <br /> <br />

              <div class="row q-pa-md">
                <img
                  src="../../statics/rectangle21.png"
                  spinner-color="white"
                  style="width: 90%; height: 80%"
                />
              </div>
              <div class="col q-py-md flex text-justify">
                <div
                  class="text-black text-weight-bold text-h6 font-Nexa-Light"
                  style="max-width: 400px"
                >
                  Pay with no doubt and sell without fear
                </div>
              </div>

              It's important that you stay focused on your goals without getting
              distracted by unnecessary worries. That is why Paylidate makes
              payments easy and protects you whether you are buying or selling.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Unique Features Section -->
    <div class="q-pa-sm q-pa-sm-xl full-width bg-grey-1 flex justify-center">
      <div style="max-width: 1200px" class="q-py-xl full-width text-center">
        <div
          class="gt-sm text-center text-h6 flex justify-center text-weight-light"
        >
          <div
            class="text-h2 text-weight-bold text-primary font-Nexa-Light"
            style="width: 600px"
          >
            Get started with our unique features.
          </div>
        </div>

        <div class="gt-sm row justify-center full-width q-py-xl Circular">
          <div class="col-4" style="border-right: 1px solid #ccc">
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 190px;

                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-lg">
                    <img src="../../statics/money.png" style="width: 25px" />
                  </div>
                  <div
                    class="q-py-sm text-h6 text-weight-bold align-left"
                    style="max-width: 300px"
                  >
                    Escrow
                  </div>
                  <div class="q-py-sm" style="max-width: 300px">
                    Buy and sell with ease. Use Paylidate's escrow payment to
                    secure your transactions.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 200px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/receipt.png" style="width: 25px" />
                  </div>
                  <div
                    class="q-py-sm text-h6 text-weight-bold align-left"
                    style="max-width: 300px"
                  >
                    Paylidate Checkouts
                  </div>
                  <div class="q-py-sm" style="max-width: 300px">
                    Use Paylidate button to checkout with just an email address
                    and password.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 190px;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/wallet.png" style="width: 25px" />
                  </div>
                  <div
                    class="q-py-sm text-h6 text-weight-bold align-left"
                    style="max-width: 300px"
                  >
                    Wallet
                  </div>
                  <div class="q-py-sm" style="max-width: 300px">
                    Make secured escrow payments in a flash.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 290px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="q-px-lg q-py-xl flex text-justify">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/ring.png" style="width: 25px" />
                  </div>
                  <div
                    class="q-py-sm text-h6 text-weight-bold align-left"
                    style="max-width: 300px"
                  >
                    Connect to Earn
                  </div>
                  <div class="q-py-sm" style="max-width: 300px">
                    Help friends connect with buyers and earn from the sales.
                    Sellers can add how much they want referrers to earn on
                    every sale.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 290px;
                }
              "
            >
              <div class="q-px-lg q-py-lg flex text-justify">
                <div>
                  <div class="q-pb-xs q-pt-sm">
                    <img src="../../statics/coins.png" style="width: 25px" />
                  </div>
                  <div
                    class="q-py-sm text-h6 text-weight-bold align-left"
                    style="max-width: 300px"
                  >
                    Paylidate Points
                  </div>
                  <div class="q-py-sm" style="max-width: 300px">
                    Earn Paylidate points on the go. Milestone points,
                    transaction points, bonuses and other offers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="gt-sm q-py-xs text-center text-h6 flex justify-center text-weight-light"
        >
          <q-btn
            color="primary"
            no-caps
            size="18px"
            class="q-px-lg Montserrat"
            label="Learn More"
            :to="{ name: '#' }"
          />
        </div>

        <!-- Mobile Responsiveness -->
        <q-card class="my-card flex bg-white lt-md" flat style="width: 100%">
          <div class="full-width flex justify-center q-py-md">
            <div
              class="flex q-gutter-y-md text-h6 text-weight-bold text-primary q-pt-xl font-Nexa-Light"
              style="max-width: 250px"
            >
              Get started with our unique features.
            </div>
          </div>

          <div class="full-width q-py-none q-px-lg Circular">
            <div class="col align-left">
              <q-card-section>
                <div class="text-justify flex q-py-md">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/money.png" style="width: 25px" />
                    </div>
                    <div
                      class="q-py-sm text-subtitle1 text-weight-bold align-left"
                      style="max-width: 300px"
                    >
                      Escrow
                    </div>
                    <div
                      class="q-py-sm text-subtitle2"
                      style="max-width: 300px"
                    >
                      Buy and sell with ease. Use Paylidate's escrow payment to
                      secure your transactions.
                    </div>
                  </div>
                </div>

                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-pb-md">
                  <div>
                    <div class="q-py-sm">
                      <img
                        src="../../statics/receipt.png"
                        style="width: 25px"
                      />
                    </div>
                    <div
                      class="q-py-sm text-subtitle1 text-weight-bold align-left"
                      style="max-width: 300px"
                    >
                      Paylidate Checkouts
                    </div>
                    <div
                      class="q-py-sm text-subtitle2"
                      style="max-width: 300px"
                    >
                      Use Paylidate button to checkout with just an email
                      address and password.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-pb-md">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/wallet.png" style="width: 25px" />
                    </div>
                    <div
                      class="q-py-sm text-subtitle1 text-weight-bold align-left"
                      style="max-width: 300px"
                    >
                      Wallet
                    </div>
                    <div
                      class="q-py-sm text-subtitle2"
                      style="max-width: 300px"
                    >
                      Make secured escrow payments in a flash.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>
              <q-card-section>
                <div class="text-justify flex q-pb-md">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/ring.png" style="width: 25px" />
                    </div>
                    <div
                      class="q-py-sm text-subtitle1 text-weight-bold align-left"
                      style="max-width: 300px"
                    >
                      Connect to Earn
                    </div>
                    <div
                      class="q-py-sm text-subtitle2"
                      style="max-width: 300px"
                    >
                      Help friends connect with buyers and earn from the sales.
                      Sellers can add how much they want referrers to earn on
                      every sale.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-py-md">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/coins.png" style="width: 25px" />
                    </div>
                    <div
                      class="q-py-sm text-subtitle1 text-weight-bold align-left"
                      style="max-width: 300px"
                    >
                      Paylidate Points
                    </div>
                    <div
                      class="q-py-sm text-subtitle2"
                      style="max-width: 300px"
                    >
                      Earn Paylidate points on the go. Milestone points,
                      transaction points, bonuses and other offers.
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="full-width flex justify-center q-py-sm q-pb-xl">
            <div class="flex q-gutter-y-md">
              <q-btn
                color="primary"
                no-caps
                size="10px"
                class="q-px-xl Montserrat"
                label="Learn More"
                :to="{ name: '#' }"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>

    <!-- Partners Mobile Responsiveness -->
    <div class="full-width bg-green flex justify-center q-py-md font-Nexa-Light">
      <div class="column items-center full-width lt-md" style="height: 150px">
        <div class="col">
          <div
            class="q-py-lg q-px-lg text-left text-primary text-h6 text-weight-bold"
            style="max-width: 150px"
            padding-left="none"
          >
            Partners
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-auto">
                  <div class="row">
                    <div
                      class="col q-px-sm text-primary text-subtitle1 text-weight-bold"
                      style="max-width: 250px"
                    >
                      <span>
                        <img
                          src="../../statics/providus.png"
                          style="width: 25px"
                        />
                      </span>
                      Providus Bank
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="row">
                    <div
                      class="col q-px-sm text-primary text-subtitle1 text-weight-bold"
                      style="max-width: 300px"
                    >
                      <span>
                        <img
                          src="../../statics/flutterwave.png"
                          style="width: 25px"
                        />
                      </span>
                      Flutterwave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Partners -->
      <div class="row full-width font-Nexa-Light gt-sm">
        <div class="col-8">
          <div
            class="q-py-sm q-px-md text-left text-primary text-h4 text-weight-bold"
            style="max-width: 150px"
            padding-left="none"
          >
            Partners
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-auto">
                  <div class="row">
                    <div
                      class="col q-px-sm text-primary text-h6 text-weight-bold"
                      style="max-width: 300px"
                    >
                      <span>
                        <img
                          src="../../statics/providus.png"
                          style="width: 40px"
                        />
                      </span>
                      Providus Bank
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="row">
                    <div
                      class="col q-px-sm text-primary text-h6 text-weight-bold"
                      style="max-width: 300px"
                    >
                      <span>
                        <img
                          src="../../statics/flutterwave.png"
                          style="width: 40px"
                        />
                      </span>
                      Flutterwave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="full-width q-px-sm bg-grey-3 lt-md">
      <div
        class="full-width q-py-xl q-py-sm-xl flex justify-center text-center"
      >
        <div style="max-width: 1200px" class="full-width text-center">
          <div class="row justify-evenly">
            <div class="col-4 q-py-sm q-px-xl text-primary">
              <div class="row text-h6 text-weight-light font-Nexa-Light">Company</div>
              <div class="row q-py-sm Circular">Legal</div>
              <div class="row q-py-sm Circular">Developers</div>
              <div class="row q-py-sm Circular">Security</div>
              <div class="row q-py-sm Circular">Partners</div>
              <div class="row q-py-sm text-justify Circular">Escrow Agreement</div>
              <div class="row q-py-sm Circular">Privacy</div>
            </div>
            <div class="col-4 q-py-sm q-px-xl text-primary">
              <div class="row text-h6 text-weight-light font-Nexa-Light">Sitemap</div>
              <div class="row q-py-sm Circular">Home</div>
              <div class="row q-py-sm Circular">Fees</div>
              <div class="row q-py-sm text-justify Circular">Resource Center</div>
              <div class="row q-py-sm Circular">About</div>
              <div class="row q-py-sm Circular">FAQ</div>
            </div>
            <div class="col-4 q-py-sm q-px-xl text-primary">
              <div class="row text-h6 text-weight-light font-Nexa-Light">Socials</div>
              <div class="row q-py-sm Circular">Facebook</div>
              <div class="row q-py-sm Circular">Linkedin</div>
              <div class="row q-py-sm Circular">Instagram</div>
              <div class="row q-py-sm Circular">Twitter</div>
            </div>
          </div>
          <div class="text-center text-h6 flex flex-center text-weight-light">
            <div class="q-gutter-y-sm">
              <div class="text-secondary text-h4 font-Nexa-Light">Head Office</div>
              <div class="text-subtitle1 text-bold Circular">
                No. 14 Oluwasogo Str. Ikeja, Lagos
              </div>
            </div>
          </div>
          <div class="row full-width flex justify-center q-py-lg">
            <div class="flex q-gutter-y-md">
              <div
                class="text-center text-h6 flex flex-center text-weight-light"
              >
                <div class="q-gutter-y-sm">
                  <div class="text-secondary text-h4 font-Nexa-Light">News Letter</div>
                  <div class="row">
                    <q-input
                      v-model="text"
                      class=""
                      style="min-width: 250px"
                      type="email"
                      label="Enter your email address"
                    />

                    <q-btn
                      color="primary"
                      outline
                      round
                      size="md"
                      style="margin-top: 15px"
                      class="q-pa-none"
                      icon="arrow_forward"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gt-sm full-width q-px-sm q-px-sm-xl bg-primary">
      <div class="full-width q-py-xl q-py-sm-xl flex text-left">
        <div style="max-width: 1200px" class="row full-width text-center">
          <div class="col-3 text-white" style="padding-top: 0px">
            <div class="row">
              <div>
                <img
                  src="../../statics/payli_logo.png"
                  style="max-width: 200px"
                />
              </div>
              <div class="q-px-sm q-py-sm">
                <img
                  src="../../statics/payli_text.png"
                  style="max-width: 200px"
                />
              </div>
            </div>
          </div>
          <div class="col-2 text-white">
            <div class="row text-h6 text-weight-medium font-Nexa-Light">Company</div>
            <div class="row q-py-sm Circular">Legal</div>
            <div class="row q-py-sm Circular">Developers</div>
            <div class="row q-py-sm Circular">Security</div>
            <div class="row q-py-sm Circular">Partners</div>
            <div class="row q-py-sm Circular">Escrow Agreement</div>
            <div class="row q-py-sm Circular">Privacy</div>
          </div>
          <div class="col-2 text-white">
            <div class="row text-h6 text-weight-medium font-Nexa-Light">Sitemap</div>
            <div class="row q-py-sm Circular">Home</div>
            <div class="row q-py-sm Circular">Fees</div>
            <div class="row q-py-sm Circular">Resource Center</div>
            <div class="row q-py-sm Circular">About </div>
            <div class="row q-py-sm Circular">FAQ </div>
          </div>
          <div class ="col-2 text-white">
            <div class ="row text-h6 text-weight-medium font-Nexa-Light">Socials</div>
            <div class="row q-py-sm Circular">Facebook</div>
            <div class="row q-py-sm Circular">Linkedin</div>
            <div class="row q-py-sm Circular">Instagram</div>
            <div class="row q-py-sm Circular">Twitter</div>
          </div>
          <div class="col-3 text-white">
            <div class="row text-h6 text-weight-medium font-Nexa-Light">Head Office</div>
            <div class="row q-py-sm Circular">No. 14 Oluwasogo Str. Ikeja, Lagos</div>
            <div class="row text-h6 text-weight-medium q-py-sm font-Nexa-Light">
              News Letter
            </div>
            <div class="row">
              <div
                :class="
                  $q.screen.gt.sm ? 'flex justify-center' : 'flex q-gutter-y-md'
                "
              >
                <q-input
                  v-model="text"
                  class=""
                  style="min-width: 250px"
                  type="email"
                  label="Enter your email address"
                  label-color="white"
                  color="white"
                  text-color="white"
                />
                <q-btn
                  color="white"
                  outline
                  round
                  size="md"
                  style="margin-top: 15px"
                  class="q-pa-none"
                  icon="arrow_forward"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-width q-px-sm q-px-sm-xl bg-primary"
      style="border: 0.5px solid white"
    >
      <div class="full-width q-py-xl q-py-sm-xl flex text-left Circular">
        <div style="max-width: 1200px" class="row full-width text-center">
          <div class="col-4 text-white">
            <div class="text-caption">hello@paylidate.com</div>
          </div>
          <div class="col-4 text-white">
            <div class="text-caption">08066984101</div>
          </div>
          <div class="col-4 text-white">
            <div class="text-caption">
              © 2022 lotusfort technologies. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      play: false,
      slide: 1,
      autoplay: true,
      FAQs: {
        Q1: false,
        Q2: false,
        Q3: false,
        Q4: false,
        Q5: false,
        Q6: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  display: block;

  text-align: center;

  text-decoration: none;
}

.font-Nexa-Light {
  font-family: Nexa Light;
}

.Montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
