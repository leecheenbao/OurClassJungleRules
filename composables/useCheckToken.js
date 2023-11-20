import { useAuthStore } from '@/store/authStore';
export const checkToken = (token) => {
    if (!token) {
        return true; // 如果沒有提供令牌，則認為它已過期
    }

    const tokenData = JSON.parse(atob(token.split('.')[1].replace(/-/g, "+").replace(/_/g, "/")));
    const expirationTimestamp = tokenData.exp * 1000; // JWT中exp以秒為單位

    // 獲取當前時間戳
    const currentTimestamp = new Date().getTime();

    // 比較當前時間戳與過期時間戳
    if (currentTimestamp > expirationTimestamp) {
        useAuthStore().signOut()
        return true; // 令牌已過期
    } else {
        return false; // 令牌仍然有效
    }
}