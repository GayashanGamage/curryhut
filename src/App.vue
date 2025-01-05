<template>
  <router-view></router-view>
</template>

<script setup>
// store import
import { useUiStore } from "@/stores/ui";
import { onBeforeMount } from "vue";
const uiStore = useUiStore();

// route related thigs
import router from "@/router";

// set shpo open and close time manually when we landing home page
onBeforeMount(() => {
  uiStore.shopClose = "22:00";
  uiStore.shopOpen = "15:36";

  // get current time
  const abc =
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();

  // shop open time in seconds
  const [openHour, openMinute] = uiStore.shopOpen.split(":");
  const shopOpen = openHour * 3600 + openMinute * 60;

  if (abc < shopOpen) {
    uiStore.isShopClosed = true;
    router.push("/closed");
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", serif;
}
body {
  background: #efefef;
}
</style>
