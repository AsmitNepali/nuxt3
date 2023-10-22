// https://nuxt.com/docs/api/configuration/nuxt-config
import * as http from 'http'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },

  runtimeConfig: {
    public: {
      baseURL: '' // Exposed to the frontend as well.
    }
  },
  nitro: {
    routeRules: {
      '/backend/**': {
        proxy: 'http://nuxt-api.test/**'
      }
    }
  }
})
