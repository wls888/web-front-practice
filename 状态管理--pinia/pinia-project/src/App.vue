<template>
  <div class="app">
    <my-component></my-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyComponent from "@/components/05_使用plugins.vue";
export default defineComponent({
  components: {
    MyComponent,
  },
});
</script>

<style scoped></style>
