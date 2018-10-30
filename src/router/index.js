import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

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
      component: MSite
    },
    {
      path: '/order',
      name: 'HelloWorld',
      component: Order
    },
    {
      path: '/profile',
      name: 'HelloWorld',
      component: Profile
    },
    {
      path: '/search',
      name: 'HelloWorld',
      component: Search
    }
  ]
})
