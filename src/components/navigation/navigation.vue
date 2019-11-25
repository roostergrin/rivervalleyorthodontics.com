<template lang="pug" src="./navigation.pug"></template>

<script>
import NavDesktop from 'components/navigation/nav-desktop/nav-desktop'
import NavMobile from 'components/navigation/nav-mobile/nav-mobile'

export default {
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  data: () => ({
    lastScrollPosition: 0
  }),
  computed: {
    atTop () {
      return !this.$store.state.navState
    },
    links () {
      return this.$router.options.routes.filter(({navigation}) => navigation)
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      let scrollState
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      if (currentScrollPosition <= 60) {
        scrollState = ''
      } else if ((currentScrollPosition < this.lastScrollPosition) && (currentScrollPosition !== 0)) {
        scrollState = 'top'
      } else if (currentScrollPosition > this.lastScrollPosition) {
        scrollState = 'hide'
      }
      this.lastScrollPosition = currentScrollPosition
      this.$store.dispatch('SET_NAV_STATE', scrollState)
    },
    scrollToTop () {
      this.$router.push('/')
    }
  },
  components: {
    NavDesktop,
    NavMobile
  }
}
</script>
