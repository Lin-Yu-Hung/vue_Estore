import { defineStore } from "pinia";

export default defineStore("cartStore", {
    //在這裡會帶入兩個參數 1.state名稱 2.屬性參數
    state: () => ({
        cartItems: [],
    }),
    getters: {
        cartAmount: (state) => { // 總金額
            if (state.cartItems.length > 0) {
                return state.cartItems.reduce((acc, item) => {
                    acc += item.info.price * item.count
                    return acc
                }, 0)
            } else {
                return null
            }
        },
        cartIndexMap: (state) => {
            return state.cartItems.reduce((acc, item, index) => {
                acc[item.info.id] = index
                return acc
            }, {})
        },
    },
    actions: {
        addItem(item) {
            // 待優化
            if (this.cartIndexMap[item.id] !== undefined) {
                //如果該商品已存在購物車
                this.cartItems[this.cartIndexMap[item.id]].count += 1;
            } else {
                this.cartItems.unshift({ info: item, count: 1 });
            }
        },
        delItem(index) {
            this.cartItems.splice(index, 1)
        }
    },
    persist: true,
});
