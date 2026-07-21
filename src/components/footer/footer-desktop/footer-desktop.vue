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
    },
    businessPageLink () {
      return 'https://www.google.com/maps/place/River+Valley+Orthodontics,+Justin+D.+Ward+DMD+MSD/@42.5363927,-113.7723776,17z/data=!4m13!1m7!3m6!1s0x54ab35d525453a5d:0xe17069ce6420d15f!2s1365+E+Main+St,+Burley,+ID+83318!3b1!8m2!3d42.5363927!4d-113.7701889!3m4!1s0x54ab35e6162222df:0x5bde3d2ee8106c2!8m2!3d42.5363927!4d-113.7701889'
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
