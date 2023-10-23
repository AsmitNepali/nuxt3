import Cookies from 'js-cookie'
import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  return {
    provide: {
      axios: axios.create({
        baseURL: config.public.baseURL,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
      })
    }
  }
})
