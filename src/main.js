import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
// css
import * as bootstrap from "bootstrap";
import "./style/all.scss";

// icon套件
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHatWizard,
  faTrashCan,
  faPenToSquare,
  faCloudUpload,
  faFileExport
} from "@fortawesome/free-solid-svg-icons";
library.add(faHatWizard, faTrashCan, faPenToSquare, faCloudUpload, faFileExport); // 加入所需ICON

// vee-validate
import { defineRule, configure } from "vee-validate";
import {
  required,
  email,
  length,
  max,
  min,
  ext
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n"; // 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
defineRule("required", required);
defineRule("email", email);
defineRule("length", length);
defineRule("max", max);
defineRule("min", min);
defineRule("ext", ext);
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale("zh_TW");

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
app.use(createPinia());
app.use(router);
app.mount("#app");


