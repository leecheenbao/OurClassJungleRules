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
                    <div class="manage-num">項目數量：{{ allData.length }}</div>
                    <div @click="isShowAdd = true" class="manage-create">+ 建立新任務</div>
                </div>

            </div>

            <div class="Mtable">
                <el-table :data="allData" style="width: 100%">
                    <el-table-column prop="taskName" label="任務名稱" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="script" label="劇本" sortable min-width="160">
                        <template #default="scope">
                            {{ getScriptNameById(scope.row.scriptId) }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="learningStr" label="學習對象" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="statusStr" label="任務狀態" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="endTime" label="結束時間" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="createTime" label="建立時間" sortable min-width="160">
                    </el-table-column>
                    <el-table-column label="操作" sortable min-width="260">
                        <template #default="scope">
                            <div class="Mtable-row">
                                <div @click.stop="router.push({ path: '/mission/myMission' })" class="Mtable-look">查看 ->
                                </div>
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="handleEdit(scope.row)" class="Mtable-icon"
                                        src="~/assets/images/Icon/edit.svg" alt="close">
                                </div>
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="deleteUser(scope.row)" class="Mtable-icon"
                                        src="@/assets/images/Icon/delete.svg" alt="close">
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
                    <div><input v-model="addData.taskName" class="input" placeholder="請輸入文字" type="text"></div>
                    <div class="item-title">*選擇劇本</div>
                    <div class="select-container">
                        <select v-model="addData.scriptId" class="select">
                            <option :value="item.value" v-for="item of scriptOption" :key="item.value">{{ item.text }}
                            </option>
                        </select>
                    </div>
                    <div class="item-title">*學習對象</div>
                    <div class="select-container">
                        <select v-model="addData.learning" class="select">
                            <option :value="item.id" v-for="item of learningMap" :key="item.id">{{ item.text }}</option>
                        </select>
                    </div>
                    <div class="item-title">*預期參與人數/組數</div>
                    <div><input v-model="addData.estimatedParticipants" class="input" :min="0" placeholder="請輸入數字"
                            type="number">
                    </div>
                    <div class="item-title">*結束日期</div>
                    <div><input v-model="addData.endTime" class="input" type="date"></div>
                    <div @click="handleAddUser" class="btn-green">確認</div>
                </div>
            </div>
        </div>

        <!-- 編輯資料 -->
        <div v-if="isShowEdit" class="popup">
            <div @click="isShowEdit = false" class="box">
                <div @click.stop class="block-box">
                    <div class="title">編輯任務</div>
                    <div class="item-title">*任務名稱</div>
                    <div><input v-model="current.taskName" class="input" placeholder="請輸入文字" type="text"></div>
                    <div class="item-title">*選擇劇本</div>
                    <div class="select-container">
                        <select v-model="current.scriptId" class="select">
                            <option :value="item.value" v-for="item of scriptOption" :key="item.value">{{ item.text }}
                            </option>
                        </select>
                    </div>
                    <div class="item-title">*學習對象</div>
                    <div class="select-container">
                        <select v-model="current.learning" class="select">
                            <option :value="item.id" v-for="item of learningMap" :key="item.id">{{ item.text }}</option>
                        </select>
                    </div>
                    <div class="item-title">*預期參與人數/組數</div>
                    <div><input v-model="current.estimatedParticipants" class="input" placeholder="請輸入數字" type="number">
                    </div>
                    <div class="item-title">*結束日期</div>
                    <div><input v-model="current.endTime" class="input" type="date"></div>
                    <div @click="save" class="btn-green">確認</div>
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
import { getMyTask, edit, add } from "~/api/task";
import { ElMessage } from 'element-plus'
import { getScript } from "~/api/script";


const allScript = reactive([])
const scriptOption = reactive([])
async function setAllScript() {
    const { data } = await getScript()
    let list = JSON.parse(JSON.stringify(data.value.data.list))
    list = list.filter(o => o.status !== 0)
    allScript.length = 0
    allScript.push(...list)
    scriptOption.length = 0
    allScript.forEach(res => {
        scriptOption.push({
            text: res.title,
            value: res.scriptId
        })
    })
    console.log("我的劇本 all data", scriptOption)
}
setAllScript()
const learningMap =
    [
        { id: 0, text: '小學 (低年級)' },
        { id: 1, text: '小學 (中年級)' },
        { id: 2, text: '小學 (高年級)' },
        { id: 3, text: '小學 (7年級)' },
        { id: 4, text: '小學 (8年級)' },
        { id: 5, text: '小學 (9年級)' },
    ]


const statusMap = {
    0: '開啟任務',
    1: '進行中',
    2: '完成(包含結束)'
}

const allData = reactive([])
async function init() {
    const { data } = await getMyTask()
    let list = JSON.parse(JSON.stringify(data.value.data.list))
    list = list.filter(o => o.status !== 2)
    list.map((o) => {
        o.learningStr = learningMap.filter(i => i.id == o.learning)[0].text
        o.statusStr = statusMap[o.status]
        o.endTime = o.endTime.split(' ')[0]
    })
    allData.length = 0
    allData.push(...list)
    console.log("我的任務 all data", allData)
}
init()

const getScriptNameById = (id) => {
    return scriptOption.filter(o => o.value == id)[0].text
}

const router = useRouter();

const isFirst = ref(false)

const isShowAdd = ref(false)
const isShowEdit = ref(false)
const isShowDelete = ref(false)


const deleteData = ref({})
const current = reactive({})
const dayjs = useDayjs()

const addData = reactive({
    "author": "string",
    "createTime": dayjs().format('YYYY-MM-DD HH:mm:ss'),
    "description": "string",
    "endTime": "",
    "estimatedParticipants": 0,
    "learning": 0,
    "memberId": 0,
    "priority": 0,
    "scriptId": 0,
    "status": 0,
    "taskName": "",
    'taskId': 0
})

async function handleAddUser() {

    console.log("addData", addData)
    if (addData.taskName === '') {
        ElMessage({
            message: '請輸入任務名稱！',
            type: 'warning',
        })
    } else if (addData.scriptId === '') {
        ElMessage({
            message: '請選擇劇本！',
            type: 'warning',
        })
    } else if (addData.learning === '') {
        ElMessage({
            message: '請選擇學習對象！',
            type: 'warning',
        })
    } else if (addData.estimatedParticipants === '') {
        ElMessage({
            message: '請輸入預期參與人數/組數！',
            type: 'warning',
        })
    } else if (addData.endTime === '') {
        ElMessage({
            message: '請輸入結束日期！',
            type: 'warning',
        })
    } else {
        addData.endTime = dayjs(addData.endTime).format('YYYY-MM-DD HH:mm:ss')
        await add(addData).catch(() => {
            ElMessage.error('更新失敗')
        }).then((res) => {
            ElMessage({
                message: '更新成功',
                type: 'success',
            })
            isShowAdd.value = false
            init()
        })

    }
}


function handleEdit(row) {
    isShowEdit.value = true
    Object.assign(current, JSON.parse(JSON.stringify(row)))

}

async function save() {
    isShowEdit.value = false
    delete current["learningStr"]
    delete current["statusStr"]

    current.endTime = dayjs(current.endTime).format('YYYY-MM-DD HH:mm:ss')
    console.log("current", current)
    if (current.taskName === '') {
        ElMessage({
            message: '請輸入任務名稱！',
            type: 'warning',
        })
    } else if (current.scriptId === '') {
        ElMessage({
            message: '請選擇劇本！',
            type: 'warning',
        })
    } else if (current.learning === '') {
        console.log("current", current.learning)
        ElMessage({
            message: '請選擇學習對象！',
            type: 'warning',
        })
    } else if (current.estimatedParticipants === '') {
        ElMessage({
            message: '請輸入預期參與人數/組數！',
            type: 'warning',
        })
    } else if (current.endTime === '') {
        ElMessage({
            message: '請輸入結束日期！',
            type: 'warning',
        })
    } else {
        await edit(current.taskId, current).then((res) => {
            ElMessage({
                message: '更新成功',
                type: 'success',
            })
            init()
        }).catch(() => {
            ElMessage.error('更新失敗')
        })
    }
}

function deleteUser(row) {
    isShowEdit.value = false
    isShowDelete.value = true
    Object.assign(current, JSON.parse(JSON.stringify(row)))
}

async function deleteCurrentData() {
    isShowDelete.value = false
    current.endTime = dayjs(current.endTime).format('YYYY-MM-DD HH:mm:ss')
    current.status = 2
    await edit(current.taskId, current).then((res) => {
        ElMessage({
            message: '刪除成功',
            type: 'success',
        })
        init()
    }).catch(() => {
        ElMessage.error('刪除失敗')
    })

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