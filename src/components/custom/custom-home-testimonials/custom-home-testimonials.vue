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
    businessPageLink () {
      return 'https://www.google.com/maps/place/River+Valley+Orthodontics,+Justin+D.+Ward+DMD+MSD/@42.5363927,-113.7723776,17z/data=!4m13!1m7!3m6!1s0x54ab35d525453a5d:0xe17069ce6420d15f!2s1365+E+Main+St,+Burley,+ID+83318!3b1!8m2!3d42.5363927!4d-113.7701889!3m4!1s0x54ab35e6162222df:0x5bde3d2ee8106c2!8m2!3d42.5363927!4d-113.7701889'
    },
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
