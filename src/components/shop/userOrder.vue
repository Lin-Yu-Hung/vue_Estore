<template>
  <div class="card shadow mt-3 p-3">
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item d-column align-items-end"
        v-for="item in 5"
        :key="item"
      >
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <span class="border-end pe-4"> 訂單編號：A000000001 </span>
          <span class="border-end pe-4 ms-4"> 訂單日期：2024-04-21 </span>
          <span class="border-end pe-4 ms-4"> 品項：3 </span>

          <span class="arrow-text"> 詳細資訊 </span>
        </button>
        <div
          id="collapseOne"
          class="accordion-collapse collapse w-100"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table table-hover">
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
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.accordion-button:focus {
  box-shadow: none;
}
.accordion-button:not(.collapsed) {
  background-color: transparent;
  box-shadow: none;
  border-bottom: 1px solid #dee2e6;
}
.accordion-button {
  border-color: #dee2e6 !important;
}
.arrow-text {
  position: absolute;
  right: 53px; // 根據需要調整位置
  top: 50%;
  transform: translateY(-50%);
}
</style>
