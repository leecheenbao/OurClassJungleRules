<template>
    <NuxtLayout name="custom">
        <div class="mission">
            <div class="mission-head">
                <nuxt-link to="/mission/list" class="mission-head-leave">＜- 返回列表</nuxt-link>
                <div class="mission-head-text">1年二班虎兔篇</div>
                <div class="mission-head-edit">
                    <img class="mission-head-img" src="~assets/images/Icon/edit.svg" alt="">
                </div>
            </div>

            <div class="mission-basic">
                <div class="mission-basic-bg"></div>
                <div class="mission-basic-row">
                    <div>
                        <div class="mission-basic-head">虎兔篇</div>
                        <div class="mission-basic-sub">教學重點</div>
                        <div class="mission-basic-text">當我們了解每個人的獨特之處，我們可以試著協助他人。</div>
                        <div class="mission-basic-text">讓學生認識有些人會因為不同的生理需求，例如過動症，而難以控制自己的情緒及行為。</div>
                        <div class="mission-basic-sub">給老師的話</div>
                        <div class="mission-basic-text">學生情緒高張時，須提供學生沈澱情緒的時間與空間，另外也不宜在其他同學們面前直接談話，學生會礙於其他同學的眼光，而難以冷靜及理性回應。</div>
                        <div class="mission-basic-text">跟孩子對話時，請保持跟孩子一樣的高度，降低壓迫感、拉近與學生的距離。</div>
                        <div class="mission-basic-text">衝突事件發生，需給予孩子說明的機會，避免直接判斷，或只聽某一方的說法。</div>
                        <div class="mission-basic-text">面對過動症或較容易衝動的學生，避免只是懲罰，因為他們礙於生理需求，懲罰容易加重他們的挫折感、自信心低落，特別是限制他們的行動，更易適得其反;他們需要獲得更多的活動、消耗精力的空間，因此平時可以給予相關的任務，以提升他們的自信心，亦能使他們產生較高的自我控制感，從中學習控制自己的情緒。</div>
                    </div>
                    <div class="mission-basic-line"></div>
                    <div>
                        <div class="mission-basic-grey">任務狀態</div>
                        <div class="mission-basic-text2">進行中</div>
                        <div class="mission-basic-grey">結束時間</div>
                        <div class="mission-basic-text2">2023/03/11</div>
                        <div class="mission-basic-grey">建立時間</div>
                        <div class="mission-basic-text2">2023/03/01</div>
                    </div>
                </div>
            </div>

            <div class="mission-desc">
                <div class="mission-desc-row">
                    <img class="mission-desc-img" src="~assets/images/Icon/notice.svg" alt="">
                    <div class="mission-desc-pre">前導說明</div>
                </div>
                <div class="mission-desc-text">本教材會使用 2 日。</div>
                <div class="mission-desc-text">回家後要跟家長討論選項，隔天要在班上討論。</div>
                <div class="mission-desc-text">討論出來的選項會影響結局。</div>
                <div class="mission-desc-text">結局有 4 種，每種會以不同老師出面處理的方式呈現。</div>
                <div class="mission-desc-text">可以試著想想看，故事中的主角們分別有哪些感受及需求。</div>
            </div>

            <div class="mission-day">
                <div class="mission-day-head">
                    <div class="mission-day-head-selected">第 1 日</div>
                    <!-- <div class="mission-day-head-unselect"></div> -->
                    <div class="mission-day-head-last">
                        <div>第 2 日</div>
                        <div class="mission-day-head-hint">(結局日)</div>
                    </div>
                </div>

                <div class="mission-day-body">
                    <div class="mission-day-body-head">帶領方式說明</div>
                    <div class="mission-day-body-text">簡介本教材進行方式。</div>
                    <div class="mission-day-body-text">在課堂上發布第 1 日的影片: 虎兔篇 Day1。</div>
                    <div class="mission-day-body-text">發布虎兔篇「額外資訊」。</div>
                    <div class="mission-day-body-text">發下第一日的學習單，請同學回家填寫。</div>
                    <div class="mission-day-body-head">建議進行時間</div>
                    <div class="mission-day-body-text">10分鐘</div>
                    <div class="mission-day-body-line"></div>

                    <div class="mission-day-body-head">本日劇情影片</div>
                    <div class="mission-day-body-video">
                        <div class="mission-day-body-video-head">虎兔篇 第 1 日</div>
                        <div class="mission-day-body-video-play">
                            <img class="mission-day-body-video-img" src="~assets/images/Icon/play.svg" alt="">
                            <div>播放影片</div>
                        </div>
                        <div class="mission-day-body-video-text">
                            <img class="mission-day-body-video-img" src="~assets/images/Icon/detail.svg" alt="">
                            <div>閱讀文字版</div>
                        </div>
                        <div class="mission-day-body-video-text">
                            <img class="mission-day-body-video-img" src="~assets/images/Icon/download.svg" alt="">
                            <div>影片 QR code 下載</div>
                        </div>
                    </div>

                    <div class="mission-day-body-row">
                        <div class="mission-day-body-box">學生問題討論</div>
                        <div class="mission-day-body-box">家長問題討論</div>
                    </div>

                    <div class="mission-day-body-row0">
                        <!-- 左側 -->
                        <div class="mission-day-body-box">
                            <div class="mission-day-body-box-header">
                                <div class="mission-day-body-box-question">?</div>
                                <div class="mission-day-body-box-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">A</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">B</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">C</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                        </div>
                        <!-- 右側 -->
                        <div class="mission-day-body-box">
                            <div class="mission-day-body-box-header">
                                <div class="mission-day-body-box-question">?</div>
                                <div class="mission-day-body-box-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">A</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">B</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-day-body-box-row1">
                                <div class="mission-day-body-box-row2">
                                    <div class="mission-day-body-box-answer">C</div>
                                    <div class="mission-day-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-day-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <!-- 額外資訊 -->

                    <div class="mission-day-body-head2">額外資訊</div>
                    <div class="mission-day-body-row2">
                        <div class="mission-day-body-sub">資訊 1</div>
                        <div class="mission-day-body-text">張萌虎是個靜不下來的孩子，下課時就往操場跑，不是去打球就是去跑步。</div>
                    </div>
                    <div class="mission-day-body-row2">
                        <div class="mission-day-body-sub">資訊 2</div>
                        <div class="mission-day-body-text">在班上的時候，張猛虎總是坐不太住，常常動來動去，右腳也常常在抖。</div>
                    </div>
                    <div class="mission-day-body-row2">
                        <div class="mission-day-body-sub">資訊 3</div>
                        <div class="mission-day-body-text">你曾經問過張萌虎為什麼一直抖腳，他回答你說:「我也不知道!就是忍不住想要抖腳，我有試著不要抖，但就感覺很煩躁、很想生氣。」</div>
                    </div>
                    <div class="mission-day-body-line"></div>

                    <!-- 本日計分 -->
                    <div class="mission-day-body-head">本日計分</div>
                    <div class="mission-day-body-net">
                        <div class="mission-day-body-text">目前還未填寫分數</div>
                        <div class="mission-day-body-write">
                            <img class="mission-day-body-edit" src="~assets/images/Icon/edit.svg" alt="">
                            <div>填寫分數</div>
                        </div>
                    </div>
                    
                    <div class="mission-day-body-line"></div>

                    <!-- 教材檔案 -->
                    <div class="mission-day-body-head">教材檔案</div>
                    <div class="mission-day-body-net2">
                        <div class="mission-day-body-row3">
                            <div class="mission-day-body-row4">
                                <div class="mission-day-body-head3">學習單</div>
                                <img class="mission-day-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                            <div class="mission-day-body-row4">
                                <div class="mission-day-body-head3">教學簡報</div>
                                <img class="mission-day-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                        </div>
                        <div class="mission-day-body-line2"></div>
                        <div class="mission-day-body-row3">
                            <div class="mission-day-body-row4">
                                <div class="mission-day-body-head3">額外資訊</div>
                                <img class="mission-day-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                            <div class="mission-day-body-row4">
                                <div class="mission-day-body-head3">本日影片 QR code </div>
                                <img class="mission-day-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- day end -->

            <!-- popup -->

        </div>
    </NuxtLayout>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// @import '~/assets/styles/popup.scss';
