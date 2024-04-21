import { defineStore } from "pinia";
import { apiCreateOrder } from "@/api/api.js";
import { errorAlert, successAlert } from "@/methods/sweetAlert.js";

export default defineStore("pendingOrderStore", {
    //在這裡會帶入兩個參數 1.state名稱 2.屬性參數
    state: () => ({
        info: {
            availableCoupon: false,
            selectedCoupon: {}
        },
    }),
    actions: {
        setInfo(data) {
            this.info = JSON.parse(JSON.stringify(data));
        },
        initInfo() {
            this.info = {
                availableCoupon: false,
                selectedCoupon: {}
            };
        },
        createOrder(params) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await apiCreateOrder(params);
                    if (res.data.success) {
                        successAlert("建立訂單成功")
                    }
                    resolve(true)
                } catch (error) {
                    console.log(error);
                    errorAlert("發生錯誤")
                    reject(false)
                }
            })
        }
    },
    persist: true,
});
