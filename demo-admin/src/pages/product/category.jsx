import React, {Component} from 'react'
import {Modal, Card, Input, Button, Icon, Table, message} from 'antd'

import {reqCategorys} from '../../api/index'
import {reqAddCategory} from '../../api/index'
import './product.less'

export default class Category extends Component {

    state = {
        tableData: [],
        columns: [
            {
                title: '商品列表',
                dataIndex: 'name'
            },
            {
                title: '操作',
                width: 200,
                render: () => (
                    <div className='handle'>
                        <a href="javascript:;">修改</a>
                        <a href="javascript:;">查看二级菜单</a>
                    </div>
                )
            }
        ],
        visible: false,
    }

    componentWillMount() {
        this.getTableData()
    }

    getTableData = () => {
        reqCategorys('0')
            .then(res => {
                let tableData = res.data
                tableData.map(item => {
                    item.key = item._id
                    return item
                })
                this.setState({tableData})
                this.getTableData()
            })
    }

    showModal = () => {
        this.setState({visible: true})
    }

    hideModal = () => {
        this.setState({visible: false})
    }

    addClassify = async () => {
        const {parentId, name} = this.state
        if (!parentId || !name) {
            message.error('信息填写不完整')
        } else {
            const result = await reqAddCategory(parentId, name)
            if (result.status === 0) {
                message.success('添加成功')
            }else {
                message.error('添加失败')
            }
            this.setState({visible: false})
        }
    }

    render() {
        const {columns, tableData, parentId, name} = this.state
        return (
            <Card title="一级菜单列表" extra={
                <Button type='primary' onClick={this.showModal}>
                    <Icon type="plus"/>
                    添加
                </Button>
            }>
                <Table pagination={{defaultPageSize: 4}} bordered dataSource={tableData} columns={columns}/>
                <Modal
                    title="添加商品分类"
                    visible={this.state.visible}
                    onOk={this.addClassify}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <div className='item'>
                        商品名称:
                        <Input />
                    </div>
                    <div className='item'>
                        ParentId:
                        <Input />
                    </div>
                </Modal>
            </Card>
        )
    }
}