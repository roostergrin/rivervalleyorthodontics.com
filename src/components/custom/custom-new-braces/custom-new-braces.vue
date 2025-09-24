<template lang="pug" src="./custom-new-braces.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Array,
      default: () => []
    }
  },

  methods: {
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
