import React, {Component} from 'react'
import {Modal, Card, Input, Button, Icon, Table, message} from 'antd'

import {reqCategorys, reqAddCategory, reqEditCategoryName} from '../../api/index'
import AddForm from './add-form'
import EditForm from './edit-form'
import './product.less'

export default class Category extends Component {

    state = {
        loading: false,
        tableData: [],
        parentId: '0',
        categoryName: '',
        visiblModal: 0  // 0都不显示 1 添加 2 编辑
    }

    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getTableInfos()
    }

    /* 初始化table表头 */
    initColumns = () => {
        this.columns = [
            {
                title: '商品列表',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width: 300,
                render: (rows) => (
                    <div className='handle'>
                        <Button type='primary' onClick={() => this.showEditModal(rows)}>修改</Button>
                        {
                            this.state.parentId === '0' ?
                                (<Button type='primary' onClick={() => this.getChildInfos(rows)}>查看二级菜单</Button>)
                                : null
                        }

                    </div>
                )
            }
        ]
    }

    /* 获取一级或二级分类数据 */
    getTableInfos = () => {
        const {parentId} = this.state
        this.setState({
            loading: true
        })
        reqCategorys(parentId)
            .then(res => {
                this.setState({
                    loading: false
                })
                if (res.status === 0) {
                    this.setState({
                        tableData: res.data
                    })
                }
            })
    }

    /* 获取一级分类列表数据 */
    getParentInfos = () => {
        this.setState({
            parentId: '0'
        }, () => {
            this.getTableInfos()
        })
    }

    /* 获取二级分类列表数据 */
    getChildInfos = (rows) => {
        const parentId = rows._id
        const categoryName = rows.name
        this.setState({
            parentId,
            categoryName
        }, () => {
            this.getTableInfos()
        })
    }

    /* 显示添加分类弹窗 */
    showAddModal = () => {
        this.setState({
            visiblModal: 1
        })
    }

    /* 显示修改分类弹窗 */
    showEditModal = (rows) => {
        this.setState({
            visiblModal: 2
        })
    }

    /* 添加分类确定 */
    handleAddOk = () => {
        this.setState({
            visiblModal: 0
        })
    }

    /* 编辑分类确定 */
    handleEditOk =  async (e) => {
        const {parentId, categoryName} = this.state
        const result = await reqEditCategoryName(parentId, categoryName)
        console.log(result)
        this.setState({
            visiblModal: 0
        })
    }

    /* 关闭弹窗 */
    handleCancel = () => {
        this.setState({
            visiblModal: 0
        })
    }

    render() {
        const {loading, tableData, parentId, categoryName, visiblModal} = this.state
        return (
            <Card title={
                parentId === '0' ? '一级分类列表' :
                    (<div>
                        <span onClick={this.getParentInfos}>一级分类列表</span>
                        <Icon type='arrow-right' style={{marginRight: 12, marginLeft: 12}}></Icon>
                        <span>{categoryName}</span>
                    </div>)
            } extra={
                <Button type='primary' onClick={this.showAddModal}>
                    <Icon type="plus"/>
                    添加
                </Button>
            }>
                <Table
                    loading={loading}
                    rowKey='_id'
                    pagination={{defaultPageSize: 4}}
                    bordered dataSource={tableData}
                    columns={this.columns}
                />
                <Modal
                    title="添加分类"
                    visible={visiblModal === 1}
                    onOk={this.handleAddOk}
                    onCancel={this.handleCancel}
                >
                    <AddForm/>
                </Modal>
                <Modal
                    title="编辑分类"
                    visible={visiblModal === 2}
                    onOk={this.handleEditOk}
                    onCancel={this.handleCancel}
                >
                    <EditForm />
                </Modal>
            </Card>
        )
    }
}
