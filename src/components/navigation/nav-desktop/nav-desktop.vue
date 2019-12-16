<template lang="pug" src="./nav-desktop.pug"></template>

<script>
import { scrollToElement } from '@/shared/functionality/mixins'

export default {
  mixins: [scrollToElement],
  props: {
    links: {
      type: Array
    }
  },
  computed: {
    navState () {
      return this.$store.state.navState
    },
    activeRoute () {
      return this.$route.name
    }
  },
  methods: {
    redirectHome () {
      this.$router.push('/')
    },
    redirectToContactForm () {
      new Promise((resolve, reject) => {
        resolve(this.$router.push('contact-us'))
      })
        .then(() => this.$store.dispatch('VIEW_NAV_DRAWER', false))
        .then(() => this.scrollToElement('#contact-form'))
    }
  }
}
</script>
