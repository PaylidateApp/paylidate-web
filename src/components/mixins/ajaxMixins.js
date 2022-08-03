export const requestMixin = {
  methods: {
    async getRequest(endPoint) {
      try {
        // this.errors = null
        // this.loading = true
        const response = this.$axios.get(process.env.Api + endPoint);
        // this.$q.notify({color: 'primary', message: response.data.message, position: 'bottom-left'})
        // this.loading = false
        return Promise.resolve(response);
      } catch (error) {
        this.$q.notify({
          color: "negative",
          message: error.response.data.message,
          position: "bottom-left"
        });
        this.errors = error.response.data.errors;
        this.loading = false;
        return Promise.resolve(error);
      }
    },

    async showRequest(endPoint, id) {
      try {
        // this.errors = null
        // this.loading = true
        const response = this.$axios.get(process.env.Api + endPoint + id);
        // this.$q.notify({color: 'primary', message: response.data.message, position: 'bottom-left'})
        // this.loading = false
        return Promise.resolve(response);
      } catch (error) {
        // this.$q.notify({color: 'negative', message: error.response.data.message, position: 'bottom-left'})
        // this.errors = error.response.data.errors
        // this.loading = false
        return Promise.resolve(error);
      }
    },

    async postRequest(endPoint, form) {
      try {
        this.errors = null;
        this.loading = true;
        const response = await this.$axios.post(
          process.env.Api + endPoint,
          form
        );
        this.$q.notify({
          color: "primary",
          message: response.data.message,
          position: "bottom-left"
        });

        this.loading = false;
        return Promise.resolve(response);
      } catch (error) {
        this.$q.notify({
          color: "negative",
          message: error.response.data.message,
          position: "bottom-left"
        });
        this.errors = error.response.data.errors;
        this.loading = false;
        return Promise.reject(error);
      }
    },

    async putRequest(endPoint) {
      try {
        const response = await this.$axios.put(process.env.Api + endPoint);
        console.log(response);
      } catch (error) {
        this.$q.notify({
          color: "negative",
          message: error.response.data.message,
          position: "bottom-left"
        });
        this.errors = error.response.data.errors;
        this.loading = false;
        return Promise.resolve(error);
      }
    },

    async updateRequest(endPoint, form) {
      try {
        this.errors = null;
        this.loading = true;
        const response = await this.$axios.patch(
          process.env.Api + endPoint,
          form
        );
        this.$q.notify({
          color: "primary",
          message: response.data.message,
          position: "bottom-left"
        });
        this.loading = false;
        return Promise.resolve(response);
      } catch (error) {
        this.$q.notify({
          color: "negative",
          message: error.response.data.message,
          position: "bottom-left"
        });
        this.errors = error.response.data.errors;
        this.loading = false;
        return Promise.reject(error);
      }
    },

    async deleteRequest(endPoint) {
      try {
        this.errors = null;
        this.loading = true;
        const response = await this.$axios.delete(process.env.Api + endPoint);
        this.$q.notify({
          color: "primary",
          message: response.data.message,
          position: "bottom-left"
        });
        this.loading = false;
        return Promise.resolve(response);
      } catch (error) {
        this.$q.notify({
          color: "negative",
          message: error.response.data.message,
          position: "bottom-left"
        });
        this.errors = error.response.data.errors;
        this.loading = false;
        return Promise.reject(error);
      }
    }
  }
};
