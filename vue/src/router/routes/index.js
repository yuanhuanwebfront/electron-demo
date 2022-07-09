const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/setting',
    component: () => import('@/views/Setting/index.vue')
  }
];

export default routes;