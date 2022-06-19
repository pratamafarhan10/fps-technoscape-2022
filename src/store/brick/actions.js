import axios from "axios";


let url = "https://sandbox.onebrick.io/v1/"
export default  {
    async getPublicToken(context, credentials){
        axios.get(url+"auth/token", {
            auth: {
                username: credentials.clientId,
                password: credentials.clientSecret,
            },
        }).then(response => {
            console.log(response.data)
            context.commit({
                type: 'setPublicToken',
                publicToken: response.data.data.access_token
            })
        }).catch(error => {
            console.log(error);
        });
    },

    async authBrickFinance(context,payloads){
        console.log(payloads);

        if(payloads.password == undefined  || payloads.password == null){
            axios({
            method: 'post',
            url: url+"auth/",
            headers: { 
                'Authorization': `Bearer ${payloads.publicToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                institution_id: 11,
                username: payloads.username,
            }
            }).then(response => {
                context.commit({
                    type: 'setFinanceSession',
                    financeSession: response.data.data
                })
            });
        }else{
            axios({
                method: 'post',
                url: url+"auth/",
                headers: { 
                    'Authorization': `Bearer ${payloads.publicToken}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    institution_id: 11,
                    username: payloads.username,
                }
                }).then(response => {
                    context.commit({
                        type: 'setFinanceSession',
                        financeSession: response.data.data
                    })
                })
        }
    },

    async otpGopay(context,actionPayload){
        const dataUser = this.state.brick;
        console.log(dataUser)

        axios({
            method: 'post',
            url: url+"auth/gopay/",
            headers: {
                'Authorization': `Bearer ${dataUser.publicToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                institution_id : 11,
                username  : dataUser.username,
                uniqueId  : dataUser.uniqueId,
                sessionId : dataUser.sessionId,
                otpToken : dataUser.otpToken,
                otp: actionPayload.otp
            }
        }).then(response => {
            let idToken  = localStorage.getItem('idToken');
            axios({
                method: 'put',
                url: `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/userToken/id_1/gopay.json?auth=${idToken}`,
                data: {
                    userAccessToken: response.data.data,
                }
            })
        })
    }


    // ==========================================================
}
