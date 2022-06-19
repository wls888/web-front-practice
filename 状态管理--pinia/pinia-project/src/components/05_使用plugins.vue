<template>
  <div class="use-plugins">
    <h2>{{ msg }}</h2>
    <h2>{{ myPlugin }}</h2>
    <h2>当前计数为：{{ count }}</h2>
    <button @click="addCount">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useMain } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const mainStore = useMain();
    const { msg, count } = storeToRefs(mainStore);
    const addCount = () => {
      mainStore.$patch((state) => {
        state.count++;
      });
    };
    return {
      myPlugin: mainStore.$state.myPlugin,
      msg,
      count,
      addCount,
    };
  },
});
</script>

<style scoped></style>
