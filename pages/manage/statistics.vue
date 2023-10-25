<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="page-title">資料統計</div>
            <div class="row">
                <div class="col age-box">
                    <div class="col-title">用戶年齡分佈</div>
                    <div class="chat-box">
                        <Bar v-if="showAgeChat" id="age-chart-id" :options="chartOptions" :data="ageChartData" />
                    </div>
                </div>
                <div class="col category-box">
                    <div class="col-title">隸屬機構統計</div>
                    <div class="chat-box">
                        <Bar v-if="showCategoryChat" id="category-chart-id" :options="chartOptions" :data="categoryChartData" />
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>
  
<script setup>
import { age, category, login, script, ending } from "~/api/report";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartOptions = {
    responsive: false
}
const categoryChartData = reactive({
    labels: [],
    datasets: [{ data: [],backgroundColor: '#15C0A7',label: '隸屬機構', }]
})
const showCategoryChat = ref(false)
const getCategoryReport = async () => {
    let respond = await category()
    console.log("respond",respond.data.value.data)
    let data = respond.data.value.data.categoryDistributions
    data.forEach(item => {
        categoryChartData.labels.push(item.category)
        categoryChartData.datasets[0].data.push(parseInt(item.count))
    });
    showCategoryChat.value = true
}

const ageChartData = reactive({
    labels: [],
    datasets: [{ data: [],backgroundColor: '#15C0A7',label: '用戶年齡（歲）', }]
})
const showAgeChat = ref(false)
const getAgeReport = async () => {
    let respond = await age()
    let data = respond.data.value.data.ageDistributions
    data.forEach(item => {
        ageChartData.labels.push(item.ageRange)
        ageChartData.datasets[0].data.push(parseInt(item.count))
    });
    showAgeChat.value = true
    console.log("ageChartData", ageChartData)
}


nextTick(() => {
    getAgeReport()
    getCategoryReport()
})

</script>

<style lang="scss" scoped>
@import '~/assets/styles/report.scss';
</style>