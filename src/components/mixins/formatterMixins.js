export const formatterMixin = {
  methods: {
    formatAsNaira(number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(number)
    },
    truncateText(string, maxLength) {
      if (string.length > maxLength) {
        return `${string.substr(0, maxLength)}...`
      }
      return string
    },
  },
}
