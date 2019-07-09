import React, {Component} from 'react'
import {Form, Input, Icon} from 'antd'

const Item = Form.Item

class EditForm extends Component {

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Item>
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: '请输入商品分类名称'}],
                    })(
                        <Input
                            prefix={<Icon type="reddit" />}
                            placeholder="商品分类名称"
                        />,
                    )}
                </Item>
            </Form>
        )
    }
}
const EditFormPackage = Form.create()(EditForm)
export default EditFormPackage