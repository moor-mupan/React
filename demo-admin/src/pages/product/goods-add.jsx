import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import RichTextEditor from './rich-text-editor'
import {Form, Input, Card, Select, Upload, Icon} from 'antd'
import Button from "antd/lib/button";

const Item = Form.Item
const Option = Select.Option

class GoodsAdd extends Component {
    constructor (props) {
        super(props)
        // 创建用来保存ref标识的标签对象的容器
        this.editor = React.createRef()
    }


    render() {
        const detail = ''
        return (
            <Card title={
                <NavLink  to='/goods/list'>
                    <Icon type="arrow-left"/>
                    <span style={{marginLeft: 10}}>商品列表</span>
                </NavLink>
            }>
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
                        <RichTextEditor ref={this.editor} detail={detail}/>
                    </Item>
                    <Item>
                        <Button type='primary'>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

const GoodsAddForm = Form.create()(GoodsAdd)
export default GoodsAddForm
