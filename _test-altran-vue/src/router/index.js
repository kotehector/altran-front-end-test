import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PagePortfolio from '@/pages/portfolio/PagePortfolio'
import PageCities from '@/pages/cities/PageCities'

Vue.use(Router)

export default new Router({
  // mode: history,

  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PagePortfolio
    },
    {
      path: '/cities',
      name: 'cities',
      component: PageCities
    }
  ]
})
