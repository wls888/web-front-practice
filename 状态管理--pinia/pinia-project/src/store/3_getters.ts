import { defineStore } from "pinia";
import { useLogin } from "./login/login";

export const useMain = defineStore("main", {
  state: () => {
    return {
      count: 1,
    };
  },
  getters: {
    //####········1.在箭头函数中通过state参数对状态进行加工处理，不能使用this········####//
    //####········该箭头函数this指向window，严格模式下为undefined········####//
    doubleCountArrows: (state) => {
      return state.count * 2;
    },
    //####········2.也可以在常规函数中通过this访问到整个store的实例,但需定义函数返回值类型········####//
    doubleCount(): number {
      return this.count * 2;
    },

    //####········3.可通过this使getter访问到其他getter········####//
    fourFoldCount(): number {
      return this.doubleCount * 2;
    },

    //####········4.getter函数（箭头 and 常规）的第一个参数固定为store,所以在实参传递的参数pinia会通过某种手段绑定到getter函数返回的函数········####//
    fullName: (state) => {
      console.log(state);
      const lastName = "zhang";
      return function (firstName: string) {
        return lastName + firstName;
      };
    },
    loginInfo() {
      const loginStore = useLogin();
      return `账号为：${loginStore.userInfo.username}，密码为：${loginStore.userInfo.password}`;
    },
  },
  actions: {},
});
