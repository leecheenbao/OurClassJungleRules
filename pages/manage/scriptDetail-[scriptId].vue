<template>
    <NuxtLayout name="custom">
        <div class="step">
            <div class="step-script-head">
                <nuxt-link to="/manage/script" class="step-script-head-leave">＜- 返回列表</nuxt-link>
                <div class="step-script-head-route">
                    <nuxt-link :to='`/manage/scriptSetting-${scriptId}`' class="step-script-head-route2">基本設定</nuxt-link>
                    <nuxt-link :to='`/manage/scriptDetail-${scriptId}`' class="step-script-head-route1">詳細內容</nuxt-link>
                </div>
                <div class="step-script-head-setting">
                    <div class="step-script-head-sub">啟用狀態：</div>
                    <el-switch v-model="isUsed" @change="statusChange" active-text="開啟" inactive-text="">
                    </el-switch>
                </div>
            </div>

            <!-- body -->
            <div class="step-script-edit-row">
                <div class="step-script-edit-title">詳細內容</div>
                <div v-if="isEdited" @click="isEdited = false" class="step-script-edit-edit">編輯</div>
                <div v-else class="step-script-edit-row2">
                    <div @click="store" class="step-script-edit-store">儲存</div>
                    <div @click="isEdited = true" class="step-script-edit-cancel">取消</div>
                </div>
            </div>

            <!-- body content -->

            <div v-for="detail in scriptDetail" :key="detail.scriptDetilId" v-if="isEdited" class="step-day">
                <div @click="toggleContent(detail.period)" class="step-day-head-row">
                    <div class="step-day-head">第 {{ detail.period }} 日</div>
                    <div class="step-day-up">^</div>
                </div>

                <div class="step-day-box" :id="`content-${detail.period}`">
                    <div class="step-day-row3">
                        <div class="step-day-title5">建議時間</div>
                        <div class="step-day-text">{{ detail.advisoryTime }} 分鐘</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">帶領方式說明</div>
                        <div class="step-day-text">{{ detail.description }}</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">本日劇情</div>
                        <div class="step-day-text">{{ detail.todayScript }}</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">額外資訊</div>
                        <div>
                            <div v-for="info, index in detail.additionalInfo" :key="index" class="step-day-text">資訊{{ index
                            }}
                                {{ info }}</div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">學生問題討論</div>
                        <div class="step-day-green">
                            <div class="step-day-green-row">
                                <div class="step-day-green-question">？</div>
                                <div class="step-day-green-head">{{ detail.stuContent }}</div>
                            </div>
                            <div v-for="config, index in detail.studentConfigs" class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">{{ numberToLetter(index + 1) }}</div>
                                    <div class="step-day-green-head">{{ config.stuDescription }}</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">{{ fractionOption[config.stuOrderly] }}</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">{{ fractionOption[config.stuRelation] }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">家長問題討論</div>
                        <div class="step-day-green">
                            <div class="step-day-green-row">
                                <div class="step-day-green-question">？</div>
                                <div class="step-day-green-head">{{ detail.parContent }} </div>
                            </div>
                            <div v-for="config, index in detail.parentConfigs" class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">{{ numberToLetter(index + 1) }}</div>
                                    <div class="step-day-green-head">{{ config.parDescription }}</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">{{ fractionOption[config.parOrderly] }}</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">{{ fractionOption[config.parRelation] }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">教材檔案</div>
                        <div class="step-day-net">
                            <div class="step-day-row">
                                <div class="step-day-title3">劇情影片</div>
                                <div class="step-day-video">第1日教學影片.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title3">學習單</div>
                                <div class="step-day-video">第1日學習單.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title3">教學簡報</div>
                                <div class="step-day-video">第1日教學簡報.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title3">額外資訊</div>
                                <div class="step-day-video">第1日額外資訊.mp4</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 結局日 -->
            <div v-if="isEdited" class="step-day">
                <div class="step-day-head-row">
                    <div class="step-day-head">第 2 日 (結局日)</div>
                    <div class="step-day-up">^</div>
                </div>

                <div class="step-day-box">
                    <div class="step-day-row3">
                        <div class="step-day-title5">建議時間</div>
                        <div class="step-day-text">10 分鐘</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">帶領方式說明</div>
                        <div class="step-day-text">統計各組學生及家長答案</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">結局一描述 (鴞老師)</div>
                        <div class="step-day-text">統計各組學生及家長答案</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">結局一描述 (鴿老師)</div>
                        <div class="step-day-text">統計各組學生及家長答案</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">結局一描述 (鴉老師)</div>
                        <div class="step-day-text">統計各組學生及家長答案</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">結局一描述 (鷹老師)</div>
                        <div class="step-day-text">統計各組學生及家長答案</div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">結局影片</div>
                        <div class="step-day-net">
                            <div class="step-day-row">
                                <div class="step-day-title">結局一 (鴞老師) 影片</div>
                                <div class="step-day-video">結局一.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局二 (鴿老師) 影片</div>
                                <div class="step-day-video">結局二.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局三 (鴉老師) 影片</div>
                                <div class="step-day-video">結局三.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局四 (鷹老師) 影片</div>
                                <div class="step-day-video">結局四.mp4</div>
                            </div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">教材檔案</div>
                        <div class="step-day-net">
                            <div class="step-day-row">
                                <div class="step-day-title">學習單</div>
                                <div class="step-day-video">學習單.mp4</div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">學習簡報</div>
                                <div class="step-day-video">學習簡報.mp4</div>
                            </div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">計分設定</div>
                        <div class="step-day-net">
                            <div class="step-day-row">
                                <div class="step-day-title">結局一 (鴞老師)</div>
                                <div class="step-day-row2">
                                    <div class="step-day-test2">秩序：</div>
                                    <div class="step-day-test3">正面</div>
                                    <div class="step-day-test2">關係：</div>
                                    <div class="step-day-test3">正面</div>
                                </div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局二 (鴿老師)</div>
                                <div class="step-day-row2">
                                    <div class="step-day-test2">秩序：</div>
                                    <div class="step-day-test3">正面</div>
                                    <div class="step-day-test2">關係：</div>
                                    <div class="step-day-test3">正面</div>
                                </div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局三 (鴉老師)</div>
                                <div class="step-day-row2">
                                    <div class="step-day-test2">秩序：</div>
                                    <div class="step-day-test3">正面</div>
                                    <div class="step-day-test2">關係：</div>
                                    <div class="step-day-test3">正面</div>
                                </div>
                            </div>
                            <div class="step-day-line"></div>
                            <div class="step-day-row">
                                <div class="step-day-title">結局四 (鷹老師)</div>
                                <div class="step-day-row2">
                                    <div class="step-day-test2">秩序：</div>
                                    <div class="step-day-test3">正面</div>
                                    <div class="step-day-test2">關係：</div>
                                    <div class="step-day-test3">正面</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="step-day-grey">若計分結果未有正、負面傾向性，則以正面作為結果。</div>


                </div>
            </div>

            <!-- 編輯狀態 -->

            <div v-for="detail in editScriptDetail" :key="detail.scriptDetilId" v-if="!isEdited" class="step-day">
                <div @click="toggleContent(detail.period + 'edit')" class="step-day-head-row">
                    <div class="step-day-head-text">第 {{ detail.period }} 日</div>
                    <div class="step-day-head-up">^</div>
                </div>

                <div class="step-day-box" :id="`content-${detail.period}edit`">
                    <div class="step-day-title">*建議進行時間</div>
                    <input v-model="detail.advisoryTime" class="input step-day-input" type="number">
                    <div class="step-day-title">*帶領方式說明</div>
                    <textarea v-model="detail.description" class="input step-day-textarea" type="text"></textarea>
                    <div class="step-day-title">*本日劇情</div>
                    <textarea v-model="detail.todayScript" class="input step-day-textarea" type="text"></textarea>

                    <div class="step-day-row">
                        <div class="step-day-title3">*額外資訊</div>
                        <div @click="addOneItem(detail.period, 'additionalInfo')" class="step-day-add">＋增加</div>
                    </div>
                    <div v-for="info in detail.additionalInfo" :key="info.tempId" class="step-day-row2">
                        <input v-model="info.text" class="input step-day-input2" placeholder="請輸入說明文字" type="text">
                        <div @click="deleteOneItem(detail.period, 'additionalInfo', info.tempId)" class="step-day-close">-
                        </div>
                    </div>

                    <!-- 學生 -->
                    <div class="step-day-title2">學生討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*學生討論題目</div>
                        <input v-model="detail.stuContent" class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*學生題目選項</div>
                            <div @click="addOneItem(detail.period, 'studentConfigs')" class="step-day-add">＋增加</div>
                        </div>
                        <div v-for="config in detail.studentConfigs" :key="config.tempId" class="step-day-row2">
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
                            <div @click="deleteOneItem(detail.period, 'studentConfigs', config.tempId)"
                                class="step-day-close">-
                            </div>
                        </div>
                    </div>

                    <!-- 家長 -->
                    <div class="step-day-title2">家長討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*家長討論題目</div>
                        <input v-model="detail.parContent" class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*家長題目選項</div>
                            <div @click="addOneItem(detail.period, 'parentConfigs')" class="step-day-add">＋增加</div>
                        </div>
                        <div v-for="config in detail.parentConfigs" :key="config.tempId" class="step-day-row2">
                            <input v-model="config.parDescription" class="input step-day-input3" placeholder="請輸入選項描述"
                                type="text">
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
                            <div @click="deleteOneItem(detail.period, 'parentConfigs', config.tempId)"
                                class="step-day-close">-</div>
                        </div>
                    </div>

                    <div class="step-day-title2">教材檔案</div>
                    <div class="step-day-net">
                        <div class="step-day-row">
                            <div class="step-day-title3">劇情影片</div>
                            <div @click="chooseFile('drama', detail.period)" class="step-day-upload">上傳</div>
                            <input type="file" :id="`drama-${detail.period}`" style="display: none;" @change="changeFile"
                                :data-period="detail.period" data-ref="drama">
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">學習單</div>
                            <div @click="chooseFile('sheet', detail.period)" class="step-day-upload">上傳</div>
                            <input type="file" :id="`sheet-${detail.period}`" style="display: none;" @change="changeFile"
                                :data-period="detail.period" data-ref="sheet">
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">教學簡報</div>
                            <div @click="chooseFile('bulletin', detail.period)" class="step-day-upload">上傳</div>
                            <input type="file" :id="`bulletin-${detail.period}`" style="display: none;" @change="changeFile"
                                :data-period="detail.period" data-ref="bulletin">
                        </div>
                        <div class="step-day-row">
                            <div class="step-day-title3">額外資訊</div>
                            <div @click="chooseFile('information', detail.period)" class="step-day-upload">上傳</div>
                            <input type="file" :id="`information-${detail.period}`" style="display: none;"
                                @change="changeFile" :data-period="detail.period" data-ref="information">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 結局日 -->
            <div v-if="!isEdited" class="step-day">
                <div class="step-day-head-row">
                    <div class="step-day-head-text">第 2 日 (結局日)</div>
                    <div class="step-day-head-up">^</div>
                </div>

                <div class="step-day-box">
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



        </div>
    </NuxtLayout>
</template>

<script setup>
import { getScriptById, uploadDetail, editScriptById ,uploadFileById} from "~/api/script";
import { ElMessage } from 'element-plus'

const fractionOption = {
    0: "加分",
    1: "不加分"
}
const route = useRoute();
const scriptId = route.params.scriptId
const scriptData = reactive({})
const scriptDetail = reactive([])
const editScriptDetail = reactive([])
const isUsed = ref(false)
const setScriptData = async () => {
    const { data } = await getScriptById(scriptId)
    Object.assign(scriptData, JSON.parse(JSON.stringify(data.value.data)))
    Object.assign(scriptDetail, JSON.parse(JSON.stringify(data.value.data.scriptDetail)))
    Object.assign(editScriptDetail, JSON.parse(JSON.stringify(data.value.data.scriptDetail)))
    console.log("editScriptDetail", editScriptDetail)
    editScriptDetail.forEach(o => {
        let additionalInfoList = []
        o.additionalInfo.forEach(i => additionalInfoList.push(
            {
                text: i,
                tempId: Math.random().toString(36)
            }
        ))
        o.additionalInfo = additionalInfoList
        o.studentConfigs.forEach(i => i.tempId = Math.random().toString(36))
        o.parentConfigs.forEach(i => i.tempId = Math.random().toString(36))
    })

    isUsed.value = scriptData.status == 0
    console.log('scriptData', scriptData)
}
setScriptData()

const addOneItem = (day, item) => {
    let dayData = editScriptDetail.filter(o => o.period == day)[0]
    if (item == 'additionalInfo') {
        dayData.additionalInfo.push({
            "text": "",
            'tempId': Math.random().toString(36)
        })
    } else if (item == 'studentConfigs') {
        dayData.studentConfigs.push({
            "stuDescription": "",
            "stuOrderly": 0,
            "stuRelation": 0,
            'tempId': Math.random().toString(36)
        })
    } else if (item == 'parentConfigs') {
        dayData.parentConfigs.push({
            "parDescription": "",
            "parOrderly": 0,
            "parRelation": 0,
            'tempId': Math.random().toString(36)
        })
    }

}

const deleteOneItem = (day, item, id) => {
    let dayData = editScriptDetail.filter(o => o.period == day)[0]
    let index = dayData[item].findIndex(item => item.tempId === id);
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

const numberToLetter = (number) => {
    if (Number.isInteger(number) && number >= 1 && number <= 26) {
        const charCode = number + 64;
        const letter = String.fromCharCode(charCode);
        return letter;
    } else {
        return number;
    }
}

const statusChange = async () => {
    scriptData.status = isUsed.value ? 0 : 1;
    await editScriptById(scriptId, scriptData)
    await setScriptData()
}

const toggleContent = (id) => {
    var contentElement = document.getElementById(`content-${id}`);
    contentElement.classList.toggle("step-day-box-expanded");
}

const store = async () => {
    isEdited.value = true
    for (let index = 0; index < editScriptDetail.length; index++) {
        editScriptDetail[index].additionalInfo = editScriptDetail[index].additionalInfo.map(o => o.text)
        editScriptDetail[index].studentConfigs.forEach(obj => {
            delete obj["tempId"]
        });
        editScriptDetail[index].parentConfigs.forEach(obj => {
            delete obj["tempId"]
        });
        console.log("store", editScriptDetail[index])
        await uploadDetail(editScriptDetail[index])
    }
    ElMessage({
        message: '儲存成功',
        type: 'success',
    })
    setScriptData()
}

const chooseFile = (ref, period) => {
    const myButton = document.getElementById(`${ref}-${period}`);
    myButton.click();
}


const changeFile = async (el) => {
    const period = el.target.dataset.period;
    const elRef = el.target.dataset.ref;
    const formData = new FormData();
    formData.append('file', el.target.files[0])
    formData.append('description', `${elRef}-${period}`)
    await uploadFileById(scriptId, formData)
    ElMessage({
        message: '上傳成功',
        type: 'success',
    })
}

const isEdited = ref(true)

</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {}
</style>