import axios from 'axios'


//方法1--对应main.js里方法1

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }


//方法2--对应main.js里方法2
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseconfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }


//方法3--对应main.js里方法3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }



//方法4--对应main.js里方法4  

export function request(config) {
  // 1-创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 2-axios拦截器
  // axios.interceptors 全局拦截器
  instance.interceptors.request.use(
    config => {
      //拦截器使用的目的：
      //1-筛选信息，比如config中的一些信息不符合服务器要求
      //2-每次网络请求时在界面显示一些网络请求图标
      //3-某些网络请求（登录时token），必须携带一些特殊信息

      // console.log(config);
      return config
    },
    err => {
      // console.log(err);
    }
  ) //拦截请求

  instance.interceptors.response.use(
    res => {
      // console.log(res);
      return res.data.data
    },
    err => {
      console.log(err);
    }
  )    //拦截响应

  // 3-真正发送网络请求
  return instance(config)
}