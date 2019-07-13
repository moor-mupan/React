import React, {Component} from 'react'
import {Button, Table} from 'antd'
import {reqGetGoodList} from '../../api/index'

export default class GoodsList extends Component {
    componentWillMount() {
        this.initColumns()
        this.getGoodsInfos()
    }

    getGoodsInfos = async () => {
        this.dataSource = [
            {
                id: '1',
                name: '小米9',
                price: 2132,
                desc: '西湖区湖底公园1号',
                status: 0
            },
            {
                id: '2',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '3',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '4',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '5',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '6',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '7',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '8',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '9',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '10',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
            {
                id: '11',
                name: '红米note3',
                price: 4242,
                desc: '西湖区湖底公园1号',
                status: 1
            },
        ]

        const result = await reqGetGoodList(1, 10)
        console.log(result)
    }

    initColumns() {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
                key: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (status) => (
                    <div>{status === 1 ? '在售' : '下架'}</div>
                )
            },
            {
                title: '操作',
                key: 'active',
                width: 80,
                render: () => (
                    <div className='table-action'>
                        <Button type='primary'>详情</Button>
                        <Button type='primary'>下架</Button>
                        <Button type='primary'>修改</Button>
                    </div>
                )
            }
        ]
    }

    render() {
        return (
            <Table
                className='goods-table'
                rowKey='id'
                bordered
                dataSource={this.dataSource}
                columns={this.columns}
                pagination={{pageSizeOptions: ['10']}}
            />
        )
    }
}