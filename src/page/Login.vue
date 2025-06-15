<script setup>
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import DatePicker from "primevue/datepicker";

import { ref } from "vue";
import Fluid from "primevue/fluid";

import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
</script>

<template>
  <div class="flex flex-col rounded-xl">
    <h2 class="border text-center text-3xl">股票買賣紀錄</h2>

    <form class="formContainer size-auto flex flex-col items-center justify-center gap-5 m-4 border border-green-700">
      <div class="bundaryBox w-[95%] border p-10 rounded-4xl">
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" id="" for="name">帳號</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">密碼</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="member-menu w-[100%] flex gap-5 justify-center item-center p-5">
            <router-link class="login text-xl p-5" to="/login">登入</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
