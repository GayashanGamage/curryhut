<template>
  <div class="main-popup" v-if="uiStore.riceandcurryPopup">
    <div class="popup-window" ref="target">
      <h3 class="window-title">Select curries for your meal</h3>
      <hr class="section-devider" />
      <div class="common-section">
        <p class="description">White rice</p>
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
        <div class="curry" v-for="item in riceandcurry.curry" :key="item">
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
          v-model="orderStore.temparyOrderItem.quantity"
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
import { useOrderStore } from "@/stores/order";
import { useUiStore } from "@/stores/ui";
import { onClickOutside } from "@vueuse/core";
import { ref, watch } from "vue";
const orderStore = useOrderStore();

const uiStore = useUiStore();

// this is for closing the popup when clicked outside
const target = ref(null);

// enable and disable the add to cart button
const buttonActive = ref(false);

const riceandcurry = ref({
  rice: [
    {
      id: 200,
      name: "white rice",
    },
    {
      id: 201,
      name: "red rice",
    },
  ],
  curry: [
    {
      id: 100,
      name: "Polsambola",
    },
    {
      id: 101,
      name: "polos curry",
    },
    {
      id: 102,
      name: "Kohila curry",
    },
    {
      id: 103,
      name: "Dhal curry",
    },
    {
      id: 104,
      name: "Potato curry",
    },
  ],
});

// close the popup window and reset the tempary order item
const closePopup = () => {
  uiStore.riceandcurryPopup = false;
  orderStore.temparyOrderItem = {};
};

// close the popup when clicked outside
onClickOutside(target, (onclick) => {
  closePopup();
});

// enable and disable the add to cart button
const buttonActiveAction = (value) => {
  if (orderStore.curryCount >= 3) {
    buttonActive.value = true;
  } else {
    buttonActive.value = false;
  }
};

const addCurry = (item) => {
  const element = document.getElementById(item.id);
  if (orderStore.temparyOrderItem.curry.includes(item)) {
    orderStore.curryCount -= 1;
    buttonActiveAction();

    // change the button style
    element.classList.add("action-button");
    element.classList.remove("action-button-select");

    // change the button text
    element.innerHTML = "add";

    // remove item from curry
    orderStore.temparyOrderItem.curry =
      orderStore.temparyOrderItem.curry.filter((curry) => curry !== item);
  } else {
    orderStore.curryCount += 1;
    buttonActiveAction();

    // change the button style
    element.classList.add("action-button-select");
    element.classList.remove("action-button");

    // change the button text
    element.innerHTML = "remove";

    // add item to currylist
    orderStore.temparyOrderItem.curry.push(item);
  }
};

// this is for changing the rice type
const selectRice = () => {
  const element = document.getElementById("switch-rounded");
  if (element.checked) {
    orderStore.temparyOrderItem.rice = "red rice";
  } else {
    orderStore.temparyOrderItem.rice = "white white";
  }
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
</style>
