import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/PageHome.vue'),
      redirect: 'ciudades'
    },

    {
      path: '/login',
      name: '',
      redirect: { name: 'loginEnter' },
      component: () => import('@/layouts/LayoutLogin.vue'),
      children: [
        {
          path: '',
          name: 'loginEnter',
          component: () => import('@/pages/login/PageLogin.vue')
        }
      ],
      beforeEnter: (to, from, next) => {
        console.log(store._modules.root._children.user)
        let token = store._modules.root._children.user.state.activeUser.isActive
        if (token) {
          next('/ciudades')
        } else {
          next()
        }
      }
    },

    {
      path: '/ciudades',
      name: 'cities',
      redirect: { name: 'citiesList' },
      component: () => import('@/layouts/LayoutCities.vue'),
      meta: {
        private: true
      },
      children: [
        {
          path: '',
          name: 'citiesList',
          component: () => import('@/pages/cities/PageCitiesList.vue')
        },
        {
          path: ':name',
          name: 'cityDetail',
          component: () => import('@/pages/cities/PageCityDetail.vue'),
          props: true
        }
      ],
      beforeEnter: (to, from, next) => {
        console.log(store._modules.root._children.user)
        // let token = store.getters.activeUser.isActive
        let token = store._modules.root._children.user.state.activeUser.isActive
        if (token) {
          next()
        } else {
          next('/login')
        }
      }
    },

    {
      path: '*',
      name: 'pageNotFound',
      component: () => import('@/pages/PageNotFound.vue')
    }
  ]
})

export default router
