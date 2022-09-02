import { defineStore } from "pinia";



export const useBasicStore = defineStore({
    id: "basic",
    state: () => ({
        activeTab: "chat",
        theme: window.$cookies.get("theme") || "light",
    }),
    getters: {

    },
    actions: {
        openTab(tab) {
            this.activeTab = tab;
        },
        changeMode(mode) {
            this.theme = mode;
            document.body.setAttribute("data-layout-mode", mode);
            window.$cookies.set("theme", mode);
        }
    },
});
