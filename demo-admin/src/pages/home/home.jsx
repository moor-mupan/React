import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'
import {Card, Icon} from 'antd'

import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

export default class Home extends Component {
    getOptions = () => {
        return {
            title: {
                text: '年销售情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ["小米9", "小米8", "红米note3", "联想", "华为", "戴尔"]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '小米9',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random())
                    ]
                },
                {
                    name: '小米8',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random())
                    ]
                },
                {
                    name: '红米note3',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(1000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(1000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random())
                    ]
                },
                {
                    name: '联想',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random())
                    ]
                },
                {
                    name: '华为',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random())
                    ]
                },
                {
                    name: '戴尔',
                    type: 'line',
                    stack: '总量',
                    data: [
                        parseInt(2400 * Math.random()),
                        parseInt(2000 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(2400 * Math.random()),
                        parseInt(800 * Math.random())
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div style={{padding: 20, height: '100%', overflow: 'auto'}}>
                <Card title='商品总销量' style={{height: 'auto', padding: 0}}>
                    <h1 style={{fontSize: 26}}>2400台</h1>
                    <p>周同比增加 15% <Icon type="arrow-up"/></p>
                    <p>日同比下降 15% <Icon type='arrow-down'/></p>
                    <ReactEcharts style={{marginTop: 50, marginBottom: 20}} option={this.getOptions()}/>
                </Card>
                <Bar/>
                <Line/>
                <Pie/>
            </div>
        )
    }
}
