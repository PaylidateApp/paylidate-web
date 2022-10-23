<template>
  <q-page
    class="section1"
    :class="$q.screen.gt.sm ? 'text-primary row q-pt-md' : 'text-primary row'"
    style="scroll-behavior: smooth; font-family: 'Mukta', 'sans-serif'; width:100%"
  >
    <div class="section1 q-pr-xl q-mt-lg flex justify-center gt-sm" style="width:100%">
      <div class="row items-center justify-center reverse" style="width: 100%">
        <div class="col-12 col-sm-8 align-center q-pt-xl" style="width: 60%">
          <img
            src="../../statics/girlie.png"
            spinner-color="white"
            style="width: 100%; padding-top: 20px; padding-left: 0px"
          />
        </div>

        <div class="col-12 col-sm-4" style="width: 40%">
          <div
            class=""
            style="
              width: 520px;
              height: 270;
              max-width: 600px;
              padding-top: 10px;
              padding-left: 30px;
              color: #001140;
              font-family: 'Nexa';
              font-style: normal;
              font-weight: 700;
              font-size: 60px;
              line-height: 69px;
            "
          >
            Fast and secured <span>digital payments</span>
            guaranteed
          </div>
          <div
            class=""
            style="
              padding-top: 30px;
              padding-left: 30px;
              height: 64px;
              width: 508px;
              font-family: 'Montserrat';
              color: #89817d;
            "
          >
            Helping millions of Nigerian buyers and sellers transact safely from
            anywhere without doubt or fear
          </div>

          <div
            class="row items-start q-gutter-sm gt-sm"
            style="
              padding-top: 30px;
              padding-left: 30px;
              height: 64px;
              width: 508px;
              font-family: 'Montserrat';
              color: #0e3951;
              font-style: normal;
              font-weight: 650;
              font-size: 14px;
              line-height: 20px;
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
            style="
              padding-top: 30px;
              padding-left: 30px;
              height: 64px;
              width: 508px;
            "
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
      </div>
    </div>

    <!-- Mobile Responsiveness -->
    <div
      class="section1 lt-md item-center full-width flex flex justify-center row"
    >
      <div class="mobo-header q-py-md">
        Fast and secured <span>digital payments</span>
        guaranteed
      </div>
      <div class="mobo-subtitle q-px-lg q-py-md lt-md">
        Helping millions of Nigerian buyers and sellers transact safely from
        anywhere without doubt or fear
      </div>

      <div
        class="row full-width row wrap items-start"
        style="padding-top: 40px; padding-bottom: 30px; padding-left: 10px"
      >
        <div class="col mobo-subtitle-2" style="text-align: right">
          Transaction Security
        </div>
        <div class="q-pr-md"></div>
        <q-separator vertical />
        <div class="col mobo-subtitle-2 q-pl-md" style="text-align: left">
          Seller Guarantee
        </div>
        <div
          class="full-width row wrap justify-center items-start q-py-md mobo-subtitle-2"
        >
          Buyer Protection
        </div>
      </div>

      <div
        class="full-width row wrap justify-center items-start content-start"
        style="padding-left: 10px"
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
          style="width: 80%"
        />
      </div>
    </div>

    <!-- What Paylidate will do for you -->
    <div
      class="q-py-xl q-pa-sm q-pa-sm-xl bg-grey-1 flex justify-center gt-sm" style="width:100%"
    >
      <div class="q-py-xl full-width text-center">
        <div class="gt-sm">
          <div class="text-center flex justify-center">
            <div class="headings" style="">What paylidate can do for you</div>
          </div>

          <div class="row" style="width: 98%; justify-content: space-evenly">
            <div class="col-6 col-md-3" style="width: 25%">
              <div class="row">
                <div class="text-left flex justify-left">
                  <div>
                    <div
                      class="q-py-md align-left"
                      style="
                        height: 30px;
                        width: 160px;
                        font-family: 'Nexa';
                        color: #001140;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 60px;
                      "
                    >
                      01/ Payments
                    </div>
                    <div
                      class="q-py-xl text-justify Montserrat"
                      style="
                        height: 65px;
                        width: 250px;
                        color: #6a6664;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 22px;
                      "
                    >
                      Make payments quickly, easily and safely. Payment would be
                      held in escrow until you confirm the delivery
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="padding-top: 140px">
                <div class="text-left flex justify-left">
                  <div
                    class="q-py-md align-left"
                    style="
                      height: 30px;
                      width: 160px;
                      font-family: 'Nexa';
                      color: #001140;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 60px;
                    "
                  >
                    03/ Refunds
                  </div>
                  <div
                    class="Montserrat q-py-xl text-justify"
                    style="
                      height: 65px;
                      width: 250px;
                      color: #6a6664;
                      font-weight: 600;
                      font-size: 14px;
                      line-height: 22px;
                    "
                  >
                    Get a refund if what you got is different from what was
                    specified by the vendor
                  </div>
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
                style="
                  width: 100%;

                  padding-top: 40px;
                  padding-left: 30px;
                "
              />
            </div>
            <div class="col-6 col-md-3" style="width: 25%">
              <div class="row" style="padding-left: 50px">
                <div class="text-left flex justify-left">
                  <div>
                    <div
                      class="q-py-md align-left"
                      style="
                        height: 30px;
                        width: 160px;
                        font-family: 'Nexa';
                        color: #001140;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 60px;
                      "
                    >
                      02/ Disputes
                    </div>
                    <div
                      class="Montserrat q-py-xl text-justify"
                      style="
                        height: 65px;
                        width: 200px;
                        color: #6a6664;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 22px;
                      "
                    >
                      Raise disputes to clear out issues with a transaction
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style="padding-top: 140px; padding-left: 50px">
                <div class="text-left flex justify-left">
                  <div>
                    <div
                      class="q-py-md align-left"
                      style="
                        height: 30px;
                        width: 160px;
                        font-family: 'Nexa';
                        color: #001140;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 60px;
                      "
                    >
                      04/ Bonuses
                    </div>
                    <div
                      class="Montserrat q-py-xl text-justify"
                      style="
                        height: 65px;
                        width: 200px;
                        color: #6a6664;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 22px;
                      "
                    >
                      Earn points from referrals, connecting vendors with buyers
                      and meeting transaction milestone.
                    </div>
                  </div>
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
      style="padding-top: 30px"
    >
      <div class="mobo-header-2 q-px-lg">What Paylidate can do for you.</div>

      <div class="lt-md column full-width q-py-md q-px-lg Montserrat">
        <div class="col align-left">
          <div class="text-justify flex">
            <div>
              <div class="q-py-sm align-left mobo-sub-header">01/ Payments</div>
              <div class="q-py-xs mobo-subtitle-3 text-justify">
                Make payments quickly, easily and safely. Payment would be held
                in escrow until you confirm the delivery
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-py-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-py-sm align-left mobo-sub-header">02/ Disputes</div>
              <div class="q-py-xs mobo-subtitle-3 text-justify">
                Raise disputes to clear out issues with a transaction
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-py-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-py-sm align-left mobo-sub-header">03/ Refunds</div>
              <div class="q-py-xs mobo-subtitle-3 text-justify">
                Get a refund if what you got is different from what was
                specified by the vendor
              </div>
            </div>
          </div>
        </div>
        <div class="col align-left q-py-sm">
          <div class="text-justify flex">
            <div>
              <div class="q-py-sm align-left mobo-sub-header">04/ Bonuses</div>
              <div class="q-py-xs mobo-subtitle-3 text-justify">
                Earn points from referrals, connecting vendors with buyers and
                meeting transaction milestone.
              </div>
            </div>
          </div>
        </div>
        <div class="col justify-center align-center">
          <img
            src="../../statics/gif_for_mobo.gif"
            spinner-color="white"
            style="width: 350px; height: 300px"
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
        style="max-width: 1200px; padding-top: 60px; padding-bottom: 80px"
        class="full-width text-center"
      >
        <div class="gt-sm text-center flex justify-center">
          <div class="headings text-white" style="width: 600px">
            How Paylidate Works
          </div>
        </div>

        <div class="gt-sm row full-width q-pt-sm justify-evenly">
          <div class="text-center flex justify-center">
            <div class="col q-pr-md">
              <button @click="toggleSeller" class="big-btn1">For Seller</button>
            </div>
            <div class="col q-pl-md">
              <button @click="toggleBuyer" class="big-btn2">For Buyer</button>
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
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          01/
                        </div>
                      </div>
                      <div class="col-4 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Sign Up
                        </div>
                        <div class="col-4 q-py-sm text-justify card_item">
                          A simple sign up page to get you on board.
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div
                          class="q-py-md q-px-sm text-weight-bold align-left card-item-num"
                        >
                          02/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify card-item-header align-left"
                          style="max-width: 200px"
                        >
                          Set Up Account
                        </div>
                        <div class="q-py-sm text-justify card_item">
                          Add your account number in the settings and complete
                          your account setup
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>
              </div>

              <div class="row" style="width: 100%">
                <div v-if="seller" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          03/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                          style="max-width: 200px"
                        >
                          Create Product
                        </div>
                        <div class="q-py-sm text-justify card_item">
                          Click the "create" button on the product page, add
                          your product/service details to create a product link.
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="buyer" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-sm q-px-sm align-left card-item-num">
                          03/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-sm text-justify align-left card-item-header"
                          style="max-width: 300px; line-height: 30px"
                        >
                          Create A Buy Product With Seller’s Tag
                        </div>
                        <div class="q-py-md text-justify card_item">
                          Use the seller’s user tag or email to create a payment
                          request. The seller has to to accept before payment
                          can be made
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="seller" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          04/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Copy & Share Payment Link
                        </div>
                        <div class="q-py-sm card_item text-justify">
                          Copy and share the generated product link
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="buyer" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          04/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Click on Seller-Product Link
                        </div>
                        <div class="q-py-sm card_item text-justify">
                          View the product by clicking on the vendor’s product
                          link
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>
              </div>

              <div class="row" style="width: 100%">
                <div v-if="seller" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          05/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Receive Payments
                        </div>
                        <div class="q-py-sm card_item text-justify">
                          When customers pay through your product link, you
                          receive an email alert of the payment
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="buyer" class="col q-px-xl" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          05/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Make Payment
                        </div>
                        <div class="q-py-sm card_item text-justify">
                          Make payment using any of the available payment
                          channels
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="seller" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          06/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Deliver Product or Service
                        </div>
                        <div class="q-py-sm text-justify card_item">
                          Complete the agreed delivery
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>

                <div v-if="buyer" class="col" style="width: 45%">
                  <div class="row q-py-lg card_section" style="width: 100%">
                    <div class="text-left flex justify-left">
                      <div class="col-2" style="width: 10%">
                        <div class="q-py-md q-px-sm align-left card-item-num">
                          06/
                        </div>
                      </div>
                      <div class="col-6 q-pl-md" style="width: 70%">
                        <div
                          class="q-py-md text-justify align-left card-item-header"
                        >
                          Receive Delivery
                        </div>
                        <div class="q-py-sm text-justify card_item">
                          After payment, the seller would be prompted the make
                          the delivery
                        </div>
                      </div>
                      <div class="col-2" style="width: 20%">
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
                </div>
              </div>

              <div v-if="seller" class="q-px-xl">
                <div class="row q-py-lg card_section">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div class="q-py-md q-px-sm align-left card-item-num">
                        07/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-justify align-left card-item-header"
                      >
                        Withdraw Funds
                      </div>
                      <div class="q-py-sm text-justify card_item">
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
              </div>

              <div v-if="buyer" class="q-px-xl">
                <div class="row q-py-lg card_section">
                  <div class="text-left flex justify-left">
                    <div class="col-2">
                      <div class="q-py-md q-px-sm align-left card-item-num">
                        07/
                      </div>
                    </div>
                    <div class="col-6 q-pl-md">
                      <div
                        class="q-py-md text-justify align-left card-item-header"
                      >
                        Confirm Payment
                      </div>
                      <div class="q-py-sm text-justify card_item">
                        On delivery,access the product and confirm it’s what you
                        ordered. If it is, then confirm the payment.
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
              </div>
            </div>
          </q-card>
        </div>

        <!--Mobile  -->
        <div class="lt-md text-center flex justify-center">
          <div class="mobo-header-2 text-white" style="max-width: 500px">
            How Paylidate works
          </div>
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
          <div class="row full-width flex justify-center q-py-sm Montserrat" style="width: 100%">
            <q-card-section>
              <div class="row q-py-lg" style="height: 150px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div class="q-px-sm mobo-card-item-num align-left">01/</div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div class="mobo-card-item-header text-justify">
                      Sign Up
                    </div>
                    <div class="col-4 mobo-card-item text-justify">
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
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div class="q-px-sm mobo-card-item-num align-left">02/</div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Set Up Account
                    </div>
                    <div class="col-4 mobo-card-item text-justify">
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

            <q-card-section v-if="seller">
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      03/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-weight-bold"
                      style="max-width: 200px"
                    >
                      Create Product
                    </div>
                    <div class="col-4 mobo-card-item text-justify">
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

            <q-card-section v-if="buyer">
              <div class="row q-py-sm" style="height: 250px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      03/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-weight-bold"
                      style="width: 230px"
                    >
                      Create A Buy Product With Seller’s Tag
                    </div>
                    <div
                      class="col-4 mobo-card-item text-justify"
                      style="padding-top: 20px"
                    >
                      Use the seller’s user tag or email to create a payment
                      request. The seller has to to accept before payment can be
                      made
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

            <q-card-section v-if="seller">
              <div class="row q-py-sm" style="height: 150px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      04/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Copy & Share Payment Link
                    </div>
                    <div class="col-4 q-py-md mobo-card-item text-justify">
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

            <q-card-section v-if="buyer">
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="q-py-sm mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      04/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="q-py-sm mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Click on Seller-Product Link
                    </div>
                    <div class="col-4 q-py-md mobo-card-item text-justify">
                      View the product by clicking on the vendor’s product link
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

            <q-card-section v-if="seller">
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      05/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Receive Payments
                    </div>
                    <div
                      class="col-4 mobo-card-item text-justify"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-sm" style="height: 170px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      05/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Make Payment
                    </div>
                    <div
                      class="col-4 mobo-card-item text-justify"
                      style="width: 180px"
                    >
                      Make payment using any of the available payment channels
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

            <q-card-section v-if="seller">
              <div class="row q-py-sm" style="height: 150px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      06/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Deliver Product or Service
                    </div>
                    <div
                      class="col-4 q-py-md mobo-card-item text-justify"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      06/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Receive Delivery
                    </div>
                    <div
                      class="col-4 q-py-md mobo-card-item text-justify"
                      style="width: 180px"
                    >
                      After payment, the seller would be prompted the make the
                      delivery
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

            <q-card-section v-if="seller">
              <div class="row q-py-sm" style="height: 150px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      07/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Withdraw Funds
                    </div>
                    <div
                      class="col-4 mobo-card-item text-justify"
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

            <q-card-section v-if="buyer">
              <div class="row q-py-sm" style="height: 200px">
                <div class="text-left flex justify-left">
                  <div class="col-2">
                    <div
                      class="mobo-card-item-num align-left"
                      style="max-width: 100px"
                    >
                      07/
                    </div>
                  </div>
                  <div class="col-4 q-pl-sm">
                    <div
                      class="mobo-card-item-header text-justify"
                      style="max-width: 200px"
                    >
                      Confirm Payment
                    </div>
                    <div
                      class="col-4 mobo-card-item text-justify"
                      style="width: 180px"
                    >
                      On delivery,access the product and confirm it’s what you
                      ordered. If it is, then confirm the payment.
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
    <div
      class="q-pt-lg flex justify-center"
      style="background-color: #319ed9; width: 100%;"
    >
      <div style="max-width: 1200px" class="full-width">
        <div class="row justify-evenly gt-sm">
          <div class="col-12 col-sm-5 flex justify-center">
            <div class="row q-pt-xl">
              <img
                src="../../statics/handshake.png"
                spinner-color="white"
                style="box-sizing: border-box; width: 449px; height: 406px"
              />
            </div>
          </div>
          <div
            class="col-12 col-sm-5 flex text-justify"
            style="padding-top: 100px; padding-left: 50px"
          >
            <div class="headings-2">Paylidate connects buyers and sellers</div>
            <div class="sub-body" style="padding-top: 40px">
              We believe you should be able to choose how you want to pay during
              transactions online without being subjected to the risk of loosing
              your money.
            </div>
          </div>
          <div class="row justify-center gt-sm" style="padding-top: 5px">
            <div
              class="col-4 flex justify-center headings-2"
              style="width: 400px"
            >
              Pay with no doubt and sell without fear
            </div>
            <div
              class="col-6 flex sub-body"
              style="max-width: 550px; padding-left: 150px"
            >
              It's important that you stay focused on your goals without getting
              distracted by unnecessary worries. That is why Paylidate makes
              payments easy and protects you whether you are buying or selling.
            </div>
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
        <div class="mobo-header-2" style="color: #030c23; text-align: left">
          Paylidate connects buyers and sellers
        </div>
        <div class="mobo-about q-py-lg">
          We believe you should be able to choose how you want to pay during
          transactions online without being subjected to the risk of loosing
          your money.
          <br />
          <br />

          <div class="row q-pa-md">
            <img
              src="../../statics/handshake_mobo.png"
              spinner-color="white"
              style="max-width: 360px; max-height: 330px"
            />
          </div>
          <div class="col q-py-md flex text-justify">
            <div class="mobo-header-2">
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

    <!-- Unique Features Section -->
    <div class="q-pa-sm q-pa-sm-xl full-width bg-grey-1 flex justify-center">
      <div style="width: 100%" class="q-py-xl full-width text-center">
        <div class="gt-sm text-center flex justify-center">
          <div class="headings" style="width: 600px">
            Get started with our unique features
          </div>
        </div>

        <div class="gt-sm row justify-center q-py-xl" style="width:98%">
          <div class="col-4" style="border-right: 1px solid #ccc">
            <div
              class="row"
              style="
                 {
                  width: calc(100% - 32px);
                  height: 250px;

                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-lg">
                    <img src="../../statics/money.png" style="width: 35px" />
                  </div>
                  <div class="q-py-xs sub-body-2" style="max-width: 300px">
                    Escrow
                  </div>
                  <div class="q-py-sm sub-body-3" style="width: 90%">
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
                  height: 270px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/receipt.png" style="width: 35px" />
                  </div>
                  <div
                    class="q-py-xs sub-body-2 align-left"
                    style="width: 400px"
                  >
                    Paylidate Checkouts
                  </div>
                  <div class="q-py-sm sub-body-3" style="width: 80%">
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
                  height: 250px;
                }
              "
            >
              <div class="text-justify flex">
                <div>
                  <div class="q-pt-xl">
                    <img src="../../statics/wallet.png" style="width: 35px" />
                  </div>
                  <div
                    class="q-py-xs sub-body-2 align-left"
                    style="width: 300px"
                  >
                    Wallet
                  </div>
                  <div class="q-py-sm sub-body-3" style="width: 90%">
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
                  height: 380px;
                  border-bottom: 1px solid #ccc;
                }
              "
            >
              <div class="q-px-lg q-py-xl flex text-left align-left">
                <div>
                  <div class="q-pb-xs q-pt-xl">
                    <img src="../../statics/ring.png" style="width: 35px" />
                  </div>
                  <div
                    class="q-py-xm sub-body-2 align-left"
                    style="width: 300px"
                  >
                    Connect to Earn
                  </div>
                  <div class="q-py-sm sub-body-3" style="width: 400px">
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
              <div class="q-px-lg q-py-lg flex text-left align-left">
                <div>
                  <div class="q-pb-xs q-pt-sm">
                    <img src="../../statics/coins.png" style="width: 35px" />
                  </div>
                  <div
                    class="q-py-sm sub-body-2 align-left"
                    style="width: 300px"
                  >
                    Paylidate Points
                  </div>
                  <div class="q-py-sm sub-body-3" style="width: 400px">
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
            size="18px"
            class="q-px-lg Montserrat"
            label="Learn More"
            :to="{ name: '#' }"
          />
        </div>

        <!-- Mobile Responsiveness -->
        <q-card class="my-card flex bg-grey-1 lt-md" flat style="width: 100%">
          <div class="full-width flex q-py-md">
            <div
              class="flex q-gutter-y-md mobo-header-2 q-px-lg"
              style="text-align: left"
            >
              Get started with our unique features.
            </div>
          </div>

          <div class="full-width q-py-none q-px-lg">
            <div class="col align-left">
              <q-card-section>
                <div class="text-justify flex q-py-md" style="height: 200px">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/money.png" style="width: 39px" />
                    </div>
                    <div class="q-py-sm unique-sec-subtitle align-left">
                      Escrow
                    </div>
                    <div class="q-py-lg unique-sec-body">
                      Buy and sell with ease. Use Paylidate's escrow payment to
                      secure your transactions.
                    </div>
                  </div>
                </div>

                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-pb-md" style="height: 200px">
                  <div>
                    <div class="q-py-sm">
                      <img
                        src="../../statics/receipt.png"
                        style="width: 39px"
                      />
                    </div>
                    <div class="q-py-sm unique-sec-subtitle">
                      Paylidate Checkouts
                    </div>
                    <div class="q-py-lg unique-sec-body">
                      Use Paylidate button to checkout with just an email
                      address and password.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-pb-md" style="height: 180px">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/wallet.png" style="width: 39px" />
                    </div>
                    <div class="q-py-sm unique-sec-subtitle">Wallet</div>
                    <div class="q-py-lg unique-sec-body">
                      Make secured escrow payments in a flash.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>
              <q-card-section>
                <div class="text-justify flex q-pb-md" style="height: 200px">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/ring.png" style="width: 39px" />
                    </div>
                    <div class="q-py-sm unique-sec-subtitle">
                      Connect to Earn
                    </div>
                    <div class="q-py-lg unique-sec-body">
                      Help friends connect with buyers and earn from the sales.
                      Sellers can add how much they want referrers to earn on
                      every sale.
                    </div>
                  </div>
                </div>
                <q-separator />
              </q-card-section>

              <q-card-section>
                <div class="text-justify flex q-py-xs" style="height: 200px">
                  <div>
                    <div class="q-py-sm">
                      <img src="../../statics/coins.png" style="width: 39px" />
                    </div>
                    <div class="q-py-sm unique-sec-subtitle">
                      Paylidate Points
                    </div>
                    <div class="q-py-lg unique-sec-body">
                      Earn Paylidate points on the go. Milestone points,
                      transaction points, bonuses and other offers.
                    </div>
                  </div>
                </div>
              </q-card-section>
            </div>
          </div>
          <div class="full-width flex justify-left q-py-sm q-pb-xl">
            <div class="flex" style="padding-left: 40px">
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
      style="height: 155px; background-color: #88c58f"
    >
      <div class="row full-width q-py-md">
        <div class="col-12 col-12 q-pb-md q-px-md partners-mobo">Partners</div>
      </div>

      <div class="full-width flex q-py-md">
        <div class="row full-width justify-around q-pl-md q-pb-md">
          <div class="col">
            <img
              src="../../statics/providus_mobo.png"
              style="width: 200px; height: 33px"
            />
          </div>
          <div class="col">
            <img
              src="../../statics/flutter_mobo.png"
              style="width: 200px; height: 33px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Partners -->
    <div
      class="gt-sm flex justify-center q-py-md Montserrat"
      style="height: 175px; background-color: #88c58f; width: 100%"
    >
      <div class="row" style="width: 100%">
        <div class="col-7" style="width: 60%">
          <div
            class="q-py-xl q-px-xl headings"
            style="width: 200px; height: 70px"
          >
            Partners
          </div>
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
      <div class="full-width q-py-md q-py-sm-xl flex justify-left">
        <q-card
          class="my-card"
          flat
          style="background-color: #182430; width: 100%"
        >
          <q-card-section>
            <div class="row full-width justify-start">
              <img src="../../statics/payli_logo.png" style="width: 100px" />
            </div>
            <div class="full-width q-py-md">
              <div class="row justify-start">
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row mobo-footer-header">Company</div>
                  <div class="row q-py-sm mobo-footer-body">Legal</div>
                  <div class="row q-py-sm mobo-footer-body">Developers</div>
                  <div class="row q-py-sm mobo-footer-body">Security</div>
                  <div class="row q-py-sm mobo-footer-body">Partners</div>
                  <div class="row q-py-sm text-justify mobo-footer-body">
                    Escrow Agreement
                  </div>
                  <div class="row q-py-sm mobo-footer-body">Privacy</div>
                </div>
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row mobo-footer-header">Sitemap</div>
                  <div class="row q-py-sm mobo-footer-body">Home</div>
                  <div class="row q-py-sm mobo-footer-body">Fees</div>
                  <div class="row q-py-sm text-justify mobo-footer-body">
                    Resource Center
                  </div>
                  <div class="row q-py-sm mobo-footer-body">About</div>
                  <div class="row q-py-sm mobo-footer-body">FAQ</div>
                </div>
                <div class="col-4 q-py-sm q-pl-sm">
                  <div class="row mobo-footer-header">Socials</div>
                  <div class="row q-py-sm mobo-footer-body">Facebook</div>
                  <div class="row q-py-sm mobo-footer-body">Linkedin</div>
                  <div class="row q-py-sm mobo-footer-body">Instagram</div>
                  <div class="row q-py-sm mobo-footer-body">Twitter</div>
                </div>
              </div>
              <div class="text-left flex flex-left q-py-lg q-pl-sm">
                <div class="q-gutter-y-sm">
                  <div class="mobo-footer-header" style="width: 110px">
                    Head Office
                  </div>
                  <div class="mobo-footer-body" style="width: 300px">
                    No. 14 Oluwasogo Str. Ikeja, Lagos
                  </div>
                </div>
              </div>
              <div class="row full-width flex flex-left q-pl-sm q-py-lg">
                <div class="flex q-gutter-y-md">
                  <div class="text-left flex flex-left">
                    <div class="q-gutter-y-sm">
                      <div class="mobo-footer-header" style="width: 110px">
                        News Letter
                      </div>
                      <div class="row">
                        <q-input
                          v-model="text"
                          label-color="white"
                          style="min-width: 250px"
                          type="email"
                          label="Enter your email address"
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
          </q-card-section>
          <q-separator dark inset />

          <q-card-section>
            <div class="full-width flex q-px-sm q-px-sm-xl">
              <div class="row justify-between">
                <div class="col-4">
                  <div class="mobo-footer-body-2" style="">
                    hello@paylidate.com
                    <div
                      style="
                        border-bottom: 1px solid #0081fe;
                        padding-top: 10px;
                        width: 165px;
                      "
                    ></div>
                  </div>
                </div>
                <div class="col-4 q-px-xl" style="">
                  <div class="mobo-footer-body-2" style="">
                    08066984101
                    <div
                      style="
                        border-bottom: 1px solid #0081fe;
                        padding-top: 10px;
                        width: 100px;
                      "
                    ></div>
                  </div>
                </div>
              </div>
              <div class="row full-width q-py-lg">
                <div class="full-width flex q-py-md">
                  <div
                    class="row q-pb-md mobo-footer-body-2"
                    style="opacity: 0.6; width: 400px"
                  >
                    © 2022 Lotusfort Tech Ltd. All Rights Reserved
                  </div>
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
              <div class="col-2 q-pt-md" style="color: #ffffff; width: 15%">
                <div
                  class="row sub-body-3"
                  style="
                    color: #ffffff;
                    font-weight: 550;
                    width: 70px;
                    height: 28px;
                  "
                >
                  Company
                </div>
                <div class="row card-item-2">Legal</div>
                <div class="row card-item-2">Developers</div>
                <div class="row card-item-2">Security</div>
                <div class="row card-item-2">Partners</div>
                <div class="row card-item-2">Escrow Agreement</div>
                <div class="row card-item-2">Privacy</div>
              </div>
              <div class="col-2 text-white q-pt-md" style="width: 15%">
                <div
                  class="row sub-body-3"
                  style="
                    color: #ffffff;
                    font-weight: 550;
                    width: 70px;
                    height: 28px;
                  "
                >
                  Sitemap
                </div>
                <div class="row card-item-2">Home</div>
                <div class="row card-item-2">Fees</div>
                <div class="row card-item-2">Resource Center</div>
                <div class="row card-item-2">About</div>
                <div class="row card-item-2">FAQ</div>
              </div>
              <div class="col-2 text-white q-pt-md" style="width: 15%">
                <div
                  class="row sub-body-3"
                  style="
                    color: #ffffff;
                    font-weight: 550;
                    width: 70px;
                    height: 28px;
                  "
                >
                  Socials
                </div>
                <div class="row card-item-2">Facebook</div>
                <div class="row card-item-2">Linkedin</div>
                <div class="row card-item-2">Instagram</div>
                <div class="row card-item-2">Twitter</div>
              </div>
              <div class="col-3 text-white q-pt-md" style="width: 35%">
                <div
                  class="row sub-body-3"
                  style="
                    color: #ffffff;
                    font-weight: 550;
                    width: 120px;
                    height: 28px;
                  "
                >
                  Head Office
                </div>
                <div class="row card-item-2">
                  No. 14 Oluwasogo Str. Ikeja, Lagos
                </div>
                <div
                  class="row sub-body-3"
                  style="
                    color: #ffffff;
                    font-weight: 550;
                    width: 120px;
                    height: 28px;
                    padding-top: 30px;
                  "
                >
                  News Letter
                </div>
                <div class="row q-py-md">

                    <q-input
                      v-model="text"

                      style="
                        width: 250px;
                        height: 40px;
                        padding-top: 18px;
                        font-style: light;
                        font-weight: 80;
                        font-size: 12px;
                        line-height: 22px;
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
                      size="md"
                      style="margin-top: 15px"
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
              <div style="width: 98%; max-width: 1200px" class="row text-center" >
                <div class="col-4" style="width:30%">
                  <div class="footer-style" style="">
                    hello@paylidate.com
                    <div
                      style="
                        border-bottom: 1px solid #0081fe;
                        padding-top: 10px;
                        width: 165px;
                      "
                    ></div>
                  </div>
                </div>
                <div class="col-4 q-px-xl" style="width:30%">
                  <div class="footer-style" style="">
                    08066984101
                    <div
                      style="
                        border-bottom: 1px solid #0081fe;
                        padding-top: 10px;
                        width: 100px;
                      "
                    ></div>
                  </div>
                </div>
                <div class="col-4 q-px-xs" style="width:40%">
                  <div class="footer-style" style="width: 450px">
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
    };
  },
  methods: {
    toggleBuyer() {
      this.buyer = true;
      this.seller = false;
    },
    toggleSeller() {
      this.buyer = false;
      this.seller = true;
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

.headings {
  width: 480px;
  height: 120px;
  font-weight: 700;
  font-size: 48px;
  font-family: "Montserrat";
  color: #001140;
  line-height: 62px;
}
.headings-2 {
  width: 374px;
  height: 86px;
  left: 776px;
  top: 120px;
  font-family: "Nexa";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #030c23;
}

.sub-body {
  width: 580px;
  height: 280px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 30px;
  color: #062231;
}

.sub-body-2 {
  width: 85px;
  height: 63px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 62px;
  color: #062231;
}

.sub-body-3 {
  width: 325px;
  height: 43px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #6a6664;
}

.footer-style {
  width: 150px;
  height: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  padding-top: 20px;
  padding-left: 30px;
  color: #ffffff;
  opacity: 0.75;
}

.card_section {
  width: 100%;
}

.card_section:hover {
  background-color: #111a24;
}

.big-btn1 {
  width: 299px;
  height: 73px;
  border: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 62px;
  cursor: pointer;
  color: #ffffff;
  background-color: #eb6117;
}
.big-btn1:hover {
  background-color: #f26a27 !important;
}

.big-btn2 {
  width: 299px;
  height: 73px;
  border: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 62px;
  color: #ffffff;
  background-color: #243647;
  cursor: pointer;
}
.big-btn2:hover {
  background-color: #192e42 !important;
}

.small-btn1 {
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 32px;
  cursor: pointer;
  color: #ffffff;
  background-color: #f26a27;
}
.small-btn1:hover {
  background-color: #eb6117 !important;
}

.small-btn2 {
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
  background-color: #1c3044;
  cursor: pointer;
}
.small-btn2:hover {
  background-color: #1e2d3b !important;
}

.card_item {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 28px;
  color: #bcbfc8;
  width: 350px;
  height: 80px;
}

.card-item-2 {
  width: 250px;
  height: 40px;
  padding-top: 18px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.75;
}

.card-item-header {
  width: 300px;
  height: 80px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  line-height: 60px;
}

.mobo-card-item-header {
  width: 180px;
  height: 51px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 650;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
}
.mobo-card-item {
  width: 200px;
  height: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 25px;
  color: #bcbfc8;
}

.mobo-card-item-num {
  width: 53px;
  height: 31px;
  font-family: "Nexa";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #a8acb6;
  -webkit-text-stroke: 1px #a8acb6;
}

.card-item-num {
  width: 53px;
  height: 44px;
  font-family: Nexa;
  font-weight: 700;
  font-size: 32px;
  line-height: 60px;
  color: #a8acb6;
  -webkit-text-stroke: 1px #a8acb6;
}

.partners-sec {
  width: 127px;
  height: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 20px;
  line-height: 24px;
  color: #062231;
}

.partners-mobo {
  width: 138px;
  height: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #001140;
}

.partners-mobo-2 {
  width: 127px;
  height: 24px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 20px;
  line-height: 20px;
  color: #062231;
}

.mobo-header {
  width: 80%;
  height: 115px;
  padding-top: 20px;
  padding-bottom: 30px;
  font-family: "font-Nexa-Light";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #001140;
}
.mobo-header-2 {
  max-width: 380px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #001140;
}

.mobo-subtitle {
  width: calc(80% - 30px);
  height: 90px;
  padding-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #89817d;
}
.mobo-subtitle-2 {
  width: 100px;
  height: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #0e3951;
}

.mobo-subtitle-3 {
  width: 300px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #6a6664;
}

.mobo-sub-header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 62px;
  color: #001140;
}

.mobo-about {
  max-width: 500px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 28px;
  color: #062231;
}
.unique-sec-subtitle {
  width: 220px;
  height: 22px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #001140;
}
.unique-sec-body {
  max-width: 350px;
  height: 43px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #6a6664;
}
.mobo-footer-header {
  width: 74px;
  height: 28px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
}
.mobo-footer-body {
  width: 82px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 13.5px;
  color: #ffffff;
  opacity: 0.75;
}

.mobo-footer-body-2 {
  width: 150px;
  height: 24px;
  padding-top: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  color: #ffffff;
  opacity: 0.75;
}
</style>
