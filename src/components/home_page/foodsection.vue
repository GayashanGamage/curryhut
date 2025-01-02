<template>
  <div class="food-container">
    <h3 class="container-title">Koththu</h3>
    <hr class="container-devider" />
    <div class="food-section">
      <div class="food-item" v-for="item in foodstore.foodInfo" :key="item.id">
        <img :src="item.image" :alt="item.alt" class="food-image" />
        <h4 class="food-title">{{ item.name }}</h4>
        <p class="food-price">
          Rs. {{ item.size[foodstore.selectedPotion].price }}
        </p>
        <button class="action-button" @click="selectFood(item.id)">view</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFoodStore } from "@/stores/food";
import { useUiStore } from "@/stores/ui";

const uiStore = useUiStore();
const foodstore = useFoodStore();

const selectFood = (id) => {
  foodstore.selectedFood = id;
  uiStore.foodPopup = true;
};
</script>
<style scoped>
.food-container {
  display: flex;
  width: 76%;
  padding: 16px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-radius: 4px;
  background: #fff;
  margin-inline: auto;
}
.container-title {
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  align-self: stretch;
}
.container-devider {
  width: 100%;
  height: 1.221px;
  background: #dadada;
  border: 0px;
}
.food-section {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 12px;
  align-self: stretch;
  flex-wrap: wrap;
}
.food-item {
  flex: 1;
  align-self: stretch;
  display: flex;
  gap: 6px;
  align-self: stretch;
  min-width: 200px;
  /* max-width: 250px; */
  height: auto;
  padding: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}
.food-item:hover {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.food-image {
  /* width: 80%; */
  height: auto;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 4px;
}
.food-title {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: stretch;
}
.food-price {
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  align-self: stretch;
}
.action-button {
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  border: 0px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
.food-item:hover .action-button {
  background-color: #ff5e5e;
}
</style>
