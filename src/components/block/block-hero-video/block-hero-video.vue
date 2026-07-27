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
    this.video = this.$refs.hero
    this.video.muted = true
    this.isMuted = true

    const playPromise = this.video.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        this.isPlaying = false
      })
    }
  },
  data: () => ({
    video: null,
    isPlaying: true,
    isMuted: true
  }),
  methods: {
    toggleVideoState () {
      if (this.video.paused) {
        const playPromise = this.video.play()

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            this.isPlaying = false
          })
        }
      } else {
        this.video.pause()
      }
    },
    toggleMute () {
      this.video.muted = !this.video.muted
    },
    syncPlaybackState () {
      this.isPlaying = !this.video.paused
    },
    syncMuteState () {
      this.isMuted = this.video.muted
    }
  }
}
</script>
