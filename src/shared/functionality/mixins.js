export const activateAnimation = {
  data: () => ({
    thresholdOptions: {
      threshold: [0.25, 0.75]
    }
  }),
  methods: {
    activateAnimation ({ el, going }) {
      if (going === 'in') {
        this.$store.dispatch('SET_ANIMATION_STATE', {id: el.id, status: true})
      }
    }
  }
}
// @param { Object | String } element - class/id value to search the DOM for, function was designed to be passed a vue router Object or String (ex: '#top')
export const scrollToElement = {
  methods: {
    scrollToElement (element) {
      if (typeof element === 'object') {
        const id = element.path.replace(/\//, '')
        this.$scrollTo(id)
      } else {
        this.$scrollTo(element)
      }
      this.$store.dispatch('VIEW_NAV_DRAWER', false)
    }
  }
}
