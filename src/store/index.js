import { createStore } from "vuex";

import authModule from "./auth/index.js";
import brickModule from "./brick/index.js";
import transaksiModule from "./transaksi/index.js";
import  balanceModule  from "./balance/index.js";
const store = createStore({
  modules: {
    auth: authModule,
    brick: brickModule,
    transaksi: transaksiModule,
    balance: balanceModule,
  },
});

export default store;
