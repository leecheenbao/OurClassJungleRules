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

<style lang="scss" scoped>
@import '~/assets/styles/form.scss';

.box {
    background: $background2;
    padding-top: 72px;
    height: 881px;

    .block-box {
        width: 456px;
        background-color: $secondary2;
        box-shadow: 0px 4px 16px rgba(21, 21, 21, 0.3);
        border-radius: 32px;
        padding: 32px;
        align-self: flex-start;
        margin: auto;
        margin-bottom: 32px;
    }

    .radio-box {
        display: flex;
        margin-bottom: 16px;

        .radio-point {
            display: none;
        }

        .radio-item label {
            padding-left: 26px;
            position: relative;
            cursor: pointer;
            font-weight: 400;
            font-size: 14px;
            letter-spacing: 0.5px;
            color: $text2;
        }

        .radio-item label:before {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            border: 1px solid $border2;
            border-radius: 50%;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .radio-item label:after {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $primary1;
            left: 4px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
        }

        .radio-point:checked+label:after {
            display: block;
        }

        .radio-item {
            margin-right: 18px;
        }
    }

    .select {}

    .select-container {
        background: $background2;
        border: 1px solid $border1;
        border-radius: 8px;
        margin-bottom: 32px;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.5px;
        width: 100%;
        height: 36px;
    }

    .select-container {
        position: relative;
        display: inline-block;
    }

    .select-container::after {
        content: "▼";
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        color: $text1;
        font-size: 12px
    }

    .select-container select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        padding: 8px 12px;
        border-radius: 8px;
    }

    .btn-white {
        width: 456px;
        margin: auto;
    }

    .title {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
    }
}
</style>