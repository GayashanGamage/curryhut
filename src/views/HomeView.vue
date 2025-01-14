<template>
  <main>
    <Menubar></Menubar>
    <div class="space"></div>
    <Mainbanner></Mainbanner>
    <div class="space"></div>
    <Foodtags></Foodtags>
    <div class="space"></div>
    <Foodsection></Foodsection>
    <div class="space"></div>
    <Budgetpack></Budgetpack>
    <div class="space"></div>
    <Footer></Footer>
    <Foodview></Foodview>
    <riceandcurryVue></riceandcurryVue>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import Budgetpack from "@/components/home_page/budgetpack.vue";
import Foodsection from "@/components/home_page/foodsection.vue";
import Foodtags from "@/components/home_page/foodtags.vue";
import Mainbanner from "@/components/home_page/mainbanner.vue";
// popup import
import Foodview from "@/components/popup/foodview.vue";
import riceandcurryVue from "@/components/popup/riceandcurry.vue";
import router from "@/router";
import { useUiStore } from "@/stores/ui";
import axios from "axios";
import { onBeforeMount } from "vue";
const uiStore = useUiStore();

// request main product
onBeforeMount(() => {
  axios
    .get(`${import.meta.env.VITE_url}/customer/`, {
      params: {
        id: "66ff86b140ba8d2eaa1eb88a",
      },
    })
    .then((response) => {
      console.log("successfull");
    })
    .catch((error) => {
      if (error.status === 403) {
        uiStore.shopClose = error.response.data["close_time"];
        uiStore.shopOpen = error.response.data["open_time"];
        router.push("/closed");
      }
    });
});
</script>

<style scoped>
.space {
  height: 30px;
  width: 100vw;
}
</style>
