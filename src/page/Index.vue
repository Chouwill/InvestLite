<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import "primeicons/primeicons.css";
import Button from "primevue/button";

import { getCardList } from "/src/api/method.ts";

const cardLists = ref([]);

const getCard = async () => {
  try {
    const res = await getCardList();

    console.log(res);

    cardLists.value = res.data;

    console.log(cardLists.value);
  } catch (e) {
    console.log(e);
  }
};

getCard();
</script>

<template>
  <div class="container flex flex-col justify-center items-center mb-10 max-w-none border">
    <div class="indexBox w-full border">
      <h2 class="text-3xl font-black text-center">公開分享牆</h2>
      <form class="formBox border flex justify-center">
        <div class="search border w-2xs pt-5 gap-3 md:w-1/2 flex flex-col md:flex-row">
          <InputText placeholder="搜尋" class="w-full" type="text" v-model="value" />
          <Select class="w-full" type="text" v-model="value" />
        </div>
      </form>
      <div
        class="cardBox m-auto border w-2xs pt-5 flex flex-col gap-7 md:w-[50%] flex-row flex-wrap justify-center items-center">
        <div class="card w-2xs flex-col justify-center md:p-5" v-for="(item, idx) in cardLists" :key="item.idx">
          <h2>{{ item.name }}</h2>
          <h2>{{ item.action }}</h2>
          <h2>{{ item.date }}</h2>
          <h2>{{ item.quantity }}</h2>
          <h2>{{ item.unitprice }}</h2>
          <h2>備註：第一次投資高股息！</h2>

          <Button class="like-btn my-2" icon="pi pi-thumbs-up-fill" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  border: none !important;
}
.indexBox {
  border: 4px solid green;
}
.search {
  border: 4px solid orange;
}
.cardBox {
  border: 4px solid palegreen;
}
</style>
