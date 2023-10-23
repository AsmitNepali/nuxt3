import Cookies from 'js-cookie'
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  return {
    provide: {
      apiFetch: $fetch.create({
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
      })
    }
  }
})