// @import '~/assets/styles/form.scss';
// @import '~/assets/styles/manage.scss';
// @import '~/assets/styles/table.scss';

.mission {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
    background-color: rgb(215, 220, 215);

    &-head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 19px 22px;
        background: white;

        &-leave {
            font-weight: 700;
            color: #008B77;
        }

        &-text {
            font-weight: 700;
            font-size: 20px;
        }

        &-edit {
            padding: 10px;
            border: 1px solid #008B77;
            border-radius: 100%;
        }

        &-img {
            
        }

    }

    // basic

    &-basic {
        width: 928px;
        margin-top: 32px;
        background-color: white;

        &-bg {
            width: 100%;
            height: 145px;
            background-color: beige;
        }

        &-row {
            display: flex;
            justify-content: space-between;
            padding: 32px;
        }

        &-head {
            font-weight: 700;
            font-size: 20px;
        }

        &-sub {
            margin: 16px 0px 4px;
            color: #008B77;
        }

        &-text {
            font-size: 12px;
            color: #666666;
        }

        &-text2 {
            padding: 4px 0px 16px;
            color: #666666;
        }

        &-line {
            width: 1px;
            margin: 0px 24px;
            background-color: #E7E7E7;
        }

        &-grey {
            font-size: 13px;
            color: #999999;
        }
        
    }

    // desc 前導說明

    &-desc {
        width: 928px;
        margin-top: 20px;
        padding: 32px 56px;
        background-color: #FFFBF4;
        border: 3px solid #FFC300;
        border-radius: 32px;

        &-row {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
        }

        &-img {
            
        }

        &-pre {
            margin: 0px 0px 0px 5px;
        }

        &-text {
            font-size: 14px;
            color: #666666;
        }
        
    }

    // 第一日

    &-day {
        width: 928px;
        margin-top: 20px;

        &-head {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: space-between;

            &-selected {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color:#008B77;
                color: white;
            }

            &-last {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top: 4px solid #008B77;
                background-color: white;
            }

            &-hint {
                margin-top: 4px;
                color: #999999;
            }
            
        }

        &-body {
            padding: 8px 32px 32px;
            background-color: white;

            &-head {
                margin: 24px 4px;
                color: #008B77;
            }

            &-text {
                font-size: 14px;
                color: #666666;
            }

            &-line {
                height: 1px;
                margin: 24px 0px;
                background-color: #E7E7E7;
            }

            &-video {
                width: 100%;
                height: 500px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(black, 0.3);

                &-head {
                    font-size: 24px;
                    color: white;
                }

                &-play {
                    display: flex;
                    align-items: center;
                    margin: 24px 0px 8px;
                    padding: 16px 55px;
                    color: white;
                    cursor: pointer;
                }

                &-img {
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                }

                &-text {
                    display: flex;
                    align-items: center;
                    margin: 16px 0px;
                    font-size: 14px;
                    color: #CCCCCC;
                }
                
            }

            &-row {
                width: 100%;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
            }

            &-row0 {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            &-box {
                width: 49%;

                &-header {
                    margin-top: 8px;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    background: #E1E1E1;
                }

                &-question {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    line-height: 20px;
                    text-align: center;
                    background: #008B77;
                    border-radius: 4px;
                    color: white;
                }

                &-head {
                    font-size: 14px;
                }

                &-row1 {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    border-bottom: 1px solid white;
                    background: #EFEFEF;
                }

                &-row2 {
                    display: flex;
                }

                &-answer {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 10px;
                    text-align: center;
                    font-size: 13px;
                    color: #008B77;
                    border: 1px solid #008B77;
                }

                &-text {
                    font-size: 14px;
                }

                &-info {
                    width: 16px;
                    height: 16px;
                }
                
            }

            // 額外資訊

            &-head2 {
                margin: 16px 0px 8px;
                font-size: 14px;
            }

            &-row2 {
                display: flex;
                margin-bottom: 4px;
            }

            &-sub {
                width: 64px;
                font-size: 14px;
            }

            &-net {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px;
                background: #FFFFFF;
                border: 1px solid #E7E7E7;
                border-radius: 12px;
            }

            &-net2 {
                background: #FFFFFF;
                border: 1px solid #E7E7E7;
                border-radius: 12px;
            }

            &-write {
                display: flex;
                align-items: center;
                padding: 8px 12px;
                border-radius: 20px;
                border: 1px solid #008B77;
                font-weight: 700;
                font-size: 14px;
                color: #008B77;
                cursor: pointer;
            }

            &-edit {
                width: 12px;
                height: 12px;
                margin-right: 4px;
            }

            // 本日計分

            // 教材檔案

            &-row3 {
                width: 100%;
                display: flex;
                border-bottom: 1px solid #E7E7E7;
            }

            &-row4 {
                width: 50%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                border-right: 1px solid #E7E7E7;
            }

            &-head3 {
                font-size: 14px;
            }

            &-icon {
                padding: 12px;
                border: 1px solid #008B77;
                border-radius: 100%;
                cursor: pointer;
            }
            
        }
        
    }

}
</style>