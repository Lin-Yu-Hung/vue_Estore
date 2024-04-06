import { defineStore } from "pinia";
import { successToast } from "@/methods/Toast.js";

export default defineStore("cartStore", {
    //在這裡會帶入兩個參數 1.state名稱 2.屬性參數
    state: () => ({
        cartItems: [],
    }),
    getters: {
        cartAmount: (state) => { // 總金額
            if (state.cartItems.length > 0) {
                return state.cartItems.reduce((acc, item) => {
                    acc += parseInt(item.info.price) * parseInt(item.count)
                    return acc
                }, 0)
            } else {
                return null
            }
        },
        cartItemCount: (state) => { // 總數量
            return state.cartItems.reduce((acc, item) => {
                acc += parseInt(item.count)
                return acc
            }, 0)
        },
        cartIndexMap: (state) => {
            return state.cartItems.reduce((acc, item, index) => {
                acc[item.info.id] = index
                return acc
            }, {})
        },
    },
    actions: {
        addItem(item, count = 1) {
            // 待優化
            if (this.cartIndexMap[item.id] !== undefined) {
                //如果該商品已存在購物車
                this.cartItems[this.cartIndexMap[item.id]].count += count;
            } else {
                this.cartItems.unshift({ info: item, count: count });
            }
            successToast("🚚 已加入購物車");
        },
        delItem(index) {
            this.cartItems.splice(index, 1)
        },
        clearCart() {
            this.cartItems.splice(0)
        },
        changeItemCount(index, count) {
            this.cartItems[index].count = count;
            console.log(this.cartItems[index].count);
        }
    },
    persist: true,
});
