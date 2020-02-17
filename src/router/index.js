import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import paths from './paths'

Vue.use(VueRouter)

function route (path, view, name) {
  return {
    name: name || view,
    path,
    component: (resolve) => import(
      `@/views/${view}.vue`
    ).then(resolve)
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: paths.map(path => route(path.path,path.view, path.name)).concat([
    { path: '*', redirect: '/' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to,from,next) => {
  if(to.path !== '/login') {
    if(store.state.userInfo.isLogin){
      next()
      // console.log(from)
    }else{
      next('/login')
    }
  }else if(to.path === '/login' && store.state.userInfo.isLogin) {
      next(from.path)
  }else{
    next()
  }
})
export default router
