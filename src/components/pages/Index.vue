<template>
  <q-page
    class="section1"
    :class="$q.screen.gt.sm ? 'text-primary row q-pt-md' : 'text-primary row'"
    style="
      scroll-behavior: smooth;
      font-family: 'Mukta', 'sans-serif';
      width: 100%;
    "
  >
    <div class="section1 q-pr-xl q-mt-lg flex gt-sm" style="padding-top: 4rem">
      <div
        class="row items-center justify-center"
        style="width: 100%; padding-left: 4rem"
      >
        <div class="col-12 col-sm-4" style="width: 40%">
          <h1 class="big-header">
            Fast and secured <span>digital payments</span>
            guaranteed
          </h1>
          <p class="big-paragraph">
            Helping millions of Nigerian buyers and sellers transact safely from
            anywhere without doubt or fear
          </p>

          <div
            class="row items-start q-gutter-sm gt-sm"
            style="
              padding-top: 0.4rem;
              font-family: 'Montserrat';
              color: #0e3951;
              font-style: normal;
              font-weight: 650;
              font-size: 0.875rem;
              line-height: 1.25rem;
            "
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
            class="text-weight-light q-gutter-sm gt-sm"
            style="padding-top: 2.5rem"
          >
            <q-btn
              style="background: #182430; color: white"
              no-caps
              rounded-borders
              padding="10px 16px"
              size="18px"
              class="Montserrat"
              label="Register"
              :to="{ name: 'register' }"
            />
            <!-- <q-btn color="secondary" no-caps class="q-pa-xs Montserrat" icon="play_arrow" label="Play Demo" @click="play = true" /> -->
          </div>
        </div>

        <div class="col-12 col-sm-8 align-center" style="width: 60%">
          <img
            src="../../statics/girlie.png"
            spinner-color="white"
            style="width: 100%; padding-top: 5.9rem; padding-left: 0px"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Responsiveness -->
    <div
      class="section1 lt-md item-center full-width flex flex justify-center row"
    >
      <div class="q-py-sm" style="padding: 1rem">
        <h1>Fast and secured <span>digital payments</span> guaranteed</h1>
        <p>
          Helping millions of Nigerian buyers and sellers transact safely from
          anywhere without doubt or fear
        </p>
      </div>
      <div
        class="row full-width row wrap items-start"
        style="padding-bottom: 0.3rem; padding-left: 0.6rem"
      >
        <h5 class="col" style="text-align: right">Transaction Security</h5>
        <div class="q-pr-md"></div>
        <q-separator vertical />
        <div class="q-pr-md"></div>
        <h5 class="col" style="text-align: left">Seller Guarantee</h5>

        <!-- <div class="q-pr-md"></div>
        <q-separator vertical/>
        <div class="col q-pl-md" style="text-align: left">
          <h5>Seller Guarantee</h5>
        </div> -->
        <div class="full-width row wrap justify-center items-start">
          <h5>Buyer Protection</h5>
        </div>
      </div>

      <div
        class="full-width row wrap justify-center items-start content-start"
        style="padding-left: 0.6rem"
      >
        <q-btn
          style="background: #182430; color: white"
          no-caps
          rounded-borders
          padding="12px 55px"
          size="18px"
          class="Montserrat"
          label="Register"
          :to="{ name: 'register' }"
        />
      </div>

      <div class="full-width row wrap justify-center items-start content-start">
        <img
          src="../../statics/girlie_mobo.png"
          spinner-color="white"
          style="width: 80%; max-width: 400px"
        />
      </div>
    </div>

    <!-- What Paylidate will do for you -->
    <div
      class="q-py-md bg-grey-1 flex justify-center gt-sm"
      style="width: 100%"
    >
      <div class="q-py-xl full-width text-center">
        <div>
          <h2 class="big-sub-header">What paylidate can do for you</h2>
        </div>

        <div class="row" style="width: 98%; justify-content: space-evenly">
          <div class="col-6 col-md-3" style="width: 25%; padding-left: 2rem">
            <div class="row">
              <div class="flex text-justify">
                <div>
                  <h5 class="big-title align-left">01/ Payments</h5>
                  <p class="big-sub-body">
                    Make payments quickly, easily and safely. Payment would be
                    held in escrow until you confirm the delivery
                  </p>
                </div>
              </div>
            </div>
            <div class="row" style="padding-top: 8rem">
              <div class="flex text-justify">
                <h5 class="big-title">03/ Refunds</h5>
                <p class="big-sub-body">
                  Get a refund if what you got is different from what was
                  specified by the vendor
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-6 col-md-6 flex justify-center align-center"
            style="width: 50%"
          >
            <img
              src="../../statics/gif_for_changing images.gif"
              spinner-color="white"
              style="width: 100%; padding-top: 2.5rem; padding-left: 1.875rem"
            />
          </div>
          <div class="col-6 col-md-3" style="width: 25%; padding-left: 2.5rem">
            <div class="row">
              <div class="text-left flex justify-left">
                <div>
                  <h5 class="big-title">02/ Disputes</h5>
                  <p class="big-sub-body">
                    Raise disputes to clear out issues with a transaction
                  </p>
                </div>
              </div>
            </div>
            <div class="row" style="padding-top: 8rem">
              <div class="flex text-justify">
                <div>
                  <h5 class="big-title">04/ Bonuses</h5>
                  <p class="big-sub-body">
                    Earn points from referrals, connecting vendors with buyers
                    and meeting transaction milestone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What Paylidate can do Mobile -->
    <div
      class="lt-md full-width row wrap justify-start items-start content-start bg-grey-1"
      style="padding: 1.9rem 0"
    >
      <div class="q-px-lg">
        <h2>What Paylidate can do for you.</h2>
      </div>

      <div
        class="column full-width q-pt-sm q-px-lg Montserrat"
        style="width: 98%"
      >
        <div class="col align-left">
          <div class="text-justify flex">
            <div>
              <div class="q-pb-sm align-left">
                <h2 class="subtitle">01/ Payments</h2>
              </div>
              <div class="q-py-xs">
                <p class="sub-body">
                  Make payments quickly, easily and safely. Payment would be
                  held in escrow until you confirm the delivery
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-pb-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-py-sm align-left">
                <h2 class="subtitle">02/ Disputes</h2>
              </div>
              <div class="q-py-xs text-justify">
                <p class="sub-body">
                  Raise disputes to clear out issues with a transaction
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-py-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-pb-sm align-left">
                <h2 class="subtitle">03/ Refunds</h2>
              </div>
              <div class="q-py-xs text-justify">
                <p class="sub-body">
                  Get a refund if what you got is different from what was
                  specified by the vendor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-py-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-pb-sm align-left">
                <h2 class="subtitle">04/ Bonuses</h2>
              </div>
              <div class="q-py-xs text-justify">
                <p class="sub-body">
                  Earn points from referrals, connecting vendors with buyers and
                  meeting transaction milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col justify-center align-center">
          <img
            src="../../statics/gif_for_mobo.gif"
            spinner-color="white"
            style="width: 98%; max-width: 400px"
          />
        </div>
      </div>
    </div>

    <!-- How Paylidate Works -->
    <div
      class="q-pa-sm q-pa-sm-xl flex justify-center"
      style="background-color: #182430; width: 100%"
    >
      <div
        style="padding-top: 3rem; padding-bottom: 4rem"
        class="full-width text-center"
      >
        <div class="gt-sm text-center flex justify-center">
          <h2 class="big-sub-header" style="color: #ffffff">
            How Paylidate Works
          </h2>
        </div>

        <div class="gt-sm row full-width q-pt-sm justify-evenly">
          <div class="text-center flex justify-center">
            <div class="col q-pr-md">
              <button
                class="button"
                @click="toggleSeller"
                :class="{ active: activeSeller }"
              >
                For Seller
              </button>
            </div>
            <div class="col q-pl-md">
              <button
                class="button"
                @click="toggleBuyer"
                :class="{ active: activeBuyer }"
              >
                For Buyer
              </button>
            </div>
          </div>
        </div>

        <div class="gt-sm row q-py-xl">
          <q-card
            class="my-card"
            flat
            style="width: 98%; background-color: #182430"
          >
            <div class="row full-width q-py-sm">
              <div class="row" style="width: 100%">
                <div class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm align-left card-item-num">01/</div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">Sign Up</h5>
                        <p class="text-justify card_item">
                          A simple sign up page to get you on board.
                        </p>
                      </div>
                      <div
                        class="col-3"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions vertical class="justify-around q-px-md">
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">02/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Set Up Account
                        </h5>
                        <p class="text-justify card_item">
                          Add your account number in the settings and complete
                          your account setup
                        </p>
                      </div>
                      <div
                        class="col-3"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions vertical class="justify-around q-px-md">
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>
              </div>

              <div class="row" style="width: 100%">
                <div v-if="seller" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">03/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Create Product
                        </h5>
                        <p class="text-justify card_item">
                          Click the "create" button on the product page, add
                          your product/service details to create a product link.
                        </p>
                      </div>
                      <div
                        class="col-3"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions vertical class="justify-around q-px-md">
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="buyer" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">03/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Create A Buy Product With Seller’s Tag
                        </h5>
                        <p class="text-justify card_item">
                          Use the seller’s user tag or email to create a payment
                          request. The seller has to to accept before payment
                          can be made
                        </p>
                      </div>

                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="seller" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">04/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Copy & Share Payment Link
                        </h5>
                        <p class="text-justify card_item">
                          Copy and share the generated product link
                        </p>
                      </div>
                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="buyer" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">04/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Click on Seller-Product Link
                        </h5>
                        <p class="text-justify card_item">
                          View the product by clicking on the vendor’s product
                          link
                        </p>
                      </div>
                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>
              </div>

              <div class="row" style="width: 100%">
                <div v-if="seller" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">05/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Receive Payments
                        </h5>
                        <p class="text-justify card_item">
                          When customers pay through your product link, you
                          receive an email alert of the payment
                        </p>
                      </div>
                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="buyer" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">05/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Make Payment
                        </h5>
                        <p class="text-justify card_item">
                          Make payment using any of the available payment
                          channels
                        </p>
                      </div>

                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="seller" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">06/</div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Deliver Product or Service
                        </h5>
                        <p class="text-justify card_item">
                          Complete the agreed delivery
                        </p>
                      </div>

                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions
                          vertical
                          class="q-pl-lg justify-around q-px-md"
                        >
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>

                <div v-if="buyer" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-px-sm card-item-num">06/</div>
                      </div>

                      <div class="col-4 q-pl-md" style="width: 75%">
                        <h5 class="text-justify card-item-header">
                          Receive Delivery
                        </h5>
                        <p class="text-justify card_item">
                          After payment, the seller would be prompted the make
                          the delivery
                        </p>
                      </div>

                      <div
                        class="col-2"
                        style="width: 15%; padding-top: 2.5rem"
                      >
                        <q-card-actions vertical class="justify-around q-px-md">
                          <q-btn
                            outline
                            round
                            size="1.2rem"
                            color="white"
                            icon="arrow_forward"
                          />
                        </q-card-actions>
                      </div>
                    </div>
                  </div>
                  <q-separator dark inset />
                </div>
              </div>

              <div v-if="seller" class="q-px-xl" style="width: 45%">
                <div class="row q-py-lg card_section" style="width: 100%">
                  <div class="text-left flex justify-left">
                    <div class="col-2" style="width: 10%">
                      <div class="q-px-sm card-item-num">07/</div>
                    </div>
                    <div class="col-4 q-pl-md" style="width: 75%">
                      <h5 class="text-justify card-item-header">
                        Withdraw Funds
                      </h5>
                      <p class="text-justify card_item">
                        When delivery is complete, withdrawal will be enabled
                      </p>
                    </div>
                    <div class="col-2" style="width: 15%; padding-top: 2.5rem">
                      <q-card-actions vertical class="justify-around q-px-md">
                        <q-btn
                          outline
                          round
                          size="1.2rem"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </div>

              <div v-if="buyer" class="q-px-xl" style="width: 45%">
                <div class="row q-py-lg card_section" style="width: 100%">
                  <div class="text-left flex justify-left">
                    <div class="col-2" style="width: 10%">
                      <div class="q-px-sm card-item-num">07/</div>
                    </div>
                    <div class="col-4 q-pl-md" style="width: 75%">
                      <h5 class="text-justify card-item-header">
                        Confirm Payment
                      </h5>
                      <p class="text-justify card_item">
                        On delivery,access the product and confirm it’s what you
                        ordered. If it is, then confirm the payment.
                      </p>
                    </div>
                    <div class="col-2" style="width: 15%; padding-top: 2.5rem">
                      <q-card-actions vertical class="justify-around q-px-md">
                        <q-btn
                          outline
                          round
                          size="1.2rem"
                          color="white"
                          icon="arrow_forward"
                        />
                      </q-card-actions>
                    </div>
                  </div>
                </div>
                <q-separator dark inset />
              </div>
            </div>
          </q-card>
        </div>

        <!--Mobile  -->
        <div class="lt-md text-center flex justify-center">
          <h2 style="color: white">How Paylidate works</h2>
        </div>
        <div class="lt-md row full-width q-py-lg justify-evenly">
          <div class="col-6 q-px-sm">
            <button @click="toggleSeller" class="small-btn1">For Seller</button>
          </div>
          <div class="col q-pl-sm">
            <button @click="toggleBuyer" class="small-btn2">For Buyer</button>
          </div>
        </div>

        <q-card
          class="my-card lt-md"
          flat
          style="width: 98%; background-color: #182430"
        >
          <div
            class="row full-width flex justify-center q-py-sm Montserrat"
            style="width: 100%"
          >
            <q-card-section>
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">01/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">Sign Up</h2>
                    <p class="sub-body-2">
                      A simple sign up page to get you on board.
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">02/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Set Up Account
                    </h2>
                    <p class="sub-body-2">
                      Add your account number in the settings and complete your
                      account setup
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="seller">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">03/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Create Product
                    </h2>
                    <p class="sub-body-2">
                      Click the "create" button on the product page, add your
                      product/service details to create a product link.
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">03/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Create A Buy Product With Seller’s Tag
                    </h2>
                    <p class="sub-body-2">
                      Use the seller’s user tag or email to create a payment
                      request. The seller has to to accept before payment can be
                      made
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="seller">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">04/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Copy & Share Payment Link
                    </h2>
                    <p class="sub-body-2">
                      Copy and share the generated product link
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">04/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Click on Seller-Product Link
                    </h2>
                    <p class="sub-body-2">
                      View the product by clicking on the vendor’s product link
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="seller">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">05/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Receive Payments
                    </h2>
                    <p class="sub-body-2">
                      When customers pay through your product link, you receive
                      an email alert of the payment
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">05/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Make Payment
                    </h2>
                    <p class="sub-body-2">
                      Make payment using any of the available payment channels
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="seller">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">06/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Deliver Product or Service
                    </h2>
                    <p class="sub-body-2">Complete the agreed delivery</p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">06/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Receive Delivery
                    </h2>
                    <p class="sub-body-2">
                      After payment, the seller would be prompted the make the
                      delivery
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="seller">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">07/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Withdraw Funds
                    </h2>
                    <p class="sub-body-2">
                      When delivery is complete, withdrawal will be enabled
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-lg">
                <div class="text-left flex justify-left">
                  <div class="col-2" style="width: 15%">
                    <h2 class="subtitle-num align-left">07/</h2>
                  </div>
                  <div class="col-4 q-pl-sm" style="width: 60%">
                    <h2 class="subtitle" style="color: #ffffff">
                      Confirm Payment
                    </h2>
                    <p class="sub-body-2">
                      On delivery,access the product and confirm it’s what you
                      ordered. If it is, then confirm the payment.
                    </p>
                  </div>
                  <div class="col-2" style="width: 20%">
                    <q-card-actions
                      vertical
                      class="q-pl-lg q-py-lg justify-around q-px-sm"
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
    <div
      class="flex"
      style="background-color: #319ed9; width: 100%; padding-bottom: 2rem"
    >
      <div class="row justify-evenly gt-sm">
        <div class="col-6 flex justify-center" style="width: 40%">
          <div class="row q-pt-xl">
            <img
              src="../../statics/handshake.png"
              spinner-color="white"
              style="width: 100%; max-width: 550px"
            />
          </div>
        </div>
        <div
          class="col-6 flex text-justify"
          style="padding-top: 6.25rem; padding-left: 3.125rem; width: 40%"
        >
          <h5 class="headings-2">Paylidate connects buyers and sellers</h5>
          <p class="big-sub-body" style="color: #062231; line-height: 1.8rem">
            We believe you should be able to choose how you want to pay during
            transactions online without being subjected to the risk of loosing
            your money.
          </p>
        </div>

        <div class="row justify-center gt-sm" style="padding-top: 0.3125rem">
          <div class="col-4 flex">
            <h2 class="headings-2">Pay with no doubt and sell without fear</h2>
          </div>
          <div class="col-6 flex" style="padding-left: 12.4rem">
            <p class="big-sub-body" style="color: #062231; line-height: 1.8rem">
              It's important that you stay focused on your goals without getting
              distracted by unnecessary worries. That is why Paylidate makes
              payments easy and protects you whether you are buying or selling.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Responsiveness -->
    <div
      class="q-pt-lg column full-width q-py-lg q-px-lg flex lt-md"
      style="background-color: #319ed9"
    >
      <div class="col flex text-justify">
        <h2 style="color: #030c23; text-align: left">
          Paylidate connects buyers and sellers
        </h2>
        <p class="sub-body-2" style="color: #062231">
          We believe you should be able to choose how you want to pay during
          transactions online without being subjected to the risk of loosing
          your money.
          <br />
        </p>
        <div class="row q-pa-md">
          <img
            src="../../statics/handshake.png"
            spinner-color="white"
            style="width: 100%; max-width: 400px;"
          />
        </div>
        <div class="row flex text-justify">
          <h2 style="color: #030c23; text-align: left">
            Pay with no doubt and sell without fear
          </h2>
          <p class="sub-body-2" style="color: #062231">
            It's important that you stay focused on your goals without getting
            distracted by unnecessary worries. That is why Paylidate makes
            payments easy and protects you whether you are buying or selling.
            <br />
          </p>
        </div>
      </div>
    </div>

    <!-- Unique Features Section -->
    <div class="q-pa-sm q-pa-sm-xl full-width bg-grey-1 flex justify-center">
      <div style="width: 100%" class="q-py-xl full-width text-center">
        <div class="gt-sm text-center flex justify-center">
          <div class="big-sub-header" style="width: 600px">
            Get started with our unique features
          </div>
        </div>

        <div class="gt-sm row justify-center q-py-xl" style="width: 98%">
          <div class="col-4" style="border-right: 1px solid #ccc">
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 2rem);
                  height: 250px;

                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-lg">
                    <img src="../../statics/money.png" style="width: 10%" />
                  </div>
                  <div class="q-py-xs big-subtitle">Escrow</div>
                  <div class="q-py-sm big-sub-body" style="width: 90%">
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
                  width: calc(100% - 2rem);
                  height: 270px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/receipt.png" style="width: 10%" />
                  </div>
                  <div class="q-py-xs big-subtitle">Paylidate Checkouts</div>
                  <div class="q-py-sm big-sub-body" style="width: 80%">
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
                  width: calc(100% - 2rem);
                  height: 250px;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pt-xl">
                    <img src="../../statics/wallet.png" style="width: 12%" />
                  </div>
                  <div class="q-py-xs big-subtitle">Wallet</div>
                  <div class="q-py-sm big-sub-body" style="width: 90%">
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
                  width: calc(100% - 2rem);
                  height: 380px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="q-px-lg q-py-xl flex text-left align-left">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/ring.png" style="width: 10%" />
                  </div>
                  <div class="q-py-xm big-subtitle">Connect to Earn</div>
                  <div class="q-py-sm big-sub-body" style="width: 90%">
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
                  width: calc(100% - 2rem);
                  height: 290px;
                }
              "
            >
              <div class="q-px-lg q-py-lg flex text-left align-left">
                <div>
                  <div class="q-pb-xs q-pt-sm">
                    <img src="../../statics/coins.png" style="width: 10%" />
                  </div>
                  <div class="q-py-sm big-subtitle">Paylidate Points</div>
                  <div class="q-py-sm big-sub-body" style="width: 90%">
                    Earn Paylidate points on the go. Milestone points,
                    transaction points, bonuses and other offers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gt-sm q-py-xs text-center flex justify-center">
          <q-btn
            color="primary"
            no-caps
            size="1.13rem"
            class="q-px-lg Montserrat"
            label="Learn More"
            :to="{ name: '#' }"
          />
        </div>

        <!-- Mobile Responsiveness -->
        <q-card class="my-card flex bg-grey-1 lt-md" flat style="width: 100%">
          <div
            class="full-width flex"
            style="text-align: left; padding-left: 1rem"
          >
            <h2>Get started with our unique features.</h2>
          </div>

          <div class="full-width">
            <div class="col align-left">
              <q-card-section>
                <div class="text-justify flex" style="width: 100%">
                  <div>
                    <img
                      src="../../statics/money.png"
                      style="max-width: 100%"
                    />
                    <h2 class="subtitle align-left">Escrow</h2>
                    <p class="sub-body">
                      Buy and sell with ease. Use Paylidate's escrow payment to
                      secure your transactions.
                    </p>
                  </div>
                </div>

                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex" style="width: 100%">
                  <div>
                    <img
                      src="../../statics/receipt.png"
                      style="max-width: 100%"
                    />
                    <h2 class="subtitle">Paylidate Checkouts</h2>
                    <p class="sub-body">
                      Use Paylidate button to checkout with just an email
                      address and password.
                    </p>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex" style="width: 100%">
                  <div>
                    <img
                      src="../../statics/wallet.png"
                      style="max-width: 100%"
                    />

                    <h2 class="subtitle">Wallet</h2>
                    <p class="sub-body">
                      Make secured escrow payments in a flash.
                    </p>
                  </div>
                </div>
                <q-separator />
              </q-card-section>
              <q-card-section>
                <div class="text-justify flex" style="width: 100%">
                  <div>
                    <img src="../../statics/ring.png" style="max-width: 100%" />

                    <h2 class="subtitle">Connect to Earn</h2>
                    <p class="sub-body">
                      Help friends connect with buyers and earn from the sales.
                      Sellers can add how much they want referrers to earn on
                      every sale.
                    </p>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex" style="width: 100%">
                  <div>
                    <img
                      src="../../statics/coins.png"
                      style="max-width: 100%"
                    />

                    <h2 class="subtitle">Paylidate Points</h2>
                    <p class="sub-body">
                      Earn Paylidate points on the go. Milestone points,
                      transaction points, bonuses and other offers.
                    </p>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="full-width flex justify-left q-py-sm q-pb-lg">
            <div class="flex" style="padding-left: 1rem">
              <q-btn
                style="background-color: #182430"
                color="#ffffff"
                no-caps
                size="18px"
                class="q-px-lg q-py-sm Montserrat"
                label="Learn More"
                :to="{ name: '#' }"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>

    <!-- Partners Mobile Responsiveness -->

    <div
      class="full-width lt-md flex justify-left q-py-md Montserrat"
      style="width: 100%; background-color: #88c58f"
    >
      <div class="row full-width" style="padding-left: 1rem">
        <h2>Partners</h2>
      </div>

      <div class="full-width flex q-py-md">
        <div class="row justify-around q-pl-md q-pb-md" style="width: 100%">
          <div class="col" style="width: 50%">
            <img src="../../statics/providus_mobo.png" style="width: 80%" />
          </div>
          <div class="col" style="width: 50%">
            <img src="../../statics/flutter_mobo.png" style="width: 80%" />
          </div>
        </div>
      </div>
    </div>

    <!-- Partners -->
    <div
      class="gt-sm flex justify-center q-py-md Montserrat"
      style="background-color: #88c58f; width: 100%"
    >
      <div class="row" style="width: 100%">
        <div class="col-7" style="width: 60%">
          <h2
            class="big-sub-header"
            style="text-align: left; padding-left: 2rem"
          >
            Partners
          </h2>
        </div>
        <div class="col-5" style="padding-top: 50px; width: 40%">
          <div class="row">
            <div class="col-auto" style="width: 50%">
              <img src="../../statics/providus_mobo.png" style="width: 80%" />
            </div>

            <div class="col-auto q-pl-xl" style="width: 50%">
              <img src="../../statics/flutter_mobo.png" style="width: 80%" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div
      class="full-width flex justify-left lt-md"
      style="background-color: #182430"
    >
      <div class="full-width q-py-md flex justify-left">
        <q-card
          class="my-card"
          flat
          style="background-color: #182430; width: 100%"
        >
          <q-card-section>
            <div class="row full-width justify-start">
              <img src="../../statics/payli_logo.png" style="width: 30%" />
            </div>
            <div class="full-width q-py-md">
              <div class="row justify-start">
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row"><h2 class="footer-header">Company</h2></div>
                  <!-- <div class="row"><p class="footer-body">Legal</p></div>
                  <div class="row"><p class="footer-body">Developers</p></div>
                  <div class="row"><p class="footer-body">Security</p></div>
                  <div class="row"><p class="footer-body">Partners</p></div> -->
                  <div class="row text-justify">
                    <a href="escrow-agreement"><p class="footer-body">Escrow Agreement</p></a>
                  </div>
                  <div class="row"><p class="footer-body">Privacy</p></div>
                </div>
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row"><h2 class="footer-header">Sitemap</h2></div>

                  <div class="row">
                    <a href="/"> <p class="footer-body">Home</p> </a>
                  </div>
                  <div class="row">
                    <a href="#fees"><p class="footer-body">Fees</p></a>
                  </div>
                  <!-- <div class="row text-justify">
                    <p class="footer-body">Resource Center</p>
                  </div> -->
                  <div class="row">
                    <a href="about">
                      <p class="footer-body">About</p>
                    </a>
                  </div>
                  <div class="row">
                    <a href="faq">
                      <p class="footer-body">FAQ</p>
                    </a>
                  </div>
                </div>
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row"><h2 class="footer-header">Socials</h2></div>

                  <div class="row">
                    <a href="https://facebook.com/paylidate.escrow"><p class="footer-body">Facebook</p></a>
                  </div>
                  <div class="row">
                    <a href="https://linkedin.com/company/paylidate"><p class="footer-body">LinkedIn</p></a>
                  </div>
                  <div class="row">
                    <a href="https://instagram.com/paylidate"><p class="footer-body">Instagram</p></a>
                  </div>
                  <div class="row">
                    <a href="https://twitter.com/paylidate"><p class="footer-body">Twitter</p></a>
                  </div>
                </div>
              </div>
              <div class="text-left flex flex-left q-py-lg q-pl-sm">
                <div class="q-gutter-y-sm">
                  <h2 class="footer-header">Head Office</h2>
                  <p class="footer-body">No. 14 Oluwasogo Str. Ikeja, Lagos</p>
                </div>
              </div>
              <div class="row full-width flex flex-left q-pl-sm q-py-lg">
                <div class="flex q-gutter-y-md">
                  <div class="text-left flex flex-left">
                    <div class="q-gutter-y-sm">
                      <h2 class="footer-header">News Letter</h2>
                      <div class="row">
                        <q-input
                          v-model="text"
                          label-color="white"
                          style="min-width: 15.6rem"
                          type="email"
                          label="Enter your email address"
                        />

                        <q-btn
                          color="white"
                          outline
                          round
                          size="md"
                          style="margin-top: 1rem"
                          class="q-pa-none"
                          icon="arrow_forward"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />

          <q-card-section>
            <div class="full-width flex q-px-sm q-px-sm-xl">
              <div
                class="row justify-between"
                style="width: 100%; padding-top: 2.5rem"
              >
                <div class="col-4" style="width: 45%">
                  <a href="mailto:hello@paylidate.com?subject=Mail to Paylidate">
                    <div style="border-bottom: 1px solid #0081fe; width: 8.75rem">
                      <p class="sub-body" style="color: #ffffff">
                        hello@paylidate.com
                      </p>
                    </div>
                  </a>

                </div>
                <div class="col-4 q-px-xl" style="width: 45%">
                  <div style="border-bottom: 1px solid #0081fe; width: 5.62rem">
                    <p class="sub-body" style="color: #ffffff">08066984101</p>
                  </div>
                </div>
              </div>
              <div class="row full-width q-py-lg">
                <div class="full-width flex q-py-md">
                  <p class="sub-body" style="opacity: 0.6; color: #ffffff">
                    © 2022 Lotusfort Tech Ltd. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div
      class="gt-sm full-width q-px-sm q-px-sm-xl"
      style="background-color: #182430"
    >
      <div class="full-width q-py-xl q-py-sm-xl flex text-left">
        <q-card
          class="my-card"
          flat
          style="background-color: #182430; width: 100%"
        >
          <q-card-section>
            <div style="width: 98%" class="row">
              <div class="col-3" style="width: 20%">
                <div class="row">
                  <div>
                    <img
                      src="../../statics/payli_logo.png"
                      style="width: 80%; padding-left: 30px"
                    />
                  </div>
                </div>
              </div>
              <div class="col-2 q-pt-md" style="color: #ffffff; width: 18%">
                <div class="row big-subtitle-2">Company</div>
                <!-- <div class="row card-item-2">Legal</div>
                <div class="row card-item-2">Developers</div>
                <div class="row card-item-2">Security</div>
                <div class="row card-item-2">Partners</div> -->
                <div class="row">
                  <a href="escrow-agreement"> <p class="card-item-2">Escrow Agreement</p> </a>
                </div>
                <div class="row card-item-2">Privacy</div>
              </div>
              <div class="col-2 text-white q-pt-md" style="width: 18%">
                <div class="row big-subtitle-2">Sitemap</div>
                <div class="row">
                  <a href="/"> <p class="card-item-2">Home</p> </a>
                </div>
                <div class="row">
                  <a href="#fee"> <p class="card-item-2">Fees</p> </a>
                </div>
                <!-- <div class="row card-item-2">Resource Center</div> -->
                <div class="row">
                  <a href="about"> <p class="card-item-2">About</p> </a>
                </div>
                <div class="row">
                  <a href="faq"> <p class="card-item-2">FAQ</p> </a>
                </div>
              </div>
              <div class="col-2 text-white q-pt-md" style="width: 18%">
                <div class="row big-subtitle-2">Socials</div>
                <div class="row">
                    <a href="https://facebook.com/paylidate.escrow"><p class="card-item-2">Facebook</p></a>
                  </div>
                  <div class="row">
                    <a href="https://linkedin.com/company/paylidate"><p class="card-item-2">LinkedIn</p></a>
                  </div>
                  <div class="row">
                    <a href="https://instagram.com/paylidate"><p class="card-item-2">Instagram</p></a>
                  </div>
                  <div class="row">
                    <a href="https://twitter.com/paylidate"><p class="card-item-2">Twitter</p></a>
                  </div>
              </div>
              <div class="col-3 text-white q-pt-md" style="width: 25%">
                <div class="row big-subtitle-2">Head Office</div>
                <div class="row card-item-2">
                  No. 14 Oluwasogo Str. Ikeja, Lagos
                </div>
                <div class="q-pt-lg row big-subtitle-2">News Letter</div>
                <div class="row q-py-md">
                  <q-input
                    v-model="text"
                    style="
                      width: 12rem;
                      padding-top: 0.3rem;
                      font-size: 0.75rem;
                      line-height: 1.37rem;
                      opacity: 0.75;
                    "
                    type="email"
                    label="Enter your email address"
                    label-color="white"
                    color="white"
                  />
                  <q-btn
                    color="white"
                    outline
                    round
                    size=".88rem"
                    style="margin-top: 1rem"
                    class="q-pa-none"
                    icon="arrow_forward"
                  />
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="full-width flex q-px-sm q-px-sm-xl" style="">
              <div style="width: 98%" class="row text-center">
                <div class="col-4" style="width: 30%">
                  <a href="mailto:hello@paylidate.com?subject=Mail to Paylidate">
                    <div class="footer-style" style="">
                      hello@paylidate.com
                        <div
                          style="
                            border-bottom: 1px solid #0081fe;
                            padding-top: 0.63rem;
                            width: 10rem;
                          ">
                        </div>
                    </div>
                  </a>

                </div>
                <div class="col-4 q-px-xl" style="width: 30%">
                  <div class="footer-style" style="">
                    08066984101
                    <div
                      style="
                        border-bottom: 1px solid #0081fe;
                        padding-top: 0.63rem;
                        width: 6.3rem;
                      "
                    ></div>
                  </div>
                </div>
                <div class="col-4 q-px-lg" style="width: 40%">
                  <div class="footer-style">
                    © 2022 Lotusfort Tech Ltd. All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
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
      buyer: false,
      seller: true,
      activeSeller: true,
      activeBuyer: false,
      selectedButton: false,
    };
  },

  methods: {
    // toggleButton(button){
    //   if(button === 'buyer') {
    //     this.buyer = true;
    //     this.activeBuyer = true,
    //     this.seller = false;
    //     this.activeSeller = false;
    //   } else if (button === 'seller') {
    //     this.seller = true;
    //     this.activeSeller = true;
    //     this.buyer = false;
    //     this.activeBuyer = false;
    //   }
    // },
    toggleBuyer() {
      this.buyer = true;
      (this.activeBuyer = true), (this.seller = false);
      this.activeSeller = false;
    },
    toggleSeller() {
      this.buyer = false;
      (this.activeBuyer = false), (this.seller = true);
      this.activeSeller = true;
    },
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

.section1 {
  background-image: linear-gradient(to right, #fff4d8 -0.12%, #ffd0b9 96.86%);
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 2.25rem;
  text-align: center;
  font-weight: 700;
  font-family: "font-Nexa-Light";
  line-height: 2.6rem;
  color: #001140;
}

h2 {
  font-size: 2rem;
  text-align: left;
  font-weight: 700;
  line-height: 2.6rem;
  color: #001140;
}

h5 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 0.6rem;
  color: #0e3951;
}

p {
  font-size: 1rem;
  font-weight: 450;
  font-family: "Montserrat";
  line-height: 2rem;
  color: #89817d;
  text-align: center;
}

a {
  text-decoration: none;
}

.subtitle {
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  font-family: "Montserrat";
  line-height: 2.5rem;
  align-items: left;
  color: #001140;
}

.sub-body {
  font-weight: 450;
  font-size: 1rem;
  font-family: "Montserrat";
  line-height: 1.5rem;
  text-align: justify;
  color: #6a6664;
}

.sub-body-2 {
  font-weight: 450;
  font-size: 1rem;
  font-family: "Montserrat";
  line-height: 1.75rem;
  text-align: justify;
  color: #bcbfc8;
}

.big-subtitle {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 3.88rem;
  text-align: justify;
  color: #001140;
}

.big-subtitle-2 {
  font-weight: 550;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #ffffff;
}

.subtitle-num {
  font-family: "font-Nexa-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #a8acb6;
  -webkit-text-stroke: 1px #a8acb6;
}

.footer-header {
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  font-family: "Montserrat";
  line-height: 1.75rem;
  color: #ffffff;
}
.footer-body {
  font-style: normal;
  font-weight: 450;
  font-size: 0.9rem;
  font-family: "Montserrat";
  line-height: 1.375rem;
  color: #ffffff;
  opacity: 0.75;
}

.big-header {
  color: #001140;
  font-family: "font-Nexa-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 4.31rem;
  text-align: left;
}

.big-paragraph {
  font-size: 1rem;
  font-weight: 550;
  font-family: "Montserrat";
  line-height: 2rem;
  color: #89817d;
  text-align: left;
}

.big-sub-header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.875rem;
  text-align: center;
  color: #001140;
}

