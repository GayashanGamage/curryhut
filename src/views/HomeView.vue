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
    <Footer></Footer>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import Foodsection from "@/components/home_page/foodsection.vue";
import Foodtags from "@/components/home_page/foodtags.vue";
import Mainbanner from "@/components/home_page/mainbanner.vue";
</script>

<style scoped>
.space {
  height: 30px;
  width: 100vw;
}
</style>
