import axios from 'axios';
export default  {
    async setBalance(context, data){
        context.state.balance = 0;
        for(let i in data){
            await axios.get("https://sandbox.onebrick.io/v1/account/list", {
                headers: {
                    'Authorization': `Bearer ${data[i]}`,
                    'Content-Type': 'application/json'
                },
            }).then(response => { 
                context.commit({
                type: 'setBalance',
                balance: response.data.data[0].balances.available
            })
        })
        }
    },

    async getTsrf(context, data){
        await axios.get("https://sandbox.onebrick.io/v1/account/list", {
                headers: {
                    'Authorization': `Bearer ${data}`,
                    'Content-Type': 'application/json'
                },
            }).then(response => { 
                context.commit({
                type: 'setTsrf',
                balance: response.data.data[0]
            })
        })
    },
    async getGopay(context, data){
        await axios.get("https://sandbox.onebrick.io/v1/account/list", {
                headers: {
                    'Authorization': `Bearer ${data}`,
                    'Content-Type': 'application/json'
                },
            }).then(response => { 
                context.commit({
                type: 'setGopay',
                balance: response.data.data[0]
            })
        })
    },
    async getOvo(context, data){
        await axios.get("https://sandbox.onebrick.io/v1/account/list", {
                headers: {
                    'Authorization': `Bearer ${data}`,
                    'Content-Type': 'application/json'
                },
            }).then(response => { 
                context.commit({
                type: 'setOvo',
                balance: response.data.data[0]
            })
        })
    },

    // ==========================================================
}
