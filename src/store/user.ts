// stores/useStore.ts
import { defineStore } from "pinia";
import { onLogin } from "../api/method";
import { ref } from "vue";

export const useUserStore = defineStore("userId", () => {
  const isloginStatus = ref(false);
  const handleLogin = async (value: object) => {
    console.log("555", value);
    try {
      const loginRes = await onLogin(value);

      console.log("API回傳", loginRes);
      isloginStatus.value = true;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogin,
    isloginStatus,
  };
});
