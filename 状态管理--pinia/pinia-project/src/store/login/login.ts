import { userInfo } from "os";
import { defineStore } from "pinia";

export const useLogin = defineStore("login", {
  state: () => {
    return {
      userInfo: {
        username: "lisi",
        password: "123456",
      },
    };
  },
  actions:{
    log(msg:string){
      alert(msg);
    }
  }
});
