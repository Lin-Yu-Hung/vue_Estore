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
          <Form v-slot="{ errors }" class="w-100" @submit="setProduct">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-3">
                    <label for="image" class="form-label">輸入圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="image"
                      placeholder="請輸入圖片連結"
                      v-model="imageUrl"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="uploadImg" class="form-label btn btn-primary"
                      ><font-awesome-icon icon="fa-cloud-upload" />上傳商品主圖
                    </label>
                    <Field
                      name="圖片"
                      @change="uploadImg"
                      id="uploadImg"
                      class="form-control d-none"
                      type="file"
                      :class="{ 'is-invalid': errors['圖片'] }"
                      :rules="{ ext: ['jpg', 'png'] }"
                    />
                    <ErrorMessage class="invalid-feedback" as="p" name="圖片"
                      >僅能上傳 jpg、png檔案
                    </ErrorMessage>
                    <div class="position-relative my-2" v-if="imageUrl">
                      <button
                        type="button"
                        class="btn-close position-absolute top-0"
                        aria-label="Close"
                        @click="imageUrl = ''"
                      ></button>
                      <img :src="imageUrl" :alt="imageUrl" class="img-fluid" />
                    </div>
                  </div>
                  <!-- 延伸技巧，多圖 -->
                  <label for="multipleImg" class="form-label btn btn-success"
                    ><font-awesome-icon
                      icon="fa-file-export"
                    />上傳其他圖片</label
                  >
                  <Field
                    name="圖片"
                    @change="uploadImg"
                    multiple
                    id="multipleImg"
                    class="form-control d-none"
                    type="file"
                    :class="{ 'is-invalid': errors['圖片'] }"
                    :rules="{ ext: ['jpg', 'png'] }"
                  />
                  <ErrorMessage class="invalid-feedback" as="p" name="圖片"
                    >僅能上傳 jpg、png檔案
                  </ErrorMessage>
                  <div class="container-fluid">
                    <div class="row">
                      <div
                        class="col-6 mt-2 position-relative"
                        v-for="img in imageList"
                        :key="img"
                      >
                        <button
                          type="button"
                          class="btn-close position-absolute top-0"
                          aria-label="Close"
                          @click="delImage(img)"
                        ></button>
                        <img :src="img" :alt="img" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <Field
                      id="title"
                      name="標題"
                      type="text"
                      rules="required"
                      class="formInput form-control"
                      :class="{ 'is-invalid': errors['標題'] }"
                      placeHolder="請輸入標題"
                      v-model="data.title"
                    />
                    <ErrorMessage
                      class="text-danger invalid-feedback"
                      name="標題"
                    />
                  </div>

                  <div class="row gx-2">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <Field
                        id="title"
                        name="分類"
                        type="text"
                        rules="required"
                        class="formInput form-control"
                        :class="{ 'is-invalid': errors['分類'] }"
                        placeHolder="請輸入分類"
                        v-model="data.category"
                      />
                      <ErrorMessage
                        class="text-danger invalid-feedback"
                        name="分類"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">單位</label>
                      <Field
                        id="title"
                        name="單位"
                        type="text"
                        rules="required"
                        class="formInput form-control"
                        :class="{ 'is-invalid': errors['單位'] }"
                        placeHolder="請輸入單位"
                        v-model="data.unit"
                      />
                      <ErrorMessage
                        class="text-danger invalid-feedback"
                        name="單位"
                      />
                    </div>
                  </div>

                  <div class="row gx-2">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <Field
                        id="title"
                        name="原價"
                        type="number"
                        rules="required"
                        class="formInput form-control"
                        :class="{ 'is-invalid': errors['原價'] }"
                        placeHolder="請輸入原價"
                        v-model="data.origin_price"
                      />
                      <ErrorMessage
                        class="text-danger invalid-feedback"
                        name="原價"
                      />
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <Field
                        id="title"
                        name="售價"
                        type="number"
                        rules="required"
                        class="formInput form-control"
                        :class="{ 'is-invalid': errors['售價'] }"
                        placeHolder="請輸入售價"
                        v-model="data.price"
                      />
                      <ErrorMessage
                        class="text-danger invalid-feedback"
                        name="售價"
                      />
                    </div>
                  </div>
                  <hr />

                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <Field
                      as="textarea"
                      name="產品描述"
                      type="text"
                      rules="required"
                      class="form-control"
                      :class="{ 'is-invalid': errors['產品描述'] }"
                      placeHolder="請輸入產品描述"
                      v-model="data.description"
                    >
                    </Field>
                    <ErrorMessage
                      class="text-danger invalid-feedback"
                      name="產品描述"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="content"
                      placeholder="請輸入產品說明內容"
                      v-model="data.content"
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
                        v-model="data.is_enabled"
                      />
                      <label class="form-check-label" for="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-outline-secondary px-3"
                      data-bs-dismiss="modal"
                    >
                      取消
                    </button>
                    <button type="submit" class="btn btn-dark px-3">
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createProduct, apiUploadImg } from "@/api/api";
import loadingStore from "@/stores/loading";
import { onMounted, nextTick } from "vue";
import { bsModal } from "@/methods/bootstrap.js";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref } from "vue";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
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
    let imageUrl = ref("");
    const imageList = ref([]);
    const data = ref({
      title: "",
      category: "",
      origin_price: "",
      price: "",
      unit: "",
      description: "",
      content: "",
      is_enabled: 1,
      imageUrl: imageUrl.value,
      imagesUrl: [...imageList.value],
    });
    const setProduct = () => {
      console.log(data.value);
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
      }
    };
    const uploadImg = async (event) => {
      const imgLen = event.target.files.length;
      if (imgLen === 0) return;
      loading.showLoading();
      if (imgLen == 1) {
        const formData = new FormData();
        const img = event.target.files[0];
        formData.append("file-to-upload", img);
        try {
          const res = await apiUploadImg(formData);
          console.log(res);
          if (res.status === 200) {
            imageUrl.value = res.data.imageUrl;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const fileList = [...event.target.files];
        const uploadAllFile = fileList.map(async (img) => {
          const formData = new FormData();
          formData.append("file-to-upload", img);
          const res = await apiUploadImg(formData);
          if (res.status === 200) {
            return res.data.imageUrl;
          } else {
            return null;
          }
        });
        const result = await Promise.all(uploadAllFile);
        imageList.value.push(...result);
      }
      loading.hideLoading();
    };
    const delImage = (url) => {
      imageList.value = imageList.value.filter((imgUrl) => imgUrl !== url);
      const multipleImg = document.getElementById("multipleImg");
      // multipleImg.value = "測試";
    };
    onMounted(() => {
      modal = bsModal("setProductModal");
    });
    return {
      data,
      imageUrl,
      imageList,
      setProduct,
      uploadImg,
      delImage,
    };
  },
};
</script>
<style lang=""></style>
