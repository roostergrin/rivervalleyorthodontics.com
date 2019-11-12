import Vue from 'vue'
import BaseIcon from 'components/base/base-icon/base-icon'
import BaseLazyImg from 'components/base/base-lazy-img/base-lazy-img'
import BaseLazyBg from 'components/base/base-lazy-bg/base-lazy-bg'
import BaseLoader from 'components/base/base-loader/base-loader'

const components = () => {
  Vue.component('BaseIcon', BaseIcon)
  Vue.component('BaseLazyImg', BaseLazyImg)
  Vue.component('BaseLazyBg', BaseLazyBg)
  Vue.component('BaseLoader', BaseLoader)
}

export default components()
