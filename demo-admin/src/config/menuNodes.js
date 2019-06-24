export default
const menuNodes = [
    {
        title: '首页',
        key: '/home',
        icon: ''
    },
    {
        title: '商品',
        key: '/product',
        icon: '',
        children: [
            {
                title: '品类管理',
                key: '/category',
                icon: ''
            },
            {
                title: '商品管理',
                key: '/goods',
                icon: ''
            }
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: ''
    },
    {
        title: '角色管理',
        key: '/role',
        icon: ''
    },
    {
        title: '图形图表',
        key: '/charts',
        icon: '',
        children: [
            ,
            {
                title: '柱状图',
                key: '/bar',
                icon: ''
            },
            {
                title: '折线图',
                key: '/line',
                icon: ''
            },
            {
                title: '饼图',
                key: '/pie',
                icon: ''
            }
        ]
    }
]