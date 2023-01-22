<template>
  <q-page class="flex justify-center">
    <!-- {{product}} -->
    <!-- start of referral link modal -->
    <q-dialog v-model="referral_modal">
      <q-card>
        <q-card-section>
          <!-- <div class="text-h6">Alert</div> -->
        </q-card-section>
        <q-card-section>
          <div class="text-center">
            <q-icon name="check_circle" color="primary" size="xl" />
          </div>
          <div class="text-positive text-center">Product Referral Link</div>
          <q-space />

          <div class="text-center">
            <q-btn
              size="12px"
              round
              flat
              color="primary"
              class=""
              icon="content_copy"
              @click="copy_link('refLink')"
            >
              <q-tooltip>
                {{ copyL }}
              </q-tooltip> </q-btn
            ><br />
            Your referral link for this product is
            <a :href="refer_link">{{ refer_link }}</a>
          </div>
          <div>
            Note that you will get a referral bonus of
            {{ formatAsNaira(product.referral_amount) }} for each product when your
            referral linK is used to buy a product
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- end of referral link modal -->
    <!-- product details card -->
    <q-card v-if="product" class="my-card" bordered flat>
      <!-- <q-img :src="'/product.svg'" spinner-color="white"
      /> -->

      <div class="row">
        <!-- Left Section grouping all product image  -->
        <div class="col-xs-12 col-sm-6 col-md-6 leftsection">
          <!-- section to display top icons -->

          <div class="row copybtncontainer_for_mobilescreen">
            <div class="col-xs-12 col-sm-12 col-md-12 copybtn">
              <div>
                <!-- copy button -->
                <q-btn
                  size="12px"
                  round
                  flat
                  color="primary"
                  class=""
                  icon="content_copy"
                  @click="copy_link"
                >
                  <q-tooltip>
                    {{ copyL }}
                  </q-tooltip>
                </q-btn>
              </div>
            </div>
          </div>
          <div class="row escrowtitlecontainer">
            <div class="col-xs-6 col-sm-6 col-md-6 productnumber">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <q-img
                    src="../../assets/icons/material-symbols_confirmation-number.png"
                    spinner-color="white"
                    style="height: 25px; max-width: 25px"
                  />
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6">
                  {{ product.product_number }}
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 transactiontype">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <q-img
                    src="../../assets/icons/mdi_lightbulb-question.png"
                    spinner-color="white"
                    style="height: 25px; max-width: 25px"
                  />
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6">Escrow</div>
              </div>
              <!-- <div>{{ product.transaction_type }}</div> -->
            </div>
          </div>
          <img
            :src="product.image !== 'default_product.png' ? product.image : base_image"
            class="productimage"
          />
        </div>

        <!-- Right Section grouping all product actions and details -->
        <div class="col-xs-12 col-sm-6 col-md-6 rightsection">
          <!-- section to display top icons -->

          <div
            class="initiatorcontainer"
            style="margin-top: 36px; font-family: 'Montserrat'; font-style: normal"
          >
            <q-img
              src="../../assets/icons/material-symbols_person-pin-rounded.png"
              spinner-color="white"
              class="personpinicon"
              style="height: 25px; max-width: 25px; margin-right: 12.12px"
            />
            Initiator Name

            <q-img
              src="../../assets/icons/boldtie.png"
              spinner-color="white"
              class="boldtie"
              style="height: 20px; max-width: 20px; margin-left: 77px"
            />

            <q-img
              src="../../assets/icons/material-symbols_lock-open-rounded.png"
              spinner-color="white"
              class="lockopen"
              style="
                height: 25px;
                max-width: 25px;
                margin-left: 77px;
                margin-right: 12.12px;
              "
            />

            Receiver
          </div>
          <div class="row copybtncontainer">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div>
                <!-- copy button -->
                <q-btn
                  size="12px"
                  round
                  flat
                  color="primary"
                  class=""
                  icon="content_copy"
                  @click="copy_link"
                >
                  <q-tooltip>
                    {{ copyL }}
                  </q-tooltip>
                </q-btn>
              </div>

              <div class="copylinktext">Copy Link</div>
            </div>
          </div>

          <!-- product name -->
          <div class="productname">
            <b>{{ product.name }}</b>
          </div>

          <!-- product details -->

          <div class="productprice">
            <b>{{ formatAsNaira(product.price) }}</b>
          </div>

          <div class="productquantity">
            <q-img
              src="../../assets/icons/mdi_cart-arrow-down.png"
              spinner-color="white"
              style="height: 25px; max-width: 25px"
            />
            {{ product.quantity }}
          </div>

          <div class="productdescriptioncontainer">
            <div class="productdescriptiontitle"><b>Description:</b></div>
            <div class="productdescription">
              {{ product.description ? product.description : "No Description" }}
            </div>
          </div>

          <!-- <q-card-section class="column">

              <q-card flat bordered>
                {{ product.image !== 'default_product.png' ? product.image : base_image }}

                <q-card-section v-if="product.referral_amount > 0">
                  <div v-if="product.user_id != user.id">
                    <span v-if="product.product_status == true && product.quantity > 0">
                      <span v-if="!form.referral_token">
                        <span v-if="product.transaction_type == 'sell'">
                          <q-btn
                            v-if="Object.keys(user).length"
                            color="secondary"
                            no-caps
                            size="sm"
                            class="q-mx-sm"
                            label="Referral Link"
                            @click="referral_modal = true"
                          />
                          <q-btn
                            v-else
                            color="secondary"
                            size="sm"
                            no-caps
                            class="q-mx-sm"
                            label="Referral Link"
                            @click="onLogin = true"
                          />
                        </span>
                      </span>
                    </span>
                    <span v-else>
                      <q-badge
                        color="red"
                        text-color="white"
                        label="Sorry!!! This product is currently not available"
                      />
                    </span>
                  </div>
                </q-card-section>
              </q-card>
            </q-card-section> -->

          <q-card-section class="create_edit_product">
            <div v-if="product.user_id == user.id" class="editbtncontainer">
              <CreateProduct btnType="edit" :product="product" />

              <!-- <q-btn
    v-if="product.transaction.length > 0"
    color="red"
    size="md"
    label="Delete Product"
    @click="deleteProduct()"
  /> -->
            </div>

            <div v-if="product.user_id != user.id">
              <span v-if="product.product_status == true && product.quantity > 0">
                <span v-if="product.transaction_type == 'sell'">
                  <q-btn
                    v-if="Object.keys(user).length"
                    color="secondary"
                    size="md"
                    class="q-mx-sm buyproductbtn"
                    label="Buy Product"
                    @click="accept_modal = true"
                  />
                  <q-btn
                    v-else
                    color="secondary"
                    size="md"
                    class="q-mx-sm  "
                    label="Buy Product"
                    @click="onLogin = true"
                  />
                </span>
              </span>
              <span v-else>
                <q-badge
                  color="red"
                  text-color="white"
                  label="Sorry!!! This product is currently not available"
                />
              </span>
            </div>
          </q-card-section>
        </div>
      </div>

      <div id="share-buttons" class="row sharebuttons">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="row socialmediatitile">
            <div class="col-xs-12 col-sm-12 col-md-12 socialmediatitilecolumn">
              Share on social media
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 socialmediaiconscontainer">
              <a class="facebook" target="blank">
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <q-icon
                  class="q-pa-sm cursor-pointer facebookicon"
                  name="fab fa-facebook"
                  size="md"
                  @click="socialShare()"
                />
              </a>
              <a class="twitter" target="blank">
                <q-icon
                  class="fab fa-twitter q-pa-sm cursor-pointer twittericon"
                  size="md"
                  @click="socialShare()"
                />
              </a>
              <a class="whatsapp" target="blank">
                <q-icon
                  class="fab fa-whatsapp q-pa-sm cursor-pointer whatsappicon"
                  size="md"
                  @click="socialShare()"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </q-card>

    <q-dialog v-model="accept_modal" persistent>
      <q-card class="my-card" :style="ModelStyle">
        <q-form class="q-gutter-md">
          <q-card-section class="q-py-sm">
            <div class="text-caption">ACCEPT PRODUCT</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm">
            <q-input
              outlined
              dense
              v-model="form.quantity"
              :rules="schema.quantity"
              type="number"
              label="Product Quantity*"
            />
            <q-input
              type="textarea"
              outlined
              dense
              v-model="form.description"
              label="Note to Seller"
              placeholder="You could add specific details about the product you are paying for like color, size, etc. and also delivery information like state and delivery address"
            />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              color="primary"
              size="md"
              :loading="loading"
              class="q-mx-sm"
              label="Accept"
              @click="buyProduct()"
            />
            <q-btn color="red" size="md" label="Cancel" @click="accept_modal = false" />
          </q-card-actions>
        </q-form>
      </q-card>

      <!-- <Signup />  -->
    </q-dialog>

    <!-- dialog to login if user is not logged in -->
    <q-dialog v-model="onLogin" persistent>
      <q-card class="my-card" :style="ModelStyle">
        <q-form @submit="login()" class="q-gutter-md">
          <q-card-section class="q-py-sm">
            <div class="text-h6">Login</div>
            <div class="text-caption">To complete your Transaction</div>
          </q-card-section>
          <q-card-section class="q-gutter-sm">
            <q-input
              outlined
              dense
              v-model="form.email"
              label="Enter E-mail"
              inputmode="email"
            />
            <q-input
              outlined
              dense
              type="password"
              v-model="form.password"
              label="Create Your Password"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat type="submit" label="Login" />
            <q-btn
              flat
              text-color="red"
              size="md"
              label="Cancel"
              @click="onLogin = false"
            />
          </q-card-actions>
        </q-form>
      </q-card>

      <!-- <Signup />  -->
    </q-dialog>
  </q-page>
