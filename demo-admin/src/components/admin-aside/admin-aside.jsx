import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'

import './admin-aside.less'
import logo from '../../assets/images/logo.svg'
import menuList from '../../config/menuNodes'

const {SubMenu} = Menu
class AdminAside extends Component {
    getMenuNodes = (list) => {
        return list.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon}/>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const path = this.props.location.pathname
                const cItem = item.children.find(cItem => {
                    return path === cItem.key
                })
                if (cItem) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </span>}
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render() {
        const path = this.props.location.pathname
        const openKey = this.openKey

        return (
            <div className='aside'>
                <Link to='/' className='aside-header'>
                    <img src={logo} alt="Logo"/>
                    <h1>后台管理系统</h1>
                </Link>
                <div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultOpenKeys={[openKey]}
                        selectedKeys={[path]}
                    >
                        {this.menuNodes}
                    </Menu>
                </div>
            </div>
        )
    }
}
/*
    该组件为非路由组件需要通过withRouter 高级组件进行包装
*/
const AdminAsideRouter = withRouter(AdminAside)

export default AdminAsideRouter
