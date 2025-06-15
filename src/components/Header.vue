<template>
  <header class="w-full border flex">
    <div class="w-[40%] logo flex items-center justify-center">
      <img src="https://picsum.photos/id/70/70/70" alt="" />
    </div>
    <div class="member-menu w-[60%] flex gap-5 justify-end border p-5">
      <router-link class="login text-xl p-5" to="/login">登入</router-link>
      <router-link class="signup text-xl p-5" to="/register">註冊</router-link>
      <!-- <router-link class="signup text-xl p-5" to="/">FORM</router-link> -->
    </div>
    <!-- <h2 class="w-full text-center text-3xl">🌍 公開分享牆</h2> -->
  </header>
</template>

<script setup>
import { getUser } from "../api/method";

const getUserMethod = async () => {
  try {
    const res = await getUser();

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

getUserMethod();
</script>
<style scoped></style>
