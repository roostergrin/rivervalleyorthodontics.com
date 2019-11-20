<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import TreatmentsTechnology from '@/components/custom/custom-treatments-technology/custom-treatments-technology'
import TreatmentsInvisalign from '@/components/custom/custom-treatments-invisalign/custom-treatments-invisalign'
import TreatmentsSection from '@/components/custom/custom-treatments-braces/custom-treatments-braces'
import TreatmentsRetainers from '@/components/custom/custom-treatments-retainers/custom-treatments-retainers'

export default {
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    HeroImg,
    TreatmentsTechnology,
    TreatmentsInvisalign,
    TreatmentsSection,
    TreatmentsRetainers
  }
}
</script>
