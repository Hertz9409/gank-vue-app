import { request } from './request'

const getDataByType = function (type, pageSize, pageIndex) {
  let res = request('data/' + type + '/' + pageSize + '/' + pageIndex, 'get')
  return res
}

export default {
  getDataByType
}
