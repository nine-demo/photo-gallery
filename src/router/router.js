import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'

import { routers } from './routerConfig'

Vue.use(Router)

// 路由配置
const RouterConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
}

iView.LoadingBar.config({
  color: '#33aaff',
  failedColor: '#1188ff',
  height: 2
})

const router = new Router(RouterConfig)

export default router

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
