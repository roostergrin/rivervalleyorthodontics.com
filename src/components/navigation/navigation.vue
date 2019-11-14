<template lang="pug" src="./navigation.pug"></template>

<script>
import NavDesktop from 'components/navigation/nav-desktop/nav-desktop'
import NavMobile from 'components/navigation/nav-mobile/nav-mobile'

export default {
  data: () => ({
    windowHeight: window.pageYOffset
  }),
  computed: {
    scrolling () {
      return this.windowHeight > (window.innerHeight * 0.35)
    },
    links () {
      return this.$router.options.routes.filter(({navigation}) => navigation)
    }
  },
  components: {
    NavDesktop,
    NavMobile
  }
}
</script>
