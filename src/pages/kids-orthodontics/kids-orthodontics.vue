<template lang="pug" src="./kids-orthodontics.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import BlockPagePhoto from '@/components/block/block-page-photo/block-page-photo'

export default {
  computed: {
    props () {
      return this.$store.state.pages['all-kids-should-see-the-orthodontist-by-age-7']
    }
  },
  components: {
    HeroImg,
    BlockPagePhoto
  }
}
</script>
