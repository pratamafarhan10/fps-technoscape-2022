import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            balance: 0,
            pengeluaran: 0,
            pemasukan: 0,
            gopay: 0,
            ovo: 0,
            tsrf: 0,
        };
    },
    actions,
    mutations,
    getters,
}