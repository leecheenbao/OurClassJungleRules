import { defineStore } from "pinia";
import { authLogin } from "~/api/index";
import { reloadNuxtApp } from "nuxt/app";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: ref(useCookie('token').value),
        permissions:ref(useCookie('permissions').value),
        isLogin: ref(!!useCookie('token').value)
      }),
      actions: {
        async login(data) {
          let {data:loginData}:any = await authLogin(data)
          console.log("loginData",loginData)
          loginData = loginData.value.data
          this.token = loginData.token
          this.isLogin = true
          const cookieToken = useCookie('token', { maxAge: 60*60*24*7 })
          cookieToken.value = this.token
          this.setPermissions(loginData.role)
          const cookieInfo = useCookie('info', { maxAge: 60*60*24*7 })
          cookieInfo.value = JSON.stringify(loginData) 
          this.reloadPage()
        },
        setPermissions(roleList){
          let permissions = roleList[0].authority
          this.permissions =  permissions
          const cookiePermissions = useCookie('permissions', { maxAge: 60*60*24*7 })
          cookiePermissions.value = permissions
        },
        
        async signOut() {
          this.isLogin = false
          const cookieToken = useCookie('token')
          cookieToken.value = null
          const cookiePermissions = useCookie('permissions')
          cookiePermissions.value = null
          this.reloadPage()
        },
        reloadPage(){
          reloadNuxtApp({
            path: "/",
            ttl: 1000, 
          });
        }
      }
})