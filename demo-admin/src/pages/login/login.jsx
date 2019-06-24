import React, {Component} from 'react'
import {Form, Icon, Input, Button, message} from 'antd';
import { Redirect } from 'react-router-dom'
// import md5 from 'md5'

import './login.less'
import logo from '../../assets/images/logo.svg'
import {reqLogin} from '../../api/index'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


class Login extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {username, password} = values
                const result = await reqLogin(username, password)
                /* async await使用 */
                if (result.status === 0) {
                    const user = result.data
                    //存储登录信息
                    memoryUtils.user = user
                    storageUtils.saveUser(user)

                    this.props.history.push('/')
                    message.success('登录成功')
                } else {
                    message.error(result.msg)
                }
            }
            /* try {
                    const res = await reqLogin(username, password)
                    const result = res.data
                    /!* async await使用 *!/
                    if (result.status === 0) {
                        this.props.history.push('/')
                        message.success('登录成功')
                    } else {
                        message.error(res.data.msg)
                    }
                }catch (err) {
                    console.log(err)
                }*/
        });
    }

    render() {
        const user = memoryUtils.user
        if (user && user._id) {
            return <Redirect to='/'></Redirect>
        }
        const {getFieldDecorator} = this.props.form
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo"/>
                    <h1>React 后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名'}],
                                initialValue: 'admin'
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="用户名"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],
                                initialValue: 'admin'
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin

/* async await 作用
*
* 1、简化promise使用，不在使用then()来指定成功失败函数
* 2、以同步编程方式实现异步流程
* 3、promise的表达式的左侧写await，不想要返回的promise对象，而是想要promise对象执行返回的结果
* 4、async写在await所在函数(最近的)定义的左侧
*  */
