export const authRuleMixin = {
  methods: {
    textRule(val) {
      return (val && val.length > 0 || 'Please type something')
    },

    requiredRule(val) {
      return (val || '* Required')
    },

    textLengthRule(val) {
      return val.length >= 6 || 'Please use minimum of 6 characters'
    },

    textLengthRule1(val) {
      return val.length >= 10 || 'Please use minimum of 10 characters'
    },

    validEmail: function (email) {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validName: function (name) {
      const re = /[^a-z\s'-]/gi
      if (name) {
        return !re.test(name);
      }
      return false;
    },
    validAlphabets: function (name) {
      const re = /[^a-z\s]/gi
      if (name) {
        return !re.test(name);
      }
      return false;
    },
    showNotif(mssg, color) {
      this.$q.notify({
        color: 'white',
        textColor: color,
        position: 'top',
        message: `
          <div style="padding: 2px 16px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <img src="https://content.screencast.com/users/DanielAdegoke/folders/Default/media/3663b6ed-07d3-4d01-b57f-3d209ac5cb38/check-square.png" style="width: 30%">
            <div style="font-size:15px;">${mssg}</div>
          </div>
        `,
        html: true
      })
    },
    errorHandling(error, msg) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
        // this.showNotif(error.response.data.message, 'orange')
        this.$q.notify({ message: msg ? msg : error.response.data.message , color: 'orange', position: 'top', type: 'warning' })
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        this.$q.notify({ message: error.request, color: 'orange', position: 'top', type: 'warning' })
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        this.$q.notify({ message: error.message, color: 'orange', position: 'top', type: 'warning' })
      }
    },
  },

  computed: {
    isValid() {
      return this.form.password_confirmation == this.form.password;
    }
  }

}
