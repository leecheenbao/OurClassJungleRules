<template>
    <NuxtLayout name="custom">
        <div class="step">
            <!-- header -->
            <div class="step-header">
                <div class="step-header-num step-header-num-current">1</div>
                <div class="step-header-head step-header-head-current">基本資訊</div>
                <div class="step-header-line"></div>
                <div class="step-header-num">2</div>
                <div class="step-header-head">詳細內容</div>
                <div class="step-header-line"></div>
                <div class="step-header-num">3</div>
                <div class="step-header-head">確認內容</div>
            </div>

            <!-- body -->
            <div class="step-body">
                <div class="step-body-title">*劇本封面</div>
                <div v-if="!isPhoto" class="step-body-upload">上傳圖片</div>
                <div v-if="!isPhoto" class="step-body-upload-hint">尺寸建議為 1920 x 300px</div>
                <div v-if="isPhoto" class="step-body-img"></div>

                <div class="step-body-title">*劇本名稱</div>
                <input class="input step-body-input" placeholder="請輸入名稱" type="text">
                <div class="step-body-title">*劇本簡述</div>
                <input class="input step-body-input" placeholder="ex.潛在霸凌者需求：生理需求" type="text">
                <div class="step-body-title">*劇本時長 (日)</div>
                <input class="input step-body-input2" placeholder="請輸入數值" type="text">
                <div class="step-body-hint">最少 2 日</div>

                <div class="step-body-row1">
                    <div class="step-body-title2">*教學重點</div>
                    <div class="step-body-add">＋增加</div>
                </div>
                <div class="step-body-row2">
                    <input class="input step-body-input3" placeholder="請輸入文字" type="text">
                    <div class="step-body-close">-</div>
                </div>

                <div class="step-body-row1">
                    <div class="step-body-title2">*給老師的提醒</div>
                    <div class="step-body-add">＋增加</div>
                </div>
                <div class="step-body-row2">
                    <input class="input step-body-input3" placeholder="請輸入文字" type="text">
                    <div class="step-body-close">-</div>
                </div>
                
                <div class="step-body-row1">
                    <div class="step-body-title2">*前導說明</div>
                    <div class="step-body-add">＋增加</div>
                </div>
                <div class="step-body-row2">
                    <input class="input step-body-input3" placeholder="請輸入文字" type="text">
                    <div class="step-body-close">-</div>
                </div>
            </div>

            <div class="step-next">
                <nuxt-link  to="/manage/stepDetail" class="step-next-next">下一步</nuxt-link>
                <nuxt-link to="/" class="step-next-cancel">取消</nuxt-link>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

const isPhoto = ref(false)

</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {

}
</style>