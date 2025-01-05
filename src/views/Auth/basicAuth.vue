/* this include two basic auth (signin and signup) */
<template>
  <main>
    <Menubar></Menubar>
    <div class="space"></div>
    <div class="auth-window">
      <div class="auth-head">
        <div
          class="auth-head-action auth-head-action-select"
          id="signin"
          @click="authAction(0)"
        >
          SIGN IN
        </div>
        <div class="auth-head-action" id="signup" @click="authAction(1)">
          SIGN UP
        </div>
      </div>
      <div class="auth-content" id="signin-content" v-if="signIn">
        <input type="text" placeholder="First name" class="auth-input" />
        <input type="text" placeholder="Mobile number" class="auth-input" />
        <input type="text" placeholder="Password" class="auth-input" />
        <input type="text" placeholder="re-enter password" class="auth-input" />
        <button class="auth-content-action">SIGN IN</button>
      </div>
      <div class="auth-content" id="signup-content" v-if="!signIn">
        <input type="text" placeholder="Mobile number" class="auth-input" />
        <input type="text" placeholder="Password" class="auth-input" />
        <router-link to="/code">
          <p class="sub-action">Forget password ?</p></router-link
        >
        <button class="auth-content-action">SIGN UP</button>
      </div>
    </div>
    <div class="space"></div>
    <Footer></Footer>
  </main>
</template>

<script setup>
import Footer from "@/components/common/footer.vue";
import Menubar from "@/components/common/menubar.vue";
import { onMounted, ref } from "vue";

const signIn = ref(true); // default signin

// restyle selected auth head action when clicked
const authAction = (index) => {
  const signin = document.getElementById("signin");
  const signup = document.getElementById("signup");
  if (index === 0) {
    signin.classList.add("auth-head-action-select");
    signup.classList.remove("auth-head-action-select");
    signIn.value = true;
  } else if (index === 1) {
    signup.classList.add("auth-head-action-select");
    signin.classList.remove("auth-head-action-select");
    signIn.value = false;
  }
};

onMounted(() => {
  authAction(1);
});
</script>

<style scoped>
.space {
  height: 10vh;
  width: 100vw;
}
.auth-window {
  display: flex;
  width: fit-content;
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
  align-items: center;
  gap: 1px;
  align-self: stretch;
}
.auth-head-action {
  display: flex;
  width: 120px;
  padding: 8px 49px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  background: #fb8787;
  cursor: pointer;
}
.auth-head-action-select {
  background: #f66161;
}
#signin {
  border-radius: 6px 0px 0px 0px;
}
#signup {
  border-radius: 0px 6px 0px 0px;
}
.auth-content {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-inline: auto;
}
.auth-input {
  width: calc(100% - 16px);
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #ababab;
  color: #ababab;
  flex: 1 0 0;
  font-size: 18px;
  font-weight: 300;
  outline: none;
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
.sub-action:hover {
  color: #8d8d8d;
}
a {
  text-decoration: none;
  margin-left: auto;
}
.auth-content-action {
  width: 100%;
  display: flex;
  padding: 5px 123px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
  background: #ff8f8f;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border: none;
  cursor: pointer;
}
.auth-content-action:hover {
  background: #f76f6f;
}
</style>
