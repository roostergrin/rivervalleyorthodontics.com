<template lang="pug" src="./nav-desktop.pug"></template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  },
  computed: {
    navState () {
      return this.$store.state.navState
    },
    activeRoute () {
      return this.$router.history.current.name
    }
  },
  methods: {
    redirectHome () {
      this.$router.push('/')
    }
  }
}
</script>
