<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <div class="title">密碼變更</div>
                <div class="item-title">*原密碼</div>
                <div><input v-model="saveData.originPwd" class="input" placeholder="請輸入密碼" type="password"></div>
                <div class="item-title">*新密碼</div>
                <div><input v-model="saveData.newPwd" class="input" placeholder="請輸入密碼" type="password"></div>
                <div class="item-title">*確認密碼</div>
                <div><input v-model="saveData.checkPwd" class="input" placeholder="請再次輸入新密碼" type="password"></div>
                <div class="btn-green" @click="save">儲存</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { editInfoById,getInfoById } from "~/api/member";

const saveData = reactive({
    originPwd:"",
    newPwd:"",
    checkPwd:""
})

const save = () => {
    let userId = useCookie('info').value.id
    console.log("userId",userId)
    let userInfo = getInfoById(userId)
    console.log("userInfo",userInfo)
    // let originPwd = getInfoById()
    // let info = useCookie('info').value
    // console.log("saveData", info.memMail)
    // if (saveData.name == '') {
    //     ElMessage({
    //         message: '請輸入姓名！',
    //         type: 'warning',
    //     })
    // } else if (saveData.birthday == '') {
    //     ElMessage({
    //         message: '請輸入生日！',
    //         type: 'warning',
    //     })
    // } else {
    // }

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