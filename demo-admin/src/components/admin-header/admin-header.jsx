import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'

import './admin-header.less'
import {reqWeather} from '../../api'
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
class AdminHeader extends Component {
    state = {
        weather: '',
        picUrl: '',
        Date: ''
    }

    componentWillMount() {
        this.getWeather('厦门')
    }


    // async await 以同步编程方式解决异步问题
    getWeather = async (city) => {
        const result = await reqWeather(city)
        this.setState({
            weather: result.weather,
            picUrl: new Date().getHours() < 18 ? result.dayPictureUrl : result.nightPictureUrl,
            Date: result.date
        })
    }
    // 以清除local中的user_key方式退出登录
    logout = () => {
        const _this = this
        Modal.confirm({
            title: '温馨提示',
            content: '确定要退出登录吗？',
            okText: '确定',
            cancelText:'取消',
            centered: true,
            onOk () {
                storageUtils.removeUser()
                memoryUtils.user = {}
                _this.props.history.replace('/login')
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎，{memoryUtils.user.username}</span>
                    <span className='header-top-logout' onClick={this.logout}>退出</span>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>首页</div>
                    <div className='header-bottom-right'>
                        <span>{this.state.Date}</span>
                        <img src={this.state.picUrl} alt="weather"/>
                        <span>{this.state.weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}
const AdminHeaderRouter = withRouter(AdminHeader)
export default AdminHeaderRouter
