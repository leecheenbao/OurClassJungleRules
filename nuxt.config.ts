// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: [
  //     "~/assets/styles/main.scss",
  //   ],
  // app: {
  //   baseURL: '/ourClass/',
  // },

  modules: ['@pinia/nuxt', 'dayjs-nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variable.scss"; @import "@/assets/styles/rwdMixin.scss";',
        },
      },
    },
  },
})
