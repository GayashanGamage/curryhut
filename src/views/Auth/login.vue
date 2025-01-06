<template>
  <main>
    <Menubar></Menubar>
    <div class="space"></div>
    <div class="auth-window">
      <div class="auth-head">Sign up</div>
      <div class="auth-content">
        <input
          type="text"
          class="auth-content-input"
          placeholder="Mobile number"
        />
        <input type="text" class="auth-content-input" placeholder="Password" />
        <router-link to="/code">
          <p class="sub-action">Forget password ?</p></router-link
        >
        <button class="auth-content-action">Sign up</button>
      </div>
    </div>
    <div class="space"></div>
    <Footer></Footer>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
</script>

<style scoped>
.space {
  height: 15vh;
  width: 100vw;
}
.auth-window {
  display: flex;
  width: 415px;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border-radius: 4px;
  background: #fff;
  margin-inline: auto;
}
.auth-head {
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px 6px 0px 0px;
  background: #ff5e5e;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  flex: 1 0 0;
}
.auth-content {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}
.auth-content-input {
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #a7a6a6;
  color: #a7a6a6;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  flex: 1 0 0;
  outline: none;
}
.auth-content-action {
  display: flex;
  padding: 5px 6px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  border: none;
  cursor: pointer;
}
.auth-content-action:hover {
  background: #f57070;
}
a {
  text-decoration: none;
}
.sub-action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #b6b2b2;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
}
</style>
