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
  computed: {
    tileBackground () {
      const raisedPortraits = ['Helenn', 'Abigail', 'Marisela']
      const shouldRaisePortrait = raisedPortraits.indexOf(this.props.name) !== -1
      const backgroundPosition = shouldRaisePortrait ? 'center bottom / 105% auto' : 'center / cover'

      return `url(${this.props.img}) no-repeat ${backgroundPosition}`
    }
  },
  methods: {
    toggleState () {
      this.active = !this.active
    }
  }
}
</script>
