export default {
    setPublicToken(state, {publicToken}) {
        state.publicToken = publicToken;
    },
    setFinanceSession(state, {financeSession}) {
        state.username = financeSession.username;
        state.uniqueId = financeSession.uniqueId;
        state.sessionId = financeSession.sessionid;
        state.otpToken= financeSession.otpToken;
    }
}