.big-title {
  font-family: "font-Nexa-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 3rem;
  text-align: left;
  color: #001140;
}

.big-sub-body {
  font-style: normal;
  font-weight: 450;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  color: #6a6664;
}

.headings-2 {
  font-family: "font-Nexa-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #030c23;
}

.footer-style {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  padding-top: 1.3rem;
  padding-left: 1.88rem;
  color: #ffffff;
  opacity: 0.75;
}

.card_section {
  width: 100%;
}

.card_section:hover {
  background-color: #111a24;
}

.button {
  width: 18rem;
  height: 4.6rem;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 3.875rem;
  cursor: pointer;
  color: #ffffff;

  background-color: #243647;
}

.active {
  background-color: #eb6117;
}

.small-btn1 {
  width: 9.4rem;
  height: 3.13rem;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 2rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #f26a27;
}
.small-btn1:hover {
  background-color: #eb6117 !important;
}

.small-btn2 {
  width: 9.4rem;
  height: 3.13rem;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  color: #ffffff;
  background-color: #1c3044;
  cursor: pointer;
}
.small-btn2:hover {
  background-color: #1e2d3b !important;
}

.card_item {
  font-family: "Montserrat";
  font-weight: 450;
  font-size: 1rem;
  text-align: left;
  line-height: 1.75rem;
  color: #bcbfc8;
  width: 25rem;
  height: 5rem;
  text-decoration: none;
}

.card-item-2 {
  padding-top: 1.13rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 0.88rem;
  line-height: 1.36rem;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.75;
}

.card-item-header {
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 3rem;
  text-align: left;
  color: #ffffff;
}

.card-item-num {
  font-family: Nexa;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.75;
  color: #a8acb6;
  -webkit-text-stroke: 1px #a8acb6;
}
</style>
