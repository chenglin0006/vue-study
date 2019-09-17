// import HelloWorld from '@/page/hello/HelloWorld'
// import Test from '@/page/test/Test'
// import BrandList from '@/page/brand/BrandList'
// import NewBrand from '@/page/brand/NewBrand'
// import SlotExample from '@/page/slot/SlotExample'
// import Example from '@/page/example/Example'

const HelloWorld = () => import('@/page/hello/HelloWorld')
const Test = () => import('@/page/test/Test')
const BrandList = () => import('@/page/brand/BrandList')
const NewBrand = () => import('@/page/brand/NewBrand')
const SlotExample = () => import('@/page/slot/SlotExample')
const Example = () => import('@/page/example/Example')

export default [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsmanager/test',
      name: 'test',
      component: Example
    },
    {
        path: '/goodsmanager/slot',
        name: 'slot',
        component: SlotExample
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
        path: '/goodsmanager/vendorManagement/logo/edit',
        name: '品牌管理新建',
        component: NewBrand
    },
    {
        path: '/stockmanager/test',
        name: '库存管理',
        component: HelloWorld
    }
]