// stores/useStore.ts
import { defineStore } from "pinia";
import { onLogin } from "../api/method";
// import router from "../router";

import { ref } from "vue";

export const useUserStore = defineStore("userId", () => {
  const isloginStatus = ref(false);
  const handleLogin = async (value: object) => {
    console.log("555", value);
    try {
      const loginRes = await onLogin(value);

      console.log("API回傳", loginRes);
      isloginStatus.value = true;
      // console.log("login 成功，準備跳轉");
      // router.push({ name: "Form" });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogin,
    isloginStatus,
  };
});
