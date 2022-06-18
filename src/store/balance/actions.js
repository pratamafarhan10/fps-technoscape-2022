export default  {
    async setBalance(context, data){
        context.commit({
            type: 'setBalance',
            balance: data[0].balances.available
        })
    },


    // ==========================================================
}
