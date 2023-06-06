<template>
    <NuxtLayout name="custom">
        <div class="manage">
            <div class="manage-between">
                <div class="manage-head">使用者管理</div>
                <div class="manage-row">
                    <div class="manage-num">項目數量：10</div>
                    <div @click="isShowAdd = true" class="manage-create">+ 建立使用者</div>
                </div>
                
            </div>

            <div class="Mtable">
                <el-table
                    :data="dataAll"
                    @row-click="editUser"
                    style="width: 100%"
                >
                    <el-table-column
                    prop="account"
                    label="帳號"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    min-width="6"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="gender"
                    label="性別"
                    sortable
                    min-width="6"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="birth"
                    label="生日"
                    sortable
                    min-width="8"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="organization"
                    label="機構"
                    sortable
                    min-width="8"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="機構類別"
                    sortable
                    min-width="7"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="registerTime"
                    label="註冊時間"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    sortable
                    min-width="12"
                    >
                    <template #default="scope">
                        <div class="Mtable-row">
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

            <!-- 新增資料 -->
            <div v-if="isShowAdd" class="popup">
                <div @click="isShowAdd = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">新增資料</div>
                        <div class="item-title">*帳號</div>
                        <div><input class="input" placeholder="請輸入姓名" type="text"></div>
                        <div class="item-title">*性別</div>
                        <div class="radio-box">
                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="male" name="drone" value="male" checked>
                                <label for="male">男性</label>
                            </div>

                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="female" name="drone" value="female">
                                <label for="female">女性</label>
                            </div>

                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="intersex" name="drone" value="intersex">
                                <label for="intersex">中性</label>
                            </div>
                        </div>
                        <div class="item-title">*生日</div>
                        <div><input class="input" type="date"></div>
                        <div class="item-title">機構</div>
                        <div><input class="input" placeholder="請輸入機構名稱" type="text"></div>
                        <div class="item-title">機構類別</div>
                        <div class="select-container">
                            <select class="select">
                                <option value="">請選擇</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div class="btn-green">儲存</div>
                    </div>
                </div>
            </div>

            <!-- 編輯資料 -->
            <div v-if="isShowEdit" class="popup">
                <div @click="isShowEdit = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">編輯資料</div>
                        <div class="item-title">*帳號</div>
                        <div><input class="input" placeholder="請輸入姓名" type="text"></div>
                        <div class="item-title">*性別</div>
                        <div class="radio-box">
                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="male" name="drone" value="male" checked>
                                <label for="male">男性</label>
                            </div>

                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="female" name="drone" value="female">
                                <label for="female">女性</label>
                            </div>

                            <div class="radio-item">
                                <input class="radio-point" type="radio" id="intersex" name="drone" value="intersex">
                                <label for="intersex">中性</label>
                            </div>
                        </div>
                        <div class="item-title">*生日</div>
                        <div><input class="input" type="date"></div>
                        <div class="item-title">機構</div>
                        <div><input class="input" placeholder="請輸入機構名稱" type="text"></div>
                        <div class="item-title">機構類別</div>
                        <div class="select-container">
                            <select class="select">
                                <option value="">請選擇</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div class="btn-green">儲存</div>
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

        </div>
    </NuxtLayout>
</template>

<script setup>

const dataAll = reactive([
  { account: 'user1@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user2@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user3@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user4@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user5@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user6@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user7@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user8@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
  { account: 'user9@gmail.com', name: 'frank', gender: '女', birth: '1992/02/01', organization: '森林國小', type: '學校', registerTime: '2022/02/03 12:22:11'},
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
    isShowEdit.value = true
    editData.value = row
    console.log(row)
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

.box {
}
</style>