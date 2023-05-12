<template>
  <div
    class="modal fade modal-xl"
    id="setProductModal"
    tabindex="-1"
    aria-labelledby="setProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ setStatus == "add" ? "新增" : "修改" }}產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control" />
              </div>
              <img class="img-fluid" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                  />
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="setProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createProduct } from "@/api/api";
import loadingStore from "@/stores/loading";
import { onMounted } from "vue";
import { bsModal } from "@/methods/bootstrap.js";

export default {
  props: {
    setStatus: {
      type: String,
    },
  },
  emits: ["updateData"],
  setup(props, context) {
    let modal = "";
    const { emit } = context; // 透過解構的方式取的context裡面的emit方法
    const loading = loadingStore();
    const setProduct = () => {
      loading.showLoading();
      if (props.setStatus == "add") {
        const params = {
          data: {
            title: "[賣]動物園造型衣服5",
            category: "衣服5",
            origin_price: 100,
            price: 300,
            unit: "個",
            description: "Sit down please 名設計師設計",
            content: "這是內容",
            is_enabled: 1,
            imageUrl: "主圖網址",
            imagesUrl: [
              "圖片網址一",
              "圖片網址二",
              "圖片網址三",
              "圖片網址四",
              "圖片網址五",
            ],
          },
        };
        createProduct(params)
          .then((res) => {
            console.log(res);
            modal.hide();
            emit("updateData");
          })
          .catch((err) => {
            console.log(err);
            loading.hideLoading();
          });
      } else {
      }
    };
    onMounted(() => {
      modal = bsModal("setProductModal");
    });
    return {
      setProduct,
    };
  },
};
</script>
<style lang=""></style>
