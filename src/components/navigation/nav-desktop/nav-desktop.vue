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
    navigation () {
      const footer = this.$store.state.app.footer
      return footer && footer.navigation ? footer.navigation : {
        schedule_link: 'https://forms.gle/umoqe5QbPbnTqydS6',
        schedule_text: 'Click Here to Schedule Your Free Consultation'
      }
    },
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
