<template lang="pug" src="./block-menu-button.pug"></template>

<script>
export default {
  computed: {
    menuActive () {
      return this.$store.state.navDrawer
    }
  }
}
</script>
