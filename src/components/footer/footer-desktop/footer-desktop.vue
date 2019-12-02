<template lang="pug" src="./footer-desktop.pug"></template>

<script>

export default {
  props: {
    props: Object
  },
  computed: {
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
  },
  methods: {
    scrollToTop () {
      this.$scrollTo('#nav')
    },
    redirect (url) {
      const win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
