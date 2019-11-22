<template lang="pug" src="./custom-patients-payment.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  methods: {
    redirect (url) {
      const win = window.open(url, '_blank')
      win.focus()
    }
  },
  components: {
    SectionTitle
  }
}
</script>
