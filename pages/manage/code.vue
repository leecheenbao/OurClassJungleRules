<template>
    <NuxtLayout name="custom">
        <div class="manage">
            <div class="manage-between">
                <div class="manage-head">註冊碼管理</div>
                <div class="manage-row">
                    <div class="manage-num">項目數量：10</div>
                    <div @click="isShowAdd = true" class="manage-create">+ 新增註冊碼</div>
                </div>

            </div>

            <div class="Mtable">
                <el-table :data="allData" style="width: 100%">
                    <el-table-column prop="licenseKey" label="註冊碼" sortable min-width="12">
                    </el-table-column>
                    <el-table-column prop="customerEmail" label="綁定使用者帳號" sortable min-width="12">
                    </el-table-column>
                    <el-table-column prop="customerName" label="使用者名稱" sortable min-width="12">
                    </el-table-column>
                    <el-table-column prop="generateＦ" label="生成方式" sortable min-width="12">
                    </el-table-column>
                    <el-table-column prop="activationDate" label="使用時間" sortable min-width="12">
                    </el-table-column>
                    <el-table-column prop="expirationDate" label="產生時間" sortable min-width="12">
                    </el-table-column>
                    <el-table-column label="操作" sortable min-width="12">
                        <template #default="scope">
                            <div class="Mtable-row">
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="deleteUser(scope.row.id)" class="Mtable-icon"
                                        src="@/assets/images/Icon/delete.svg" alt="close">
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 新增資料 -->
            <div v-if="isShowAdd" class="popup">
                <div @click="isShowAdd = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">新增註冊碼</div>
                        <div class="item-title">註冊碼數量</div>
                        <div><input class="input" placeholder="請輸入數量" type="text"></div>
                        <div class="btn-green">儲存</div>
                    </div>
                </div>
            </div>


            <!-- 刪除資料 -->
            <div v-if="isShowDelete" class="popup">
                <div @click="isShowDelete = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">刪除提醒</div>
                        <div class="box-hint">註冊碼刪除後將無法復原，您確認要刪除？</div>
                        <div class="box-row">
                            <div @click="isShowDelete = false" class="box-cancel">取消</div>
                            <div @click="deleteCurrentData" class="box-delete">刪除</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>
import { getAll, edit } from "~/api/license"
import { ElMessage } from 'element-plus'

const allData = reactive([])
async function init() {
    allData.length = 0
    const { data } = await getAll()
    let list = data.value.data.list
    list = list.filter(o => o.activated !== 2)
    allData.push(...list)
    console.log("allData", allData)
}
init()

const isShowAdd = ref(false)
const isShowDelete = ref(false)

const current = {}

function deleteUser(id) {
    isShowDelete.value = true
    let filter = allData.filter(o => o.id == id)[0]
    Object.assign(current, filter)
}

function deleteCurrentData() {
    isShowDelete.value = false
    current.activated = 2
    edit(current.id, current).catch(() => {
        ElMessage.error('刪除失敗')
    }).then(() => {
        ElMessage({
            message: '刪除成功',
            type: 'success',
        })
        init()
    })
}

</script>

<style lang="scss" scoped>
@import '~/assets/styles/popup.scss';
@import '~/assets/styles/form.scss';
@import '~/assets/styles/manage.scss';
@import '~/assets/styles/table.scss';

.box {}
</style>