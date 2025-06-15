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
  <div class="container">
    <div class="flex flex-col rounded-xl">
      <Header class="w-full border" />
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">

</style>
