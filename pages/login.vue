<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <nuxt-link to="/emilRegister">
                    <div class="btn-white" style="margin-bottom: 20px;">Email 帳號註冊</div>
                </nuxt-link>
                <div class="btn-white">Google 帳號註冊</div>
                <div class="separate"></div>
                <div class="title">帳號登入</div>
                <div class="item-title">帳號</div>
                <div><input class="input" placeholder="請輸入 Email" type="email"></div>
                <div class="item-title">密碼</div>
                <div><input class="input" placeholder="請輸入密碼" type="password"></div>
                <div class="forget">忘記密碼？</div>
                <div class="btn-green">登入</div>
                <div class="or">或</div>
                <div class="btn-green">Google 帳號登入</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

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