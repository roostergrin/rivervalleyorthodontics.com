<template lang="pug" src="./footer.pug"></template>

<script>
import FooterDesktop from '@/components/footer/footer-desktop/footer-desktop'
import FooterMobile from '@/components/footer/footer-mobile/footer-mobile'

export default {
  computed: {
    props () {
      return this.$store.state.app.footer
    }
  },
  methods: {
    scrollToTop () {
      this.$scrollTo('#nav')
    }
  },
  components: {
    FooterDesktop,
    FooterMobile
  }
}
</script>
