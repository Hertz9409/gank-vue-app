import axios from 'axios'

// 创建axios实例
export const instance = axios.create({
  baseURL: 'http://gank.io/api/',
  timeout: 6000
})

// request拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (res && res.error) {
      return Promise.reject(res.results)
    }
    return res.results
  },
  error => {
    console.error(error.message)
    return Promise.reject(error)
  }
)

export const request = async (url = '', type = 'GET', data = {}) => {
  let result
  type = type.toUpperCase()
  if (type === 'GET') {
    await instance.get(url, { params: data }).then(res => {
      result = res
    })
  } else if (type === 'POST') {
    await instance.post(url, JSON.stringify(data)).then(res => {
      result = res
    })
  }
  return result
}
