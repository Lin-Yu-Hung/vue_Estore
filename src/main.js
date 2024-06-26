import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
// css
import * as bootstrap from "bootstrap";
import "./style/all.scss";
// vee-validate
import { defineRule, configure } from "vee-validate";
import {
  required,
  email,
  length,
  max,
  min,
  ext, regex,
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n"; // 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import "@/methods/icon.js"
import 'animate.css';
import 'swiper/css';
import 'vue3-toastify/dist/index.css';
import '@vuepic/vue-datepicker/dist/main.css'

defineRule("required", required);
defineRule("email", email);
defineRule("length", length);
defineRule("max", max);
defineRule("min", min);
defineRule("ext", ext);
defineRule("regex", regex);
configure({
  generateMessage: localize({
    zh_TW: {
      messages: {
        required: '此欄位為必填',
        email: '電子信箱格式錯誤',
        max: "此欄位最大字數為10"
      },
    }
  }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale("zh_TW");

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// firebase
import {
  getSingleData,
  getAllData,
  setData,
  updateData,
  addArrayItem,
  delArrayItem,
} from "@/methods/firebase.js";


// addArrayItem("Lin_Yu_Hung", "user", "blog", {
//   title: "新增的部落格名稱",
//   content: "test",
// });
// delArrayItem("Lin_Yu_Hung", "user", "blog", "greater_virginia");
// updateData("Lin_Yu_Hung", "address", { address: "updateAddress2" });
// setData("Lin_Yu_Hung", "user", {
//   blog: [
//     {
//       title: "測試部落格名稱",
//     },
//   ],
// });
// const data = await getSingleData("Lin_Yu_Hung", "address");
// console.log(data);
// const allData = await getAllData("city");
// console.log(allData);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(pinia);
app.use(router);
app.mount("#app");


