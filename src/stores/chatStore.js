import { defineStore } from "pinia";
import chats from '/dummy/chats.json'

export const useChatStore = defineStore({
    id: "chats",
    state: () => ({
        chats: chats,
        my_id: 1,
        selected_chat: null,

    }),
    getters: {

    },
    actions: {
        selectChat(user) {
            this.selected_chat = user;
        },
        messages() {
            return this.chats.filter(chat => (chat.from.id === this.my_id || chat.to.id === this.my_id) && (chat.from.id === this.selected_chat.id || chat.to.id === this.selected_chat.id));
        },
        sendMessage(message) {
            this.chats.push({
                "id": this.chats.length + 1,
                "from": {
                    "id": this.my_id,
                    "name": "jon doe",
                },
                "to": {
                    "id": this.selected_chat.id,
                    "name": this.selected_chat.name,
                },
                "message": message,
                "created_at": new Date().toDateString(),
            });
        }


    },
});
