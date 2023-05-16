<template>
  <div class="box">
    <div class="top-block">
      <div class="text-box">
        <div class="text1">校園與職場霸凌層出不窮</div>
        <div class="text2">在現在網路普及的時代，人與人之間的衝突，<br>
          已成更難解的習題。</div>
      </div>
      <div class="background"></div>
    </div>
    <div class="top-over">
      <div class="layer"></div>
    </div>
    <div class="second-block">
      <div class="item item1">
        <div class="text-box">
          <div class="text1">設計理念</div>
          <div class="text2">受到少子化的影響，學生在家中少有跟手足相處的機會，來到<br>
            學校才開始學習跟同儕互動，面對自己的需求，用本能的生存<br>
            姿態在應對，學生間一定會有衝突，學生們也在衝突間學習如<br>
            何跟他人相處。但若無師長的正向引導，任由同儕間經常發生<br>
            衝突，久了就容易形成霸凌。</div>
        </div>
        <div class="background bg1"></div>
      </div>
      <div class="item">
        <div class="background bg2"></div>
        <div>
          <div class="text-box">
            <div class="text3">近幾年教育現場不斷在推動「反霸凌」，但是缺乏好操作的教<br>
              材供老師使用，老師們僅能依賴自己的經驗，卻經常心有餘而<br>
              力不足，因此阿普蛙設計了這套教材，我們期待從根本來解決<br>
              問題，霸凌者之所以為霸凌者，往往是因為他們想要滿足自身<br>
              需求，卻使用的錯誤的方式來滿足，而造成對他人的傷害而不<br>自知。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-over">
      <div class="layer"></div>
    </div>
  </div>
  <div class="third-block">
    <div class="content-box">
      <div class="title">關於教材</div>
      <div class="text">本教材將以線上形式呈現作為使用，教材將教導學生認識人的「需求」，
        並帶著學生討論及教導他們「適當」滿足需求的方式，<br>我們不只教導孩子方法，我們亦在培養孩子自我覺察及關懷他人的能力，霸凌的發生，往往就是因為有許多冷漠或害怕的旁觀<br>
        者，而使得衝突演變成霸凌，我們期待孩子能夠成為正義的助人者，共創和諧的班級文化。</div>
      <div class="item-box">
        <div class="item">
          <div class="background"></div>
          <div class="item-title">虎兔篇</div>
          <div class="item-content">潛在霸凌者需求:生理需求</div>
          <div class="item-btn">
            <span class="btn-span">劇本介紹</span>
            <span class="arrowIcon">➔</span>
          </div>
        </div>
        <div class="item">
          <div class="background"></div>
          <div class="item-title">虎兔篇</div>
          <div class="item-content">潛在霸凌者需求:生理需求</div>
          <div class="item-btn">
            <span class="btn-span">劇本介紹</span>
            <span class="arrowIcon">➔</span>
          </div>
        </div>
        <div class="item">
          <div class="background"></div>
          <div class="item-title">虎兔篇</div>
          <div class="item-content">潛在霸凌者需求:生理需求</div>
          <div class="item-btn">
            <span class="btn-span">劇本介紹</span>
            <span class="arrowIcon">➔</span>
          </div>
        </div>
        <div class="item">
          <div class="background"></div>
          <div class="item-title">虎兔篇</div>
          <div class="item-content">潛在霸凌者需求:生理需求</div>
          <div class="item-btn">
            <span class="btn-span">劇本介紹</span>
            <span class="arrowIcon">➔</span>
          </div>
        </div>
      </div>
      <div class="content">每篇長度不同( 2-5 天版本)，可依教學需求選擇。劇本會以每天發布一段故事的方式呈現，並附有選項讓學生回家跟家長討論，隔日回到班上後再和同<br>
        組成員做出選擇。每個選項會有各自的計分，引導劇本走向不同結局。進入結局後，會由老師帶領學生進行最終討論。</div>
    </div>
  </div>
  <getTextbooks></getTextbooks>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;

  .top {
    &-block {
      width: 100%;
      height: 702px;
      background-color: #fffbf4;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-bottom: 21px;

      .text-box {
        margin-right: 7%;

        .text1 {
          font-weight: 700;
          font-size: 48px;
          color: $primary1;
          margin-bottom: 40px;
          letter-spacing: 1.5px;
        }

        .text2 {
          font-weight: 400;
          font-size: 24px;
          color: $text2;
          padding-bottom: 230px;
          letter-spacing: 0.5px;
        }
      }

      .background {
        background-image: url('../assets/images/cover_material.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
        width: 790.04px;
        height: 533px;
      }
    }

    &-over {
      width: 100%;
      height: 106px;
      background-color: $primary3;
      overflow: hidden;
      position: relative;

      .layer {
        position: absolute;
        height: 1500px;
        width: calc(100% * 2);
        left: 50%;
        bottom: 0;
        border-radius: 50%;
        transform: translateX(-50%);
        background-color: #fffbf4;
      }
    }
  }

  .second {
    &-block {
      width: 100%;
      height: 1046px;
      background-color: $primary3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      .item1 {
        border-bottom: 1px solid $primary2;
      }

      .item {
        width: 930px;
        height: 496px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text-box {
          .text1 {
            font-weight: 700;
            font-size: 32px;
            color: $secondary1;
            margin-bottom: 32px;
            letter-spacing: 1.5px;
          }

          .text2 {
            font-weight: 400;
            font-size: 16px;
            color: $secondary2;
            letter-spacing: 0.5px;
          }

          .text3 {
            font-weight: 400;
            font-size: 16px;
            color: $secondary2;
            letter-spacing: 0.5px;
          }
        }

        .background {
          width: 384px;
          height: 384px;

          background-repeat: no-repeat;
          background-size: cover;
          background-position-x: center;
          background-position-y: center;
        }

        .bg1 {
          background-image: url('../assets/images/image1.png');
        }

        .bg2 {
          background-image: url('../assets/images/image2.png');
        }
      }
    }

    &-over {
      width: 100%;
      height: 106px;
      background-color: $background2;
      overflow: hidden;
      //定位
      position: relative;

      .layer {
        position: absolute;
        height: 1500px;
        width: calc(100% * 2);
        left: 50%;
        bottom: 0;
        border-radius: 50%;
        transform: translateX(-50%);
        background-color: $primary3;
      }
    }
  }

  .third {
    &-block {
      width: 100%;
      height: 769px;
      background-color: $background2;
      display: flex;
      justify-content: center;
      align-items: center;

      .content-box {
        width: 1, 164px;
        height: 100%;

        .title {
          font-weight: 700;
          font-size: 32px;
          color: $primary3;
          margin-top: 54px;
          display: flex;
          justify-content: center;
          letter-spacing: 1.5px;
        }

        .text {
          font-weight: 400;
          font-size: 16px;
          color: $text1;
          margin-top: 32px;
          display: flex;
          justify-content: center;
          letter-spacing: 0.5px;
        }

        .item-box {
          margin-top: 30px;
          display: flex;

          .item {
            width: 279px;
            height: 327px;
            background: $secondary2;
            border: 3px solid $border4;
            border-radius: 32px;
            margin-right: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;

            .background {
              background-color: #fffbf4;
              background-image: url('../assets/images/cover_material.png');
              width: 100%;
              height: 175px;
              background-repeat: no-repeat;
              background-size: 110%;
              background-position-x: right;
              background-position-y: bottom;
              border: 1px solid $border3;
            }

            &-title {
              font-weight: 500;
              font-size: 16px;
              color: $text1;
              margin-top: 24px;
              letter-spacing: 0.5px;
            }

            &-content {
              font-weight: 400;
              font-size: 16px;
              color: $text2;
              margin-top: 12px;
              letter-spacing: 0.5px;
            }

            &-btn {
              width: 231px;
              height: 36px;
              background: $primary1;
              border-radius: 50px;
              margin-top: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              cursor: pointer;

              .btn-span {
                font-weight: 700;
                font-size: 14px;
                letter-spacing: 0.5px;
              }

              .arrowIcon {
                font-size: 14px;
                margin-left: 5px;
              }
            }
          }

        }

        .content {
          width: 1164px;
          height: 108px;
          background: $background1;
          border: 3px solid $primary1;
          border-radius: 32px;
          font-weight: 400;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
          letter-spacing: 0.5px;
        }
      }
    }

  }

}
</style>