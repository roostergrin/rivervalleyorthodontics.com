<template lang="pug" src="./slider-office-tour.pug"></template>

<script>
export default {
  props: {
    props: Object
  },
  data () {
    return {
      currentSlide: 0
    }
  },
  methods: {
    changeSlide (s) {
      if (s === 'prev') {
        this.currentSlide === 0 ? this.currentSlide = this.props.images.length - 1 : this.currentSlide--
      }
      if (s === 'next') {
        this.currentSlide === (this.props.images.length - 1) ? this.currentSlide = 0 : this.currentSlide++
      }
    }
  }
}
</script>
