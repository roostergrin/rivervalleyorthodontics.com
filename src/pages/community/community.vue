<template lang="pug" src="./community.pug"></template>

<script>
export default {
  data () {
    return {
      lightbox: {
        isOpen: false,
        images: [],
        index: 0,
        title: ''
      },
      lightboxReturnFocus: null,
      previousBodyOverflow: ''
    }
  },
  computed: {
    props () {
      return this.$store.state.pages.community
    },
    community () {
      return this.props && this.props.community ? this.props.community : {}
    },
    pageHeading () {
      return this.community.heading || '# We Are Local'
    },
    events () {
      return Array.isArray(this.community.events) ? this.community.events : []
    },
    currentLightboxImage () {
      return this.lightbox.images[this.lightbox.index] || null
    }
  },
  mounted () {
    window.addEventListener('keydown', this.handleLightboxKeydown)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleLightboxKeydown)
    if (this.lightbox.isOpen) document.body.style.overflow = this.previousBodyOverflow
  },
  methods: {
    imageUrl (image) {
      if (!image) return ''
      if (typeof image === 'string') return image
      return (image.sizes && image.sizes.large) || image.url || ''
    },
    imageAlt (image, fallback) {
      return image && image.alt ? image.alt : fallback
    },
    fullImageUrl (image) {
      if (!image) return ''
      if (typeof image === 'string') return image
      return image.url || this.imageUrl(image)
    },
    galleryObjectPosition (image) {
      const url = this.fullImageUrl(image)
      const positions = {
        'rvo-summer-bash-01.jpg': 'center 32%',
        'rvo-summer-bash-02.jpg': 'center 36%',
        'rvo-summer-bash-03.jpg': 'center 38%',
        'rvo-summer-bash-05.jpg': 'center 38%',
        'rvo-summer-bash-06.jpg': 'center 68%',
        'rvo-summer-bash-07.jpg': 'center 28%',
        'rvo-summer-bash-08.jpg': 'center 42%',
        'rvo-summer-bash-09.jpg': 'center 46%',
        'rvo-summer-bash-10.jpg': 'center 36%',
        'rvo-summer-bash-11.jpg': 'center 42%',
        'rvo-summer-bash-12.jpg': 'center 10%',
        'rvo-summer-bash-13.jpg': 'center 32%'
      }
      const filename = url.split('/').pop().split('?')[0]
      return positions[filename] || 'center center'
    },
    galleryImages (gallery) {
      return Array.isArray(gallery) ? gallery : []
    },
    eventVideos (videos) {
      return Array.isArray(videos) ? videos : []
    },
    galleryElement (eventIndex) {
      const galleryRef = this.$refs[`gallery-${eventIndex}`]
      return Array.isArray(galleryRef) ? galleryRef[0] : galleryRef
    },
    scrollGallery (eventIndex, direction) {
      const gallery = this.galleryElement(eventIndex)
      if (!gallery) return
      gallery.scrollBy({
        left: direction * Math.max(gallery.clientWidth * 0.8, 320),
        behavior: 'smooth'
      })
    },
    openVisibleGalleryImage (communityEvent, eventIndex, clickEvent) {
      const images = this.galleryImages(communityEvent.gallery)
      const gallery = this.galleryElement(eventIndex)
      let imageIndex = 0

      if (gallery) {
        const firstItem = gallery.querySelector('.pages-community__gallery-item')
        if (firstItem) {
          const galleryStyles = window.getComputedStyle(gallery)
          const gap = parseFloat(galleryStyles.columnGap || galleryStyles.gap) || 0
          const itemStep = Math.max(firstItem.getBoundingClientRect().width + gap, 1)
          imageIndex = Math.round(gallery.scrollLeft / itemStep)
        }
      }

      imageIndex = Math.max(0, Math.min(imageIndex, images.length - 1))
      this.openGallery(communityEvent, eventIndex, imageIndex, clickEvent)
    },
    openGallery (communityEvent, eventIndex, imageIndex, clickEvent) {
      const images = this.galleryImages(communityEvent.gallery)
      if (!images.length) return

      this.lightboxReturnFocus = clickEvent && clickEvent.currentTarget
      this.previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      this.lightbox = {
        isOpen: true,
        images,
        index: imageIndex,
        title: communityEvent.title || `Community event ${eventIndex + 1}`
      }

      this.$nextTick(() => {
        if (this.$refs.lightboxClose) this.$refs.lightboxClose.focus()
      })
    },
    closeGallery () {
      if (!this.lightbox.isOpen) return

      document.body.style.overflow = this.previousBodyOverflow
      this.lightbox.isOpen = false
      this.$nextTick(() => {
        if (this.lightboxReturnFocus && document.body.contains(this.lightboxReturnFocus)) {
          this.lightboxReturnFocus.focus()
        }
        this.lightboxReturnFocus = null
      })
    },
    showLightboxImage (direction) {
      const imageCount = this.lightbox.images.length
      if (!imageCount) return
      this.lightbox.index = (this.lightbox.index + direction + imageCount) % imageCount
    },
    handleLightboxKeydown (event) {
      if (!this.lightbox.isOpen) return

      if (event.key === 'Escape') {
        event.preventDefault()
        this.closeGallery()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        this.showLightboxImage(-1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        this.showLightboxImage(1)
      } else if (event.key === 'Tab') {
        this.trapLightboxFocus(event)
      }
    },
    trapLightboxFocus (event) {
      const lightbox = this.$refs.lightbox
      if (!lightbox) return

      const controls = Array.from(lightbox.querySelectorAll('button:not([disabled])'))
      if (!controls.length) return
      const firstControl = controls[0]
      const lastControl = controls[controls.length - 1]

      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault()
        lastControl.focus()
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault()
        firstControl.focus()
      }
    },
    youtubeEmbedUrl (url) {
      if (!url) return ''
      const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&/]+)/)
      return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1` : ''
    },
    isMp4 (url) {
      return /\.mp4(?:$|\?)/i.test(url || '')
    }
  }
}
</script>
