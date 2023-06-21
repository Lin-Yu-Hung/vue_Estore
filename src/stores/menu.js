import { defineStore } from "pinia";

export default defineStore("menuStore", {
    state: () => ({
        menu: true,
    }),
    getters: {
        menuStatus: (state) => state.menu,
    },
    actions: {
        showMenu() {
            this.menu = true;
        },
        hideMenu() {
            this.menu = false;
        },
        toggleMenu() {
            this.menu = !this.menu;
        },
    },
});