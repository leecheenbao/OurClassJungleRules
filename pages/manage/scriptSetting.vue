<template>
    <NuxtLayout name="custom">
        <div class="step">
            <div class="step-script-head">
                <nuxt-link to="/manage/script" class="step-script-head-leave">＜- 返回列表</nuxt-link>
                <div class="step-script-head-route">
                    <nuxt-link to="/manage/scriptSetting" class="step-script-head-route1">基本設定</nuxt-link>
                    <nuxt-link to="/manage/scriptDetail" class="step-script-head-route2">詳細內容</nuxt-link>
                </div>
                <div class="step-script-head-setting">
                    <div class="step-script-head-sub">啟用狀態：</div>
                    <el-switch
                        v-model="isUsed"
                        active-text="開啟"
                        inactive-text="">
                    </el-switch>
                </div>
            </div>

            <!-- body -->
            <div class="step-script-edit-row">
                <div class="step-script-edit-title">基本設定</div>
                <div v-if="isEdited" @click="isEdited =false" class="step-script-edit-edit">編輯</div>
                <div v-else class="step-script-edit-row2">
                    <div @click="isEdited =true" class="step-script-edit-store">儲存</div>
                    <div @click="isEdited =true" class="step-script-edit-cancel">取消</div>
                </div>
            </div>

            <!-- body content -->
            
            <div v-if="isEdited" class="step-day-outer">
                <div class="step-day-row">
                    <div class="step-day-title5">劇本封面</div>
                    <div class="step-day-img"></div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">劇本名稱</div>
                    <div class="step-day-text">虎兔篇</div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">劇本簡述</div>
                    <div class="step-day-text">潛在霸凌者需求：生理需求</div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">劇本時長 (天)</div>
                    <div class="step-day-text">2天</div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">教學重點</div>
                    <div class="step-day-text">
                        讓學生認識有些人會因為不同的生理需求，例如過動症，而難以控制自己的情緒及行為。
                        當我們了解每個人的獨特之處，我們可以試著協助他人。
                    </div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">給老師的提醒</div>
                    <div class="step-day-text">讓學生認識有些人會因為不同的生</div>
                </div>
                <div class="step-day-row">
                    <div class="step-day-title5">前導說明</div>
                    <div class="step-day-text">讓學生認識有些人會因為不同的生</div>
                </div>
            </div>

            <!-- 編輯狀態 -->
            <div v-else class="step-body">
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

        </div>
    </NuxtLayout>
</template>

<script setup>

const isUsed = ref(false)
const isEdited = ref(true)
const isPhoto = ref(true)

</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {

}
</style>