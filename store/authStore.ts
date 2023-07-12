import { defineStore } from "pinia";
import { authLogin } from "~/api/index";
import { reloadNuxtApp } from "nuxt/app";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: '',
        isLogin: ref(!!useCookie('token').value)
      }),
      actions: {
        async login(data) {
          let loginData:any = await authLogin(data)
          console.log("loginData",loginData)
          this.token = loginData.data.data.token
          this.isLogin = true
          // localStorage.setItem('token',this.token)
          const cookieToken = useCookie('token', { maxAge: 60*60*24*7 })
          cookieToken.value = this.token
          reloadNuxtApp({
            path: "/",
            ttl: 1000, 
          });
        },
        async signOut() {
          this.isLogin = false
          const cookieToken = useCookie('token')
          cookieToken.value = null
          reloadNuxtApp({
            path: "/",
            ttl: 1000, 
          });
        }
      }
})