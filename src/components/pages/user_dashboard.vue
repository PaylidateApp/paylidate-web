<template>
  <q-page
    class="q-pa-lg"
    style="
      scroll-behavior: smooth;
      width: 100%;
    "
  >
    <div class="section-one">
      <div class="container lt-md" style="padding: 0.75rem 0px">
        <div class="card-section" style="">
          <q-card class="my-card">
            <div>
              <img
                src="../../statics/user_dashboard_assets/pos_device.png"
                spinner-color="white"
                style="width: 30%; max-width: 45px"
              />
              <p class="section1-text">Create a Product Link</p>
            </div>
          </q-card>

          <div class="q-pl-lg" style="background-color: #182430; width: 50%">
            <img
              src="../../statics/user_dashboard_assets/done_deal.png"
              spinner-color="white"
              style="width: 100%; max-width: 8rem"
            />
          </div>
        </div>

        <div class="card-section" style="margin-bottom; 1rem:">
          <q-card class="my-card">
            <div>
              <img
                src="../../statics/user_dashboard_assets/instant_pay.png"
                spinner-color="white"
                style="width: 30%; max-width: 45px"
              />
              <p class="section1-text">Instant Paylidate</p>
            </div>
          </q-card>

          <div class="my-card">
            <div>
              <img
                src="../../statics/user_dashboard_assets/money_safe.png"
                spinner-color="white"
                style="width: 30%; max-width: 45px"
              />
              <p class="section1-text">Escrow Transactions</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container full-width container-absolute gt-sm"
        style="padding: 0.75rem 0px"
      >
        <div class="float-img">
          <img
            src="../../statics/user_dashboard_assets/deal.png"
            spinner-color="white"
            style="width: 100%; max-width: 4rem"
          />
        </div>
        <div class="card-section" style="width: 70%; margin-top: 0.7rem">
          <div class="my-card">
            <div class="q-pt-md">
              <img
                src="../../statics/user_dashboard_assets/pos_device.png"
                spinner-color="white"
                style="width: 100%; max-width: 4rem"
              />
              <p class="section1-text">Create a Product Link</p>
            </div>
          </div>
          <div class="my-card">
            <div class="q-pt-md">
              <img
                src="../../statics/user_dashboard_assets/instant_pay.png"
                spinner-color="white"
                style="width: 100%; max-width: 4rem"
              />
              <p class="section1-text">Instant Paylidate</p>
            </div>
          </div>

          <div class="my-card">
            <div class="q-pt-md">
              <img
                src="../../statics/user_dashboard_assets/money_safe.png"
                spinner-color="white"
                style="width: 100%; max-width: 4rem"
              />
              <p class="section1-text">Escrow Transactions</p>
            </div>
          </div>
        </div>
        <div class="" style="margin-bottom; 1rem: width: 25%">
          <div class="q-pl-xl" style="background-color: #182430">
            <img
              src="../../statics/user_dashboard_assets/done_deal_big.png"
              spinner-color="white"
              style="width: 100%; max-width: 12.5rem"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="section-two">
      <div class="container-two">
        <div class="section-main">
          <h4>Dashboard</h4>
          <div class="row full-width justify-start q-pb-lg">
            <div class="col col-one">
              <div>
                <img
                  src="../../statics/user_dashboard_assets/upload.png"
                  spinner-color="white"
                  class="image_st"
                />
              </div>
              <div>
                <div class="dashboard-text">Payments Made</div>
                <div class="dashboard-num q-py-sm">₦100,500,480</div>
              </div>
            </div>
            <div class="col col-one">
              <div>
                <img
                  src="../../statics/user_dashboard_assets/download.png"
                  spinner-color="white"
                  class="image_st"
                />
              </div>
              <div>
                <div class="dashboard-text">Total Payments Received</div>
                <div class="dashboard-num q-py-sm">₦21,656,999</div>
              </div>
            </div>
          </div>

          <div class="dashboard-sec-two">

            <div class="row justify-around full-width q-py-md gt-sm">

              <div class="col-4 box-items" style="border: 1px solid #94a0ac; width: 15rem;">
                <img
                src="../../statics/user_dashboard_assets/wallet.png"
                  spinner-color="white"
                  style="width: 20%; max-width: 24px"
                />
                <p class="dashboard-heading">₦3,000,500</p>
                <p class="dashboard-subtxt">Wallet Balance</p>
              </div>

              <div class="col-4 box-items" style="border: 1px solid #94a0ac; width: 15rem;">
                <img
                  src="../../statics/user_dashboard_assets/paylogo.png"
                  spinner-color="white"
                  style="width: 20%; max-width: 24px"
                />
                <p class="dashboard-heading">25 PPT</p>
                <p class="dashboard-subtxt">Paylidate Points</p>
              </div>
              <div
                class="col-4 box-items"
                style="border: 1px solid #94a0ac; width: 15rem;"
              >
                <img
                  src="../../statics/user_dashboard_assets/people.png"
                  spinner-color="white"
                  style="width: 20%; max-width: 22px"
                />
                <p class="dashboard-heading">₦25,990</p>
                <p class="dashboard-subtxt">Referral Payments</p>
              </div>
            </div>

            <div class="row full-width box box-lg-2 q-pr-sm lt-md">
              <div
              class="row"
              style="
                border: 1px solid #94a0ac;
                margin-bottom: 0.5rem;
                padding: 1rem;
              "
              >
              <div>
                <img
                  src="../../statics/user_dashboard_assets/wallet.png"
                  spinner-color="white"
                  style="width: 20%"
                />
                <p class="dashboard-heading">₦3,000,500</p>
                <p class="dashboard-subtxt">Wallet Balance</p>
              </div>

              </div>

              <div class="col box-items" style="border: 1px solid #94a0ac">
                <img
                  src="../../statics/user_dashboard_assets/paylogo.png"
                  spinner-color="white"
                  style="width: 20%; max-width: 24px"
                />
                <p class="dashboard-heading">25 PPT</p>
                <p class="dashboard-subtxt">Paylidate Points</p>
              </div>
              <div
                class="col box-items col-left"
                style="border: 1px solid #94a0ac; margin-left: 0.5rem"
              >
                <img
                  src="../../statics/user_dashboard_assets/people.png"
                  spinner-color="white"
                  style="width: 20%; max-width: 22px"
                />
                <p class="dashboard-heading">₦25,990</p>
                <p class="dashboard-subtxt">Referral Payments</p>
              </div>
            </div>
          </div>
        </div>
        <div class="side-bar">
          <h4>Notifications</h4>
          <div class="box-notification">
            <div
              class="box full-width notification-card"
              style="background: rgba(255, 234, 223, 0.6)"
            >
              <div class="round-box" style="background: #eb6117">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #eb6117"
              >
                Active Disputes
              </p>
            </div>
            <div
              class="box full-width notification-card "
              style="background: rgba(212, 255, 205, 0.6)"
            >
              <div class="round-box" style="background: #1e820f">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #1e820f"
              >
                Active Transactions
              </p>
            </div>
            <div
              class="box full-width notification-card"
              style="background: rgba(190, 232, 255, 0.6)"
            >
              <div class="round-box" style="background: #0f699a">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #0f699a"
              >
                Pending Withdrawals
              </p>
            </div>
            <div
              class="box full-width notification-card"
              style="background: rgba(251, 190, 177, 0.6)"
            >
              <div class="round-box" style="background: #6f1a07">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #6f1a07"
              >
                Pending Refunds
              </p>
            </div>
          </div>

          <!-- <div class="box-notification">
            <div
              class="box notification-card"
              style="background: rgba(190, 232, 255, 0.6)"
            >
              <div class="round-box" style="background: #0f699a">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #0f699a"
              >
                Pending Withdrawals
              </p>
            </div>
            <div
              class="box notification-card notification-card-left"
              style="background: rgba(251, 190, 177, 0.6)"
            >
              <div class="round-box" style="background: #6f1a07">
                <p class="notification-num">9</p>
              </div>
              <p
                class="notification-text q-px-sm q-py-sm"
                style="color: #6f1a07"
              >
                Pending Refunds
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>


