import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'

// 登录接口
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')
// 获取分类列表
export const reqCategorys = (parentId) => ajax('/manage/category/list', {parentId})
// 添加商品分类
export const reqAddCategory = (categoryName, parentId) => ajax('/manage/category/add', {categoryName, parentId}, 'POST')
// 编辑品类名称
export const reqEditCategoryName = (categoryId, categoryName) => ajax('/manage/category/update', {categoryId, categoryName}, 'POST')
// 获取商品列表
export const reqGetGoodList = (pageNum, pageSize) => ajax('/manage/product/list', {pageNum, pageSize})
// 修改/添加商品
export const reqAddOrUpdateProduct = (product) => ajax('/manage/product/' + ( product._id?'update':'add'), product, 'POST')


//获取天气接口 jsonp请求
export const reqWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === "success") {
                const result = data.results[0].weather_data[0]
                resolve(result)
            } else {
                message.error('天气信息获取失败')
            }
        })
    })
}
