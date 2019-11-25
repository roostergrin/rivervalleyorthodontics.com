<template lang="pug" src="./block-employee-tile.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    active: false
  }),
  methods: {
    toggleState () {
      console.log('cats')
      this.active = !this.active
    }
  }
}
</script>
