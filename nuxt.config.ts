// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: [
  //     "~/assets/styles/main.scss",
  //   ],
  app: {
    baseURL: '/ourClass/',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variable.scss";',
        },
      },
    },
  },
})
