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
            <div class="step-day">
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
            <div class="step-day">
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

            <!-- next -->
            <div class="step-next">
                <nuxt-link  to="/manage/stepConfirm" class="step-next-next">下一步</nuxt-link>
                <nuxt-link  to="/manage/stepInfo" class="step-next-cancel">上一步</nuxt-link>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>


</script>

<style lang="scss" scoped>
@import '~/assets/styles/step.scss';

.box {

}
</style>