import React, {Component} from 'react'
import {Table, Button, Icon, Card, Modal, Form, Input} from 'antd'

const Item = Form.Item
export default class User extends Component {
    state = {
        visible: false
    }

    componentWillMount() {
        this.initInfos()
    }

    initInfos = () => {
        this.dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                email: '135121321@qq.com',
                tel: '18341845686',
                createTime: '2019-09-12 12:21:12',
                role: '经理'
            },
            {
                key: '2',
                name: '胡彦斌',
                email: '135121321@qq.com',
                tel: '18341845686',
                createTime: '2019-09-12 12:21:12',
                role: '经理'
            }
        ];
        this.columns = [
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: '电话',
                dataIndex: 'tel',
                key: 'tel',
            },
            {
                title: '注册时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '所属角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '操作',
                width: 300,
                dataIndex: 'action',
                render: () => {
                    return (
                        <div>
                            <Button type='primary' style={{marginRight: 20}}>修改</Button>
                            <Button type='primary'>删除</Button>
                        </div>
                    )
                }
            },
        ];
    }

    showModal = () => {
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

    render() {
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        }

        return (
            <Card title={
                <Button type='primary' onClick={this.showModal}>
                    <Icon type='plus'/>
                    创建用户
                </Button>
            }>
                <Table
                    dataSource={this.dataSource}
                    columns={this.columns}
                    bordered
                    rowKey='key'
            />
                <Modal
                    title="添加用户"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form {...formItemLayout}>
                        <Item label='用户名'>
                            <Input placeholder='请输入用户名'  />
                        </Item>
                        <Item label='密码'>
                            <Input placeholder='请输入密码' />
                        </Item>
                        <Item label='角色'>
                            <Input placeholder='请输入角色'/>
                        </Item>
                        <Item label='邮箱'>
                            <Input placeholder='请输入邮箱'/>
                        </Item>
                        <Item label='电话'>
                            <Input placeholder='请输入电话'/>
                        </Item>
                    </Form>
                </Modal>
            </Card>
        )
    }
}
