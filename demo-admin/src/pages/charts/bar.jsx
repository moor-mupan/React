import React, {Component} from 'react'
import {Card, Button} from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class Bar extends Component {
    state = {
        Sales: [parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()),],
        Store: [parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()),]
    }
    getOption = () => {
        const {Sales, Store} = this.state
        return {
            title: {
                text: '柱状图'
            },
            tooltip: {},
            legend: {
                data: ['销量', '库存']
            },
            xAxis: {
                data: ["小米9", "小米8", "红米note3", "联想", "华为", "戴尔"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: Sales
            }, {
                name: '库存',
                type: 'bar',
                data: Store
            }]
        }
    }

    refresh = () => {
        this.setState({
            Sales: [parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()),],
            Store: [parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()), parseInt(100 * Math.random()),]
        })
    }

    render() {
        return (
            <Card title={
                <Button type='primary' onClick={this.refresh}>更新</Button>
            }>
                <ReactEcharts option={this.getOption()}/>
            </Card>
        )
    }
}
