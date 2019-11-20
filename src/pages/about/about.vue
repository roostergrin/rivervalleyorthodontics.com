<template lang="pug" src="./about.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import AboutDoctor from '@/components/custom/custom-about-doctor/custom-about-doctor'
import AboutTeams from '@/components/custom/custom-about-team/custom-about-team'
import AboutOffice from '@/components/custom/custom-about-office/custom-about-office'
import AboutTour from '@/components/custom/custom-about-tour/custom-about-tour'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroImg,
    AboutDoctor,
    AboutTeams,
    AboutOffice,
    AboutTour
  }
}
</script>
