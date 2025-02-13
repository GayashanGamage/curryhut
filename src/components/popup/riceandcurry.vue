<template>
  <div class="background" v-if="uistore.riceandcurryPopup">
    <div class="popup-window" ref="target">
      <div class="content">
        <h3 class="popup-title">{{ foodstore.selectedRicePack.name }}</h3>
        <div class="sub-section">
          <div class="section-head">
            <h4 class="section-title">rice section</h4>
            <hr class="section-head-devider">
            <div class="item-container">
              <div class="item" v-for="i in foodstore.plainRice" :key="i.id">
                <p class="item-name">{{ i.name }}</p>
                <p class="red-notice" v-if="!i.availability">out of stock</p>
                <button class="itme-button">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-section">
          <div class="section-head">
            <h4 class="section-title">curry section</h4>
            <hr class="section-head-devider">
            <div class="item-container">
              <div class="item" v-for="i in foodstore.curry" :key="i.id">
                <p class="item-name">{{ i.name }}</p>
                <p class="red-notice"  v-if="!i.availability">out of stock</p>
                <button class="itme-button">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-section">
          <div class="section-head">
            <h4 class="section-title">summery</h4>
            <hr class="section-head-devider">
            <!-- column 01 -->
            <div class="summery-column">
              <p class="column-title">Porsion size</p>
              <div class="column-data">
                <button class="column-button" v-for="i in foodstore.selectedRicePack.price" :key="i">{{ i.name }}</button>
              </div>
            </div>
            <!-- column 02 -->
            <div class="summery-column">
              <p class="column-title">Plate count</p>
              <div class="column-data">
                <button class="column-button">+</button>
                <p>{{ packCount }}</p>
                <button class="column-button">-</button>
              </div>
            </div>
            <!-- column 03 -->
            <div class="summery-column">
              <p class="column-title">Total Price</p>
              <div class="column-data">
                <p>{{ packCount * foodstore.selectedRicePack.price[0].price }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr class="section-head-devider">
        <div class="button-section">
          <button class="action-button">Cancel</button>
          <button class="action-button">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// imports
import { useFoodStore } from '@/stores/food';
import { useUiStore } from '@/stores/ui';
import { onClickOutside } from '@vueuse/core';
import { ref, watch } from 'vue';

// reactive variables
const target = ref(null)
const uistore = useUiStore()
const foodstore =  useFoodStore()
const maxCurry = ref(4);
const minCurry = ref(3);
const packCount = ref(1)

// watches

// function
onClickOutside(target, (onclick) => {
  uistore.riceandcurryPopup = false
})

</script>

<style scoped>
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-window{
  display: flex;
  border-radius: 4px;
  background: #FFF;
  width: 60%;
  padding: 24px 26px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
}
.popup-title{
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 100%;
}
.sub-section{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
}
.section-head{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
}
.section-title{
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
}
.section-head-devider{
  height: 1px;
  background-color: #D2D2D2;
  border: 0px;
  width: 100%;
}
.item-container{
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;
}
.item{
  display: flex;
  width: 234px;
  height: auto;
  padding: 7px 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background: #EFEFEF;
  gap: 10px;
}
.item-name{
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 10px;
}
.itme-button{
  display: flex;
  width: 98%;
  height: 35%;
  padding: 6px 83px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: #FF8F8F;
  border: 0px;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
}
.red-notice{
  background-color: #FF8F8F;
  color: #FFF;
  padding: 2px 20px;
  font-size: 12px;
  border-radius: 10px;
}
.summery-column{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.column-data{
  display: flex;
  align-items: center;
  gap: 15px;
}
.column-button{
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #FFF;
  border: 1px solid #FF8F8F;
  color: #FF8F8F;
  font-size: 15px;
}
.button-section{
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.action-button{
  border-radius: 4px;
  border: 1.5px solid #FF8F8F;
  background: #FFF;
  width: 121px;
  height: 33px;
  flex-shrink: 0;
  color: #FF8F8F;
  font-size: 14px;
  font-weight: 400;
}
</style>










































<!-- <template>
  <div class="main-popup" v-if="uiStore.riceandcurryPopup">
    <div class="popup-window" ref="target">
      <h3 class="window-title">Select curries for your meal</h3>
      <hr class="section-devider" />
      <div class="common-section">
        <p class="description">efwefw</p>
        <div class="toggle">
          <span class="switch">
            <input id="switch-rounded" type="checkbox" @click="selectRice()" />
            <label for="switch-rounded"></label>
          </span>
        </div>
        <p class="description">Red rice</p>
      </div>
      <hr class="section-devider" />
      <div class="curry-section">
        <div class="curry" v-for="item in foodStore.curry" :key="item.id">
          <p class="description">{{ item.name }}</p>
          <button class="action-button" :id="item.id" @click="addCurry(item)">
            Add
          </button>
        </div>
      </div>
      <hr class="section-devider" />
      <div class="common-section">
        <p class="description">Quantity</p>
        <input
          min="1"
          type="number"
          class="quantity"
        />
      </div>
      <hr class="section-devider" />
      <div class="action-section">
        <button class="action" @click="closePopup">Cancel</button>
        <button
          class="action"
          @click="orderStore.addToOrder"
          :disabled="!buttonActive"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
console.log('try to print')
import { useFoodStore } from "@/stores/food";
import { useOrderStore } from "@/stores/order";
import { useUiStore } from "@/stores/ui";
import { onClickOutside } from "@vueuse/core";
import { computed, ref, watch } from "vue";


const orderStore = useOrderStore();
const foodStore = useFoodStore();
const uiStore = useUiStore();


// this is for closing the popup when clicked outside
const target = ref(null);

// enable and disable the add to cart button
const buttonActive = ref(false);

const rice = computed(() =>
  foodStore.foodInfo.filter((item) => item.categoryName === "rice")
);

const curry = computed(() =>
  foodStore.foodInfo.filter((item) => item.categoryName === "curry")
);

// close the popup window and reset the tempary order item
const closePopup = () => {
  uiStore.riceandcurryPopup = false;
  orderStore.temparyOrderItem = {};
};

// close the popup when clicked outside
onClickOutside(target, (onclick) => {
  closePopup();
});

// // enable and disable the add to cart button
// const buttonActiveAction = (value) => {
//   if (orderStore.curryCount >= 3) {
//     buttonActive.value = true;
//   } else {
//     buttonActive.value = false;
//   }
// };

// const addCurry = (item) => {
//   const element = document.getElementById(item.id);
//   if (orderStore.temparyOrderItem.curry.includes(item)) {
//     orderStore.curryCount -= 1;
//     buttonActiveAction();

//     // change the button style
//     element.classList.add("action-button");
//     element.classList.remove("action-button-select");

//     // change the button text
//     element.innerHTML = "add";

//     // remove item from curry
//     orderStore.temparyOrderItem.curry =
//       orderStore.temparyOrderItem.curry.filter((curry) => curry !== item);
//   } else {
//     orderStore.curryCount += 1;
//     buttonActiveAction();

//     // change the button style
//     element.classList.add("action-button-select");
//     element.classList.remove("action-button");

//     // change the button text
//     element.innerHTML = "remove";

//     // add item to currylist
//     orderStore.temparyOrderItem.curry.push(item);
//   }
// };

// // this is for changing the rice type
// const selectRice = () => {
//   const element = document.getElementById("switch-rounded");
//   if (element.checked) {
//     orderStore.temparyOrderItem.rice = "red rice";
//   } else {
//     orderStore.temparyOrderItem.rice = "white white";
//   }
// };
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
  width: 70%;
  padding: 13px 41px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  margin-inline: auto;
  margin-top: 150px;
}
.window-title {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  align-self: stretch;
}
.section-devider {
  width: 100%;
  height: 1px;
  background: #d2d2d2;
  border: 0px;
}
.common-section {
  display: flex;
  align-items: center;
  gap: 30px;
}
.description {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.curry-section {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;
}
.curry {
  display: flex;
  width: 234px;
  height: 98px;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  background: #efefef;
}
.action-button {
  display: flex;
  height: 33px;
  padding: 6px 83px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  border: 0px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.action-button:hover {
  background: #ff7a7a;
}
.action-button-select {
  display: flex;
  height: 33px;
  padding: 6px 83px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 4px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #fff;
  color: #fb6262;
  border: 2px solid #fb6262;
}
.action-button:disabled {
  background: #d5d5d5;
  color: #fff;
}
.action-button-select:hover {
  background: #fff;
  color: #fb6262;
}
.action-section {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 38px;
}
.action {
  width: 210px;
  height: 33px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #ff8f8f;
  border: 0px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.action:hover {
  background: #ff7a7a;
}
.action:disabled {
  background: #d5d5d5;
  color: #fff;
}
.quantity {
  width: 50px;
  height: 20px;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  background: #fff;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
/* toggle button styling */
.switch {
  display: inline-block;
}

.switch input {
  display: none;
}

.switch label {
  display: block;
  width: 50px;
  height: auto;
  padding: 3px;
  border-radius: 15px;
  border: 2px solid brown;
  cursor: pointer;
  transition: 0.3s;
}

.switch label::after {
  content: "";
  display: inherit;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background: brown;
  transition: 0.3s;
}

.switch input:checked ~ label {
  border-color: brown;
}

.switch input:checked ~ label::after {
  translate: 30px 0;
  background: brown;
}

.switch input:disabled ~ label {
  opacity: 0.5;
  cursor: not-allowed;
}
</style> -->
