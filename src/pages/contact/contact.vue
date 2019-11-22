<template lang="pug" src="./contact.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import ContactInfo from '@/components/custom/custom-contact-info/custom-contact-info'

export default {
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    }
  },
  components: {
    HeroImg,
    ContactInfo
  }
}
</script>
