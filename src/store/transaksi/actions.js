export default  {
    async setTransaksi(context,transaksi){
        transaksi.filter((e) => {
            if(e.direction == "in"){
                context.commit({
                    type: 'setIncome',
                    income: e
                })
            }else{
                context.commit({
                    type: 'setOutcome',
                    outcome: e
                })
            }
        })
    },


    // ==========================================================
}
