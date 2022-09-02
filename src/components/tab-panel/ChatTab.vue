<script setup>
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed } from "vue";
import { useBasicStore } from "../../stores/basicStore";
import { useUserStore } from "../../stores/usersStore";
import { useChatStore } from "../../stores/chatStore";

const store = useBasicStore();
const userStore = useUserStore();
const chatStore = useChatStore();

const activeUsers = ref(computed(() => userStore.activeUsers));
// console.log(activeUsers.value);
</script>

<template>
  <div
    class="tab-pane"
    :class="{
      'show active': store.activeTab === 'chat',
      fade: store.activeTab !== 'chat',
    }"
    id="pills-chat"
    role="tabpanel"
    aria-labelledby="pills-chat-tab"
  >
    <!-- Start chats content -->
    <div>
      <div class="px-4 pt-4">
        <h4 class="mb-4">Chats</h4>
        <div class="search-box chat-search-box">
          <div class="input-group mb-3 rounded-3">
            <span
              class="input-group-text text-muted bg-light pe-1 ps-3"
              id="basic-addon1"
            >
              <i class="ri-search-line search-icon font-size-18"></i>
            </span>
            <input
              type="text"
              class="form-control bg-light"
              placeholder="Search messages or users"
              aria-label="Search messages or users"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <!-- Search Box-->
      </div>
      <!-- .p-4 -->

      <!-- Start user status -->
      <div class="px-4 pb-4" dir="ltr">
        <swiper :slides-per-view="4" :space-between="10">
          <swiper-slide v-for="activeUser in activeUsers">
            <div class="item" @click="chatStore.selectChat(activeUser)">
              <a href="#" class="user-status-box">
                <div class="avatar-xs mx-auto d-block chat-user-img online">
                  <img
                    :src="activeUser.avatar"
                    alt="user-img"
                    class="img-fluid rounded-circle"
                  />
                  <span class="user-status"></span>
                </div>

                <h5 class="font-size-13 text-truncate mt-3 mb-1">
                  {{ activeUser.name }}
                </h5>
              </a>
            </div>
          </swiper-slide>
        </swiper>
        <!-- end user status carousel -->
      </div>
      <!-- end user status -->

      <!-- Start chat-message-list -->
      <div>
        <h5 class="mb-3 px-3 font-size-16">Recent</h5>

        <div class="chat-message-list px-2" data-simplebar>
          <ul class="list-unstyled chat-list chat-user-list">
            <li
              v-for="user in userStore.users"
              :class="chatStore.selected_chat.id === user.id ? 'active' : ''"
            >
              <a href="#" @click="chatStore.selectChat(user)">
                <div class="d-flex">
                  <div
                    class="chat-user-img align-self-center me-3 ms-0"
                    :class="{ online: user.status === 'active' }"
                  >
                    <img
                      :src="user.avatar"
                      class="rounded-circle avatar-xs"
                      alt=""
                    />
                    <span class="user-status"></span>
                  </div>

                  <div class="flex-grow-1 overflow-hidden">
                    <h5 class="text-truncate font-size-15 mb-1">
                      {{ user.name }}
                    </h5>
                    <p class="chat-user-message text-truncate mb-0">
                      Hey! there I'm available
                    </p>
                  </div>
                  <div class="font-size-11">05 min</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End chat-message-list -->
    </div>
    <!-- Start chats content -->
  </div>
</template>
