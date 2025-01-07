/* this include two basic auth (signin and signup) */
<template>
  <main>
    <Menubar></Menubar>
    <div class="space"></div>
    <div class="order-window">
      <div class="order-head">
        <p class="head" id="head-1">description</p>
        <p class="head" id="head-2">quantity</p>
        <p class="head" id="head-3">unit price</p>
        <p class="head" id="head-4">sub total</p>
      </div>
      <hr class="devider" />
      <div class="order-item" v-for="(item, index) in mergedOrder" :key="index">
        <div class="item-details">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details-data">
            <p class="item-title">{{ item.name }}</p>
            <p class="item-description">{{ item.size }}</p>
          </div>
        </div>
        <div class="item-quantity">
          <button
            class="item-quantity-action"
            @click="changeQuantity(index, 'up')"
          >
            +
          </button>
          <!-- if somethign go wrong in style of this change class name -->
          <p class="item-common">{{ item.quantity }}</p>
          <button
            class="item-quantity-action"
            @click="changeQuantity(index, 'down')"
          >
            -
          </button>
        </div>
        <p class="item-common">Rs.{{ item.price }}</p>
        <p class="item-common">
          Rs.{{ parseInt(item.price) * parseInt(item.quantity) }}
        </p>
        <span class="material-icons" @click="deleteItem(index)">delete</span>
      </div>
      <div
        class="unavailable-category"
        v-if="!checkCategory.find((c) => c === 'desert')"
        @click="router.push({ name: 'decert' })"
      >
        <p class="unavailable-category-title">DESERT</p>
        <p class="unavailable-category-description">
          FInd flavorable desert after your main meal...
        </p>
      </div>
      <div
        class="unavailable-category"
        v-if="!checkCategory.find((c) => c === 'drinks')"
        @click="router.push({ name: 'drinks' })"
      >
        <p class="unavailable-category-title">DRINKS</p>
        <p class="unavailable-category-description">
          There are plenty of drinks you can choose...
        </p>
      </div>
      <div
        class="unavailable-category"
        v-if="!checkCategory.find((c) => c === 'extra')"
        @click="router.push({ name: 'extra' })"
      >
        <p class="unavailable-category-title">EXTRA POTIONS</p>
        <p class="unavailable-category-description">
          with extra curries, you can enjoy your meal better...
        </p>
      </div>
      <hr class="devider" />
      <div class="total">
        <p class="total-text">TOTAL BILL</p>
        <p class="total-text">Rs. {{ totalBill }}</p>
      </div>
      <hr class="devider" />
      <button
        class="order-action-button"
        @click="router.push({ name: 'authontication' })"
      >
        CHECKOUT
      </button>
    </div>
    <div class="space"></div>
    <Footer></Footer>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import router from "@/router";
import { useFoodStore } from "@/stores/food";
import { useOrderStore } from "@/stores/order";
import { computed, onUpdated, ref, watch } from "vue";

const foodStore = useFoodStore();
const orderStore = useOrderStore();

// const totalBill = ref(0);

// create tempary variable and store merge order data with product data
const mergedOrder = computed(() => {
  return orderStore.order.map((orderItem) => {
    const productItem = foodStore.foodInfo.find(
      (p) => p.id === orderItem.foodid
    );
    return {
      categoryName: productItem.categoryName,
      image: productItem.image,
      name: productItem.name,
      price: orderItem.price,
      quantity: orderItem.quantity,
      size: orderItem.size,
    };
  });
});

// check unique category in order store and set value to unavailable category using computed
const checkCategory = computed(() => {
  const category = orderStore.order.map((orderItem) => {
    const productItem = foodStore.foodInfo.find(
      (p) => p.id === orderItem.foodid
    );
    return productItem.categoryName;
  });
  return [...new Set(category)];
});

// change quantity of order items in order store
const changeQuantity = (index, arg) => {
  if (arg === "up") {
    orderStore.order[index].quantity += 1;
  } else {
    orderStore.order[index].quantity -= 1;
  }
};

// initialize total bill using computed
const totalBill = computed(() =>
  orderStore.order.reduce(
    (sum, orderItem) => sum + orderItem.price * orderItem.quantity,
    0
  )
);

// update total bill when order store updated
onUpdated(() => {
  totalBill.value = orderStore.order.reduce(
    (sum, orderItem) => sum + orderItem.price * orderItem.quantity,
    0
  );
});

// delete item in order store
const deleteItem = (index) => {
  orderStore.order.splice(index, 1);
};
</script>

<style scoped>
.space {
  height: 10vh;
  width: 100vw;
}
.order-window {
  display: flex;
  width: fit-content;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  margin-inline: auto;
}
.order-head {
  display: flex;
  align-items: center;
  align-self: stretch;
}
.head {
  display: flex;
  align-items: center;
  flex: 1 0 0;
}
.devider {
  width: 100%;
  height: 1px;
  background: #d5d5d5;
  border: none;
}
.order-item {
  display: flex;
  align-items: flex-end;
  gap: 54px;
  align-self: stretch;
}
.item-details {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex: 1 0 0;
}
.item-image {
  width: 90px;
  height: 90px;
  border-radius: 4px;
  background-color: cornflowerblue;
  border: none;
}
.item-title {
  color: #000;
  font-size: 17px;
  font-weight: 500;
  align-self: stretch;
}
.item-description {
  color: #000;
  font-size: 14px;
  font-weight: 300;
  align-self: stretch;
}
.item-quantity {
  display: flex;
  align-items: center;
  gap: 12px;
}
.item-quantity-action {
  display: flex;
  padding: 3px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #ff8f8f;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  align-self: stretch;
  cursor: pointer;
}
.item-common {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  /* width: 84.895px; */
}
.material-icons {
  color: #d9d9d9;
  cursor: pointer;
}
.material-icons:hover {
  color: #ff8f8f;
}
.unavailable-category {
  display: flex;
  padding: 10px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #ff8f8f;
  background: #fff;
  cursor: pointer;
}
.unavailable-category-title {
  color: #b2b2b2;
  font-size: 18px;
  font-weight: 900;
  align-self: stretch;
}
.unavailable-category-description {
  color: #ff8f8f;
  font-size: 16px;
  font-weight: 400;
  align-self: stretch;
}
.total {
  display: flex;
  padding: 0px 8px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.total-text {
  color: #000;
  font-size: 20px;
  font-weight: 900;
}
.order-action-button {
  display: flex;
  padding: 6px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #ff8f8f;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  border: none;
  cursor: pointer;
}
.order-action-button:hover {
  background: #f78d8d;
}
</style>
