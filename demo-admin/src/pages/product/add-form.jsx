import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Form, Input, Icon, Select} from 'antd'

const Item = Form.Item
const Option = Select.Option

class AddForm extends Component {
    static propTypes = {
        tableData: PropTypes.array.isRequired,
        setForm: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.setForm(this.props.form)
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {tableData} = this.props
        console.log(tableData)
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Item>
                    <Select defaultValue='0'>
                        <Option value='0'>一级分类列表</Option>
                        <Option value='1'>电脑</Option>
                        <Option value='2'>图书</Option>
                    </Select>
                </Item>
                <Item>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '请输入商品分类名称'}],
                    })(
                        <Input
                            prefix={<Icon type="reddit"/>}
                            placeholder="商品分类名称"
                        />,
                    )}
                </Item>
            </Form>
        )
    }
}

const AddFormPackage = Form.create()(AddForm)
export default AddFormPackage