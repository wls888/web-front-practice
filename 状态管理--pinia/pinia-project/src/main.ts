import { createApp } from "vue";
import App from "./App.vue";
import { createPinia, PiniaPluginContext } from "pinia";
import piniaPersist from "pinia-plugin-persist";

function addStatePlugin(context: PiniaPluginContext) {
  const { store } = context;
  store.$state.myPlugin = "addStatePlugin";
}

const app = createApp(App);
//####········应用程序中注册pinia········####//
const pinia = createPinia();
//####········注册pinia插件········####//
pinia.use(addStatePlugin);
pinia.use(piniaPersist);
app.use(pinia);
app.mount("#app");
