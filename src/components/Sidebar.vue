<template>
  <div class="chat-leftsidebar me-lg-1 ms-lg-0">
    <div class="tab-content">
      <profile-tab />
      <chat-tab />
      <group-tab />
      <contact-tab />
      <user-setting-tab />
    </div>
  </div>
</template>

<script setup>
import ProfileTab from "./tab-panel/ProfileTab.vue";
import ChatTab from "./tab-panel/ChatTab.vue";
import GroupTab from "./tab-panel/GroupTab.vue";
import ContactTab from "./tab-panel/ContactTab.vue";
import UserSettingTab from "./tab-panel/UserSettingTab.vue";
</script>
