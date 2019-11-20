<template lang="pug" src="./custom-about-office.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    officeFeatures () {
      return this.props.features
    }
  },
  components: {
    SectionTitle
  }
}
</script>
