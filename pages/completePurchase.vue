<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <img class="available" src="~assets/images/Icon/available.svg" alt="">
                <div class="title">完成購買</div>
                <div class="text">
                    您已完成購買，系統已將註冊碼寄送到購買人Email，請查您查看Email當中是否有收到信件，如有任何問題請與我們聯繫。
                </div>
                <div class="item-box">
                    <div class="item-title">訂單編號</div>
                    <div class="item-text">AW1120301023</div>
                </div>
                <div class="item-box">
                    <div class="item-title">購買人姓名</div>
                    <div class="item-text">張小兔</div>
                </div>
                <div class="item-box" style="margin-bottom: 32px;">
                    <div class="item-title">購買人 Email</div>
                    <div class="item-text">user@mail.com</div>
                </div>
                <div class="back-btn">返回首頁</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';
@import '~/assets/styles/popup.scss';

.box {
    .block-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        .available {
            width: 60px;
            height: 60px;
        }

        .title {
            color: $text1;
            text-align: center;
            font-size: 24px;
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 32px;
        }

        .text {
            color: $text2;
            font-size: 16px;
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
        }

        .item-box {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;

            .item-title {
                color: $text1;
                font-size: 16px;
                font-family: Noto Sans TC;
                font-style: normal;
                font-weight: 500;

            }

            .item-text {
                color: $text2;
                font-size: 16px;
                font-family: Noto Sans TC;
                font-style: normal;
                font-weight: 400;
            }
        }

        .back-btn {
            display: flex;
            height: 44px;
            width: 100%;
            border-radius: 50px;
            border: 1px solid $primary1;
            color: $primary1;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
}
</style>