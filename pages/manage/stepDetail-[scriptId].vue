<template>
    <NuxtLayout name="custom">
        <div class="step">
            <!-- header -->
            <div class="step-header">
                <div class="step-header-num">1</div>
                <div class="step-header-head">基本資訊</div>
                <div class="step-header-line"></div>
                <div class="step-header-num step-header-num-current">2</div>
                <div class="step-header-head step-header-head-current">詳細內容</div>
                <div class="step-header-line"></div>
                <div class="step-header-num">3</div>
                <div class="step-header-head">確認內容</div>
            </div>

            <!-- body -->
            <div v-for="dayData, index1 in dataFormList" :key="dayData.period" class="step-day">
                <div @click="toggleContent(dayData.period)" class="step-day-head-row">
                    <div class="step-day-head-text">第 {{ dayData.period }} 日</div>
                    <div class="step-day-head-up">^</div>
                </div>

                <div class="step-day-box" :id="`content-${dayData.period}`">
                    <div class="step-day-title">*建議進行時間(分鐘)</div>
                    <input v-model="dayData.advisoryTime" class="input step-day-input" placeholder="ex.10 分鐘" type="number">
                    <div class="step-day-title">*帶領方式說明</div>
                    <textarea v-model="dayData.description" class="input step-day-textarea" placeholder="ex.
1. 簡介本教材進行方式。
2. 在課堂上發布第一日的影片:虎兔篇day1。
3. 發布虎兔篇「額外資訊」。
4. 發下第一日的學習單，請同學回家填寫。" type="text"></textarea>
                    <div class="step-day-title">*本日劇情</div>
                    <textarea v-model="dayData.todayScript" class="input step-day-textarea" placeholder="請輸入描述內容"
                        type="text"></textarea>

                    <div class="step-day-row">
                        <div class="step-day-title3">*額外資訊</div>
                        <div @click="addOneItem(dayData.period, 'additionalInfo')" class="step-day-add">＋增加</div>
                    </div>
                    <div v-for="info, index2 in dayData.additionalInfo" :key="info.id" class="step-day-row2">
                        <input v-model="info.text" class="input step-day-input2" placeholder="請輸入說明文字" type="text">
                        <div @click="deleteOneItem(dayData.period, 'additionalInfo', info.id)" class="step-day-close">-
                        </div>
                    </div>

                    <!-- 學生 -->
                    <div class="step-day-title2">學生討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*學生討論題目</div>
                        <input v-model="dayData.stuContent" class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*學生題目選項</div>
                            <div @click="addOneItem(dayData.period, 'studentConfigs')" class="step-day-add">＋增加</div>
                        </div>
                        <div v-for="config in dayData.studentConfigs" :key="config.id" class="step-day-row2">
                            <input v-model="config.stuDescription" class="input step-day-input3" placeholder="請輸入選項描述"
                                type="text">
                            <div class="step-day-title3">秩序</div>
                            <div class="step-day-container">
                                <select v-model="config.stuOrderly" class="select">
                                    <option :value="0">計分</option>
                                    <option :value="1">不計分</option>
                                </select>
                            </div>
                            <div class="step-day-title3">關係</div>
                            <div class="step-day-container">
                                <select v-model="config.stuRelation" class="select">
                                    <option :value="0">計分</option>
                                    <option :value="1">不計分</option>
                                </select>
                            </div>
                            <div @click="deleteOneItem(dayData.period, 'studentConfigs', config.id)" class="step-day-close">-
                            </div>
                        </div>
                    </div>

                    <!-- 家長 -->
                    <div class="step-day-title2">家長討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*家長討論題目</div>
                        <input v-model="dayData.parContent" class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*家長題目選項</div>
                            <div @click="addOneItem(dayData.period, 'parentConfigs')" class="step-day-add">＋增加</div>
                        </div>
                        <div v-for="config in dayData.parentConfigs" :key="config.id" class="step-day-row2">
                            <input v-model="config.parDescription" class="input step-day-input3" placeholder="請輸入選項描述" type="text">
                            <div class="step-day-title3">秩序</div>
                            <div class="step-day-container">
                                <select v-model="config.parOrderly" class="select">
                                    <option :value="0">計分</option>
                                    <option :value="1">不計分</option>
                                </select>
                            </div>
                            <div class="step-day-title3">關係</div>
                            <div class="step-day-container">
                                <select v-model="config.parRelation" class="select">
                                    <option :value="0">計分</option>
                                    <option :value="1">不計分</option>
                                </select>
                            </div>
                            <div @click="deleteOneItem(dayData.period, 'parentConfigs', config.id)" class="step-day-close">-</div>
                        </div>
                    </div>

                    <div class="step-day-title2">教材檔案</div>
                    <div class="step-day-net">
                        <div class="step-day-row">
                            <div class="step-day-title3">劇情影片</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">學習單</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">教學簡報</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">額外資訊</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 結局日 -->
            <div class="step-day">
                <div @click="toggleContent(scriptData.scriptPeriod)" class="step-day-head-row">
                    <div class="step-day-head-text">第 {{ scriptData.scriptPeriod }} 日 (結局日)</div>
                    <div class="step-day-head-up">^</div>
                </div>

                <div class="step-day-box" :id="`content-${scriptData.scriptPeriod}`">
                    <div class="step-day-title">*建議進行時間</div>
                    <input class="input step-day-input" placeholder="ex.1 節課" type="text">
                    <div class="step-day-title">*帶領方式說明</div>
                    <textarea class="input step-day-textarea" placeholder="ex.10 分鐘" type="text"></textarea>
                    <div class="step-day-title">*結局二描述 (鴿老師)</div>
                    <textarea class="input step-day-textarea" placeholder="請輸入描述內容" type="text"></textarea>
                    <div class="step-day-title">*結局一描述 (鴞老師)</div>
                    <textarea class="input step-day-textarea" placeholder="請輸入描述內容" type="text"></textarea>
                    <div class="step-day-title">*結局三描述 (鴉老師)</div>
                    <textarea class="input step-day-textarea" placeholder="請輸入描述內容" type="text"></textarea>
                    <div class="step-day-title">*結局四描述 (鷹老師)</div>
                    <textarea class="input step-day-textarea" placeholder="請輸入描述內容" type="text"></textarea>

                    <div class="step-day-title2">結局影片</div>
                    <div class="step-day-net">
                        <div class="step-day-row">
                            <div class="step-day-title3">結局一 (鴞老師) 影片</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">結局二 (鴿老師) 影片</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">結局三 (鴉老師) 影片</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">結局四 (鷹老師) 影片</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                    </div>

                    <div class="step-day-title2">教材檔案</div>
                    <div class="step-day-net">
                        <div class="step-day-row">
                            <div class="step-day-title3">學習單</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">教學簡報</div>
                            <div class="step-day-upload">上傳</div>
                        </div>
                    </div>

                    <div class="step-day-title2">計分設定</div>
                    <div class="step-day-net">
                        <div class="step-day-row">
                            <div class="step-day-title">結局一 (鴞老師)</div>
                            <div class="step-day-row">
                                <div class="step-day-title3">秩序</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                                <div class="step-day-title3">關係</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title">結局二 (鴿老師)</div>
                            <div class="step-day-row">
                                <div class="step-day-title3">秩序</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                                <div class="step-day-title3">關係</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title">結局三 (鴉老師)</div>
                            <div class="step-day-row">
                                <div class="step-day-title3">秩序</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                                <div class="step-day-title3">關係</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title">結局四 (鷹老師)</div>
                            <div class="step-day-row">
                                <div class="step-day-title3">秩序</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                                <div class="step-day-title3">關係</div>
                                <div class="step-day-container">
                                    <select class="select">
                                        <option value="">計分</option>
                                        <option value="volvo">不計分</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="step-day-grey">若計分結果未有正、負面傾向性，則以正面作為結果。</div>

                </div>
            </div>

            <!-- next -->
            <div class="step-next">
                <div @click="sendOut" class="step-next-next">新增</div>
                <!-- <nuxt-link to="/manage/stepInfo" class="step-next-cancel">上一步</nuxt-link>-->
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { getScriptById, uploadDetail } from "~/api/script";
import { ElMessage } from 'element-plus'


