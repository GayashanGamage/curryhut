<template>
  <main>
    <Menubar></Menubar>
    <div class="space"></div>
    <Foodsection></Foodsection>
    <div class="space"></div>
    <Footer></Footer>
    <Foodview></Foodview>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import Foodsection from "@/components/home_page/foodsection.vue";

// popup import
import Foodview from "@/components/popup/foodview.vue";
import { useFoodStore } from "@/stores/food";
import { useOrderStore } from "@/stores/order";
import { onMounted, ref, watch } from "vue";

// use stors
const foodStore = useFoodStore();
const orderStore = useOrderStore();

onMounted(() => {
  foodStore.allSelectedCategoryItems = foodStore.foodInfo.filter(
    (item) => item.categoryName === "extra"
  );
});
</script>

<style scoped>
.space {
  height: 30px;
  width: 100vw;
}
</style>
