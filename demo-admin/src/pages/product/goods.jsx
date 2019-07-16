import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import GoodsAdd from './goods-add'
import GoodsList from './goods-list'

export default class Goods extends Component {

    render() {
        return (
            <Switch>
                <Route path="/goods/list" component={GoodsList}/>
                <Route path="/goods/add" component={GoodsAdd}/>
                <Redirect to='/goods/list'/>
            </Switch>
        )
    }
}
