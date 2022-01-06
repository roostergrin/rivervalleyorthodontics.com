import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import accessibilityStatement from 'pages/accessibility-statement/accessibility-statement'

const Home = () => import('@/pages/home/home')
const About = () => import('@/pages/about/about')
const Treatments = () => import('@/pages/treatments/treatments')
const Patients = () => import('@/pages/patients/patients')
const Contact = () => import('@/pages/contact/contact')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: About
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/for-patients',
      name: 'For Patients',
      navigation: true,
      component: Patients
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: Contact
    },
    {
      path: '/accessibility-statement',
      name: 'Accessibility Statement',
      navigation: false,
      component: accessibilityStatement
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeResolve((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
