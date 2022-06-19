import axios from 'axios';
export default  {
    async getUserAccess(context) {
        let idToken  = localStorage.getItem('idToken');

        let data =  await axios({
            method: 'get',
            url: `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/userToken/id_1/.json?auth=${idToken}`,
        }).then(response => {
            return response.data
        })

        context.commit({
            type: 'setUserAccses',
            userAccses: data
        })
    },

    async cegahBunshin(context){
        context.commit({
            type: 'setCegahBunshin',
            cegahBunshin: true
        })
    }
    // ==========================================================
}
