<template lang="pug" src="./contact.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import ContactInfo from '@/components/custom/custom-contact-info/custom-contact-info'
import ContactForm from '@/components/custom/custom-contact-form/custom-contact-form'

export default {
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    }
  },
  components: {
    HeroImg,
    ContactInfo,
    ContactForm
  }
}
</script>
