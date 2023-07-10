export default defineNuxtRouteMiddleware((to) => {
    console.log("defineNuxtRouteMiddleware",to)
    if(to.fullPath === '/connection'){ // 重定向
        return  navigateTo('/')
     }
})