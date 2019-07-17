import React, {Component} from 'react'
import {Button, Card} from "antd";
import ReactEcharts from "echarts-for-react";

export default class Pie extends Component {
    state = {
        pie: [
            {value: parseInt(100 * Math.random()), name: '小米9'},
            {value: parseInt(100 * Math.random()), name: '小米8'},
            {value: parseInt(100 * Math.random()), name: '红米note3'},
            {value: parseInt(100 * Math.random()), name: '联想'},
            {value: parseInt(100 * Math.random()), name: '华为'},
            {value: parseInt(100 * Math.random()), name: '戴尔'}
        ]
    }

    getOption = () => {
        const {pie} = this.state
        return {
            title: {
                text: '销售饼图',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ["小米9", "小米8", "红米note3", "联想", "华为", "戴尔"]
            },
            series: [
                {
                    name: '商品',
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '60%'],
                    data: pie,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    refresh = () => {
        this.setState({
            pie: [
                {value: parseInt(100 * Math.random()), name: '小米9'},
                {value: parseInt(100 * Math.random()), name: '小米8'},
                {value: parseInt(100 * Math.random()), name: '红米note3'},
                {value: parseInt(100 * Math.random()), name: '联想'},
                {value: parseInt(100 * Math.random()), name: '华为'},
                {value: parseInt(100 * Math.random()), name: '戴尔'}
            ]
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
