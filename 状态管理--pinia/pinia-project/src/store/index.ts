import { defineStore } from "pinia";

export const useMain = defineStore("main", {
  state: () => {
    return {
      msg: "2233",
      count: 0,
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        //####········在storage当中的键名········####//
        key: "main",
        //####········选择存储方式········####//
        storage: sessionStorage,
        //####········指定选择存储哪几个状态········####//
        paths: ["count"],
      },
      {
        key: "main2",
        storage: localStorage,
        paths: ["msg"],
      },
    ],
  },
});
