import axios from 'axios';
export default  {
    async setTransaksi(context, userAccess){
       let transaksi = await axios.get("https://sandbox.onebrick.io/v1/transaction/list", {
                headers: {
                    'Authorization': `Bearer ${userAccess}`,
                    'Content-Type': 'application/json'
                },
                params: {
                    from: '2021-01-01',
                    to: '2022-06-15'
                }
                }).then(response => {
                    return response.data.data
        })
        transaksi.filter((e) => {
            if(e.direction == "in"){
                context.commit({
                    type: 'setIncome',
                    income: e
                })
            }else if(e.direction == "out"){
                context.commit({
                    type: 'setOutcome',
                    outcome: e
                })
            }
        })
    },
    // ==========================================================
}
