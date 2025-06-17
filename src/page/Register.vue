<script setup>
import InputText from "primevue/inputtext";

import { ref } from "vue";

import Checkbox from "primevue/checkbox";

import { onRegister } from "../api/method";
import { Password } from "primevue";

const form = ref({
  email: "",
  password: "",
});

const onRegisterForm = async () => {
  try {
    const res = await onRegister(form.value);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="w-full flex flex-col rounded-xl md:w-full items-center justify-center border border-green-700">
    <h2 class="border text-center text-3xl">股票買賣紀錄</h2>

    <form class="formContainer border w-full max-w-xs flex flex-col items-center justify-center gap-5 m-4 md:max-w-md">
      <div class="bundaryBox w-[95%] border p-10 rounded-4xl">
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" id="" for="name">帳號</label>
            <InputText v-model="form.email" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">密碼</label>
            <InputText v-model="form.password" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">確認密碼</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="member-menu w-[100%] flex gap-5 justify-center item-center p-5">
            <button @click="onRegisterForm">
              <router-link
                class="login bg-[#5b86e5] text-white py-2 px-4 text-base rounded-lg shadow-md"
                to="/register">
                註冊
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
