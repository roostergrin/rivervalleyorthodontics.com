<template lang="pug" src="./footer.pug"></template>

<script>

export default {
  computed: {
    props () {
      return this.$store.state.app.footer
    },
    address () {
      return this.props.footer.address
    },
    socials () {
      return this.props.footer.socials
    },
    hours () {
      return this.props.footer.hours
    },
    phone () {
      return this.props.footer.phone
    }
  }
}
</script>
