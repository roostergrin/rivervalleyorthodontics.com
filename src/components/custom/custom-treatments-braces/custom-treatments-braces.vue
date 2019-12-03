<template lang="pug" src="./custom-treatments-braces.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    },
    makeUnderlineBlue: {
      type: Boolean
    }
  },
  data: () => ({
    activeIndex: 0
  }),
  computed: {
    activeTreatment () {
      return this.props.types[this.activeIndex]
    }
  },
  methods: {
    updateIndex (index) {
      this.activeIndex = index
    }
  },
  components: {
    SectionTitle
  }
}
</script>
