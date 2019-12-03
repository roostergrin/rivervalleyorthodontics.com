import {
  GET_APP,
  GET_PAGES,
  // GET_BLOG,
  // SET_BLOG,
  SET_SCROLLED,
  SET_NAV_STATE,
  VIEW_NAV_DRAWER,
  SET_ANIMATION_STATE
} from './mutation-types.js'

const mutations = {
  [GET_APP] (state, data) {
    state.app = data
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  //   state.blog.current_page = {}
  //   state.blog.current_page.number = 1
  // },
  // [SET_BLOG] (state, data) {
  //   state.sortedBlog = data
  // },
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  [SET_SCROLLED] (state, data) {
    state.scrolled = data
  },
  [SET_NAV_STATE] (state, data) {
    state.navState = data
  },
  [VIEW_NAV_DRAWER] (state, data) {
    state.navDrawer = data
  },
  [SET_ANIMATION_STATE] (state, {id, status}) {
    // console.log(id, status)
    state.animationState[id] = status
  }
}

export default mutations
