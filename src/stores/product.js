import { defineStore } from "pinia";
import loadingStore from "@/stores/loading.js"
import { apiGetAdminProductAll } from "@/api/api";
import { useRouter } from "vue-router";

const router = useRouter()
const loading = loadingStore();

export default defineStore("productStore", {
    state: () => ({
        product: [],
        editData: {},
    }),
    getters: {
        productList: (state) => state.product,
    },
    actions: {
        getAllProductData() {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await apiGetAdminProductAll();
                    console.log(res);
                    this.product = Object.values(res.data.products);
                } catch (err) {
                    // 驗證失敗
                    router.push("/login");
                    console.log(err);
                } finally {
                    resolve()
                }
            })
        },
        setProductList(data) {
            this.product = JSON.parse(JSON.stringify(data))
        },
        setEditData(data) {
            this.editData = { ...data };
        },
    },
});