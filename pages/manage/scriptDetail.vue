<template>
    <NuxtLayout name="custom">
        <div class="step">
            <div class="step-script-head">
                <nuxt-link to="/manage/script" class="step-script-head-leave">＜- 返回列表</nuxt-link>
                <div class="step-script-head-route">
                    <nuxt-link to="/manage/scriptSetting" class="step-script-head-route2">基本設定</nuxt-link>
                    <nuxt-link to="/manage/scriptDetail" class="step-script-head-route1">詳細內容</nuxt-link>
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
                <div class="step-script-edit-title">詳細內容</div>
                <div v-if="isEdited" @click="isEdited =false" class="step-script-edit-edit">編輯</div>
                <div v-else class="step-script-edit-row2">
                    <div @click="isEdited =true" class="step-script-edit-store">儲存</div>
                    <div @click="isEdited =true" class="step-script-edit-cancel">取消</div>
                </div>
            </div>

            <!-- body content -->
            
            <div v-if="isEdited" class="step-day">
                <div class="step-day-head-row">
                    <div class="step-day-head">第 1 日</div>
                    <div class="step-day-up">^</div>
                </div>

                <div class="step-day-box">
                    <div class="step-day-row3">
                        <div class="step-day-title5">建議時間</div>
                        <div class="step-day-text">10 分鐘</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">帶領方式說明</div>
                        <div class="step-day-text">2. 在課堂上發布第一日的影片:虎兔篇day1。</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">本日劇情</div>
                        <div class="step-day-text">2. 在課堂上發布第一日的影片:虎兔篇day1。</div>
                    </div>
                    <div class="step-day-row3">
                        <div class="step-day-title5">額外資訊</div>
                        <div class="step-day-text">2. 在課堂上發布第一日的影片:虎兔篇day1。</div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">學生問題討論</div>
                        <div class="step-day-green">
                            <div class="step-day-green-row">
                                <div class="step-day-green-question">？</div>
                                <div class="step-day-green-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">A</div>
                                    <div class="step-day-green-head">溫和堅定地制止張萌虎。</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">加分</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">加分</div>
                                </div>
                            </div>
                            <div class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">B</div>
                                    <div class="step-day-green-head">溫和堅定地制止張萌虎。</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">加分</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">加分</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="step-day-row3">
                        <div class="step-day-title5">家長問題討論</div>
                        <div class="step-day-green">
                            <div class="step-day-green-row">
                                <div class="step-day-green-question">？</div>
                                <div class="step-day-green-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">A</div>
                                    <div class="step-day-green-head">溫和堅定地制止張萌虎。</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">加分</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">加分</div>
                                </div>
                            </div>
                            <div class="step-day-green-content">
                                <div class="step-day-green-row2">
                                    <div class="step-day-green-answer">B</div>
                                    <div class="step-day-green-head">溫和堅定地制止張萌虎。</div>
                                </div>
                                <div class="step-day-green-row3">
                                    <div class="step-day-green-sub">秩序：</div>
                                    <div class="step-day-green-text">加分</div>
                                    <div class="step-day-green-sub">關係：</div>
                                    <div class="step-day-green-text">加分</div>
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

            <div v-if="!isEdited" class="step-day">
                <div class="step-day-head-row">
                    <div class="step-day-head-text">第 1 日</div>
                    <div class="step-day-head-up">^</div>
                </div>

                <div class="step-day-box">
                    <div class="step-day-title">*建議進行時間</div>
                    <input class="input step-day-input" placeholder="ex.10 分鐘" type="text">
                    <div class="step-day-title">*帶領方式說明</div>
                    <textarea class="input step-day-textarea" placeholder="ex.10 分鐘" type="text"></textarea>
                    <div class="step-day-title">*本日劇情</div>
                    <textarea class="input step-day-textarea" placeholder="ex.10 分鐘" type="text"></textarea>
                    
                    <div class="step-day-row">
                        <div class="step-day-title3">*額外資訊</div>
                        <div class="step-day-add">＋增加</div>
                    </div>
                    <div class="step-day-row2">
                        <input class="input step-day-input2" placeholder="請輸入說明文字" type="text">
                        <div class="step-day-close">-</div>
                    </div>
                    
                    <!-- 學生 -->
                    <div class="step-day-title2">學生討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*學生討論題目</div>
                        <input class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*學生題目選項</div>
                            <div class="step-day-add">＋增加</div>
                        </div>
                        <div class="step-day-row2">
                            <input class="input step-day-input3" placeholder="請輸入選項描述" type="text">
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
                            <div class="step-day-title3">-</div>
                        </div>
                    </div>

                    <!-- 家長 -->
                    <div class="step-day-title2">家長討論內容</div>
                    <div class="step-day-net">
                        <div class="step-day-title">*家長討論題目</div>
                        <input class="input step-day-input1" placeholder="請輸入題目描述" type="text">
                        <div class="step-day-line"></div>

                        <div class="step-day-row">
                            <div class="step-day-title">*學生題目選項</div>
                            <div class="step-day-add">＋增加</div>
                        </div>
                        <div class="step-day-row2">
                            <input class="input step-day-input3" placeholder="請輸入選項描述" type="text">
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
                            <div class="step-day-close">-</div>
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

const isUsed = ref(false)
const isEdited = ref(true)

</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {

}
</style>