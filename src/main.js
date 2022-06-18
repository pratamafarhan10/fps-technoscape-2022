import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import "./assets/tailwind.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBell,
  faCircle,
  faUser,
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faSortDown,
  faMoneyCheck,
  faArrowDown,
  faHouse,
  faChartColumn,
  faCreditCard,
  faWallet,
  faSackDollar,
  faMoneyBillTransfer,
  faPlus,
  faBus,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faBell,
  faCircle,
  faUser,
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faSortDown,
  faMoneyCheck,
  faArrowDown,
  faHouse,
  faChartColumn,
  faCreditCard,
  faWallet,
  faSackDollar,
  faMoneyBillTransfer,
  faPlus,
  faBus,
  faAngleRight
);

let app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount("#app");
