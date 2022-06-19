export default {
    setBalance(state, balance) {
        state.balance += balance.balance;
    },
    setTsrf(state, tsrf) {
        state.tsrf =  tsrf;
    },
    setGopay(state, gopay) {
        state.gopay = gopay;
    },
    setOvo(state, ovo) {
        state.ovo = ovo;
    }
}