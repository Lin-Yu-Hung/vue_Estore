import { defineStore } from "pinia";

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
        }
    },
    persist: true,
});
