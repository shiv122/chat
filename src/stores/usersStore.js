import { defineStore } from "pinia";
import user from '/dummy/user.json'

export const useUserStore = defineStore({
    id: "users",
    state: () => ({
        users: user,

    }),
    getters: {
        activeUsers: (state) => state.users.filter(user => user.status === 'active'),
    },
    actions: {

    },
});
