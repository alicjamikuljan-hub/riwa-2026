
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
        path: 'popis_knjiga',
        component: () => import('../pages/PopisKnjigaPage.vue')
      },
      {
       path:'pretrazivanje',
       component: () => import('../pages/TrazimKnjiguPage.vue') 
      },
      {
        path:'o_nama',
        component: () => import('../pages/ONamaPage.vue')
      },
      {
        path: 'lokacija',
        component: ()=> import('../pages/LokacijaPage.vue')
      },
      {
        path:'login',
        component: ()=> import('../pages/LoginPage.vue')
      },
      {
        path:'registracija',
        component: ()=> import('../pages/RegistracijaPage.vue')
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
        path:'test2',
        component: ()=> import('../pages/TestPage2.vue')
      },
      {
        path: 'test3',
        component: ()=> import('../pages/TestPage3.vue')
      }
      ,
      {
        path: 'test4',
        component: ()=> import('../pages/TestPage4.vue')
      },
      {
        path: 'users',
        component: () => import('../pages/UsersPage.vue')
      },
      {
        path: 'random',
        component: () => import ('../pages/RandomPage.vue')
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export default routes
