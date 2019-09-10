export default [
	{
		name: '商品中心',
		url: 'goodsmanager',
		icon: 'appstore',
        defaultUrl: '/goodsmanager/test',
		children: [
            {
                name:'test',
                url:'/goodsmanager/test',
                icon:'appstore',
            },
            {
                name:'slot',
                url:'/goodsmanager/slot',
                icon:'appstore'
            },
            {
                name:'品牌管理',
                url:'vendorManagement',
                icon:'appstore',
                defaultUrl:'/goodsmanager/vendorManagement/basic/list',
                children:[
                    {
                        name:'供应商管理',
                        icon:'appstore',
                        url:'/goodsmanager/vendorManagement/basic/list'
                    },
                    {
                        name:'品牌管理',
                        icon:'appstore',
                        url:'/goodsmanager/vendorManagement/logo/list'
                    }
                ]
            },
        ]
    },
    {
		name: '库存中心',
		url: 'stockmanager',
		icon: 'appstore',
        defaultUrl: '/stockmanager/test',
		children: [
            {
                name:'stock',
                url:'/stockmanager/test',
                icon:'appstore',
                defaultUrl:'/stockmanager/test',
            }
        ]
    }
]