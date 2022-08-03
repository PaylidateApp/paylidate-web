export const displayMixins = {
  computed: {
    isMobile: function() {
      const display = ['sm', 'xs']
      return display.includes(this.$q.screen.name)
    },
    isMedium: function() {
      return this.$q.screen.name === 'md'
    }
  }
}
