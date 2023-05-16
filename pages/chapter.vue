<template>
    <div class="main-box">
        <div class="top-bg"></div>
        <div class="content-box">
            <div class="top-title">虎兔篇</div>
            <div class="explain-box">
                <div class="notice-title">
                    <img class="notice-svg" src="~assets/images/Icon/notice.svg" alt="">
                    <div class="notice">前導說明</div>
                </div>
                <div class="item-box">
                    <ol>
                        <li>本教材會使用 2 日。</li>
                        <li>回家後要跟家長討論選項，隔天要在班上討論。</li>
                        <li>討論出來的選項會影響結局。</li>
                        <li>結局有 4 種，每種會以不同老師出面處理的方式呈現。</li>
                        <li>可以試著想想看，故事中的主角們分別有哪些感受及需求。</li>
                    </ol>
                </div>

            </div>
            <div class="course-box">
                <div class="title-box">
                    <div class="course-title">第 1 日</div>
                    <div class="arrow">
                        <img class="arrow-svg" src="~assets/images/Icon/arrow-up-2.svg" alt="">
                    </div>
                </div>
                <div class="course-content">
                    <div class="course-content-h2">帶領方式說明</div>
                    <div class="illustrate">
                        <ol>
                            <li>簡介本教材進行方式。</li>
                            <li>在課堂上發布第 1 日的影片: 虎兔篇 Day1。</li>
                            <li>發布虎兔篇「額外資訊」。</li>
                            <li>發下第一日的學習單，請同學回家填寫。</li>
                        </ol>
                    </div>
                    <div class="course-content-h2">建議進行時間</div>
                    <div class="item-text">10 分鐘</div>
                    <div class="course-content-h2">劇情影片</div>
                    <div class="player-box">
                        <div class="player">
                            <div class="player-btn">
                                <img class="player-svg" src="~assets/images/Icon/play.svg" alt="">
                                播放影片
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="course-box course-day2">
                <div class="title-box">
                    <div class="course-title">第 2 日</div>
                    <div class="arrow">
                        <img class="arrow-svg" src="~assets/images/Icon/arrow-up-2.svg" alt="">
                    </div>
                </div>
                <div class="course-content">
                    <div class="course-content-h2">帶領方式說明</div>
                    <div class="illustrate">
                        <ol>
                            <li>讓學生分組討論，以組為單位給出選項答案。</li>
                            <li>統計各組學生及家長答案。</li>
                            <li>依照計分結果公結局影片: 結局一 / 二 / 三 / 四。</li>
                            <li>帶領學生進行最終討論。</li>
                        </ol>
                    </div>
                    <div class="course-content-h2">建議進行時間</div>
                    <div class="item-text">1 節課</div>
                </div>
            </div>

            <div class="discuss-box">
                <div>
                    <div class="discuss-title-box">
                        <img class="player-svg" src="~assets/images/Icon/idea.svg" alt="">
                        <div class="discuss-title">關於分組討論</div>
                    </div>
                    <div class="discuss-content">
                        <ol>
                            <li>預計時間約 5 分鐘，各組討論前一日學習單上的學生題，共同決定要選擇哪個選項。</li>
                            <li>有的選項會為小組帶來「額外資訊」，讓該組知曉一些其他組不知道的劇情。</li>
                            <li>家長題的部分，直接以組內最多家長選擇的選項為結果。</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="ending-box">
                <div class="ending-title">關於結局</div>
                <div class="ending-itemBox">
                    <div class="ending-item">
                        <img class="ending-item-img" src="~assets/images/teacher1.png" alt="">
                        <div class="ending-item-title">鴞老師</div>
                        <div class="ending-item-content">
                            兼顧秩序與關係，除了讓學生為自己的行為負責外，也會找出潛在霸凌者背後的需求，並且讓同學們思考要如何以合適的方式滿足需求，是最理想的結局。</div>
                    </div>
                    <div class="ending-item">
                        <img class="ending-item-img" src="~assets/images/teacher2.png" alt="">
                        <div class="ending-item-title">鴿老師</div>
                        <div class="ending-item-content">
                            過度注重關係，但未顧及秩序，以勸和的方式來掩蓋衝突，是一種鄉愿式的結局。</div>
                    </div>
                    <div class="ending-item">
                        <img class="ending-item-img" src="~assets/images/teacher3.png" alt="">
                        <div class="ending-item-title">鴉老師</div>
                        <div class="ending-item-content">
                            不注重秩序，也不顧及關係，讓學生感到痛苦且無所適從，是最糟糕的結局。</div>
                    </div>
                    <div class="ending-item">
                        <img class="ending-item-img" src="~assets/images/teacher4.png" alt="">
                        <div class="ending-item-title">鷹老師</div>
                        <div class="ending-item-content">
                            過度注重秩序，但未顧及關係，以嚴懲的方式來避免失序行為出現，是一種威權式的結局。</div>
                    </div>
                </div>
                <div class="ending-bg"></div>
            </div>
        </div>
        <getTextbooks></getTextbooks>
    </div>
