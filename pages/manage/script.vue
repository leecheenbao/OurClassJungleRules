<template>
    <NuxtLayout name="custom">
        <div class="manage">
            <div class="manage-between">
                <div class="manage-head">劇本教材管理</div>
                <div class="manage-row">
                    <div class="manage-num">項目數量：10</div>
                    <nuxt-link to="/manage/stepInfo" class="manage-create">+ 建立劇本教材</nuxt-link>
                </div>

            </div>

            <div class="Mtable">
                <el-table :data="dataAll" style="width: 100%">
                    <el-table-column prop="account" label="帳號" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="gender" label="性別" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="birth" label="生日" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="organization" label="機構" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="type" label="機構類別" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="registerTime" label="註冊時間" sortable min-width="160">
                    </el-table-column>
                    <el-table-column label="操作" sortable min-width="260">
                        <template #default="scope">
                            <div class="Mtable-row">
                                <div @click.stop="editUser(scope.row)" class="Mtable-look">查看 -></div>
                                <div class="Mtable-icon-outer">
                                    <img @click.stop="deleteUser(scope.row)" class="Mtable-icon"
                                        src="@/assets/images/Icon/delete.svg" alt="close">
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>


            <!-- 刪除資料 -->
            <div v-if="isShowDelete" class="popup">
                <div @click="isShowDelete = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">刪除提醒</div>
                        <div class="box-hint">劇本刪除後將無法復原，您確認要刪除？</div>
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
import { getScript } from "~/api/script";

const handleGetScript = () => {
    getScript()
}
handleGetScript()
const router = useRouter();

const dataAll = reactive([
    { account: 'user1@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user2@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user3@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user4@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user5@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user6@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user7@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user8@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
    { account: 'user9@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11' },
])

const isShowDelete = ref(false)

const editData = ref({})
const deleteData = ref({})

function editUser(row) {
    console.log(row)
    router.push({ path: '/manage/scriptSetting' })
}

function deleteUser(row) {
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

.box {}
</style>