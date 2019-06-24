import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon, Button} from 'antd'

import './admin-aside.less'
import logo from '../../assets/images/logo.svg'

const {SubMenu} = Menu
export default class AdminAside extends Component {

    render() {
        return (
            <div className='aside'>
                <Link to='/' className='aside-header'>
                    <img src={logo} alt="Logo"/>
                    <h1>后台管理系统</h1>
                </Link>
                <div>
                    {/*<Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>*/}
                    {/*    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>*/}
                    {/*</Button>*/}
                    <Menu
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail"/>
                                    <span>商品</span>
                                </span>}
                        >
                            <Menu.Item key="2">商品列表</Menu.Item>
                            <Menu.Item key="3">特价商品</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
