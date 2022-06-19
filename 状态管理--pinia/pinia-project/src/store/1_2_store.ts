import { defineStore } from "pinia";

export const useMain = defineStore("main", {
  //####········返回初始化状态的函数推荐使用箭头函数········####//
  state: () => {
    return {
      //####········2········####//
      count: 0,
      //####·······1········####//
      msg: "hello,pinia!",
      msg2: "hello,pinia2!",
      msg3: "hello,pinia3!",
    };
  },
  getters: {
    info(): any {
      return this.msg + " " + this.msg2;
    },
  },
  actions: {},
});