export default {
  mounted() {
    if (!this.$q.localStorage.getItem('paylidate_token')) {
      this.$router.push({ name: "login" });
    }
  },

}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  color: #536980;
  padding-top: 0.75rem;
}
.container,
container-two {
  width: 100%;
}

.container-absolute {
  position: relative;
}

.float-img {
  position: absolute;
  /* right: 7.2rem;
  top: -1.13rem; */
  right: 12%;
  top: -1.13rem;
}

.card-section {
  display: flex;
  width: 90%;
  border-radius: 4px;
  margin-left: 1rem;
  margin-bottom: 0.75rem;
}
.card-section :hover {
  background-color: black;
  color: #ffffff;
}

.box {
  display: flex;
  width: 100%;
  border-radius: 4px;
}
.box-items {
  width: 45%;
  border-radius: 4px;
  padding: 1rem;
}

.box-notification {
  display: flex;
  flex-direction: column;
}


.round-box {
  border-radius: 50px;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;
}

.image_st {
  width: 40px;
}

.section-one {
  background-color: #182430;
  width: 98%;
}

.section1-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.63rem;
  line-height: 1.1rem;
  color: #a5a5a5;
  padding-top: 0.5rem;
}

.section-two {
  background-color: #fafffd;
  padding-left: 0.5rem;
  padding-top: 1rem;
}

