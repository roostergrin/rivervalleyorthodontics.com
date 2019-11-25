<template lang="pug" src="./nav-desktop.pug"></template>

<script>
export default {
  props: {
    links: {
      type: Array
    },
    props: {
      type: Object
    },
    scrolling: {
      type: Boolean
    }
  },
  methods: {
    redirectHome () {
      this.$router.push('/')
    }
  }
}
</script>
