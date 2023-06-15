<template>
    <NuxtLayout name="custom">
        <div class="mission">
            <div class="mission-head">
                <nuxt-link to="/mission/list" class="mission-head-leave">＜- 返回列表</nuxt-link>
                <div class="mission-head-text">1年二班虎兔篇</div>
                <div @click="isShowEdit = true" class="mission-head-edit">
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
                <div class="mission-head">
                    <div class="mission-head-selected">第 1 日</div>
                    <!-- <div class="mission-head-unselect"></div> -->
                    <div class="mission-head-last">
                        <div>第 2 日</div>
                        <div class="mission-head-hint">(結局日)</div>
                    </div>
                </div>

                <div class="mission-body">
                    <div class="mission-body-head">帶領方式說明</div>
                    <div class="mission-body-text">簡介本教材進行方式。</div>
                    <div class="mission-body-text">在課堂上發布第 1 日的影片: 虎兔篇 Day1。</div>
                    <div class="mission-body-text">發布虎兔篇「額外資訊」。</div>
                    <div class="mission-body-text">發下第一日的學習單，請同學回家填寫。</div>
                    <div class="mission-body-head">建議進行時間</div>
                    <div class="mission-body-text">10分鐘</div>
                    <div class="mission-body-line"></div>

                    <div class="mission-body-head">本日劇情影片</div>
                    <div class="mission-body-video">
                        <div class="mission-body-video-head">虎兔篇 第 1 日</div>
                        <div class="mission-body-video-play">
                            <img class="mission-body-video-img" src="~assets/images/Icon/play.svg" alt="">
                            <div>播放影片</div>
                        </div>
                        <div class="mission-body-video-text">
                            <img class="mission-body-video-img" src="~assets/images/Icon/detail.svg" alt="">
                            <div>閱讀文字版</div>
                        </div>
                        <div class="mission-body-video-text">
                            <img class="mission-body-video-img" src="~assets/images/Icon/download.svg" alt="">
                            <div>影片 QR code 下載</div>
                        </div>
                    </div>

                    <div class="mission-body-row">
                        <div class="mission-body-box">學生問題討論</div>
                        <div class="mission-body-box">家長問題討論</div>
                    </div>

                    <div class="mission-body-row0">
                        <!-- 左側 -->
                        <div class="mission-body-box">
                            <div class="mission-body-box-header">
                                <div class="mission-body-box-question">?</div>
                                <div class="mission-body-box-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">A</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img @click="isShowInfo = true" class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">B</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">C</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                        </div>
                        <!-- 右側 -->
                        <div class="mission-body-box">
                            <div class="mission-body-box-header">
                                <div class="mission-body-box-question">?</div>
                                <div class="mission-body-box-head">如果你是他們的同學，當下你會怎麼做?</div>
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">A</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">B</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                            <div class="mission-body-box-row1">
                                <div class="mission-body-box-row2">
                                    <div class="mission-body-box-answer">C</div>
                                    <div class="mission-body-box-text">溫和堅定地制止張萌虎。</div>
                                </div>
                               <img class="mission-body-box-info" src="~assets/images/Icon/information.svg" alt="">
                            </div>
                        </div>
                    </div>

                    <!-- 額外資訊 -->

                    <div class="mission-body-head2">額外資訊</div>
                    <div class="mission-body-row2">
                        <div class="mission-body-sub">資訊 1</div>
                        <div class="mission-body-text">張萌虎是個靜不下來的孩子，下課時就往操場跑，不是去打球就是去跑步。</div>
                    </div>
                    <div class="mission-body-row2">
                        <div class="mission-body-sub">資訊 2</div>
                        <div class="mission-body-text">在班上的時候，張猛虎總是坐不太住，常常動來動去，右腳也常常在抖。</div>
                    </div>
                    <div class="mission-body-row2">
                        <div class="mission-body-sub">資訊 3</div>
                        <div class="mission-body-text">你曾經問過張萌虎為什麼一直抖腳，他回答你說:「我也不知道!就是忍不住想要抖腳，我有試著不要抖，但就感覺很煩躁、很想生氣。」</div>
                    </div>
                    <div class="mission-body-line"></div>

                    <!-- 本日計分 -->
                    <div class="mission-body-head">本日計分</div>
                    <div class="mission-body-net">
                        <div class="mission-body-text">目前還未填寫分數</div>
                        <div @click="isShowWrite = true" class="mission-body-write">
                            <img class="mission-body-edit" src="~assets/images/Icon/edit.svg" alt="">
                            <div>填寫分數</div>
                        </div>
                    </div>

                    <!-- 計分 -->
                    <div class="mission-count">
                        <div class="mission-count-header">
                            <div class="mission-count-title">學生討論題選項</div>
                            <div class="mission-count-row">
                                <div class="mission-count-text">數量</div>
                                <div class="mission-count-text">秩序統計</div>
                                <div class="mission-count-text">關係統計</div>
                            </div>
                        </div>

                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                    </div>
                    <div class="mission-count-sum">
                        <div class="mission-count-sum1">
                            <div class="mission-count-title2">小計</div>
                            <div class="mission-count-num">+5</div>
                        </div>
                        <div class="mission-count-sum2">+3</div>
                    </div>


                    <div class="mission-count">
                        <div class="mission-count-header">
                            <div class="mission-count-title">家長討論題選項</div>
                            <div class="mission-count-row">
                                <div class="mission-count-text">數量</div>
                                <div class="mission-count-text">秩序統計</div>
                                <div class="mission-count-text">關係統計</div>
                            </div>
                        </div>

                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                        <div class="mission-count-row2">
                            <div class="mission-count-choose">
                                <div class="mission-count-sub1">選項 A</div>
                                <div class="mission-count-sub2">秩序效果：+1，關係效果：-2</div>
                            </div>
                            <div class="mission-count-row3">
                                <div class="mission-count-count">2</div>
                                <div class="mission-count-count">+2</div>
                                <div class="mission-count-count">+1</div>
                            </div>
                        </div>
                    </div>
                    <div class="mission-count-sum">
                        <div class="mission-count-sum1">
                            <div class="mission-count-title2">小計</div>
                            <div class="mission-count-num">+5</div>
                        </div>
                        <div class="mission-count-sum2">+3</div>
                    </div>
                    <div class="mission-count-total">
                        <div class="mission-count-total">
                            <div class="mission-count-title3">每日小計</div>
                            <div class="mission-count-num2">+2</div>
                        </div>
                        <div class="mission-count-num3">+4</div>
                    </div>
                    

                    <div class="mission-body-line"></div>

                    <!-- 教材檔案 -->
                    <div class="mission-body-head">教材檔案</div>
                    <div class="mission-body-net2">
                        <div class="mission-body-row3">
                            <div class="mission-body-row4">
                                <div class="mission-body-head3">學習單</div>
                                <img class="mission-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                            <div class="mission-body-row4">
                                <div class="mission-body-head3">教學簡報</div>
                                <img class="mission-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                        </div>
                        <div class="mission-body-line2"></div>
                        <div class="mission-body-row3">
                            <div class="mission-body-row4">
                                <div class="mission-body-head3">額外資訊</div>
                                <img class="mission-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                            <div class="mission-body-row4">
                                <div class="mission-body-head3">本日影片 QR code </div>
                                <img class="mission-body-icon" src="~assets/images/Icon/download.svg" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- day end -->

            <!-- popup -->
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

            <!-- 劇情內容 -->
            <div v-if="isShowInfo" class="popup">
                <div @click="isShowInfo = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">劇情內容</div>
                        <div class="text">某天，在童話國小的叢林班上，事情發生了......</div>
                        <div class="text">砰!一聲巨大的聲響，蓋過下課時教室裡嘈雜的人聲，同學們紛紛轉過頭去尋找聲音的來源。</div>
                        <div class="text">「好痛......」只見嬌小瘦弱的林曉兔跌坐在地上，正撫摸著自己瘀青的膝蓋，一旁是倒掉的課桌椅，看來就是她造成了剛剛那聲巨響。</div>
                        <div class="text">一個龐大的身影突然籠罩著林曉兔，她抬起頭，臉上浮現了害怕的表情。</div>
                        <div class="text">黑影的主人，是身型壯碩的張萌虎，正惡狠狠地瞪著林曉兔，，右腳也不斷地抖著。</div>
                        <div class="text">張萌虎說:「妳很會跑嘛，再跑給我看啊!我看妳現在往哪裡跑?」</div>
                        <div class="text">說完還用力地踹了倒掉的桌子一腳，又發出「砰!」的一聲，教室裡的人們都嚇了一大跳。</div>
                        <div class="text">「等、等一下，」林曉兔微微顫抖地說:「我剛剛只是在開玩笑，我不是故意——」</div>
                        <div class="text">砰!不等林曉兔說玩，張萌虎又踹倒了旁邊一張椅子，林曉兔發出一聲驚恐的尖叫。</div>
                        <div class="text">「開玩笑?」張萌虎咬牙切齒地說著:「所以你是在笑我?妳覺得很好玩、很好笑囉?」</div>
                        <div class="text">林曉兔嚇得低下頭，張萌虎怒吼一聲，又掀翻了一張桌子。同學們你看我、我看你，但一時沒有任何人敢有動作......</div>
                    </div>
                </div>
            </div>

            <!-- 填寫分數 -->
            <div v-if="isShowWrite" class="popup">
                <div @click="isShowWrite = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">劇情內容</div>
                        <div class="mission-pop">
                            <div class="mission-pop-row">
                                <div class="mission-pop-title">第 1 日</div>
                                <div class="mission-pop-add">+ 增加</div>
                            </div>
                            <div class="mission-pop-row2">
                                <div class="mission-pop-answer">學生答案</div>
                                <div class="mission-pop-answer">家長答案</div>
                            </div>
                            <div class="mission-pop-row3">
                                <div class="mission-pop-num">1</div>
                                <select class="select mission-pop-select">
                                    <option value="">請選擇</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select class="select mission-pop-select">
                                    <option value="">請選擇</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <div class="mission-pop-close">-</div>
                            </div>
                            <div class="mission-pop-row3">
                                <div class="mission-pop-num">2</div>
                                <select class="select mission-pop-select">
                                    <option value="">請選擇</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select class="select mission-pop-select">
                                    <option value="">請選擇</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <div class="mission-pop-close">-</div>
                            </div>
                            <div class="mission-pop-confirm">確認</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>

