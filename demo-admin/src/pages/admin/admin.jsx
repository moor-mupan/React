import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import AdminAside from '../../components/admin-aside/admin-aside'
import AdminHeader from '../../components/admin-header/admin-header'
import Home from '../home/home'
import Category from '../product/category'
import Goods from '../product/goods'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {Footer, Sider, Content} = Layout;
export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        if (!user || !user._id) {
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <AdminAside />
                </Sider>
                <Layout>
                    <AdminHeader />
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/category' component={Category} />
                            <Route path='/goods' component={Goods} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path='/bar' component={Bar} />
                            <Route path='/line' component={Line} />
                            <Route path='/pie' component={Pie} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        @copy M先生
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
