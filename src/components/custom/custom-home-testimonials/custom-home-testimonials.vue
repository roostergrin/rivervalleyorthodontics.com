<template lang="pug" src="./custom-home-testimonials.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  created () {
    setInterval(() => {
      this.incrementIndex()
    }, this.interval)
  },
  data: () => ({
    currentIndex: 0,
    interval: 8000
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
    },
    incrementIndex () {
      if (this.currentIndex === this.testimonials.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    decrementIndex () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.testimonials.length - 1
      } else {
        this.currentIndex--
      }
    }
  },
  components: {
    SectionTitle
  }
}
</script>
