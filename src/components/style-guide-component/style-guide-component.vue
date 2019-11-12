<template lang='pug' src='./style-guide-component.pug'></template>

<script>
import FormContact from 'components/form/form-contact/form-contact'

export default {
  props: {
    content: {
      type: [Object, Array]
    }
  },
  components: {
    FormContact
  }
}
</script>
