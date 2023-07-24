<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <div class="title">忘記密碼</div>
                <div class="item-title">註冊帳號 Email</div>
                <div><input class="input" placeholder="請輸入 Email" type="email"></div>
                <div class="remark" style="margin-bottom: 32px;">系統將寄送重新設定密碼信件到您註冊的信箱。</div>
                <nuxt-link to="/verificationCode">
                    <div class="btn-green">寄送</div>
                </nuxt-link>
            </div>
            <nuxt-link to="/login">
                <div class="btn-white">返回登入</div>
            </nuxt-link>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';

.box {
    background: $background2;
    padding-top: 72px;
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