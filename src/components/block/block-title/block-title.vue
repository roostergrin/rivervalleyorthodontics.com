<template lang="pug" src="./block-title.pug"></template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: String
    }
  },
  computed: {
    barColor () {
      switch (this.color) {
        case 'green':
          return '#94c733'
        case 'blue':
          return '#26abe3'
        default :
          return '#94c733'
      }
    },
    barSize () {
      switch (this.size) {
        case 'double':
          return 'DoubleWave250-01'
        default:
          return 'SingleWave150-Thin'
      }
    }
  }
}
</script>
