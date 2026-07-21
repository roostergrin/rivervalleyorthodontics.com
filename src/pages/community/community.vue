<template lang="pug" src="./community.pug"></template>

<script>
export default {
  computed: {
    props () {
      return this.$store.state.pages.community
    },
    community () {
      return this.props && this.props.community ? this.props.community : {}
    },
    pageHeading () {
      return this.community.heading || '# We Are Local'
    },
    events () {
      return Array.isArray(this.community.events) ? this.community.events : []
    }
  },
  methods: {
    imageUrl (image) {
      if (!image) return ''
      if (typeof image === 'string') return image
      return (image.sizes && image.sizes.large) || image.url || ''
    },
    imageAlt (image, fallback) {
      return image && image.alt ? image.alt : fallback
    },
    galleryImages (gallery) {
      return Array.isArray(gallery) ? gallery : []
    },
    eventVideos (videos) {
      return Array.isArray(videos) ? videos : []
    },
    scrollGallery (eventIndex, direction) {
      const galleryRef = this.$refs[`gallery-${eventIndex}`]
      const gallery = Array.isArray(galleryRef) ? galleryRef[0] : galleryRef
      if (!gallery) return
      gallery.scrollBy({
        left: direction * Math.max(gallery.clientWidth * 0.8, 320),
        behavior: 'smooth'
      })
    },
    youtubeEmbedUrl (url) {
      if (!url) return ''
      const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&/]+)/)
      return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1` : ''
    },
    isMp4 (url) {
      return /\.mp4(?:$|\?)/i.test(url || '')
    }
  }
}
</script>
