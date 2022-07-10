const routes = [
  {
    path: '/',
    component: () => import('@/Layout/index.vue')
  },
  {
    path: '/setting',
    component: () => import('@/views/Setting/index.vue')
  }
];

export default routes;