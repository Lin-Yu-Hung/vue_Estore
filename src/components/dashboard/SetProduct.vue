<template>
  <div class="card pt-2">
    <div class="px-2 mb-2 d-between">
      <h2 class="mb-0">{{ isEditStatus ? "修改" : "建立" }}商品</h2>
      <div
        class="input-group w-25 border rounded d-flex align-items-center"
        v-if="isEditStatus"
      >
        <input
          type="text"
          class="form-control border-0 rounded"
          readonly
          role="button"
          placeholder="請選擇編輯商品"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          :value="selectEditProduct ? editDataMap[selectEditProduct].title : ''"
        />
        <font-awesome-icon
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          role="button"
          aria-expanded="false"
          class="me-3"
          icon="fa-chevron-down"
        />
        <div class="dropdown-menu w-100 border-top-0">
          <div class="px-2 pt-1">
            <input
              type="text"
              placeholder="查詢商品名稱"
              class="form-control-sm border rounded w-100"
              v-model="productKeyword"
            />
            <ul class="product-list ps-0 mt-2 mb-0">
              <li
                class="py-1"
                :class="{ active: selectEditProduct === product.id }"
                @click="
                  (selectEditProduct = product.id),
                    setEditData(editDataMap[product.id])
                "
                v-for="product in filterProductList"
                :key="product.id"
                :value="product.id"
              >
                {{ product.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Form
      :class="{ cover: !selectEditProduct && isEditStatus }"
      v-slot="{ errors }"
      class="container-fluid"
      ref="form"
      @submit="setProduct"
    >
      <div class="row border-top">
        <div class="col-md border-end pt-2">
          <label for="name" class="form-label">是否啟用</label>
          <div class="form-check form-check-inline ms-3 mb-3">
            <input
              class="form-check-input"
              type="radio"
              name="is_enable"
              id="is_enableTrue"
              :value="1"
              v-model="data.is_enabled"
              checked
            />
            <label class="form-check-label" for="is_enableTrue" role="button"
              >是</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="is_enable"
              id="is_enableFalse"
              v-model="data.is_enabled"
              :value="2"
            />
            <label class="form-check-label" for="is_enableFalse" role="button"
              >否</label
            >
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">商品名稱</label>
            <Field
              id="title"
              name="商品名稱"
              type="text"
              rules="required"
              class="formInput form-control"
              :class="{ 'is-invalid': errors['商品名稱'] }"
              placeHolder="請輸入商品名稱"
              v-model="data.title"
            />
            <ErrorMessage
              class="text-danger invalid-feedback"
              name="商品名稱"
            />
          </div>
          <div class="row mb-3">
            <div class="col-md mb-3 mb-md-0">
              <label for="category" class="form-label">分類</label>
              <Field
                as="select"
                id="category"
                name="分類"
                rules="required"
                class="form-select"
                :class="{ 'is-invalid': errors['分類'] }"
                v-model="data.category"
              >
                <option selected value="" disabled>請選擇分類</option>
                <option value="衣服">衣服</option>
                <option value="鞋子">鞋子</option>
                <option value="褲子">褲子</option>
                <option value="其他">其他</option>
              </Field>
              <ErrorMessage class="text-danger invalid-feedback" name="分類" />
            </div>
            <div class="col-md">
              <label for="unit" class="form-label">單位</label>
              <Field
                id="unit"
                name="單位"
                type="text"
                rules="required"
                class="formInput form-control"
                :class="{ 'is-invalid': errors['單位'] }"
                placeHolder="請輸入單位"
                v-model="data.unit"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="單位" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md mb-3 mb-md-0">
              <label for="origin_price" class="form-label">原價</label>
              <Field
                id="origin_price"
                name="原價"
                type="number"
                rules="required"
                class="formInput form-control"
                :class="{ 'is-invalid': errors['原價'] }"
                placeHolder="請輸入原價"
                v-model.number="data.origin_price"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="原價" />
            </div>
            <div class="col-md">
              <label for="price" class="form-label">售價</label>
              <Field
                id="price"
                name="售價"
                type="number"
                rules="required"
                class="formInput form-control"
                :class="{ 'is-invalid': errors['售價'] }"
                placeHolder="請輸入售價"
                v-model.number="data.price"
              />
              <ErrorMessage class="text-danger invalid-feedback" name="售價" />
            </div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">產品描述</label>
            <Field
              as="textarea"
              name="產品描述"
              type="text"
              rules="required"
              rows="4"
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
            <label for="name" class="form-label">說明內容</label>
            <textarea
              rows="4"
              class="form-control"
              placeholder="請輸入產品說明內容"
              v-model="data.content"
            ></textarea>
          </div>
        </div>
        <div
          class="col-md-5 col-lg-4 col-xxxl-3 d-column justify-content-between"
        >
          <div class="pt-2">
            <h5 class="my-2">商品主圖</h5>
            <hr class="mt-0 mb-2" />
            <label
              v-if="!imageUrl"
              class="uploadImg template-image mb-3"
              for="uploadImg"
              role="button"
              ><div class="d-column">
                <font-awesome-icon
                  class="fs-2 mb-2 me-0 text-secondary"
                  icon="fa-image"
                />
                <p class="text-secondary mb-0">商品主圖</p>
              </div>
            </label>
            <div class="position-relative my-2" v-else>
              <button
                type="button"
                class="btn-close position-absolute top-0"
                aria-label="Close"
                @click="imageUrl = ''"
              ></button>
              <img class="uploadImg mb-3" :src="imageUrl" :alt="imageUrl" />
            </div>

            <input
              @change="uploadImg"
              id="uploadImg"
              class="form-control d-none"
              type="file"
            />
            <h5 class="my-2">商品附圖</h5>
            <hr class="mt-0 mb-2" />
            <div class="d-flex flex-wrap">
              <template v-if="imageList.length > 0">
                <div
                  class="position-relative"
                  v-for="(img, index) in imageList"
                  :key="img"
                >
                  <button
                    type="button"
                    class="btn-close position-absolute top-0"
                    aria-label="Close"
                    @click="delImage(index)"
                  ></button>
                  <img class="uploadImgs mb-3" :src="img" :alt="img" />
                </div>
              </template>
              <label
                v-for="(item, index) in 5 - imageList.length"
                :key="index"
                class="uploadImgs template-image"
                for="uploadImgs"
                role="button"
                ><div class="d-column">
                  <font-awesome-icon
                    class="fs-4 mb-2 me-0 text-secondary"
                    icon="fa-image"
                  />
                  <p class="text-secondary mb-0">商品附圖</p>
                </div>
              </label>
              <input
                @change="uploadImg($event, 'multiple')"
                type="file"
                class="form-control d-none"
                id="uploadImgs"
                multiple
              />
            </div>
          </div>
          <div class="d-flex mt-3 mb-2">
            <button
              type="button"
              class="btn btn-danger text-white w-50 me-2"
              @click="deleteProduct"
              :disabled="!selectEditProduct"
              v-if="isEditStatus"
            >
              <font-awesome-icon icon="fa-trash-can" class="me-1" />刪除商品
            </button>
            <button
              type="submit"
              class="btn btn-primary flex-grow-1"
              :class="{ 'ms-2': isEditStatus }"
            >
              <font-awesome-icon icon="fa-edit" class="me-1" />{{
                isEditStatus ? "修改" : "建立"
              }}商品
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import {
  createProduct,
  apiUploadImg,
  apiDeleteProduct,
  apiUpdateProduct,
} from "@/api/api";
import {
  errorAlert,
  successAlert,
  deleteWarningAlert,
} from "@/methods/sweetAlert.js";
import loadingStore from "@/stores/loading";
import { onMounted, nextTick } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref, watch, computed } from "vue";
import productStore from "@/stores/product.js";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { uploadImage } from "@/methods/util.js";

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(props, context) {
    let imageUrl = ref("");
    let tempImgFile = ref(null); // 暫存上傳檔案，以便儲存時發送api儲存
    let tempImgFiles = ref([]); // 暫存上傳檔案，以便儲存時發送api儲存
    const imageList = ref([]);
    const data = ref({
      title: "",
      category: "",
      origin_price: 0,
      price: 0,
      unit: "",
      description: "",
      content: "",
      is_enabled: 1,
    });

    const route = useRoute();
    const loading = loadingStore();
    watch(
      () => route.path,
      (value) => {
        isEditStatus.value = route.fullPath === "/dashboard/editProduct";
        reset();
      }
    );
    const selectEditProduct = ref("");
    const productKeyword = ref("");
    const editDataMap = ref({});
    const product = productStore();
    const { productList } = storeToRefs(product); // 取得商品列表
    const isEditStatus = ref(route.fullPath === "/dashboard/editProduct");
    const form = ref(); // form DOM
    const setEditDataMap = () => {
      productList.value.forEach((product) => {
        editDataMap.value[product.id] = product;
      });
    };
    const filterProductList = computed(() => {
      if (productList.value.length > 0) {
        setEditDataMap(); // 每次更新再從組一次資料
        return productList.value.filter((product) => {
          return product.title.match(productKeyword.value);
        });
      } else {
        return [];
      }
    });
    const setEditData = (editData) => {
      data.value = { ...editData };
      imageUrl.value = editData.imageUrl;
      if (editData.imagesUrl) {
        imageList.value = [...editData.imagesUrl];
      } else {
        imageList.value.splice(0);
      }
      selectEditProduct.value = editData.id;
    };
    // 編輯功能
    if (isEditStatus.value) {
      if (productList.value.length === 0) {
        product.getAllProductData().then(() => {
          setEditDataMap();
        });
      } else {
        setEditDataMap();
      }
      if (Object.keys(product.editData).length > 0) {
        // 初次進入編輯頁面且有帶入編輯資料時
        setEditData(product.editData);
        product.setEditData({}); // 設定完後清空資料
      }
    }

    const setProduct = async () => {
      loading.showLoading();
      if (tempImgFile.value !== null) {
        const formData = new FormData();
        formData.append("file-to-upload", tempImgFile.value);
        try {
          const res = await apiUploadImg(formData);
          console.log(res);
          if (res.status === 200) {
            data.value.imageUrl = res.data.imageUrl;
          }
        } catch (error) {
          console.log(error);
        }
        tempImgFile.value = null;
      } else {
        data.value.imageUrl = imageUrl.value;
      }
      console.log(tempImgFiles.value);
      if (tempImgFiles.value.length !== 0) {
        const uploadAllFile = tempImgFiles.value.map(async (img) => {
          const formData = new FormData();
          formData.append("file-to-upload", img);
          try {
            const res = await apiUploadImg(formData);
            if (res.status === 200) {
              return res.data.imageUrl;
            } else {
              return null;
            }
          } catch (error) {
            return null;
          }
        });
        const result = await Promise.all(uploadAllFile);
        const inVaild = result.some((item) => item === null);
        if (!inVaild) {
          data.value.imagesUrl = [...result];
        } else {
          errorAlert("上傳失敗", "請稍後在試或使用其他檔案");
        }
      } else {
        data.value.imagesUrl = [...imageList.value];
      }
      const params = {
        data: { ...data.value },
      };
      console.log("🚀  params:", params);
      const api = isEditStatus.value ? apiUpdateProduct : createProduct;
      const alertTitle = isEditStatus.value ? "編輯" : "建立";
      try {
        const res = await api(params);
        console.log(res);
        if (res.data.success) {
          await product.getAllProductData();
          successAlert(`${alertTitle}成功!`);
          if (!isEditStatus.value) {
            reset();
          }
        } else {
          errorAlert(`${alertTitle}失敗!`);
        }
      } catch (error) {
        errorAlert(`${alertTitle}失敗!`);
        console.log(error);
      } finally {
        loading.hideLoading();
      }
    };
    const uploadImg = async (event, imgType = "main") => {
      const fileList = [...event.target.files];
      const imgLen = event.target.files.length;
      if (imgLen === 0) return;
      if (
        imgType !== "main" &&
        (imgLen > 5 || imgLen + imageList.value.length > 5)
      ) {
        errorAlert("最多上傳5筆檔案");
        return;
      }
      const errorFormat = fileList.some((file) => {
        return (
          !file.type ||
          (file.type !== "image/jpeg" && file.type !== "image/png")
        );
      });
      if (errorFormat) {
        // 錯誤的檔案類型
        loading.hideLoading();
        errorAlert("檔案格式錯誤", "僅能上傳jpg、png類型檔案");
        return;
      }
      loading.showLoading();
      if (imgType == "main") {
        const img = fileList[0];
        try {
          const res = await uploadImage(img);
          imageUrl.value = res.result;
          tempImgFile.value = img;
        } catch (error) {
          errorAlert("上傳失敗", "請稍後在試或使用其他檔案");
        }
      } else {
        const uploadAllFile = fileList.map(async (img) => {
          try {
            const res = await uploadImage(img);
            return res.result;
          } catch (error) {
            return null;
          }
        });
        const result = await Promise.all(uploadAllFile);
        const inVaild = result.some((item) => item === null);
        if (!inVaild) {
          imageList.value.push(...result);
          tempImgFiles.value = [...fileList];
        } else {
          errorAlert("上傳失敗", "請稍後在試或使用其他檔案");
        }
      }
      loading.hideLoading();
    };
    const delImage = (index) => {
      imageList.value.splice(index, 1);
    };
    const deleteProduct = async () => {
      const result = await deleteWarningAlert(data.value.title);
      if (!result) return;
      loading.showLoading();
      try {
        const res = await apiDeleteProduct(data.value.id);
        console.log(res);
        if (res.data.success) {
          await product.getAllProductData();
          successAlert("刪除成功!");
          reset();
        }
      } catch (err) {
        console.log(err);
      } finally {
        loading.hideLoading();
      }
    };
    const reset = async () => {
      data.value = {
        title: "",
        category: "",
        origin_price: 0,
        price: 0,
        unit: "",
        description: "",
        content: "",
        is_enabled: 1,
      };
      imageUrl.value = "";
      imageList.value.splice(0);
      selectEditProduct.value = "";
      setTimeout(() => {
        form.value.resetForm();
      }, 0);
    };

    return {
      data,
      imageUrl,
      imageList,
      isEditStatus,
      filterProductList,
      selectEditProduct,
      productKeyword,
      editDataMap,
      form,
      setProduct,
      uploadImg,
      delImage,
      setEditData,
      deleteProduct,
    };
  },
};
</script>
<style lang="scss" scoped>
form {
  position: relative;
  &.cover::after {
    position: absolute;
    content: "請先選擇編輯商品";
    background-color: black;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.75;
    color: white;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
}

.template-image {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed gray;
  border-radius: 10px;
}

.uploadImg {
  height: 275px;
  max-width: 100%;
}
.uploadImgs {
  max-height: 110px;
  max-width: 110px;
  height: 110px;
  width: 110px;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  @media screen and (max-width: 1400px) {
    max-height: 100px;
    max-width: 100px;
    height: 100px;
    width: 100px;
  }
}
.dropdown-menu {
  width: calc(100%);
  transform: translate3d(0px, 38px, 0px) !important;
}
.product-list {
  max-height: 350px;
  overflow: auto;
  li {
    cursor: pointer;
    &.active {
      background-color: rgb(229, 233, 233);
    }
    &:hover {
      background-color: rgb(229, 233, 233);
    }
  }
}
</style>
