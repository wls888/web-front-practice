import { defineStore } from "pinia";
import { useLogin } from "./login/login";
export const useMain = defineStore("main", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    login(userInfo: any) {
      //####········调用其他store的action········####//
      const loginStore = useLogin();
      const { username, password } = userInfo;
      if (username === "zhangsan" && password === "123456") {
        loginStore.log("登录成功！");
      } else {
        loginStore.log("登录失败！");
      }
    },
  },
});
