<template>
  <div class="fourth-block">
    <div class="content-box">
      <div class="text">同時應兼顧師生與學生間的關係，良好的關係能促使學生更樂於學習，且學會與同學
        和睦相處，試著自行解決衝突，有利於未來人際關係發展。</div>
      <div class="btn" @click="isPaidMemberDialogShow = true">立即取得教材</div>
    </div>
  </div>
</template>

<script setup>
let isPaidMemberDialogShow = ref(false)
const closeDialog = () => {
  isPaidMemberDialogShow.value = false
}
</script>

<style lang="scss" scoped>
.fourth {
  &-block {
    width: 100%;
    height: 308px;
    background-color: $primary3;

    @include respond-to('phone') {
      height: auto;
    }

    .content-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .text {
        margin-top: 80px;
        font-weight: 400;
        font-size: 24px;
        color: $secondary2;
        letter-spacing: 0.5px;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 928px;

        @include respond-to('phone') {
          width: 90%;
        }
      }

      .btn {
        margin-top: 32px;
        width: 149px;
        height: 56px;
        background: $secondary1;
        border-radius: 50px;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 1px;
        cursor: pointer;

        @include respond-to('phone') {
          margin-bottom: 80px;
        }
      }
    }

  }
}</style>