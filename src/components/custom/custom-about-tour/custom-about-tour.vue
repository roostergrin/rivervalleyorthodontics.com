<template lang="pug" src="./custom-about-tour.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'
import SliderOfficeTour from '@/components/slider/slider-office-tour/slider-office-tour'

export default {
  props: {
    props: {
      type: Object
    }
  },
  components: {
    SectionTitle,
    SliderOfficeTour
  }
}
</script>
