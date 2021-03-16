
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'test', component: () => import('pages/Games/Index.vue') },
      { path: '/game/new', component: () => import('pages/Games/Create/Index.vue') },
      { path: '/jeopardy', component: () => import('pages/Games/Play/Host/jeopardy.vue') },
      { path: '/username', component: () => import('pages/User/Username.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