</template>

<style lang="scss" scoped>
.main-box {
    width: 100%;

    .top-bg {
        width: 100%;
        height: 225px;
        background-image: url('../assets/images/script_cover_image.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
    }

    .content-box {
        background: #FFFBF4;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .top-title {
            margin-top: 38px;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            letter-spacing: 1.5px;
            color: $text1;
        }

        .explain-box {
            width: 928px;
            height: 204px;
            background: $secondary2;
            border: 3px solid $secondary1;
            border-radius: 32px;
            margin-top: 32px;
            padding: 32px;

            .notice-title {
                display: flex;
                align-items: center;

                .notice-svg {
                    width: 26.67px;
                    height: 26.67px;
                }

                .notice {
                    font-weight: 500;
                    font-size: 20px;
                    color: $text1;
                    letter-spacing: 1.5px;
                    margin-left: 7px;
                }
            }

            .item-box {
                margin-left: 24px;
                margin-top: 14px;
                font-weight: 400;
                font-size: 14px;
                letter-spacing: 0.5px;
                color: $text2;
            }
        }

        .course-box {
            width: 928px;
            height: 880px;
            margin-top: 32px;
            border-radius: 15px;
            background: $secondary2;
            overflow: hidden;

            .title-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: $background3;
                height: 58px;
                padding: 0 32px;

                .course-title {
                    font-weight: 700;
                    font-size: 20px;
                    letter-spacing: 1.5px;
                    color: $secondary2;
                }
            }

            .course-content {
                padding: 32px;

                &-h2 {
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: 1.5px;
                    color: $primary1;
                    margin-bottom: 4px;
                }

                & .illustrate {
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    color: $text2;
                    margin-left: 20px;
                    margin-bottom: 16px;
                }

                & .item-text {
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    color: $text2;
                    margin-bottom: 16px;
                }

                & .player-box {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                & .player {
                    width: 864px;
                    height: 540px;
                    background-image: url('../assets/images/video_cover.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position-x: center;
                    background-position-y: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &-btn {
                        width: 200px;
                        height: 44px;
                        border-radius: 50px;
                        background: $primary1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: $secondary2;
                        font-weight: 700;
                        font-size: 16px;
                        letter-spacing: 1px;
                        cursor: pointer;
                    }

                    &-svg {
                        margin-right: 3.5px;
                    }
                }
            }


        }

        .course-day2 {
            height: auto;
        }

        .discuss {
            &-box {
                display: flex;
                justify-content: center;
                margin-top: 32px;
                border: 3px solid $border4;
                border-radius: 32px;
                background: $secondary2;
                margin-bottom: 72px;

                &>div {
                    width: 928px;
                    height: 164px;
                    padding: 35px;

                }
            }

            &-title-box {
                display: flex;
                align-items: center;
            }

            &-title {
                font-weight: 500;
                font-size: 20px;
                letter-spacing: 1.5px;
                color: $text1;
                margin-left: 7px;
            }

            &-content {
                font-weight: 400;
                font-size: 14px;
                letter-spacing: 0.5px;
                color: $text2;
                margin-left: 20px;
                margin-top: 14px;
            }
        }

        .ending {
            &-box {
                width: 100%;
                background: $secondary2;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            &-title {
                font-weight: 700;
                font-size: 32px;
                letter-spacing: 1.5px;
                margin-top: 80px;
                display: flex;
                justify-content: center;
                color: $primary1;
                margin-bottom: 24px;
            }

            &-itemBox {
                display: flex;
                justify-content: center;
            }

            &-item {
                display: flex;
                flex-direction: column;
                width: 267px;
                align-items: center;
                margin-right: 32px;
                margin-bottom: 32px;

                &-img {
                    width: 160px;
                    height: 160px;
                    margin-bottom: 24px;
                }

                &-title {
                    font-weight: 500;
                    font-size: 24px;
                    letter-spacing: 0.5px;
                    color: $text1;
                    text-align: center;
                    margin-bottom: 8px;
                }

                &-content {
                    font-weight: 400;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    color: $text2;
                    text-align: center;
                }
            }

            &-bg {
                width: 928px;
                height: 666px;
                background-image: url('../assets/images/result_rules.png');
                background-repeat: no-repeat;
                background-size: cover;
                background-position-x: center;
                background-position-y: center;
                margin-bottom: 80px;
            }
        }

    }
}
</style>