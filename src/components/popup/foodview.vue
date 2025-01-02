<template>
  <div class="main-popup" v-if="uiStore.foodPopup">
    <div class="popup-window" ref="target">
      <img
        :src="foodStore.foodInfo[foodStore.selectedFood].image"
        alt="rice and curry"
        class="image"
      />
      <div class="popup-content">
        <h3 class="window-title">
          {{ foodStore.foodInfo[foodStore.selectedFood].name }}
        </h3>
        <p class="description">
          {{ foodStore.foodInfo[foodStore.selectedFood].description }}
        </p>
        <div class="sub-section">
          <h4 class="section-title">Size</h4>
          <hr class="sub-section-devider" />
          <div class="sub-section-container">
            <button
              v-for="(item, index) in foodStore.foodInfo[foodStore.selectedFood]
                .size"
              :key="item"
              @click="foodStore.selectedPotion = index"
              :class="[
                'action-button',
                foodStore.selectedPotion === index
                  ? 'action-button-select'
                  : '',
              ]"
            >
              {{ item.name }}
            </button>
            <p class="portion">
              {{
                foodStore.foodInfo[foodStore.selectedFood].size[
                  foodStore.selectedPotion
                ].portion
              }}
            </p>
          </div>
        </div>
        <div class="sub-section">
          <h4 class="section-title">Price</h4>
          <hr class="sub-section-devider" />
          <p class="price">
            Rs.
            {{
              foodStore.foodInfo[foodStore.selectedFood].size[
                foodStore.selectedPotion
              ].price
            }}
          </p>
        </div>
        <div class="sub-section">
          <h4 class="section-title">Quantity</h4>
          <hr class="sub-section-devider" />
          <div class="sub-section-container">
            <button
              class="quntity-change"
              @click="order.selectedItemCount += 1"
            >
              +
            </button>
            <p class="quantity">{{ order.selectedItemCount }}</p>
            <button
              class="quntity-change"
              @click="order.selectedItemCount -= 1"
            >
              -
            </button>
          </div>
        </div>
        <button class="cart-button" @click="clossWindow">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFoodStore } from "@/stores/food";
import { useOrderStore } from "@/stores/order";
import { useUiStore } from "@/stores/ui";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
const foodStore = useFoodStore();
const order = useOrderStore();
const uiStore = useUiStore();

// outside click refference
const target = ref(null);

onClickOutside(target, (onclick) => {
  uiStore.foodPopup = false;
});

const clossWindow = () => {
  uiStore.foodPopup = false;
};
</script>

<style scoped>
.main-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.popup-window {
  display: flex;
  width: calc(60% - 24px);
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  border-radius: 6px;
  background: #fff;
  margin-inline: auto;
  margin-top: 100px;
}
.image {
  width: 50%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
.popup-content {
  display: flex;
  width: 45%;
  height: auto;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.window-title {
  color: #000;
  font-size: 22px;
  font-weight: 900;
  text-transform: uppercase;
  align-self: stretch;
}
.description {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  align-self: stretch;
}
.sub-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
}
.sub-section-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}
.section-title {
  color: #c6c2c2;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
}
.sub-section-devider {
  width: 100%;
  height: 1px;
  background: #c6c2c2;
  border: 0px;
}
.sub-section-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
}
.action-button {
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ff5e5e;
  background: #fff;
  color: #ff5e5e;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}
.action-button-select {
  border: 1px solid #ff5e5e;
  background: #ff5e5e;
  color: #fff;
}
.portion {
  color: #ff5e5e;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.price {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.sub-section-container {
  display: flex;
  align-items: center;
  gap: 13px;
}
.quntity-change {
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background: #fff;
  border: 0px;
  color: #000;
  font-size: 27.031px;
  font-weight: 400;
  color: #ff5e5e;
  border: 1px solid #ff5e5e;
}
.quntity-change:hover {
  background: #ff5e5e;
  color: #fff;
}
.quantity {
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.cart-button {
  display: flex;
  height: 36px;
  padding: 5px 85px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 0px;
}
.cart-button:hover {
  background: #ff7878;
}
.cart-button:active {
  background: #ff5e5e;
}
</style>
