<template lang="pug" src="./custom-about-team.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'
import EmployeeTile from '@/components/block/block-employee-tile/block-employee-tile'

export default {
  props: {
    props: {
      type: Array
    }
  },
  components: {
    SectionTitle,
    EmployeeTile
  }
}
</script>