const route = useRoute();
const scriptId = route.params.scriptId
const scriptData = reactive({})
const nonEndingDayLength = ref()
const setScriptData = async () => {
    const { data } = await getScriptById(scriptId)
    Object.assign(scriptData, JSON.parse(JSON.stringify(data.value.data)))
    nonEndingDayLength.value = scriptData.scriptPeriod - 1
    console.log('scriptData', scriptData)
    setDetailDataForm()
}
setScriptData()

const sendOut = async () => {
    for (let index = 0; index < dataFormList.length; index++) {
        dataFormList[index].additionalInfo = dataFormList[index].additionalInfo.map(o => o.text)
        dataFormList[index].studentConfigs.forEach(obj => {
            delete obj["id"]
        });
        dataFormList[index].parentConfigs.forEach(obj => {
            delete obj["id"]
        });
        await uploadDetail(dataFormList[index])
    }
    ElMessage({
        message: '新增成功',
        type: 'success',
    })
    //<nuxt-link to="/manage/stepConfirm" class="step-next-next">下一步</nuxt-link>
}

const dataFormList = reactive([])
const setDetailDataForm = () => {
    for (let day = 1; day <= nonEndingDayLength.value; day++) {
        dataFormList.push(
            {
                additionalInfo: [{
                    "text": "",
                    'id': Math.random().toString(36)
                }],//額外資訊
                advisoryTime: 0,//建議時間
                description: "",//帶領方式說明
                parentConfigs: [{
                    "parDescription": "",
                    "parOrderly": 0,
                    "parRelation": 0,
                    'id': Math.random().toString(36)
                }],
                period: day,
                scriptId: parseInt(scriptId, 10),
                studentConfigs: [{
                    "stuDescription": "",
                    "stuOrderly": 0,
                    "stuRelation": 0,
                    'id': Math.random().toString(36)
                }],
                stuContent: "",
                parContent: "",
                todayScript: ""//本日劇情
            }
        )
        console.log("dataFormList", dataFormList)
    }
}

const addOneItem = (day, item) => {
    let dayData = dataFormList.filter(o => o.period == day)[0]
    if (item == 'additionalInfo') {
        dayData.additionalInfo.push({
            "text": "",
            'id': Math.random().toString(36)
        })
    } else if (item == 'studentConfigs') {
        dayData.studentConfigs.push({
            "stuDescription": "",
            "stuOrderly": 0,
            "stuRelation": 0,
            'id': Math.random().toString(36)
        })
    }else if (item == 'parentConfigs') {
        dayData.parentConfigs.push({
            "parDescription": "",
            "parOrderly": 0,
            "parRelation": 0,
            'id': Math.random().toString(36)
        })
    }

}

const deleteOneItem = (day, item, id) => {
    let dayData = dataFormList.filter(o => o.period == day)[0]
    let index = dayData[item].findIndex(item => item.id === id);
    if (dayData[item].length == 1) {
        ElMessage({
            message: '請至少輸入一筆資料！',
            type: 'warning',
        })
    } else {
        if (index !== -1) {
            dayData[item].splice(index, 1);
        }
    }
}

const toggleContent = (id) => {
    var contentElement = document.getElementById(`content-${id}`);
    contentElement.classList.toggle("step-day-box-expanded");
}

</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {}
</style>