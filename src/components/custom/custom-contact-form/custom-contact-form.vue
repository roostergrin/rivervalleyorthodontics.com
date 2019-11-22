<template lang="pug" src="./custom-contact-form.pug"></template>

<script>
import SectionTitle from '@/components/block/block-title/block-title'
import ContactForm from '@/components/form/form-contact/form-contact'

export default {
  props: {
    props: {
      type: Object
    }
  },
  components: {
    SectionTitle,
    ContactForm
  }
}
</script>
