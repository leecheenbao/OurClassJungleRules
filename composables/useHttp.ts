import { useAuthStore } from '@/store/authStore';
import { storeToRefs } from 'pinia'

// const baseUrl = 'http://wasupstudionobullying.com/wasupstudio'
const baseUrl = 'https://wasupstudionobullying.com/wasupstudio'

const fetch = async (url, option) => {
  return await useFetch(url, {
    onRequest({ options }) {
      const auth = useAuthStore()
      const { isLogin } = storeToRefs(auth)
      const token = useCookie('token').value
      const tempToken = useCookie('tempToken').value
      options.headers = new Headers(options.headers)
      if (isLogin.value) {
        checkToken(token)
        options.headers.set('Authorization', `Bearer ${token}`)
      } else if (url.includes('license/verify')) {
        options.headers.set('Authorization', `Bearer ${tempToken}`)
      } else {
        options.headers.set('Authorization', ``)
      }

    },
    onResponse({ request, response, options }) {

    },
    ...option,
  })
}





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
