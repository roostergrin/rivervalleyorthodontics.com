<template lang="pug" src="./custom-home-testimonials.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  computed: {
    testimonials () {
      return this.props.list
    },
    activeTestimonial () {
      return this.testimonials[this.currentIndex]
    }
  },
  methods: {
    jumpToIndex (index) {
      this.currentIndex = index
    }
  },
  components: {
    SectionTitle
  }
}
</script>
