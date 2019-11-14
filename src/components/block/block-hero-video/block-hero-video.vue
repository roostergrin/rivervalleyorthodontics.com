<template lang="pug" src="./block-hero-video.pug"></template>

<script>

export default {
  name: 'Hero',
  props: {
    props: {
      type: String
    }
  },
  mounted () {
    const videoLoad = setInterval(() => {
      if (this.$refs.hero !== undefined) {
        this.$refs.hero.play()
        clearInterval(videoLoad)
      }
    }, 10)
  },
  data: () => ({
    videoState: 'play',
    video: null
  }),
  methods: {
    toggleVideoState (state) {
      state ? this.videoState = '' : this.videoState = 'play'
    }
  },
  watch: {
    videoState (state) {
      this.video = this.$refs['hero']
      state ? this.video.play() : this.video.pause()
    }
  }
}
</script>
