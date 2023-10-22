import Cookies from 'js-cookie'
import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  return {
    provide: {
      axios: axios.create({
        baseURL: config.public.baseURL,
        headers: {
          Accept: 'application/json',
          'XS-XSRF-TOKEN': useCookie('XSRF-TOKEN').value
        }
      })
    }
  }
})
