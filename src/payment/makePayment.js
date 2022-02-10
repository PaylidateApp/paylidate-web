export default {
    
    makePayment(title = "Make Payment", amount, description ="", currency="NGN", country = "") {
          
        FlutterwaveCheckout({
          public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
          tx_ref: "RX1",
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
            console.log(data);
          },
          onclose: function() {
            alert("sdfjsdo");
          },
          customizations: {
            title: title,
            description: description,
            logo: "../statics/icons/favicon-128x128.png",
          },
        });
      }
      
  
  };