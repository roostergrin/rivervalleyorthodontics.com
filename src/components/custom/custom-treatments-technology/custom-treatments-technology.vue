<template lang="pug" src="./custom-treatments-technology.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    technologies () {
      return this.props.technologies
    }
  },
  components: {
    SectionTitle
  }
}
</script>
