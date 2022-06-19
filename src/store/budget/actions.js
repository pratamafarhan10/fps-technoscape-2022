import axios from 'axios';
export default  {
    async getBudget(context) {
        let idToken  = localStorage.getItem('idToken');
        let userId = localStorage.getItem('userId');
        console.log(idToken);
        let data =  await axios({
            method: 'get',
            url: `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/${userId}.json?auth=${idToken}`,
        }).then(response => {
            return response.data
        })
        
        context.commit({
            type: 'setBudget',
            budget: data
        })
    }
    // ==========================================================
}
