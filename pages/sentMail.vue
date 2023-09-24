<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <img src="~/assets/images/Vector.png" alt="">
                <span class="title">帳號驗證</span>
                <span class="content">系統已將帳號驗證信件寄送到 {{ email }}，請查您查看Email當中是否有收到信件，並繼續進行帳號驗證工作，如有任何問題請與我們聯繫。</span>
                <div class="btn" @click="handelResendLetter">
                    重新寄送驗證信
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { resendMail } from "~/api/auth";
import { ElMessage } from 'element-plus'

//http://localhost:3000/sentMail?mail=f7078249@gmail.com&name=fdsfs+2222
let email = ref("")
nextTick(() => {
    let urlParams = utilities.getUrlParams()
    if ('mail' in urlParams) {
        email.value = urlParams.mail
    }
})

const handelResendLetter = async () => {
    let data = {
        "email": email.value,
    }
    await resendMail(data)
    ElMessage({
        message: '已重新寄送驗證信',
        type: 'success',
    })
}



</script>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';

.box {
    background: $background2;
    padding-top: 129px;
    height: 881px;

    .block-box {
        width: 456px;
        background-color: $secondary2;
        box-shadow: 0px 4px 16px rgba(21, 21, 21, 0.3);
        border-radius: 32px;
        padding: 32px;
        align-self: flex-start;
        margin: auto;
        margin-bottom: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
            color: var(--text-color-color-1, #333);
            text-align: center;
            /* Heading/Heading 3 */
            font-family: Noto Sans TC;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            /* 125% */
            letter-spacing: 1.5px;
            margin-top: 8px;
        }

        .content {
            color: var(--text-color-color-2, #666);

            /* Body/Body 16_400 */
            font-family: Noto Sans TC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            /* 137.5% */
            letter-spacing: 0.5px;
            margin: 32px 0;
        }

        .btn {
            display: flex;
            height: 44px;
            padding: 6px 12px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            align-self: stretch;
            border-radius: 50px;
            border: 1px solid var(--primary-color-1, #008B77);
            color: var(--primary-color-1, #008B77);
            text-align: center;

            /* Buttom/Button 2 */
            font-family: Noto Sans TC;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            /* 150% */
            letter-spacing: 1px;
            cursor: pointer;
        }
    }

    .btn-white {
        width: 456px;
        margin: auto;
    }

    .title {
        display: flex;
        justify-content: center;
    }
}
</style>