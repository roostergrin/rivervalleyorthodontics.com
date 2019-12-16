<template lang="pug" src="./custom-home-apart.pug"></template>

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
  methods: {
    scrollToSection (route, id) {
      console.log(route)
      console.log(id)
      new Promise((resolve, reject) => {
        resolve(this.$router.push(route))
      })
        .then(() => this.scrollToElement(id))
        // .then(() => this.$store.dispatch('VIEW_NAV_DRAWER', false))
    }
  },
  components: {
    SectionTitle
  }
}
</script>
