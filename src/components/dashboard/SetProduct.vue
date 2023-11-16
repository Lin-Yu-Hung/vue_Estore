<template>
  <div class="card pt-2">
    <h2 class="px-2">建立商品</h2>

    <div class="container-fluid">
      <div class="row border-top">
        <div class="col border-end pt-2">
          <label for="name" class="form-label">是否啟用</label>
          <div class="form-check form-check-inline ms-3 mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="inlineRadio1">是</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">否</label>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">商品名稱</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="請輸入商品名稱"
            />
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="name" class="form-label">分類</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col">
              <label for="name" class="form-label">商品名稱</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="請輸入商品名稱"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="name" class="form-label">商品名稱</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="請輸入商品名稱"
              />
            </div>
            <div class="col">
              <label for="name" class="form-label">商品名稱</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="請輸入商品名稱"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">商品名稱</label>
            <textarea
              rows="3"
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">商品名稱</label>
            <textarea
              rows="3"
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
        <div class="col-4 col-xxxl-3 d-column justify-content-between">
          <div class="pt-2">
            <label class="uploadImg" for="uploadImg" role="button"
              ><div class="d-column">
                <font-awesome-icon
                  class="fs-2 mb-2 me-0 text-secondary"
                  icon="fa-image"
                />
                <p class="text-secondary mb-0">上傳商品圖片</p>
              </div>
            </label>
            <input type="file" class="form-control d-none" id="uploadImg" />
          </div>

          <button type="button" class="btn btn-primary my-2">建立商品</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.uploadImg {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 300px;
  border: 2px dashed gray;
  border-radius: 10px;
}
</style>
