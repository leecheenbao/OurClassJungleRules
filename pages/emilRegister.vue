<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <div class="title">Email 帳號註冊</div>
                <div class="item-title">*帳號</div>
                <div><input class="input" placeholder="請輸入 Email" type="email"></div>
                <div class="item-title">*密碼</div>
                <div><input class="input" style="margin-bottom: 8px;" placeholder="請輸入密碼" type="password"></div>
                <div class="remark">建議為 6 - 30 位英文數字組成</div>
                <div class="item-title">*確認密碼</div>
                <div><input style="margin-bottom: 32px;" class="input" placeholder="請再次輸入新密碼" type="password"></div>
                <nuxt-link to="/verificationCode">
                    <div class="btn-green">註冊</div>
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