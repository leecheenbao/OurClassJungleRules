<template>
  <div class="box">
    <nuxt-link class="title" to="/">
      <div >我們班的叢林法則</div>
    </nuxt-link>
    <div class="item">
      <nuxt-link to="/" class="link" :class="{ 'link-action': routeName == 'index' }">
        首頁
        <div v-if="routeName == 'index'" class="decoration"></div>
      </nuxt-link>
      <div class="link sublink" :class="{ 'link-action': routeName == 'chapter' }">
        劇本介紹 ▾
        <div v-if="routeName == 'chapter'" class="decoration"></div>
        <div class="subbox">
          <div class="arrow"></div>
          <div class="submenu">
            <nuxt-link to="/chapter">
              <div class="subitem">虎兔篇</div>
            </nuxt-link>
            <nuxt-link to="/chapter">
              <div class="subitem">鼠牛篇</div>
            </nuxt-link>
            <nuxt-link to="/chapter">
              <div class="subitem">馬羊篇</div>
            </nuxt-link>
            <nuxt-link to="/chapter">
              <div class="subitem" style="border-bottom: none;">龍虎篇</div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <nuxt-link to="/about" class="link" :class="{ 'link-action': routeName == 'about' }">
        關於阿普蛙
        <div v-if="routeName == 'about'" class="decoration"></div>
      </nuxt-link>
      <nuxt-link to="/connection" class="link" :class="{ 'link-action': routeName == 'connection' }">
        聯絡阿普蛙
        <div v-if="routeName == 'connection'" class="decoration"></div>
      </nuxt-link>
    </div>
    <nuxt-link class="login-box" to="/login">
      <div>登入 / 註冊</div>
    </nuxt-link>
  </div>
</template>

<script setup>
let routeName = ref("")

const route = useRoute();

watch(route, value => {
  routeName.value = route.name
  console.log(routeName.value)
}, { deep: true, immediate: true })
</script>

<style lang="scss" scoped>
.box {
  height: 56px;
  width: 100vw;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid $border3;

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    color: $primary1;
    letter-spacing: 2px;
  }

  .item {
    display: flex;

    .link {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      color: $text3;
      flex-direction: column;
      position: relative;
      cursor: pointer;
      letter-spacing: 1px;
    }

    .link-action {
      color: $text1;
    }

    .decoration {
      position: absolute;
      bottom: -11px;
      width: 100%;
      height: 2px;
      background-color: $primary1;
    }

    .subbox {
      position: absolute;
      top: 18px;
      right: -60px;
      padding-top: 20px;
      display: none;
      z-index: 999;

      .submenu {
        background-color: #fff;
        width: 160px;
        -webkit-box-shadow: 1px 1px 18px 0px rgba(50, 50, 50, 0.33);
        -moz-box-shadow: 1px 1px 18px 0px rgba(50, 50, 50, 0.33);
        box-shadow: 1px 1px 18px 0px rgba(50, 50, 50, 0.33);
        border-radius: 5px;

        & a {
          color: $text2;
          letter-spacing: 0.5px;
          font-weight: 400;
          font-size: 14px;
          width: 100%;
          border-radius: 5px;
        }
      }

      .arrow {
        position: absolute;
        top: 10px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
      }

     
      .subitem {
        width: 100%;
        padding: 8px 12px;
        border-bottom: 1px solid #e5e5e5;
        border-radius: 5px;


        &:hover {
          background-color: #eeeeee;
        }
      }
    }

    .sublink:hover {
      .subbox {
        display: block;
      }
    }
  }

  .login-box {
    margin-left: auto;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 8px 12px;
    width: 100px;
    height: 36px;
    background: $primary1;
    border-radius: 50px;
    color: $secondary2;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
}
</style>