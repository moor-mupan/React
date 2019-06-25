const menuNodes = [
    {
        title: '首页',
        key: '/home',
        icon: 'windows'
    },
    {
        title: '商品',
        key: '/product',
        icon: 'shop',
        children: [
            {
                title: '品类管理',
                key: '/category',
                icon: 'appstore'
            },
            {
                title: '商品管理',
                key: '/goods',
                icon: 'shopping'
            }
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: 'user'
    },
    {
        title: '角色管理',
        key: '/role',
        icon: 'team'
    },
    {
        title: '图形图表',
        key: '/charts',
        icon: 'area-chart',
        children: [
            {
                title: '柱状图',
                key: '/bar',
                icon: 'bar-chart'
            },
            {
                title: '折线图',
                key: '/line',
                icon: 'line-chart'
            },
            {
                title: '饼图',
                key: '/pie',
                icon: 'pie-chart'
            }
        ]
    }
]

export default menuNodes