.my-card {
  background-color: #202e3c;
  border: 1px solid #233344;
  border-radius: 4px;
  width: 50%;
  padding: 0.6rem;
  margin-left: 0.75rem;
}

.dashboard-text,
.dashboard-subtxt {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #65798d;
}

.dashboard-num {
  font-size: 1.13rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #182430;
}

.dashboard-heading {
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #3e4852;
}

.notification-card {
  width: 12rem;
  height: 3rem;
  border-radius: 4px;
  padding: 0.3rem;
  margin-bottom: 0.75rem;
}


.notification-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.63rem;
  line-height: 1.5rem;
}

.notification-num {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.63rem;
  line-height: 1.5rem;
  text-align: center;
  color: #fafffd;
}

.row {
  width: 100%;
}

@media (min-width: 1024px) {
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    padding-top: 0px;
  }
  .container,
  .container-two {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .section1-text {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #a5a5a5;
    padding-top: 0.5rem;
  }
  .section-main {
    width: 75%;
    border-right: 1px solid #ffd5bb;
  }
  .side-bar {
    width: 20%;
    margin: 0 auto;
  }
  .box-notification {
    flex-direction: column;
  }
  .notification-card {
    margin-left: 0px;
  }
  .notification-text,
  .notification-num {
    font-size: 0.75rem;
  }
  .col-one {
    display: flex;
  }
  .image_st {
    width: 100%;
    max-width: 57px;
  }
  .dashboard-text {
    margin: 0px;
    font-size: 0.88rem;
    color: #65798d;
  }
  .dashboard-subtxt {
    font-size: 0.88rem;
  }

  .dashboard-text,
  .dashboard-num {
    margin-left: 1rem;
  }
  .dashboard-heading {
    font-size: 1.5rem;
  }
  .dashboard-num {
    font-size: 1.25rem;
  }
  .dashboard-sec-two {
    display: flex;
    flex-basis: 95%;
    justify-content: space-around;
  }
  .box-lg,
  .box-items {
    width: 12.5rem;
    height: 8.5rem;
  }
  .box-lg-2 {
    width: 65%;
  }
  .col-left {
    margin-left: 1.5rem !important;
  }
}
</style>
