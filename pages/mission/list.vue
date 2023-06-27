<template>
    <NuxtLayout name="custom">
        <div v-if="isFirst" class="manage">
            <div class="manage-between">
                <div class="manage-head">我的任務</div>
                <div class="manage-row"></div>
                
            </div>
            <div class="manage-center">
                <div>尚無任何任務</div>
                <div @click="isShowAdd = true" class="manage-center-add">+ 建立新任務</div>
            </div>
        </div>
        <div v-else class="manage">
            <div class="manage-between">
                <div class="manage-head">我的任務</div>
                <div class="manage-row">
                    <div class="manage-num">項目數量：10</div>
                    <div @click="isShowAdd = true" class="manage-create">+ 建立新任務</div>
                </div>
                
            </div>

            <div class="Mtable">
                <el-table
                    :data="dataAll"
                    @row-click="editUser"
                    style="width: 100%"
                >
                    <el-table-column
                    prop="name"
                    label="任務名稱"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="script"
                    label="劇本"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="learner"
                    label="學習對象"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="任務狀態"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="endTime"
                    label="結束時間"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="createTime"
                    label="建立時間"
                    sortable
                    min-width="160"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        sortable
                        min-width="260"
                    >
                        <template #default="scope">
                            <div class="Mtable-row">
                                <div @click.stop="editUser(scope.row)" class="Mtable-look">查看 -></div>
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="editUser(scope.row)" class="Mtable-icon" src="~/assets/images/Icon/edit.svg" alt="close">
                                </div>
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="deleteUser(scope.row)" class="Mtable-icon" src="@/assets/images/Icon/delete.svg" alt="close">
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <!-- 新增資料 -->
        <div v-if="isShowAdd" class="popup">
            <div @click="isShowAdd = false" class="box">
                <div @click.stop class="block-box">
                    <div class="title">建立新任務</div>
                    <div class="item-title">*任務名稱</div>
                    <div><input class="input" placeholder="請輸入文字" type="text"></div>
                    <div class="item-title">*選擇劇本</div>
                    <div class="select-container">
                        <select class="select">
                            <option value="">請選擇</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="item-title">*學習對象</div>
                    <div class="select-container">
                        <select class="select">
                            <option value="">請選擇</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="item-title">*預期參與人數/組數</div>
                    <div><input class="input" placeholder="請輸入數字" type="text"></div>
                    <div class="item-title">*結束日期</div>
                    <div><input class="input" type="date"></div>
                    <div class="btn-green">確認</div>
                </div>
            </div>
        </div>

        <!-- 編輯資料 -->
        <div v-if="isShowEdit" class="popup">
            <div @click="isShowEdit = false" class="box">
                <div @click.stop class="block-box">
                    <div class="title">編輯任務</div>
                    <div class="item-title">*任務名稱</div>
                    <div><input class="input" placeholder="請輸入文字" type="text"></div>
                    <div class="item-title">*選擇劇本</div>
                    <div class="select-container">
                        <select class="select">
                            <option value="">請選擇</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="item-title">*學習對象</div>
                    <div class="select-container">
                        <select class="select">
                            <option value="">請選擇</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="item-title">*預期參與人數/組數</div>
                    <div><input class="input" placeholder="請輸入數字" type="text"></div>
                    <div class="item-title">*結束日期</div>
                    <div><input class="input" type="date"></div>
                    <div class="btn-green">確認</div>
                </div>
            </div>
        </div>


        <!-- 刪除資料 -->
        <div v-if="isShowDelete" class="popup">
            <div @click="isShowDelete = false" class="box">
                <div @click.stop class="block-box">
                    <div class="title">刪除提醒</div>
                    <div class="box-hint">帳號刪除後將無法復原，您確認要刪除？</div>
                    <div class="box-row">
                        <div @click="isShowDelete = false" class="box-cancel">取消</div>
                        <div @click="deleteCurrentData" class="box-delete">刪除</div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>

const router = useRouter();

const isFirst = ref(false)

const dataAll = reactive([
  { name: '1年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
  { name: '2年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
  { name: '6年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
  { name: '4年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
  { name: '5年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
  { name: '3年二班虎兔篇', script: '虎兔篇', learner: '小學 (低年級)', status: '進行中', endTime: '2023/03/01', createTime: '2023/03/01' },
])

const isShowAdd = ref(false)
const isShowEdit = ref(false)
const isShowDelete = ref(false)

const addData = ref({})
const editData = ref({})
const deleteData = ref({})

function addUser(row) {
    isShowAdd.value = true
}

function editUser(row) {
    // isShowEdit.value = true
    editData.value = row
    console.log(row)
    router.push({ path: '/mission/myMission' })
}

function deleteUser(row) {
    isShowEdit.value = false
    isShowDelete.value = true
    deleteData.value = row
}

function deleteCurrentData() {
    isShowDelete.value = false
}

</script>

<style lang="scss" scoped>
@import '~/assets/styles/popup.scss';
@import '~/assets/styles/form.scss';
@import '~/assets/styles/manage.scss';
@import '~/assets/styles/table.scss';

.manage-center {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-add {
        margin-top: 20px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        padding: 8px 12px;
        width: 130px;
        height: 36px;
        background: #008B77;
        border-radius: 50px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

}
</style>