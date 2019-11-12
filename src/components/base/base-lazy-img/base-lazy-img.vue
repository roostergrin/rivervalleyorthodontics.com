<template lang='pug' src='./base-lazy-img.pug'></template>

<script>
import gif from './animatedimage.gif'

export default {
  props: {
    src: {
      type: String
    },
    bgColor: {
      type: String,
      default: '#f8f8f8'
    },
    imageBackground: {
      type: Boolean,
      default: false
    },
    alt: {
      type: String,
      default: document.location.hostname + ' image for section'
    }
  },
  data () {
    return {
      currentImg: null,
      animatedGif: gif,
      imageType: 'relative',
      loading: true,
      loaded: false,
      intersectionOptions: {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: [0.01]
      }
    }
  },
  created () {
    if (this.imageBackground) this.imageType = 'absolute'
  },
  mounted () {
    this.loaded = true
  },
  methods: {
    onWaypoint ({ going, direction }) {
      if (going === 'in') {
        let downloadingImage = new Image()
        this.currentImg = this.src
        downloadingImage.onload = () => {
          this.loading = false
        }
        downloadingImage.src = this.src
      }
    }
  }
}
</script>
