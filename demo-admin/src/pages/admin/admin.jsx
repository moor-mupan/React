import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import AdminAside from '../../components/admin-aside/admin-aside'
import AdminHeader from '../../components/admin-header/admin-header'

const {Header, Footer, Sider, Content} = Layout;
export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if (!user || !user._id) {
            return <Redirect to='/login'></Redirect>
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <AdminAside></AdminAside>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: '#f0f2f5'}}>
                        <AdminHeader></AdminHeader>
                    </Header>
                    <Content style={{backgroundColor: '#fff'}}>Content</Content>
                    <Footer style={{textAlign: 'center'}}>
                        @copy M先生
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
