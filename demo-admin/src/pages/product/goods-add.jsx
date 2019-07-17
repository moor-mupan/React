import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import RichTextEditor from './rich-text-editor'
import {Form, Input, Card, Select, Upload, Button, Icon, message} from 'antd'
import {reqAddProduct, reqCategorys} from '../../api/index'

const Item = Form.Item
const Option = Select.Option

class GoodsAdd extends Component {
    constructor(props) {
        super(props)
        this.editor = React.createRef()
        this.state = {
            categorys: []
        }
    }

    componentWillMount() {
        this.getCategorys()
    }

    getCategorys = async () => {
        const result = await reqCategorys(0)
        console.log(result)
        if (result.status === 0) {
            this.setState({
                categorys: result.data
            })
        }
    }

    add = (event) => {
        event.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {name, desc, price, categoryId} = values
                const pCategoryId = '0'
                const imgs = []
                values.imgs.fileList.map(file => {
                    imgs.push(file.response.url)
                })
                const detail = this.editor.current.getDetail()
                const product = {categoryId, pCategoryId, name, desc, price, imgs, detail}
                const result = await reqAddProduct(product)
                if (result.status === 0) {
                    this.props.form.resetFields()
                    this.editor.current = ''
                    message.success('添加成功')
                }
            }
        })
    }

    render() {
        const detail = ''
        const {categorys} = this.state
        const {getFieldDecorator} = this.props.form

        return (
            <Card title={
                <NavLink to='/goods/list'>
                    <Icon type="arrow-left"/>
                    <span style={{marginLeft: 10}}>商品列表</span>
                </NavLink>
            }>
                <Form onSubmit={this.add}>
                    <Item label="商品名称">
                        {
                            getFieldDecorator('name', {
                                rules: [
                                    {required: true, message: '请输入商品名称'}
                                ]
                            })(
                                <Input/>
                            )
                        }
                    </Item>
                    <Item label="商品描述">
                        {
                            getFieldDecorator('desc', {})(
                                <Input/>
                            )
                        }
                    </Item>
                    <Item label="商品价格">
                        {
                            getFieldDecorator('price', {})(
                                <Input/>
                            )
                        }
                    </Item>
                    <Item label="商品分类">
                        {
                            getFieldDecorator('categoryId', {
                                rules: [
                                    {required: true, message: '请选择商品类型'}
                                ],
                                initialValue: '5d1410f83135f81df4c9cfe4'
                            })(
                                <Select>
                                    {
                                        categorys.map((category) => {
                                            return <Option value={category._id}
                                                           key={category._id}>{category.name}</Option>
                                        })
                                    }
                                </Select>
                            )
                        }
                    </Item>
                    <Item label="商品图片">
                        {
                            getFieldDecorator('imgs', {})(
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                >
                                    <div>
                                        <Icon type="plus"/>
                                    </div>
                                </Upload>
                            )
                        }
                    </Item>
                    <Item label='商品详情'>
                        {
                            getFieldDecorator('detail', {})(
                                <RichTextEditor ref={this.editor} detail={detail}/>
                            )
                        }
                    </Item>
                    <Item>
                        <Button type='primary' htmlType="submit">提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

const GoodsAddForm = Form.create()(GoodsAdd)
export default GoodsAddForm
