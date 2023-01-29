import { createApp } from "vue";
import App from "./App.vue";

//Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import store from "./store/store";

library.add(faUserSecret, faScaleUnbalancedFlip);

import "./assets/base.css";
import "./assets/main.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
