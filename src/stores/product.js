import { defineStore } from "pinia";
import loadingStore from "@/stores/loading.js"
import { apiGetProductAll } from "@/api/api";
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
        async getAllProductData() {
            loading.showLoading();
            try {
                const res = await apiGetProductAll();
                console.log(res);
                this.product = Object.values(res.data.products);
            } catch (err) {
                // 驗證失敗
                router.push("/login");
                console.log(err);
            } finally {
                loading.hideLoading();
            }

        },
        setEditData(data) {
            this.editData = { ...data };
        },
    },
});