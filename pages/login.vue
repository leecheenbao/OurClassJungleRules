<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <nuxt-link to="/emilRegister">
                    <div class="btn-white" style="margin-bottom: 20px;">Email 帳號註冊</div>
                </nuxt-link>
                <div class="btn-white" @click="handleGoogleRegister">Google 帳號註冊</div>
                <div class="separate"></div>
                <div class="title">帳號登入</div>
                <div class="item-title">帳號</div>
                <div><input v-model="email" class="input" placeholder="請輸入 Email" type="email"></div>
                <div class="item-title">密碼</div>
                <div><input v-model="password" class="input" placeholder="請輸入密碼" type="password"></div>
                <nuxt-link to="/forgetPwd">
                    <div class="forget">忘記密碼？</div>

                </nuxt-link>
                <div class="btn-green" @click="handleAuthLogin">登入</div>
                <div class="or">或</div>
                <div class="btn-green" @click="handleGoogleRegister">Google 帳號登入</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { googleRegister } from "~/api/auth";
import { useAuthStore } from '@/store/authStore';

let email = ref('')
let password = ref('')
const router = useRouter();

const handleAuthLogin = async () => {
    let data = {
        "email": email.value,
        "password": password.value,
        "role": "ROLE_USER"
    }
    let loginData = await useAuthStore().login(data)
    if (loginData.data.hasOwnProperty('checkLicense') && loginData.data.checkLicense){
        router.push({ path: '/mission/myList' })
    } else {
        router.push({ path: '/verificationCode' })
    }
   
}

const handleGoogleRegister = async () => {
    let { data } = await googleRegister()
    window.location.href = data.value.data;
}

</script>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';

.box {
    background: $background2;
    display: flex;
    justify-content: center;
    padding-top: 72px;
    height: 881px;

    .block-box {
        width: 456px;
        background-color: $secondary2;
        box-shadow: 0px 4px 16px rgba(21, 21, 21, 0.3);
        border-radius: 32px;
        padding: 32px;
        align-self: flex-start;

        @include respond-to('phone') {
            width: 90%;
        }



        .separate {
            margin-top: 32px;
            border: 1px solid $border1;
            margin-bottom: 32px;
        }

        .forget {
            font-weight: 400;
            font-size: 14px;
            text-decoration-line: underline;
            letter-spacing: 0.5px;
            color: $primary1;
            cursor: pointer;
            margin-bottom: 32px;
        }

    }
}
</style>