import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'

import Tags from '@/pages/Tags'
import Help from '@/pages/Help'
import Search from '@/pages/Search'
import Create from '@/pages/Create'
import Profile from '@/pages/Profile'
import Starred from '@/pages/Starred'
import Question from '@/pages/Question'
import Questions from '@/pages/Questions'
import Leaderboard from '@/pages/Leaderboard'
import Administrator from '@/pages/Administrator'
import Notifications from '@/pages/Notifications'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          component: Questions,
          name: 'Questions'
        },
        {
          path: '/starred',
          component: Starred,
          name: 'Starred'
        },
        {
          path: '/leaderboard',
          component: Leaderboard,
          name: 'Leaderboard'
        },
        {
          path: '/tags',
          component: Tags,
          name: 'Tags'
        },
        {
          path: '/profile',
          component: Profile,
          name: 'Profile'
        },
        {
          path: '/help',
          component: Help,
          name: 'Help'
        },
        {
          path: '/administrator',
          component: Administrator,
          name: 'Administrator'
        },
        {
          path: '/question',
          component: Question,
          name: 'Question'
        },
        {
          path: '/create',
          component: Create,
          name: 'Create'
        },
        {
          path: '/notifications',
          component: Notifications,
          name: 'Notifications'
        },
        {
          path: '/search',
          component: Search,
          name: 'Search'
        }
      ]
    }
  ]
})
