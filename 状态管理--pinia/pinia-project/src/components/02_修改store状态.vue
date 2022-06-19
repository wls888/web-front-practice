<template>
  <div class="update-state">
    <h2>当前计数为：{{ count }}</h2>
    <button @click="addCount">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useMain } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const mainStore = useMain();
    let { count } = storeToRefs(mainStore);
    const addCount = () => {
      //####········1.修改状态方法一：直接进行修改········####//
      // console.log(count.value++);

      //####········2.修改状态方法二：$patch方法传递回调函数进行修改········####//
      // mainStore.$patch((state) => {
      //   state.count++;
      // });

      //####········mainStore替换整个state········####//
      mainStore.$state = {
        //####········2········####//
        count: 2,
        //####·······1········####//
        msg: "hello,pinia!",
        msg2: "hello,pinia2!",
        msg3: "hello,pinia3!",
      };
    };

    //####········侦听mainStore当前状态········####//
    watch(
      mainStore.$state,
      (state) => {
        console.log(state);
      },
      { deep: true }
    );
    return {
      count,
      addCount,
    };
  },
});
</script>

<style scoped></style>
