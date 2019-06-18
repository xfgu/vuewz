import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Err from './views/Err'
// import './assets/index.styl'
import Header from './views/Header'
Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
      meta:{
        isLogin:true
      },
      children:[
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        // {
        //   path: 'about',
        //   name: 'about',
        //   component: () => import('./views/About.vue'),
        //   props: route => ({
        //     item: route.query.name
        //   })
        // },
      ]
    },

    {
      path: '*',
      name: '404',
      component: Err
    }
  ]
})
router.beforeEach((to,from,next)=>{
  next()
})
export default router
