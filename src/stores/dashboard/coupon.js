import { defineStore } from "pinia";
import { apiGetCouponList } from "@/api/api.js"

export default defineStore("couponStore", {
    state: () => ({
        coupons: [],
        pagination: {},
    }),
    actions: {
        getCoupons(page = 1) {
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await apiGetCouponList(page)
                    console.log(res);
                    if (res.status === 200) {
                        this.coupons = [...res.data.coupons]
                        this.pagination = { ...res.data.pagination }
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    resolve()
                }
            })
        },
    },
});