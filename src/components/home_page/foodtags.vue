<template>
  <div class="tag-container">
    <div
      v-for="item in tags"
      :key="item.id"
      :class="item.class"
      @click="changeCategory(item.id)"
    >
      <p class="tag-name">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tags = ref([
  {
    id: 0,
    name: "Chopsye rice",
    class: "tag",
  },
  {
    id: 1,
    name: "Koththu",
    class: "tag select",
  },
  {
    id: 2,
    name: "Fried rice",
    class: "tag",
  },
  {
    id: 3,
    name: "Nasigueran",
    class: "tag",
  },
  {
    id: 4,
    name: "Noodles",
    class: "tag",
  },
  {
    id: 5,
    name: "Chopsye noodles",
    class: "tag",
  },
]);

const changeCategory = (id) => {
  for (let i = 0; i < tags.value.length; i++) {
    tags.value[i].class = "tag";
  }
  tags.value[id].class = "tag select";
};
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
