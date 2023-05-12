import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHatWizard,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import * as bootstrap from "bootstrap";
import "./style/all.scss";
import {
  getSingleData,
  getAllData,
  setData,
  updateData,
  addArrayItem,
  delArrayItem,
} from "@/methods/firebase.js";
// 加入所需ICON
library.add(faHatWizard, faTrashCan, faPenToSquare);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
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
