<script setup lang="ts">
// import Form from "../src/components/Form.vue";
import Header from "./components/Header.vue";

function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));
</script>

<template>
  <div class="container max-w-none">
    <div class="flex flex-col rounded-xl">
      <Header class="w-full border" />
      <router-view></router-view>
    </div>
  </div>

  <!-- <div class="container bg-red-100">
    <div class="w-3xs bg-blue-300">w-3xs 卡片</div>
  </div> -->
</template>

<style lang="scss"></style>
