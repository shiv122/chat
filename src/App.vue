<script setup>
import SideMenu from "./components/SideMenu.vue";
import SideBar from "./components/SideBar.vue";
import ChatSection from "./components/ChatSection.vue";
</script>

<template>
  <div class="layout-wrapper d-lg-flex">
    <side-menu />
    <side-bar />
    <chat-section />
  </div>
</template>
