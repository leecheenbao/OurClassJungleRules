<template>
    <client-only>
        <el-dialog v-model="props.isShowDialog" class="getcode-bg">
            <div class="getcode-box">
                <div class="cancel" @click="$emit('close')">𐄂</div>
                <div class="title" style="margin-bottom: 32px;">取得註冊碼</div>
                <div class="item-title">註冊碼是什麼?</div>
                <div class="text">每組帳號都必須使用一組註冊碼才可以成功啟用。</div>
                <div class="item-title">註冊碼如何獲得?</div>
                <div class="text">註冊碼目前需要進行一次性付費才可獲得。付費後並且系統經過確認後，將主動寄送註冊碼至您的收取信箱。</div>
                <div class="item-title">註冊碼有效期嗎？</div>
                <div style="margin-bottom: 32px;" class="text">註冊碼開通帳號後，就可以永久使用網站開放的劇本遊戲，並無限定期限。</div>
                <div class="btn-green">購買註冊碼</div>
            </div>
        </el-dialog>
    </client-only>
</template>

<script setup>
const props = defineProps(['isShowDialog'])
</script>

<style lang="scss" scoped>
.getcode-bg{
    background-color: #8f5151;
}
.getcode-bg {
    --el-dialog-box-shadow: none;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 124px;
    width: 100%;
    height: 937px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    .getcode-box {
        width: 480px;
        background-color: $secondary2;
        border-radius: 32px;
        padding: 32px;
        align-self: flex-start;
        margin: auto;
        margin-bottom: 32px;
        box-shadow: 0px 4px 16px rgba(21, 21, 21, 0.3);
        border: 1px solid $border3;
        position: relative;
    }

    .item-title {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.5px;
        color: $text1;
        margin-bottom: 8px;
    }

    .text {
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.5px;
        color: $text2;
        margin-bottom: 16px;
    }

    .cancel {
        position: absolute;
        top: 6px;
        right: 32px;
        font-size: 36px;
        cursor: pointer;
        color: $text5;
    }
}
</style>