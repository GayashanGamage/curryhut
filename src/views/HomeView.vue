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
    <Budgetpack v-if="uiStore.bugetPack"></Budgetpack>
    <div class="space"></div>
    <Footer></Footer>
    <Foodview></Foodview>
    <riceandcurryVue v-if="uiStore.riceandcurryPopup"></riceandcurryVue>
  </main>
</template>

<script setup>
// 1️⃣ import necesary packages
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import Budgetpack from "@/components/home_page/budgetpack.vue";
import Foodsection from "@/components/home_page/foodsection.vue";
import Foodtags from "@/components/home_page/foodtags.vue";
import Mainbanner from "@/components/home_page/mainbanner.vue";
// popup import
import Foodview from "@/components/popup/foodview.vue";
import riceandcurryVue from "@/components/popup/riceandcurry.vue";
import { useFoodStore } from "@/stores/food";
import { useUiStore } from "@/stores/ui";
import axios from "axios";
import { onBeforeMount, watch } from "vue"; 

// pinia stores
const uiStore = useUiStore()
const foodStore = useFoodStore();


// 2️⃣ reactive variables

// 3️⃣ computed properties
// 4️⃣ watches


// 5️⃣ lifecycle hooks
onBeforeMount(() => {
  if(foodStore.plainRice == null || foodStore.curry == null || foodStore.ricePack == null){
    foodStore.getFoodList()
  }
})

onBeforeMount(() => {
  if (foodStore.foodInfo === null) {
    foodStore.getAllDeletableFoods()
  }
});

// 6️⃣ methods
</script>

<style scoped>
.space {
  height: 30px;
  width: 100vw;
}
</style>
