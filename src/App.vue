<template>
  <router-view></router-view>
</template>

<script setup>
// store import
import { useUiStore } from "@/stores/ui";
import { onBeforeMount, ref, watch } from "vue";
const uiStore = useUiStore();

const currentTime = ref(0);

// update current time in every second
// setInterval(() => {
//   currentTime.value++;
// }, 1000);

// route related thigs
import router from "@/router";

// set shpo open and close time manually when we landing home page
onBeforeMount(() => {
  uiStore.shopClose = "23:59";
  uiStore.shopOpen = "6:00";

  // get current time
  const abc =
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();

  currentTime.value = abc;

  // shop open time in seconds
  const [openHour, openMinute] = uiStore.shopOpen.split(":");
  const shopOpen = openHour * 3600 + openMinute * 60;

  // shop close time in seconds
  const [closeHour, closeMinute] = uiStore.shopClose.split(":");
  const shopClose = closeHour * 3600 + closeMinute * 60;

  if (abc < shopOpen || abc > shopClose) {
    uiStore.isShopClosed = true;
    router.push("/closed");
  }
});

// watch difference of current time and open time - if that is less than 600 seconds, then show notification
// watch(currentTime, (newValue) => {
//   // shop open time in seconds
//   const [openHour, openMinute] = uiStore.shopOpen.split(":");
//   const shopOpen = openHour * 3600 + openMinute * 60;

//   // shop close time in seconds
//   const [closeHour, closeMinute] = uiStore.shopClose.split(":");
//   const shopClose = closeHour * 3600 + closeMinute * 60;

//   if (newValue < shopOpen || newValue > shopClose) {
//     uiStore.isShopClosed = true;
//     router.push("/closed");
//   }
// });
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
