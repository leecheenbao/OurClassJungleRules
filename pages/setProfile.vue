<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="block-box">
                <div class="title">個人資料設定</div>
                <div class="item-title">*姓名</div>
                <div><input class="input" placeholder="請輸入姓名" type="text"></div>
                <div class="item-title">*性別</div>
                <div class="radio-box">
                    <div class="radio-item">
                        <input class="radio-point" type="radio" id="male" name="drone" value="male" checked>
                        <label for="male">男性</label>
                    </div>

                    <div class="radio-item">
                        <input class="radio-point" type="radio" id="female" name="drone" value="female">
                        <label for="female">女性</label>
                    </div>

                    <div class="radio-item">
                        <input class="radio-point" type="radio" id="intersex" name="drone" value="intersex">
                        <label for="intersex">中性</label>
                    </div>
                </div>
                <div class="item-title">*生日</div>
                <div><input class="input" type="date"></div>
                <div class="item-title">機構</div>
                <div><input class="input" placeholder="請輸入機構名稱" type="text"></div>
                <div class="item-title">機構類別</div>
                <div class="select-container">
                    <select class="select">
                        <option value="">請選擇</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="btn-green">完成</div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
console.log("utilities",utilities.getUrlParams())
    
</script>

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';
@import '~/assets/styles/popup.scss';

.box {
    .block-box {
        overflow: auto;
        max-height: none;
    }
}
</style>