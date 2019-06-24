import axios from 'axios'
import { message } from 'antd'

/* 封装promise对象类型ajax */
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise
        if (type === 'GET') {
            promise = axios.get(url, {params: data})
        } else {
            promise = axios.post(url, data)
          }
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            // 接口调用失败统一处理
            message.error(error.message)
        })
    })
}
