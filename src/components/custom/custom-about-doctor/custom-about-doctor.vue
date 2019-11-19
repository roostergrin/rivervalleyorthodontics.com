<template lang="pug" src="./custom-about-doctor.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    activeIndex: 0
  }),
  computed: {
    activeSection () {
      return this.props.sections[this.activeIndex]
    }
  },
  methods: {
    updateActiveSection (index) {
      this.activeIndex = index
    }
  },
  components: {
    SectionTitle
  }
}
</script>
