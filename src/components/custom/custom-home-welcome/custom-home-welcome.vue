<template lang="pug" src="./custom-home-welcome.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    navigation () {
      const footer = this.$store.state.app.footer
      return footer && footer.navigation ? footer.navigation : {}
    },
    animationState () {
      return this.$store.state.animationState['home-welcome']
    }
  },
  components: {
    SectionTitle
  }
}
</script>
