<template lang="pug" src="./custom-home-welcome.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'
import { scrollToElement } from '@/shared/functionality/mixins'

export default {
  mixins: [scrollToElement],
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    animationState () {
      return this.$store.state.animationState['home-welcome']
    }
  },
  methods: {
    redirectToContactForm () {
      new Promise((resolve, reject) => {
        resolve(this.$router.push('contact-us'))
      })
        .then(() => this.scrollToElement('#contact-form'))
    }
  },
  components: {
    SectionTitle
  }
}
</script>
