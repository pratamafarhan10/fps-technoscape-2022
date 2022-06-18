export default {
    userId(state) {
        return state.userId;
    },
    idToken(state){
        return state.idToken;
    },
    isAuthenticated(state){
        return !!state.idToken;
    }
}