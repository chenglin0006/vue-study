import HelloWorld from '@/page/HelloWorld'
import Test from '@/page/Test'

export default [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsmanager/test',
      name: 'test',
      component: () => import('@/page/Test')
    },
    {
        path: '/goodsmanager/vendorManagement/basic/list',
        name: '供应商管理',
        component: HelloWorld
    },
    {
        path: '/goodsmanager/vendorManagement/logo/list',
        name: '品牌管理',
        component: () => import('@/page/Test')
    },
    {
        path: '/stockmanager/test',
        name: '库存管理',
        component: HelloWorld
    }
]