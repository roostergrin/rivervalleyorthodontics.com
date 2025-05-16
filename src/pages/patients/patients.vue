<template lang="pug" src="./patients.pug"></template>

<script>
import HeroImg from '@/components/block/block-hero-photo/block-hero-photo'
import Forms from '@/components/custom/custom-patients-forms/custom-patients-forms'
import Rewards from '@/components/custom/custom-patients-rewards/custom-patients-rewards'
import Payment from '@/components/custom/custom-patients-payment/custom-patients-payment'

export default {
  computed: {
    props () {
      return this.$store.state.pages['for-patients']
    }
  },
  components: {
    HeroImg,
    Forms,
    Rewards,
    Payment
  }
}
</script>
<style>
    .info-flyer {
      margin: 0 auto;
      max-width: 100%;
    }
    .info-flyer__container {
      display: inline-block;
      align-items: center;
      text-align: center;
      margin-bottom: 4rem;
    }
</style>
