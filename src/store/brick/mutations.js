export default {
    setPublicToken(state, {publicToken}) {
        state.publicToken = publicToken;
    },
    setFinanceSession(state, {financeSession}) {
        state.username = financeSession.username;
        state.uniqueid = financeSession.uniqueId;
        state.sessionId = financeSession.sessionid;
        state.otpToken= financeSession.otpToken;
    }
}