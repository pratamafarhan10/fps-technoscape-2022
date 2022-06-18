export default {
    setIncome(state, income) {
        state.income.push(income.income);
    },
    setOutcome(state, outcome) {
        state.outcome.push(outcome.outcome);
    }
}