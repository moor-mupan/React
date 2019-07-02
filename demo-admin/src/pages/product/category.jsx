import React, {Component} from 'react'
import {Modal, Card, Input, Button, Icon, Table, message} from 'antd'

import {reqCategorys} from '../../api/index'
import {reqAddCategory} from '../../api/index'
import {reqEditCategoryName} from '../../api/index'
import './product.less'

export default class Category extends Component {

    state = {
        modalTitle: '添加商品品类',
        editFlag: false,
        inputParentId: '',
        inputName: '',
        tableData: [],
        columns: [
            {
                title: '商品列表',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width: 300,
                render: (_, item) => (
                    <div className='handle'>
                        <Button type='primary' onClick={(e)=> this.showModal(1, item)}>修改</Button>
                        <Button type='primary'>查看二级菜单</Button>
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
            })
    }

    showModal = (edit, item) => {
        if (edit === 1) {
            this.setState({
                visible: true,
                modalTitle: '编辑品类名称',
                editFlag: true,
                inputName: item.name,
                inputParentId: item.parentId
            })
        }else {
            this.setState({
                visible: true,
                modalTitle: '添加商品品类',
                editFlag: false,
                inputName: '',
                inputParentId: ''
            })
        }
    }

    hideModal = () => {
        this.setState({visible: false})
    }

    addClassify = async () => {
        const {inputParentId, inputName} = this.state

        if (!inputParentId || !inputName) {
            message.error('信息填写不完整')
        } else {
            const result = await reqAddCategory(inputName, inputParentId)
            if (result.status === 0) {
                message.success('添加成功')
            } else {
                message.error('添加失败')
            }
            this.setState({visible: false})
            this.getTableData()
        }
    }

    /* 编辑品类名称 */
    editCategoryName = async () => {
        const {inputName, inputParentId} = this.state

        const result = await reqEditCategoryName(inputParentId, inputName)
        if (result.status === 0) {
            message.success('编辑成功')
        } else {
            message.error(result.msg)
        }
        this.hideModal()
    }

    /* inputName */
    inputNameChange = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }

    /* inputParentId */
    inputParentIdChange = (e) => {
        this.setState({
            inputParentId: e.target.value
        })
    }

    render() {
        const {columns, tableData, modalTitle,editFlag,inputParentId,inputName} = this.state
        return (
            <Card title="一级分类列表" extra={
                <Button type='primary' onClick={this.showModal}>
                    <Icon type="plus"/>
                    添加
                </Button>
            }>
                <Table pagination={{defaultPageSize: 4}} bordered dataSource={tableData} columns={columns}/>
                <Modal
                    title={modalTitle}
                    visible={this.state.visible}
                    onOk={!editFlag ? this.addClassify : this.editCategoryName}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <div className='item'>
                        商品名称:
                        <Input value={inputName} onChange={this.inputNameChange} />
                    </div>
                    <div className='item'>
                        ParentId:
                        <Input value={inputParentId} onChange={this.inputParentIdChange} disabled={editFlag}/>
                    </div>
                </Modal>
            </Card>
        )
    }
}
