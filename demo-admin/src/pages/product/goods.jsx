import React, {Component} from 'react'
import { Switch, Route} from 'react-router-dom'

import {Card, Form, Input, Button, Select, Icon} from 'antd'
import GoodsAdd from './goods-add'
import GoodsList from './goods-list'

const Option = Select.Option

export default class Goods extends Component {
    render() {
        return (
            <Card className='goods' title={
                <Form className='goods-search'>
                    <Select defaultValue='0'>
                        <Option value='0'>按名称搜索</Option>
                        <Option value='1'>按价格区间搜索</Option>
                    </Select>
                    <Input placeholder='关键字'/>
                    <Button type='primary'><Icon type='search'/>搜索</Button>
                </Form>
            } extra={<Button type='primary'><Icon type='plus'/>添加</Button>}>

            </Card>
        )
    }
}