<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-xl-5 d-xl-flex">
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
                  <div class="d-flex">
                    <h5 class="fw-bold me-1">$</h5>
                    <h5 class="fw-bold mb-0" :ref="setRef" id="revenue"></h5>
                  </div>

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
                  <div class="d-flex">
                    <h5
                      class="fw-bold mb-0"
                      :ref="setRef"
                      id="memberCount"
                    ></h5>
                    <h5 class="fw-bold ms-1">筆</h5>
                  </div>

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
                  <div class="d-flex">
                    <h5 class="fw-bold mb-0" :ref="setRef" id="orderCount"></h5>
                    <h5 class="fw-bold ms-1">筆</h5>
                  </div>

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
                  <div class="d-flex">
                    <h5 class="fw-bold me-1">$</h5>
                    <h5 class="fw-bold mb-0" :ref="setRef" id="seasonGrow"></h5>
                  </div>

                  <ValueTrend :type="'up'" :value="'13.50'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-7 mt-2 mt-xl-0">
        <div class="card">
          <div class="px-3 py-2 border-bottom">
            <h5 class="fw-semibold text-gray-light m-0">本月銷售排行</h5>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-xl-8">
        <div class="card">
          <div class="px-3 py-2 border-bottom">
            <h5 class="fw-semibold text-gray-light m-0">本周成長比</h5>
          </div>
          <VueEcharts
            ref="revenueChart"
            :option="{
              xAxis: {},
              yAxis: {},
            }"
            style="width: 100%; height: 50vh"
          />
        </div>
      </div>
      <div class="col-xl-4">
        <div class="py-2 border-bottom">
          <h5 class="fw-semibold text-gray-light m-0">最新訂單</h5>
        </div>
        <div class="latest-order">
          <table class="table">
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>金額</th>
                <th>狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in 20" :key="index">
                <td>
                  <a>G0000000{{ item }}</a>
                </td>
                <td>{{ (5000 * item).toLocaleString() }}</td>
                <td>
                  <p
                    class="status-text bg-success fixed-width-80 text-green"
                    v-if="item % 2 === 0"
                  >
                    完成
                  </p>
                  <p
                    class="status-text bg-danger-light fixed-width-80 text-danger"
                    v-else-if="item % 3 === 0"
                  >
                    取消
                  </p>
                  <p
                    class="status-text bg-secondary-light fixed-width-80"
                    v-else
                  >
                    配送中
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="d-center vh-75 align-items-center card shadow mx-2 my-4">
    <VueEcharts :option="option" style="height: 90%; width: 90%" />
  </div> -->
</template>
<script>
import { VueEcharts } from "vue3-echarts";
import { ref, onMounted } from "vue";
import ValueTrend from "@/components/shared/ValueTrend.vue";
import { revenueLineChart } from "@/methods/chartOption/home.js";
import { CountUp } from "countup.js";
// import { init } from "echarts";

export default {
  components: { VueEcharts, ValueTrend },
  setup(props) {
    const countUpRef = ref([]);
    const revenueChart = ref();
    const setRef = (el) => {
      countUpRef.value.push(el);
    };
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
    onMounted(() => {
      const countUpOption = {
        duration: "3",
        enableScrollSpy: true,
      };
      const countMap = {
        seasonGrow: 3680,
        orderCount: 5890,
        memberCount: 3600,
        revenue: 780000,
      };
      countUpRef.value.forEach((el) => {
        const countUp = new CountUp(el, countMap[el.id], countUpOption);
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      });
      setTimeout(() => {
        revenueChart.value.setOption({ ...revenueLineChart });
      }, 10);
    });
    return {
      option,

      revenueChart,
      setRef,
    };
  },
};
</script>
<style lang="scss" scoped>
.latest-order {
  max-height: 50vh;
  overflow: auto;
  table {
    th {
      font-weight: normal;
    }
    tr {
      th:nth-child(2),
      td:nth-child(2) {
        text-align: end;
      }
      td:last-child,
      th:last-child {
        text-align: center;
      }
    }
    tbody {
      tr {
        td:first-child {
          a {
            cursor: pointer;
            color: #6ea8fe;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
