import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            publicToken: "",
            uniqueId: "",
            sessionId: "",
            otpToken: "",
            otp: "",
            username:  "",
            password: "",
        };
    },
    actions,
    mutations,
    getters,
}