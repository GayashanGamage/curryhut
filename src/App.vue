<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import router from "./router";
import axios from "axios";

onBeforeMount(() => {
  axios
    .get(`${import.meta.env.VITE_url}/customer/`, {
      params: {
        id: "66ff86b140ba8d2eaa1eb88a",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 403) {
        router.push("/closed");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", serif;
}
body {
  background: #efefef;
}
</style>
