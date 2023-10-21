export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      apiFetch: $fetch.create({ baseURL: 'http://nuxt-api.test' })
    }
  }
})
