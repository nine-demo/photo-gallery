import defaultLayout from '../components/DefaultPageLayout'

// 不作为Main组件的子页面展示的页面单独写，如下
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('../views/error-page/404.vue')
}

export const page401 = {
  path: '/401',
  name: 'error-401',
  meta: {
    title: '401'
  },
  component: () => import('../views/error-page/401.vue')
}

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误'
  },
  component: () => import('../views/error-page/500.vue')
}

export const loginRouter = {
  path: '/',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: () => import('../views/Login.vue')
}

export const mainRouter = {
  path: '/home',
  name: 'home',
  component: defaultLayout,
  children: [
    { path: 'home', title: '首页', name: 'home_index', component: () => import('../views/Home.vue') }
  ]
}

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  mainRouter,
  page500,
  page401,
  page404
]
