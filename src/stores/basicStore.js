import { defineStore } from "pinia";

export const useBasicStore = defineStore({
    id: "basic",
    state: () => ({
        activeTab: "chat",
    }),
    getters: {

    },
    actions: {
        openTab(tab) {
            this.activeTab = tab;
        },
    },
});
