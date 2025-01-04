<template>
  <div class="budget-container">
    <img
      src="https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/rice%20and%20curry.webp"
      alt="rice and curry"
      class="image"
    />
    <div class="content">
      <h3 class="title">Budget Pack</h3>
      <p class="description">Rice and curry</p>
      <div class="content-container">
        <div class="content-item" v-for="option in options" :key="option.id">
          <p class="item-description">{{ option.description }}</p>
          <p class="item-price">Rs.{{ option.price }}</p>
          <button
            class="item-action"
            @click="openPopup(option.id, option.special, option.price)"
          >
            Select curries
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from "@/stores/order";
import { useUiStore } from "@/stores/ui";
import { ref } from "vue";
const uiStore = useUiStore();
const orderStore = useOrderStore();

const options = ref([
  {
    id: 1,
    description: "Rice + 3 curry",
    special: "vegitable",
    price: 300,
  },
  {
    id: 2,
    description: "rice + 3 curry + chicken",
    special: "chicken",
    price: 360,
  },
  {
    id: 3,
    description: "rice + 3 curry + fish",
    special: "fich",
    price: 340,
  },
]);

const openPopup = (id, special, price) => {
  uiStore.riceandcurryPopup = true;
  orderStore.temparyOrderItem = {
    itemid: orderStore.order.length + 1,
    foodid: id,
    quantity: 1,
    special: special,
    price: price,
    rice: "white rice",
    curry: [],
  };
};
</script>

<style scoped>
.budget-container {
  display: flex;
  width: 75%;
  padding: 20px 23px;
  justify-content: center;
  align-items: center;
  gap: 74px;
  background: #fff;
  margin-inline: auto;
  height: auto;
}
.image {
  max-width: 250px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}
.content {
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  flex: 1 0 0;
}
.title {
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  align-self: stretch;
}
.description {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  align-self: stretch;
}
.content-container {
  display: flex;
  align-items: center;
  align-content: flex-start;
  gap: 18px;
  flex: 1 0 0;
  align-self: stretch;
  flex-wrap: wrap;
}
.content-item {
  display: flex;
  min-width: 200px;
  max-width: 270px;
  padding: 10px 13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  background: #efefef;
}
.item-description {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: stretch;
}
.item-price {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  align-self: stretch;
}
.item-action {
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  color: #efefef;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex: 1 0 0;
  border: 0px;
}
.item-action:hover {
  background: #fc6d6d;
}
</style>
