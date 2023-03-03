import { defineStore } from 'pinia';

export default defineStore('loadingStore', {//在這裡會帶入兩個參數 1.state名稱 2.屬性參數
    state: () => ({
        isLoading: false
    }),
    getters: {
        loadingStatus: (state) => state.isLoading,
    },
    actions: {
        showLoading() {
            this.isLoading = true
        },
        hideLoading() {
            this.isLoading = false
        }
    }
}) 