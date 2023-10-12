import { useAuthStore } from '@/store/authStore';
import { storeToRefs } from 'pinia'

// const baseUrl = 'http://wasupstudionobullying.com/wasupstudio'
const baseUrl = 'https://wasupstudionobullying.com/wasupstudio'

const fetch = async (url, option) => {
  return await useFetch(url, {
    // 请求拦截器
    onRequest({ options }) {
      //   // get方法传递数组形式参数
      //   options.params = paramsSerializer(options.params)
      //   // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
      //   const { public: { apiBase } } = useRuntimeConfig()
      //   options.baseURL = apiBase
      //   // 添加请求头,没登录不携带token
      //   const userStore = useUserStore()
      console.log("onRequest",url)
      const auth = useAuthStore()
      const { isLogin } = storeToRefs(auth)
      const token = useCookie('token').value
      if (isLogin.value) {
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', `Bearer ${token}`)
      }

    },
    onResponse({ request, response, options }) {
      const router = useRouter();
      if(response.status == 401){
        router.push("/login")
      }
  },
    ...option,
  })
}

// 自动导出
export const useHttp = {
  get: (url, params?: any, option?: any): any => {
    return fetch(baseUrl + url, { method: 'get', params, ...option })
  },

  post: (url, body?: any, option?: any): any => {
    return fetch(baseUrl + url, { method: 'post', body: body, ...option })
  },

  put: (url, body?: any, option?: any): any => {
    return fetch(baseUrl + url, { method: 'put', body, ...option })
  },

  delete: (url, body?: any, option?: any): any => {
    return fetch(baseUrl + url, { method: 'delete', body, ...option })
  },
}
