<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-xl-6 d-xl-flex">
        <div class="row row-cols-1 row-cols-md-2 g-3">
          <div class="col">
            <div class="card card-layout m-0 h-100 card-border-gold">
              <div class="d-column justify-content-between h-100">
                <div class="d-between align-items-center">
                  <div class="d-column">
                    <h5 class="fw-semibold text-gray-light mb-1">營業額</h5>
                    <span class="text-gray-light fs-mini">更新於8小時前</span>
                  </div>
                  <font-awesome-icon
                    class="fs-3 m-0 text-gold"
                    icon="fa-coins"
                    role="button"
                  />
                </div>

                <div class="d-between">
                  <h5 class="fw-bold mb-0">$ 3,240</h5>
                  <ValueTrend :type="'up'" :value="'20.50'" />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-layout m-0 h-100 card-border-blue">
              <div class="d-column justify-content-between h-100">
                <div class="d-between align-items-center">
                  <div class="d-column">
                    <h5 class="fw-semibold text-gray-light mb-1">會員數量</h5>
                    <span class="text-gray-light fs-mini">更新於8小時前</span>
                  </div>
                  <font-awesome-icon
                    class="fs-3 m-0 text-blue"
                    icon="fa-people-group"
                    role="button"
                  />
                </div>

                <div class="d-between mt-3">
                  <h5 class="fw-bold mb-0">$ 3,240</h5>
                  <ValueTrend :type="'up'" :value="'10.54'" />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-layout m-0 h-100 card-border-red">
              <div class="d-column justify-content-between h-100">
                <div class="d-between align-items-center">
                  <div class="d-column">
                    <h5 class="fw-semibold text-gray-light mb-1">訂單數量</h5>
                    <span class="text-gray-light fs-mini">更新於8小時前</span>
                  </div>
                  <font-awesome-icon
                    class="fs-3 m-0 text-red"
                    icon="fa-file-lines"
                    role="button"
                  />
                </div>

                <div class="d-between mt-3">
                  <h5 class="fw-bold mb-0">$ 3,240</h5>
                  <ValueTrend :type="'down'" :value="'15.63'" />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-layout m-0 h-100 card-border-green-light">
              <div class="d-column justify-content-between h-100">
                <div class="d-between align-items-center">
                  <div class="d-column">
                    <h5 class="fw-semibold text-gray-light mb-1">本季成長</h5>
                    <span class="text-gray-light fs-mini">更新於8小時前</span>
                  </div>
                  <font-awesome-icon
                    class="fs-3 m-0 text-green-light"
                    icon="fa-arrow-trend-up"
                    role="button"
                  />
                </div>

                <div class="d-between mt-3">
                  <h5 class="fw-bold mb-0">$ 3,240</h5>
                  <ValueTrend :type="'up'" :value="'13.50'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 mt-2 mt-xl-0">
        <VueEcharts
          :option="revenueOption"
          style="height: 100%; width: 100%; min-height: 325px"
        />
      </div>
    </div>
  </div>
  <div class="d-center vh-75 align-items-center card shadow mx-2 my-4">
    <VueEcharts :option="option" style="height: 90%; width: 90%" />
  </div>
</template>
<script>
import { VueEcharts } from "vue3-echarts";
import { ref } from "vue";
import ValueTrend from "@/components/shared/ValueTrend.vue";
import { revenueLineChart } from "@/methods/chartOption/home.js";
export default {
  components: { VueEcharts, ValueTrend },
  setup(props) {
    const revenueOption = ref({ ...revenueLineChart });
    const option = ref({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["Evaporation", "Precipitation", "Temperature"],
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Precipitation",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value} ml",
          },
        },
        {
          type: "value",
          name: "Temperature",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value} °C",
          },
        },
      ],
      series: [
        {
          name: "Evaporation",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " ml";
            },
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
        {
          name: "Precipitation",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " ml";
            },
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: "Temperature",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " °C";
            },
          },
          data: [
            2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
          ],
        },
      ],
    });
    return {
      option,
      revenueOption,
    };
  },
};
</script>
<style lang="scss" scoped>
// .card {
//   height: 90%;
// }
</style>
