const routes = [
  {
    path: '/',
    component: () => import('@/Layout/index.vue'),
    redirect: 'home',
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-gedan'
        }
      },
      {
        name: 'setting',
        path: '/setting',
        component: () => import('@/views/Setting/index.vue'),
        meta: {
          title: '设置',
          icon: 'icon-setting'
        }
      }
    ]
  },
];

export default routes;