<template lang="pug" src="./patients.pug"></template>

<script>
import Forms from '@/components/custom/custom-patients-forms/custom-patients-forms'
import NewBraces from '@/components/custom/custom-new-braces/custom-new-braces'

export default {
  data () {
    return {
      activeIndex: 0,
      tabs: [
        { title: 'New Braces Info', key: 'new-braces' },
        { title: 'Patient Forms', key: 'forms' },
        { title: 'Early Smiles Club', key: 'early-smiles' }
        /*
        { title: 'Temporary Relief Tips', key: 'temporary-relief' },
        { title: 'Events', key: 'events' }
         */
      ]
    }
  },
  computed: {
    props () {
      return this.$store.state.pages['for-patients']
    },
    activeTab () {
      return this.tabs[this.activeIndex]
    }
  },
  methods: {
    updateActiveTab (index) {
      this.activeIndex = index
    }
  },
  components: {
    Forms,
    NewBraces
  }
}
</script>

<style lang="scss">
$green: #94c733;
.nav-spacer {
  height: 120px;
}

.pages-patients {
  &__col-full {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  &__title-container {
    margin: 0 1rem;
    cursor: pointer;
    color: #696969;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &--active {
      color: $green;

      &:hover {
        color: $green !important;
      }

      .pages-patients__icon {
        display: block;
      }
    }

    &:hover {
      color: black;
    }
  }

  &__icon {
    margin-top: -10px;
    display: none;
    fill: $green;
  }

  &__content {
    margin-top: 2rem;
  }
}

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
