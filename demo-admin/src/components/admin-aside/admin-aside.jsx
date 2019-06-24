import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon, Button} from 'antd'

import './admin-aside.less'
import logo from '../../assets/images/logo.svg'
import menuList from '../../config/menuNodes'

const {SubMenu} = Menu
export default class AdminAside extends Component {

    // const getmenuNodes = (menuList)=> {
    //
    // }

    render() {
        return (
            <div className='aside'>
                <Link to='/' className='aside-header'>
                    <img src={logo} alt="Logo"/>
                    <h1>后台管理系统</h1>
                </Link>
                <div>
                    {/*this.getMenuNodes(menuList)*/}
                    <Menu
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="1">
                            <Icon type="global" />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="shop" />
                                    <span>商品</span>
                                </span>}
                        >
                            <Menu.Item key="2">
                                <Icon type="appstore" />
                                <span>分类管理</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="unordered-list" />
                                <span>商品管理</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
