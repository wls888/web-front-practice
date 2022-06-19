<template>
  <div class="read-state">
    <h2>{{ msg }}</h2>
    <h2>{{ msg2 }}</h2>
    <h2>{{ msg3 }}</h2>
    <h2>{{ info }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useMain } from "@/store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const mainStore = useMain();
    //#####··········1. 通过计算属性读取store当中的状态··········#####//
    // const msg = computed(() => {
    //   return mainStore.msg;
    // });

    //####········2.通过storeToRefs读取store当中的状态········####//
    const { msg, msg2, msg3, info } = storeToRefs(mainStore);
    return {
      msg,
      msg2,
      msg3,
      info,
    };
  },
});
</script>

<style scoped></style>
