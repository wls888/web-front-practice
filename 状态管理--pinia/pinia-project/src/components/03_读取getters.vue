<template>
  <div class="read-getters">
    <h2>{{ doubleCount }}</h2>
    <h2>{{ doubleCountArrows }}</h2>
    <h2>{{ fourFoldCount }}</h2>
    <h2>当前计数为：{{ count }}</h2>
    <button @click="addCount">+1</button>
    <h2>这小孩全名叫：{{ fullName("san") }}</h2>
    <h2>{{ loginInfo }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useMain } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const mainStore = useMain();
    let {
      doubleCount,
      doubleCountArrows,
      fourFoldCount,
      count,
      fullName,
      loginInfo,
    } = storeToRefs(mainStore);
    const addCount = () => {
      mainStore.$patch((state) => {
        state.count++;
      });
    };
    return {
      doubleCount,
      doubleCountArrows,
      fourFoldCount,
      count,
      addCount,
      fullName,
      loginInfo,
    };
  },
});
</script>

<style scoped></style>
