import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ShoppingCart" */ '../components/shoppingCart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
