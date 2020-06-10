import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/about' },
        { path: '/more', component: '@/pages/more/index' },
        { path: '/product', component: '@/pages/product/index' },
        {
          path: '/product/:id',
          component: '@/pages/product/index',
          routes: [{ path: '/product/:id', component: '@/pages/product/[id]' }],
        },
        { component: '@/pages/404/index' },
      ],
    },
  ],
});
