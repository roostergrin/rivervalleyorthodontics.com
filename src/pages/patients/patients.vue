<template lang="pug" src="./patients.pug"></template>

<script>
import NewBraces from '@/components/custom/custom-new-braces/custom-new-braces'

export default {
  data () {
    return {
      activeIndex: 0,
      tabs: [
        { title: 'New Braces Info', key: 'new-braces' },
        { title: 'Early Smiles Club', key: 'early-smiles' },
        { title: 'Temporary Relief Tips', key: 'temporary-relief' }
        /*
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
    },
    earlySmilesVideos () {
      if (!this.props || !Array.isArray(this.props.new_braces)) return []
      const titles = [
        'Did you know that kids should see the orthodontist at age 7?',
        'What to expect at a kids consultation',
        'Why do I see young kids in braces?'
      ]
      return titles
        .map(title => this.props.new_braces.find(item => item.title === title))
        .filter(Boolean)
    }
  },
  methods: {
    updateActiveTab (index) {
      this.activeIndex = index
    }
  },
  components: {
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
  justify-content: center;

  &__header {
    color: $green;
    text-align: center;
    margin: 2rem 0;
  }

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
  display: block;
  width: calc(50% - .75rem);
  max-width: 560px;
}

.info-flyer__container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  max-width: 1244px;
  margin: 0 auto 4rem;
  padding: 0 32px;
}

@media screen and (max-width: 768px) {
  .info-flyer {
    width: 100%;
    max-width: none;
  }

  .info-flyer__container {
    gap: 1rem;
    padding: 0 16px;
  }
}
</style>
