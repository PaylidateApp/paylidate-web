<template>
  <div>
    <q-page padding class="flex flex-center " style="background-color: #001223">
    <!-- content -->
    <Auth />
  </q-page>

    <div class="footer-container" >
        <div class="row full-width justify-around q-py-lg">
          <a href="#fees"><div class="footer-small-text">Fees</div></a>
          <a href="faq"><div class="footer-small-text">FAQs</div></a>
          <a href="about"> <div class="footer-small-text">About</div> </a>
          <a href="escrow-agreement"><div class="footer-small-text">Escrow Agreement</div></a>
        </div>

        <div class="row full-width text-black justify-between q-px-lg q-pb-lg">
          <a href="mailto:hello@paylidate.com?subject=Mail to Paylidate">
            <div class="col-3 footer-big-text text-left">hello@paylidate.com</div>
                  </a>

          <div class="col-8 footer-big-text text-right">
            2022 Lotusfort Technologies Limited
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Auth from "components/auth";
export default {
  name: "Authrntication",
  components: {
    Auth,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.footer-big-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.88rem;
  color: #565656;
}
.footer-small-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 1.15rem;
  line-height: 1.7rem;
  text-align: left;
  color: #4a4a4a;
}
.footer-container {
  background-color: #ffffff;
}

@media (max-width: 670px) {
  .footer-small-text {
    font-weight: 300;
    font-size: 0.62rem;
    line-height: 0.87rem;
    color: #ffffff;
    text-align: left;
  }
  .footer-big-text {
    font-weight: 500;
    font-size: 0.6rem;
    line-height: 0.8rem;
    color: #ffffff;
  }
  .footer-container {
    background-color: #001223;
  }
  .footer-small-text-container {
    width: 25% !important;
  }
  .footer-small-text-container-two {
    width: 50% !important;
  }
}
</style>
