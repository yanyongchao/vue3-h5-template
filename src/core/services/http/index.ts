import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Canceler
} from 'axios'
import md5 from 'md5'

type Method = 'get' | 'post' | 'put' | 'delete'

interface ReqOptions {
  url: string;
  data?: any;
  specialError?: boolean;
}

// 覆盖AxiosRequestConfig，将url,method改成必填
interface RequestConfig extends AxiosRequestConfig {
  url: string;
  method: Method;
}

interface RequestCancelMap {
  [property: string]: any;
}

const BASE_URL = '/api'
const TIME_OUT = 10000
const REPEAT_REQUEST = 'Repeat request'
const CancelToken = Axios.CancelToken

class HttpService {
  // axios请求实例
  public static instance: HttpService
  public axios: AxiosInstance
  public requestCancelMap: RequestCancelMap

  // 获取HttpService的一个实例，这里用了单例模式
  public static getInstance (): HttpService {
    if (!this.instance) {
      this.instance = new HttpService()
    }
    return this.instance
  }

  constructor () {
    this.axios = Axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT
    })
    // 用来取消请求
    this.requestCancelMap = {}
    // 请求拦截
    this.requsetInterceptor()
    // 响应拦截
    this.responseInterceptor()
  }

  request (reqParams: ReqOptions): Promise<any> {
    let options: RequestConfig = {
      url: '/gateway', // 请求url
      data: '', // 请求参数
      specialError: false, // 特殊的错误处理，这边指报错不使用统一提示
      method: 'post' // 请求类型，默认post
    }
    options = { ...options, ...reqParams }
    const reqData = this.handleParams(options)

    return new Promise((resolve, reject) => {
      this.axios[options.method](
        options.url,
        reqData,
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            token: 'token' // 请求接口所需的token
          }
        }
      ).then((response: AxiosResponse) => {
        if (response.success) {
          return resolve(response.data)
        }
        if (options.specialError) {
          return reject(response)
        }
        // Toast(response.message)
      }).catch((error: AxiosError) => {
        reject(error)
      })
    })
  }

  requsetInterceptor () {
    const { axios, requestCancelMap } = this
    axios.interceptors.request.use(
      config => {
        // 请求参数字符串，如果是object则强转string
        const requestDataStr = typeof config.data === 'string' ? config.data : JSON.stringify(config.data)
        // 将请求url、请求类型、请求参数整合成一个字符串，用它来判断是否是重复请求
        const requestName = `${config.url}&${config.method}&${requestDataStr}`
        if (requestName) {
          if (requestCancelMap[requestName] && requestCancelMap[requestName].cancel) {
            requestCancelMap[requestName].cancel(REPEAT_REQUEST)
          }
          config.cancelToken = new CancelToken((cancel: Canceler) => {
            requestCancelMap[requestName] = {}
            requestCancelMap[requestName].cancel = cancel
          })
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  responseInterceptor () {
    this.axios.interceptors.response.use(
      config => {
        // 这边根据自己接口规则来做判断，判断是否是登陆失效；失效则跳转到登陆页面
        if (config.data.code === -104) {
          // 如果登陆超时等，把本地的存储信息进行删除
        }
        return config.data
      },
      error => {
        if (error.message !== REPEAT_REQUEST) {
          // toast提示
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * @func 服务端签名
   * @param {object} options 请求参数
   * @author yyc
   */
  handleParams (options: RequestConfig) {
    const params = {
      appid: 'fs-vue-admin',
      content: '',
      method: options.url,
      version: '1.0',
      sign: ''
    }
    params.content = JSON.stringify(options.data)
    params.sign = md5(`appid=XXXX&content=${encodeURIComponent(params.content)}&method=${options.url}&version=1.0`)

    return params
  }
}

export default HttpService.getInstance()
