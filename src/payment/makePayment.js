export default {
    
    makePayment(title = "Make Payment", description ="", amount, currency="NGN", country = "") {
        const d = new Date();
        FlutterwaveCheckout({
          public_key: "FLWPUBK_TEST-94c2964fdf6f5f2bf770319733fa7a9d-X",
          tx_ref: d,
          amount: amount,
          currency: currency,
          country: country,
          payment_options: " ",
                   meta: {
            consumer_id: 233,
            consumer_mac: "",
          },
          customer: {
            email: "cornelius@gmail.com",
            phone_number: "08102909304",
            name: "Flutterwave Developers",
          },
          callback: function (data) {
              //console.log(data);
            return "dfdh";
          },
 
          customizations: {
            title: title,
            description: description,
            logo: "../statics/icons/favicon-128x128.png",
          },
        });
      }
      
  
  };