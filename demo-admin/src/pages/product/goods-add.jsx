import React, {Component} from 'react'

import {Form, Input, Card, Select, Upload, Icon} from 'antd'

const Item = Form.Item
const Option = Select.Option

class GoodsAdd extends Component {

    render() {
        return (
            <Card>
                <Form>
                    <Item label="*商品名称">
                        <Input/>
                    </Item>
                    <Item label="商品描述">
                        <Input/>
                    </Item>
                    <Item label="商品价格">
                        <Input/>
                    </Item>
                    <Item label="商品分类">
                        <Select defaultValue='0'>
                            <Option value='0'>电脑</Option>
                            <Option value='1'>手机</Option>
                        </Select>
                    </Item>
                    <Item label="商品图片">
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                        >
                            <div>
                                <Icon type="plus"/>
                            </div>
                        </Upload>
                    </Item>
                    <Item label='商品详情'>

                    </Item>
                </Form>
            </Card>
        )
    }
}

const GoodsAddForm = Form.create()(GoodsAdd)
export default GoodsAddForm