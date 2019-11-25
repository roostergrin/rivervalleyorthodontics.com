<template lang="pug" src="./nav-mobile.pug"></template>

<script>
import MenuButton from '@/components/block/block-menu-button/block-menu-button'

export default {
  props: {
    links: {
      type: Array
    }
  },
  computed: {
    drawerState () {
      return this.$store.state.navDrawer
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.dispatch('VIEW_NAV_DRAWER', !this.drawerState)
    }
  },
  watch: {
    '$store.state.navDrawer' (state) {
      const body = document.querySelector('body')
      state ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
    }
  },
  components: {
    MenuButton
  }
}
</script>
