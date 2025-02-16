<template>
  <div class="tag-container">
    <div
      v-for="(item, index) in foodStore.categories"
      :key="item.id"
      @click="changeCategory(index, item.id)"
      :class="['tag', foodStore.selectedCategory === index ? 'select' : '']"
    >
      <p class="tag-name">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { useFoodStore } from "@/stores/food";
import axios from "axios";
import { onBeforeMount} from "vue";

// pinia stores 
const foodStore = useFoodStore();


// request all main categories - if categories is null
onBeforeMount(() => {
  foodStore.getAllCategory()
})

// function -----------------------------------------
// change category by it's id
function changeCategory(index, id){
  foodStore.selectedCategory = index
  foodStore.selectedCategoryId = id
  foodStore.selectedFoodCategoryList  = foodStore.foodInfo.filter((food) => food.category_id === id)
}

</script>

<style scoped>
.tag-container {
  display: flex;
  width: 78%;
  padding: 4px 0px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  margin-inline: auto;
}
.tag {
  display: flex;
  width: auto;
  padding: 8px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid #ff5e5e;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.tag:hover {
  background: #ffefef;
  cursor: pointer;
}
.tag-name {
  color: #ff5e5e;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex: 1 0 0;
}
.select {
  border-radius: 20px;
  border: 1px solid #ff5e5e;
  background: #ff5e5e;
}
.select:hover {
  background: #ff5e5e;
}
.select .tag-name {
  color: #fff;
}
</style>
