<template lang="pug" src="./about.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroImg
  }
}
</script>
