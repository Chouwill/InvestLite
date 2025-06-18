<script lang="ts" setup>
import router from "../router";
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

import { useUserStore } from "../store/user";
import { Password } from "primevue";

const onLoginForm = ref({
  email: "",
  password: "",
});

const store = useUserStore();

const onLogin = () => {
  console.log("4444", onLoginForm.value);
  router.push({ name: "MemberCenter" });

  store.handleLogin(onLoginForm.value);
  // console.log(store.isloginStatus);
};
</script>

<template>
  <!-- <div class="bg-green-500 md:bg-red-900 text-white p-4 text-center mt-5">
    ✅ Tailwind md:bg-red-900 測試元件（請把畫面拉到 ≥768px 看它會不會變紅）
  </div> -->
  <div class="w-full flex flex-col rounded-xl md:w-full items-center justify-center border border-green-700">
    <h2 class="border text-center text-3xl">股票買賣紀錄</h2>

    <form class="formContainer border w-full max-w-xs flex flex-col items-center justify-center gap-5 m-4 md:max-w-md">
      <div class="bundaryBox w-[95%] border p-10 rounded-4xl">
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" id="" for="name">帳號</label>
            <InputText v-model="onLoginForm.email" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">密碼</label>
            <InputText v-model="onLoginForm.password" class="w-full" type="text" />
          </div>
          <div class="member-menu w-[100%] flex gap-5 justify-center item-center p-5">
            <Button @click="onLogin">
              <router-link class="login bg-[#5b86e5] text-white py-2 px-4 text-base rounded-lg shadow-md" to="/login">
                登入
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </form>
  </div>

  <!-- 📌 測試色塊，確認 md: 斷點有生效 -->
  <div class="bg-green-500 md:bg-orange-900 text-white p-4 text-center mt-5">
    ✅ Tailwind md:bg-red-900 測試元件（請把畫面拉到 ≥768px 看它會不會變紅）
  </div>
</template>

<style scoped></style>
