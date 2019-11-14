<template lang="pug" src="./home.pug"></template>

<script>
import HeroVideo from '@/components/block/block-hero-video/block-hero-video'
import Welcome from '@/components/custom/custom-home-welcome/custom-home-welcome'
import WhatSetsUsApart from '@/components/custom/custom-home-apart/custom-home-apart'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    HeroVideo,
    Welcome,
    WhatSetsUsApart
  }
}
</script>
