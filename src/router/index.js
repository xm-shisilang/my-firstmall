import { createRouter, createWebHistory } from 'vue-router'
import Home1 from '../views/Home.vue'
import About from '../views/About.vue'
import Testadd from '../views/Testadd.vue'
const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  // {
  //   path: '/home1',
  //   name: 'Home1',
  //   component: Home1
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  // {
  //   path: '/testadd',
  //   name: 'Testadd',
  //   component: Testadd
  // },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