const isShowEdit = ref(false)
const isShowVideo = ref(false)
const isShowInfo = ref(false)
const isShowWrite = ref(false)

</script>

<style lang="scss" scoped>
@import '~/assets/styles/popup.scss';
@import '~/assets/styles/form.scss';
@import '~/assets/styles/manage.scss';
@import '~/assets/styles/table.scss';

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

    &-body {
        width: 928px;
        margin-top: 20px;
    }

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

    // 本日計分

    &-count {
        margin-top: 10px;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 16px;
            background: #333333;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        &-title {
            font-size: 14px;
            color: white;
        }

        &-row {
            display: flex;
        }

        &-row2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            border-bottom: 1px solid #E7E7E7;
            background-color: white;
        }

        &-row3 {
            display: flex;
            align-items: center;
        }

        &-text {
            margin-right: 90px;
            font-size: 14px;
            color: white;
        }

        &-choose {
            
        }

        &-sub1 {
            font-size: 14px;
        }

        &-sub2 {
            margin-top: 4px;
            font-size: 12px;
            color: #666666;
        }

        &-count {
            margin-right: 90px;
            font-size: 14px;
        }

        &-sum {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 0px;
        }

        &-sum1 {
            display: flex;
        }

        &-title2 {
            margin-right: 16px;
        }

        &-num {
            margin-right: 90px;
        }

        &-sum2 {
            margin-right: 100px;
        }

        &-total {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 12px 0px;
            background-color: #008B77;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &-title3 {
            margin-right: 16px;
            font-size: 14px;
            color: white;
        }

        &-num2 {
            margin-right: 90px;
            font-size: 24px;
            color: white;
        }

        &-num3 {
            margin-right: 90px;
            font-size: 24px;
            color: white;
        }

    }

    &-pop {

        &-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-title {
            font-size: 20px;
        }

        &-add {
            color: #008B77;
            font-weight: 700;
            font-size: 14px;
        }

        &-row2 {
            display: flex;
            align-items: center;
            margin-top: 16px;
        }

        &-answer {
            margin: 0px 100px 0px 19px;
            font-size: 14px;
        }

        &-row3 {
            display: flex;
            align-items: center;
            padding: 12px 0px 15px;
            border-bottom: 1px solid #CCCCCC;
        }

        &-select {
            width: 200px;
            margin: 0px 10px;
            padding: 6px;
            font-size: 14px;
            border-radius: 10px;
            background-color: #ebebeb;
        }

        &-num {
            font-size: 14px;
        }

        &-close {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border: 1px solid #008B77;
            border-radius: 100%;
            color: #008B77;
        }

        &-confirm {
            margin-top: 40px;
            padding: 6px 0px;
            text-align: center;
            color: white;
            border-radius: 20px;
            background-color: #008B77;
            cursor: pointer;
        }
    }

}
</style>