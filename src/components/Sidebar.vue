<template>
  <div class="chat-leftsidebar me-lg-1 ms-lg-0">
    <div class="tab-content">
      <profile />
      <chat />
      <group />
    </div>
  </div>
</template>

<script setup>
import Profile from "./tab-panel/Profile.vue";
import Chat from "./tab-panel/Chat.vue";
import Group from "./tab-panel/Group.vue";
</script>
