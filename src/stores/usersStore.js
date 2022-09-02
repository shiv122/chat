import { defineStore } from "pinia";
import user from '/dummy/user.json'

export const useUserStore = defineStore({
    id: "users",
    state: () => ({
        me: user[0],
        users: user.filter(user => user.id !== 1),

    }),
    getters: {
        activeUsers: (state) => state.users.filter(user => user.status === 'active' && user.id !== state.me.id),
    },
    actions: {

    },
});
