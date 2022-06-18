export default {
    setUser(state, {idToken, localId}){
        state.idToken = idToken;
        state.userId = localId;
    },
    revokeUser(state){
        state.idToken = null;
        state.userId = null;
    }
}