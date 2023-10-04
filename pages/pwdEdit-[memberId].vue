<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <div class="title">密碼變更</div>
                <!-- <div class="item-title">*原密碼</div>
                <div><input v-model="saveData.originPwd" class="input" placeholder="請輸入密碼" type="password"></div> -->
                <div class="item-title">*新密碼</div>
                <div><input v-model="saveData.newPwd" class="input" placeholder="請輸入密碼" type="password"></div>
                <div class="item-title">*確認新密碼</div>
                <div><input v-model="saveData.checkPwd" class="input" placeholder="請再次輸入新密碼" type="password"></div>
                <div class="btn-green" @click="save">儲存</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { resetPwd } from "~/api/auth";

const saveData = reactive({
    newPwd: "",
    checkPwd: ""
})

const route = useRoute();
const memberId = ref(route.params.memberId)
const cookieInfo = useCookie('info')
const save = async () => {
    if(memberId.value == 'nav'){
        memberId.value = cookieInfo.value.id
    }
    if (saveData.newPwd !== saveData.checkPwd) {
        ElMessage({
            message: '請確認新密碼！',
            type: 'warning',
        })
    } else {
        await resetPwd({
            id: memberId.value,
            pwd: saveData.newPwd
        })
        ElMessage({
            message: '密碼已變更',
            type: 'success',
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';
@import '~/assets/styles/popup.scss';

.box {
    .block-box {
        overflow: auto;
        max-height: none;
    }
}
</style>