</template>



<script>
import AcceptTransaction from "./partials/accept_trans";
import Payment from "components/common/make_payment";
import DiliveredRecieved from "./partials/dilivered_recieved";
import Disput from "./partials/disput.vue";
import Signup from "components/auth/register";
import Login from "components/auth/login";
import buySchema from "../../validation/buy";
import CreateProduct from "./partials/create_product.vue";

export default {
  // name: 'PageName',
  components: {
    AcceptTransaction,
    Payment,
    DiliveredRecieved,
    Signup,
    Login,
    Disput,
    CreateProduct,
  },

  data() {
    return {
      ref_link: null,
      referral_modal: false,
      dispute_status: null,
      copyLink: "Copy product link",
      slug: this.$route.params.slug,
      product: null,
      text: "",
      onLogin: false,
      schema: buySchema,
      base_image:
        "https://res.cloudinary.com/godfadatun/image/upload/v1626034472/undraw_factory_dy0a_cqfjei.svg",
      loading: false,
      accept_modal: false,
      form: {
        quantity: "",
        description: "",
        product_id: null,
        referral_token: this.$route.params.referral_token,
      },
      payment_url: `${window.location.href}/payment`,
    };
  },

  computed: {
    dispute_state() {
      if (this.product.dispute === 0) {
        return "Open Dispute";
      } else if (this.product.dispute === 2) {
        return "Open Dispute";
      } else {
        return "Resolve Dispute";
      }
    },
    copyL() {
      return this.copyLink;
    },
    refer_link() {
      return window.location + "/" + this.$store.getters["auth/user"].referral_token;
    },
    user() {
      return this.$store.getters["auth/user"];
    },
    ModelStyle() {
      return this.$q.screen.gt.sm ? "min-width: 500px" : "min-width: 300px";
    },
  },

  methods: {
    copy_link(refLink = null) {
      let link = window.location;
      if (refLink) {
        link = window.location + "/" + this.user.referral_token;
      }
      navigator.clipboard.writeText(link);
      this.copyLink = "copied!";
      setTimeout(() => (this.copyLink = "Copy product link"), 2000);
    },

    socialShare() {
      const link = encodeURI(window.location.href); // `https://paylidate.com/product/5VgJH231122153353/NxqE1OPIhW140722131816`
      const msg = encodeURIComponent(this.product.description);
      const title = encodeURIComponent(document.querySelector("title").textContent);

      console.log([link, msg, title]);

      const fb = document.querySelector(".facebook");
      fb.href = `https://www.facebook.com/share.php?u=${link}`;

      const twitter = document.querySelector(".twitter");
      twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}`;

      const linkedIn = document.querySelector(".linkedin");
      linkedIn.href = `https://linkedin.com/sharing/share-offsite/?url=${link}`;

      const whatsapp = document.querySelector(".whatsapp");
      whatsapp.href = `https://api.whatsapp.com/send?phone=whatsappphonenumber&text=${link}`;
    },

    async buyProduct() {
      let quantity = this.form.quantity;
      if (this.form.referral_token == this.user.referral_token) {
        this.$q.notify({
          message: "You can not use your referral link to buy this product",
          color: "red",
        });

        return;
      }
      if (!quantity) {
        this.$q.notify({
          message: "Product quantity can not be empty",
          color: "red",
        });

        return;
      }
      if (this.form.quantity > this.product.quantity) {
        this.$q.notify({
          message: "You can not request more than the available quantity",
          color: "red",
        });
        return;
      } else {
        try {
          this.$q.loading.show({
            message: "Hold on, Request processing",
            spinnerColor: "secondary",
          });
          const req = await this.$axios.post(
            process.env.Api + "/api/transaction",
            this.form
          );
          //console.log(req);

          const res = req.data;

          this.$q.loading.hide();
          this.$q.notify({ message: "Request seccessful", color: "green" });
          //console.log(res.data.transaction_ref);
          this.$router.push({ path: "/escrow-transaction/" + res.data.transaction_ref });
          //this.$router.push({ name: "transactions" });
        } catch (error) {
          //console.log(error.response.data.message);
          this.$q.loading.hide();
          this.$q.notify({
            message: "Error while trying create transaction",
            color: "red",
          });
        } finally {
          this.$q.loading.hide();
        }
      }
    },

    editTransaction() {},

    deleteProduct() {},
    acceptProduct() {},

    async editProduct(id) {
      try {
        if (this.product.dispute === 0 || this.product.dispute === 2) {
          this.$q.loading.show("Hold on, opening dispute", "secondary");
          this.$axios.get(`${process.env.Api}/api/product/open-dispute/${id}`);
          this.product.dispute = 1;
          this.$q.loading.hide();
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
            type: "positive",
          });

          return;
        }
        if (this.product.dispute === 1) {
          this.$q.loading.show("Hold on, resolving dispute", "secondary");
          this.$axios.get(`${process.env.Api}/api/product/resolve-dispute/${id}`);

          this.product.dispute = 2;
          this.$q.loading.hide();
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
            type: "positive",
          });

          return;
        }
      } catch (err) {
        this.loading = false;
        this.$q.loading.hide();

        this.$q.notify({
          message: "Error",
          color: "orange",
          position: "top",
          type: "warning",
        });
      }
    },

    async getProduct() {
      this.$q.loading.show({
        message: "Hold on, fetching product",
        spinnerColor: "secondary",
      });
      const req = await this.$axios.get(process.env.Api + "/api/product/" + this.slug);
      const res = req.data;
      //console.log(res);
      this.product = res.data;
      this.form.product_id = res.data.id;
      this.$q.loading.hide();
    },

    formatAsNaira(number) {
      return new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "NGN",
      }).format(number);
    },

    productStatus(status) {
      if (status === 0) {
        return "Awaiting Fulfillment";
      } else if (status === 1) {
        return "In Transit";
      } else if (status === 2) {
        return "Delivered";
      } else if (status === 3) {
        return "Recieved";
      } else if (status === 4) {
        return "Canceled";
      }
    },

    async login() {
      this.$q.loading.show({
        message: "Hold on, you are being Logged In",
        spinnerColor: "secondary",
      });
      try {
        const response = await this.$axios.post(
          process.env.Api + "/api/login",
          this.form
        );

        this.$store.commit("auth/login", "Bearer " + response.data.access_token);
        this.$store.commit("auth/user", response.data.data);
        this.$q.localStorage.set("user_id", response.data.data.id);

        this.$q.localStorage.set(
          "paylidate_token",
          "Bearer " + response.data.access_token
        );
        this.$axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;

        this.getProduct();

        this.$q.loading.hide();
        this.$q.notify({
          message: "Logged Into Paylidate",
          color: "green",
          position: "top",
          type: "positive",
        });
        this.onLogin = false;
      } catch (error) {
        this.$q.loading.hide();
        if (error.response) {
          if (error.response.data.message !== "Unauthorized")
            this.$q.notify({
              message: "Logged Into Paylidate, Failed",
              color: "orange",
              position: "top",
              type: "warning",
            });
          this.signup = true;
        } else if (error.request) {
          // The request was made but no response was received
          //// console.log(error.request);
          this.$q.notify({
            message: "Logged Into Paylidate, Failed",
            color: "orange",
            position: "top",
            type: "warning",
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          //// console.log('Error', error.message);
          this.$q.notify({
            message: "Logged Into Paylidate, Failed",
            color: "orange",
            position: "top",
            type: "warning",
          });
        }
      }
    },

    async register() {
      this.$q.loading.show({
        message: "Creating an Account for you",
        spinnerColor: "secondary",
      });
      try {
        const response = await this.$axios.post(
          process.env.Api + "/api/signup",
          this.form
        );

        this.$store.commit("auth/login", "Bearer " + response.data.access_token);
        this.$store.commit("auth/user", response.data.data);
        this.$q.localStorage.set(
          "paylidate_token",
          "Bearer " + response.data.access_token
        );
        this.$axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.access_token;

        this.$q.loading.hide();
        this.$q.notify({
          message: "Paylidate Account Created",
          color: "green",
          position: "top",
          type: "positive",
        });
        this.onLogin = false;
      } catch (error) {
        this.$q.loading.hide();
        this.$q.notify({
          message: "Account Creation Failed",
          color: "orange",
          position: "top",
          type: "warning",
        });
      }
    },

    deliveryStatus(status) {
      if (status === 0) {
        return "Awaiting Fulfillment";
      } else if (status === 1) {
        return "In Transit";
      } else if (status === 2) {
        return "Delivered";
      } else if (status === 3) {
        return "Recieved";
      } else if (status === 4) {
        return "Canceled";
      }
    },

    orderDelivered(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/delivered/${data}`);
      this.getProduct();
    },

    orderRecieved(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/recieved/${data}`);
      this.getProduct();
    },

    canceledDelivery(data) {
      this.$axios.get(`${process.env.Api}/api/product/status/canceled/${data}`);
      this.getProduct();
    },
  },

  mounted() {
    this.getProduct();

    this.ref_link = window.location.href + "/" + this.user.referral_token;
    // if(!this.$q.localStorage.getItem('paylidate_token')) this.onLogin = true
    // else this.getProduct()
  },
};
</script>

