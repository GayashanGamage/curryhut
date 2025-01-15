<template>
  <div class="food-container">
    <h3 class="container-title" v-if="titleToggle">
      {{ foodstore.uniqueCategories[foodstore.selectedCategory] }}
    </h3>
    <h3 class="container-title" v-if="!titleToggle">
      {{ sectionTitile }}
    </h3>
    <hr class="container-devider" />
    <div class="food-section">
      <div
        class="food-item"
        v-for="(item, index) in foodstore.foodInfo"
        :key="item.id"
      >
        <img src="https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp" alt="image-name" class="food-image" />
        <h4 class="food-title">{{ item.name }}</h4>
        <p class="food-price">
          Rs. {{ item.price[foodstore.selectedPotion].portion }}
        </p>
        <button class="action-button" @click="selectFood(item, index)">
          view
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFoodStore } from "@/stores/food";
import { useOrderStore } from "@/stores/order";
import { useUiStore } from "@/stores/ui";
import axios from "axios";
import { onBeforeMount, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

// pinia stores
const orderStore = useOrderStore();
const uiStore = useUiStore();
const foodstore = useFoodStore();

// get data from api - if food info is null
onBeforeMount(() => {
  if (foodstore.foodInfo === null) {
    axios
    .get(`${import.meta.env.VITE_url}/customer/`)
    .then((response) => {
      console.log(response.data);
      if(response.data.availability === false){
        uiStore.mainProductSection = false
      }else if (response.data.availability === true){
        uiStore.mainProductSection = true
        foodstore.foodInfo = response.data.data;
      }
    })
    .catch((error) => {
      if (error.status === 403) {
        uiStore.shopClose = error.response.data["close_time"];
        uiStore.shopOpen = error.response.data["open_time"];
        // route.push("/closed");
      }
    });
  }
});


// select the food item
const selectFood = (item, index) => {
  console.log(item);
  foodstore.selectedFood = index;
  // setting the tempary order item
  orderStore.temparyOrderItem = {
    foodid: item.id,
    name: item.name,
    price: item.size[foodstore.selectedPotion].price,
    quantity: 1,
    size: item.size[foodstore.selectedPotion].name,
  };
  uiStore.foodPopup = true;
};

// const sectionTitile = ref();
// const titleToggle = ref(true);

// set the title for the component
// onBeforeUpdate(() => {
//   if (route.name === "extra") {
//     titleToggle.value = false;
//     sectionTitile.value = "Extra potion";
//   } else if (route.name === "drinks") {
//     titleToggle.value = false;
//     sectionTitile.value = "Drinks";
//   } else if (route.name === "decert") {
//     titleToggle.value = false;
//     sectionTitile.value = "Decerts";
//   } else {
//     titleToggle.value = true;
//     sectionTitile.value =
//       foodstore.uniqueCategories[foodstore.selectedCategory];
//   }
// });
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
  max-width: 250px;
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
