import request from '@/utils/request'

// ----------------管理员日志----------------
/**
 * 管理员日志列表
 * @param {array} params 请求参数
 */
export function list(params) {
  return request({
    url: '/admin/AdminUserLog/list',
    method: 'get',
    params: params
  })
}
/**
 * 管理员日志信息
 * @param {array} params 请求参数
 */
export function info(params) {
  return request({
    url: '/admin/AdminUserLog/info',
    method: 'get',
    params: params
  })
}
/**
 * 管理员日志删除
 * @param {array} data 请求数据
 */
export function dele(data) {
  return request({
    url: '/admin/AdminUserLog/dele',
    method: 'post',
    data
  })
}
/**
 * 管理员日志清除
 * @param {array} data 请求数据
 */
 export function clear(data) {
  return request({
    url: '/admin/AdminUserLog/clear',
    method: 'post',
    data
  })
}
/**
 * 管理员日志统计
 * @param {array} data 请求数据
 */
export function stat(data) {
  return request({
    url: '/admin/AdminUserLog/stat',
    method: 'post',
    data
  })
}