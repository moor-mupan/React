import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Form, Input, Icon} from 'antd'

const Item = Form.Item

class EditForm extends Component {
    static propTypes = {
        categoryName: PropTypes.string.isRequired,
        setForm: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.setForm(this.props.form)
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {categoryName} = this.props
        return (
            <Form className="login-form">
                <Item>
                    {getFieldDecorator('name', {
                        initialValue: categoryName,
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

const EditFormPackage = Form.create()(EditForm)
export default EditFormPackage
