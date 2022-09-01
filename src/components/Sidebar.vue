<template>
  <div class="chat-leftsidebar me-lg-1 ms-lg-0">
    <div class="tab-content">
      <profile />
      <chat />
    </div>
  </div>
</template>

<script setup>
import Profile from "./tab-panel/Profile.vue";
import Chat from "./tab-panel/Chat.vue";
</script>
