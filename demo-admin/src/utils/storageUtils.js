/*
* local数据存储管理的工具模块
* */
import store from 'store'

const USER_KEY = 'user_key'
export default {

    //保存user
    saveUser(user) {
        // 原生部分浏览器不兼容 使用store库
        //return localStorage.setItem(USER_KEY, JSON.stringify(user))
        return store.set(USER_KEY, user)
    },
    //读取user
    getUser() {
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY)
    },
    //移除user
    removeUser() {
        //return localStorage.removeItem(USER_KEY)
        return store.remove(USER_KEY)
    }
}
