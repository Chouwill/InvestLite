<template>
  <header class="w-full border flex">
    <div class="w-[40%] logo flex items-center justify-center">
      <router-link to="/">
        <img src="https://picsum.photos/id/60/60/60" alt="" />
      </router-link>
    </div>
    <div class="member-menu  w-[60%] flex gap-5 justify-end border p-5 text-base">
      <router-link class="login border-[#5b86e5] text-[#5b86e5] py-2 px-4" to="/login">
        登入
      </router-link>

      <router-link
        class="signup border border-[#5b86e5] text-[#5b86e5] py-2 px-4 text-base rounded-lg shadow-md"
        to="/register">
        註冊
      </router-link>

      <button v-show="dropdownMenu"
        class="user-button flex items-center justify-center gap-1 bg-[#5b86e5] py-2 px-4 text-white text-base rounded-lg shadow-md">
        👤 暐洺 ▾
      </button>
    </div>
    <!-- <h2 class="w-full text-center text-3xl">🌍 公開分享牆</h2> -->
  </header>
</template>

<script setup>
import AutoComplete from "primevue/autocomplete";

import { ref } from "vue";
import { getUser } from "../api/method";

const dropdownMenu = ref(false);

const getUserMethod = async () => {
  try {
    const res = await getUser();

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

getUserMethod();

const value1 = ref(null);
const items = ref([]);

const menuItems = () => {
  items.value = ["我的帳號", "登出"];
};
</script>
<style scoped>

.member-menu {

  border: 3px solid gold;
}</style>
