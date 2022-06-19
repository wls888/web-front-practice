<template>
  <div class="use-actions">
    <label for="username">账号：</label>
    <input type="text" id="username" v-model="userInfo.username" /><br /><br />
    <label for="password">密码：</label>
    <input
      type="password"
      id="password"
      v-model="userInfo.password"
    /><br /><br />
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useMain } from "@/store/index";
export default defineComponent({
  setup() {
    const mainStore = useMain();
    const userInfo = reactive({
      username: "",
      password: "",
    });
    const login = () => {
      mainStore.login(userInfo);
    };
    return {
      login,
      userInfo,
    };
  },
});
</script>

<style scoped></style>