<style scoped>
.my-card {
  width: 120%;
  height: 34rem;
  margin-left: auto;
  margin-right: auto;
  top: 20px;

  background: #f8f8f8;
  border: 0.3px solid #000000;
  border-radius: 3px;
}
.create_edit_product {
  padding: 0px;
  margin-top: 30px;
}
.sharebuttons {
  display: block;
}
.productname {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900px;
  font-size: 30px;
  line-height: 48px;

  color: #000000;
}

.facebook,
.twitter,
.whatsapp {
  text-decoration: none;
}

.facebookicon,
.whatsappicon,
.twittericon {
  color: #319ed9;
}
.productprice {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800px;
  font-size: 26px;
  line-height: 43px;

  color: #000000;
}
.productimage {
  box-sizing: border-box;
  width: 275px;
  height: 275px;
  border: 1px solid #000000;
  border-radius: 3px;
  margin-left: 130px;
  margin-top: 3px;
}
.productdescriptiontitle {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800px;
  font-size: 26px;
  line-height: 43px;

  color: #000000;
}
.productdescription,
.productquantity,
.copylinktext,
.productnumber,
.transactiontype,
.socialmediatitile {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800px;
  font-size: 14px;
  line-height: 43px;

  color: #000000;
}
.socialmediatitilecolumn,
.socialmediaiconscontainer {
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
.sharebuttons {
  margin-top: 30px;
}
.copybtncontainer {
  width: 12%;
  margin-left: 80%;
}
.escrowtitlecontainer {
  justify-content: space-between;
}
.productnumber {
  width: auto;
  margin-left: 20%;
}
.facebook,
.twitter {
  margin-right: 30px;
}
.transactiontype {
  width: auto;
  margin-right: 38%;
}
@media screen and (max-width: 480px) {
  .my-card {
    height: auto;
  }
  .initiatorcontainer {
    display: flex !important;
    justify-content: space-between !important;
    width: fit-content !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .boldtie {
    margin-left: 10px !important;
  }
  .lockopen {
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  .buyproductbtn {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .productimage {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .copybtncontainer {
    display: none;
  }

  .transactiontype {
    margin-right: 14%;
  }

  .productnumber {
    margin-left: 8%;
  }
  .productname {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 53px;
    font-size: 16px;
    font-weight: 900;
  }
  .productdescriptiontitle {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 900;
  }
  .productdescription {
    width: fit-content;
    margin-left: auto;
    font-size: 14px;
    margin-right: auto;
  }
  .productprice {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;
  }
  .editbtncontainer {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .productquantity {
    font-size: 14px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .copybtncontainer_for_mobilescreen {
    width: 10%;
    margin-left: auto;
  }
  .copybtn {
    width: auto;
  }
}

@media screen and (min-width: 768px) {
  .copybtncontainer_for_mobilescreen {
    display: none;
  }

  .lockopen,
  .boldtie {
    margin-left: 30px !important;
  }

  .productimage {
    margin-left: 10px;
  }
  .my-card {
    height: 35rem;
  }
  .copybtncontainer {
    width: fit-content;
  }
  .transactiontype {
    margin-right: 25%;
  }
  .productnumber {
    margin-left: 6%;
  }
}

/**laptops with really big screens */
@media screen and (min-width: 1024px) {
  .transactiontype {
    margin-right: 28%;
  }
  .productnumber {
    margin-left: 33%;
  }

  .productimage {
    margin-left: 210px;
  }
}
</style>
