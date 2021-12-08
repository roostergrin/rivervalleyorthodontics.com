<template lang="pug" src="./nav-mobile.pug"></template>

<script>
import MenuButton from '@/components/block/block-menu-button/block-menu-button'
import { scrollToElement } from '@/shared/functionality/mixins'

export default {
  mixins: [scrollToElement],
  props: {
    links: {
      type: Array
    }
  },
  computed: {
    drawerState () {
      return this.$store.state.navDrawer
    },
    filteredLinks () {
      return this.links.filter(function (u) {
        return u.path !== '/for-patients'
      })
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.dispatch('VIEW_NAV_DRAWER', !this.drawerState)
    },
    redirectHome () {
      this.$router.push('/')
      this.$store.dispatch('VIEW_NAV_DRAWER', false)
    },
    redirectToContactForm () {
      new Promise((resolve, reject) => {
        resolve(this.$router.push('contact-us'))
      })
        .then(() => this.$store.dispatch('VIEW_NAV_DRAWER', false))
        .then(() => this.scrollToElement('#contact-form'))
    }
  },
  watch: {
    '$store.state.navDrawer' (state) {
      const body = document.querySelector('body')
      state ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
    },
    '$route' (to, from) {
      if (to.name !== 'Home') {
        this.$store.dispatch('VIEW_NAV_DRAWER', false)
      }
    }
  },
  components: {
    MenuButton
  }
}
</script>
