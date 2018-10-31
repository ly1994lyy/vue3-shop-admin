import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'HelloWorld',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'HelloWorld',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'HelloWorld',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'HelloWorld',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
