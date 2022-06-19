import { createStore } from "vuex";

import authModule from "./auth/index.js";
import brickModule from "./brick/index.js";
import transaksiModule from "./transaksi/index.js";
import  balanceModule  from "./balance/index.js";
<<<<<<< Updated upstream
=======
import userAccsesModule from "./userAccses/index.js";
import budgetModule from "./budget/index.js";

>>>>>>> Stashed changes
const store = createStore({
  modules: {
    auth: authModule,
    brick: brickModule,
    transaksi: transaksiModule,
    balance: balanceModule,
<<<<<<< Updated upstream
=======
    userAccses: userAccsesModule,
    budget: budgetModule
>>>>>>> Stashed changes
  },
});

export default store;
