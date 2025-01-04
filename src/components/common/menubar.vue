<template>
  <div class="main-container">
    <h3 class="site-title">
      <router-link to="/">Curry Hut</router-link>
    </h3>
    <div class="menu">
      <p class="menu-item">
        <router-link to="/">Main dish</router-link>
      </p>
      <p class="menu-item">
        <router-link to="/extra">extra potion</router-link>
      </p>
      <p class="menu-item">
        <router-link to="/decert">decert</router-link>
      </p>
      <p class="menu-item">
        <router-link to="/drinks">drinks</router-link>
      </p>
      <button class="action-button">Login</button>
      <span class="material-icons">local_mall</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-container {
  display: flex;
  width: auto;
  padding: 8px 60px;
  justify-content: space-between;
  align-items: center;
  background: #ff5e5e;
}
.site-title {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  flex: 1 0 0;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
}
.menu-item {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: #fff;
}
.menu-item:hover {
  font-weight: 500;
  cursor: context-menu;
}
.action-button {
  display: flex;
  padding: 6px 19px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 1.5px solid #fff;
  background: #ff5e5e;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.action-button:hover {
  border: 1.5px solid #fff;
  background: #fff;
  color: #ff5e5e;
}
.material-icons {
  color: #fff;
  cursor: pointer;
}
</style>
