<template>
  <div class="chat-leftsidebar me-lg-1 ms-lg-0">
    <div class="tab-content">
      <profile />
      <chat />
      <group />
      <contact />
      <user-setting />
    </div>
  </div>
</template>

<script setup>
import Profile from "./tab-panel/Profile.vue";
import Chat from "./tab-panel/Chat.vue";
import Group from "./tab-panel/Group.vue";
import Contact from "./tab-panel/Contact.vue";
import UserSetting from "./tab-panel/UserSetting.vue";
</script>
