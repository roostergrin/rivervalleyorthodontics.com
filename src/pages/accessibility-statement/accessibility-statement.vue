<template lang="pug" src="./accessibility-statement.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'

export default {
  computed: {
    props () {
      return this.$store.state.pages.about
    },
    barColor () {
      switch (this.color) {
        case 'green':
          return '#94c733'
        case 'blue':
          return '#26abe3'
        default :
          return '#94c733'
      }
    }
  },
  components: {
    HeroImg
  },
  data () {
    return {
      companyName: ' River Valley Orthodontics', // Fill this in
      domain: "<a href='https://rivervalleyorthodontics.com'>rivervalleyorthodontics.com</a>", // Fill this in
      email: "<a href='mailto:marketing@rvosmiles.com'>marketing@rvosmiles.com</a>", // Fill this in
      phone: "<a href='tel:208-678-3265'>(208) 678-3265</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
