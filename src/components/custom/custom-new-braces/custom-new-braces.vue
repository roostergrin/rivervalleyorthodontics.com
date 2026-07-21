<template lang="pug" src="./custom-new-braces.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Array,
      default: () => []
    },
    gallery: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    elasticItems () {
      return this.props.filter(item => this.isElastic(item))
    }
  },

  methods: {
    isElastic (item) {
      return Boolean(item && /^Properly Placing .* Elastics$/i.test(item.title || ''))
    },
    isFirstElastic (item) {
      return this.elasticItems.length > 0 && item === this.elasticItems[0]
    },
    getYouTubeId (url) {
      if (!url) return null
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return (match && match[2].length === 11) ? match[2] : null
    },
    getYouTubeEmbedUrl (url) {
      const videoId = this.getYouTubeId(url)
      return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : ''
    }
  }
}
</script>
