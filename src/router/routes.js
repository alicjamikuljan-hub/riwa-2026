
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/IndexPage.vue')
      },
      {
        path: 'second',
        component: () => import('../pages/SecondPage.vue')
      },
      {
        path: 'test',
        component: () => import('../pages/TestPage.vue')
      },
      {
        path: 'users',
        component: () => import('../pages/UsersPage.vue')
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export default routes
