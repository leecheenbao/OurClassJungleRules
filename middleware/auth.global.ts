import { useAuthStore } from '@/store/authStore';

export default defineNuxtRouteMiddleware((to:any) => {
    console.log("defineNuxtRouteMiddleware", to)
    let isLogin = useAuthStore().isLogin
    console.log("isLogin",useCookie('token').value)
    // 需登入頁面
    let loginPage = [
        '/mission', '/manage'
    ]
    let isNeedLoginPage = loginPage.some(item => to.href.includes(item))
    if (isNeedLoginPage && !isLogin) {
        return  navigateTo('/login')
    }
})