import React, {Component} from 'react'
import {Table, Card, Button, Form, Input, Modal, Tree} from 'antd'

const Item = Form.Item
const {TreeNode} = Tree
export default class Role extends Component {
    state = {
        visible: false,
        visibleRole: false,
        settingRole: true,
        formItemLayout: {
            labelCol: {span: 4},
            wrapperCol: {span: 20},
        }
    }

    componentWillMount() {
        this.getInfos()
    }

    getInfos = () => {
        this.dataSource = [
            {
                id: '001',
                roleName: '总经理',
                createTime: '2019-02-12 12:12:12',
                privilegedTime: '2019-03-12 12:12:12',
                privilegedPerson: 'admin'
            },
            {
                id: '002',
                roleName: '销售经理',
                createTime: '2019-02-12 12:12:12',
                privilegedTime: '2019-03-12 12:12:12',
                privilegedPerson: 'admin'
            }
        ]
        this.columns = [
            {
                title: '角色名称',
                dataIndex: 'roleName',
                key: 'roleName'
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime'
            },
            {
                title: '授权时间',
                dataIndex: 'privilegedTime',
                key: 'privilegedTime'
            },
            {
                title: '授权人',
                dataIndex: 'privilegedPerson',
                key: 'privilegedPerson'
            }
        ]
    }

    createRole = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    radioRole = (event) => {
        console.log(event)
        this.setState({
            settingRole: false
        })
    }

    settingRoleHandle = () => {
        this.setState({
            visibleRole: true
        })
    }

    handleRoleOk = () =>{
        this.setState({
            visibleRole: false
        })
    }

    handleRoleCancel = () =>{
        this.setState({
            visibleRole: false
        })
    }

    onSelect = () => {}

    onCheck = () => {}

    render() {

        const {settingRole, formItemLayout} = this.state

        const rowSelection = {
            type: 'radio',
            onChange: this.radioRole
        }
        return (
            <Card title={
                <div>
                    <Button type='primary' style={{marginRight: 20}} onClick={this.createRole}>创建角色</Button>
                    <Button type='primary' disabled={settingRole} onClick={this.settingRoleHandle}>设置该角色权限</Button>
                </div>
            }>
                <Table
                    rowSelection={rowSelection}
                    dataSource={this.dataSource}
                    columns={this.columns}
                    bordered
                    rowKey='id'
                />
                <Modal
                    title="创建角色"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form {...formItemLayout}>
                        <Item label='角色*'>
                            <Input/>
                        </Item>
                    </Form>
                </Modal>
                <Modal
                    title="设置角色权限"
                    visible={this.state.visibleRole}
                    onOk={this.handleRoleOk}
                    onCancel={this.handleRoleCancel}
                >
                    <Form {...formItemLayout}>
                        <Item label='角色名称'>
                            <Input value='销售经理' disabled/>
                        </Item>
                    </Form>
                    <Tree
                        checkable
                        defaultExpandAll
                        defaultCheckedKeys={['0-0-0']}
                        onSelect={this.onSelect}
                        onCheck={this.onCheck}
                    >
                        <TreeNode title="平台权限" key="0-0">
                            <TreeNode title="首页" key="0-0-0" />
                            <TreeNode title="商品" key="0-0-1">
                                <TreeNode title='品类管理' key="0-0-1-0" />
                                <TreeNode title='商品管理' key="0-0-1-1" />
                            </TreeNode>
                            <TreeNode title="用户管理" key="0-0-2" />
                            <TreeNode title="角色管理" key="0-0-3" />
                            <TreeNode title="图形图表" key="0-0-4">
                                <TreeNode title='柱状图' key="0-0-4-0" />
                                <TreeNode title='折线图' key="0-0-4-1" />
                                <TreeNode title='饼图' key="0-0-4-2" />
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </Modal>
            </Card>
        )
    }
}
