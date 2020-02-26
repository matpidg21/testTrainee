import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home.vue"
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import GetUser from '../components/GetUser.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/:cid',
      name: 'GetUser',
      component: GetUser
    }
  ]
})
