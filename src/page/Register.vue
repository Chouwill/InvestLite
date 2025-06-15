<script setup>
import InputText from "primevue/inputtext";

import { ref } from "vue";

import Checkbox from "primevue/checkbox";
</script>

<template>
  <div class="flex flex-col rounded-xl">
    <h2 class="border text-center text-3xl">股票買賣紀錄</h2>

    <form class="formContainer size-auto flex flex-col items-center justify-center gap-5 m-4 border border-green-700">
      <div class="bundaryBox w-[95%] border p-10 rounded-4xl">
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">帳號</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">密碼</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">確認密碼</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full flex items-center gap-5 border mb-5">
            <Checkbox id="xxx" name="xxx" size="large" class="text-2xl" v-model="checked" binary />
            <p>註冊即表示您已同意</p>
          </div>
          <div class="member-menu w-[100%] flex gap-5 justify-center item-center p-5">
            <router-link class="login text-xl p-5" to="/login">註冊</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
