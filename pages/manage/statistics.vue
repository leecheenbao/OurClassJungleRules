<template>
    <NuxtLayout name="custom">
        <div class="box">
            <div class="page-title">資料統計</div>
            <div class="row">
                <div class="col login-box">
                    <div class="col-title">近期登入人數</div>
                    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
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

const getLoginReport = async () => {
    let loginReport = await login()
    console.log("loginReport",loginReport)
}

nextTick(() => {
    getLoginReport()
})

// export default {
//     name: 'BarChart',
//     components: { Bar },
//     data() {
//         return {
//             chartData: {
//                 labels: ['January', 'February', 'March'],
//                 datasets: [{ data: [40, 20, 12] }]
//             },
//             chartOptions: {
//                 responsive: true
//             }
//         }
//     }
// }
</script>

<style lang="scss" scoped>@import '~/assets/styles/report.scss';</style>