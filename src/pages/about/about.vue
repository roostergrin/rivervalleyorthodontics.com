<template lang="pug" src="./about.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import AboutDoctor from '@/components/custom/custom-about-doctor/custom-about-doctor'
import AboutTeams from '@/components/custom/custom-about-team/custom-about-team'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroImg,
    AboutDoctor,
    AboutTeams
  }
}
</script>
