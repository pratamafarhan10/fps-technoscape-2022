export default {
    setUserAccses(state, user) {
        state.dataAccsess = user.userAccses;
    },
    setCegahBunshin(state, ok) {
        state.cegahBunshin = ok.cegahBunshin;
    }
}