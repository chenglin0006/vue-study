import HelloWorld from '@/page/hello/HelloWorld'
import Test from '@/page/test/Test'
import BrandList from '@/page/brand/BrandList'

export default [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsmanager/test',
      name: 'test',
      component: () => import('@/page/test/Test')
    },
    {
        path: '/goodsmanager/vendorManagement/basic/list',
        name: '供应商管理',
        component: HelloWorld
    },
    {
        path: '/goodsmanager/vendorManagement/basic/edit',
        name: '供应商管理编辑',
        component: Test
    },
    {
        path: '/goodsmanager/vendorManagement/logo/list',
        name: '品牌管理',
        component: BrandList
    },
    {
        path: '/stockmanager/test',
        name: '库存管理',
        component: HelloWorld
    }
]