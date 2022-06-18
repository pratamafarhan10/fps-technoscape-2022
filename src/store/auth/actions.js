let timer;

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    async auth(context, payload) {
        const mode = payload.mode;

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrxvNe6Aem3L8qp86M2oGNS3dwtpls4bs';

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrxvNe6Aem3L8qp86M2oGNS3dwtpls4bs';
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.error.message || 'Failed to authenticate');
            throw error;
        }

        const expiresIn = (parseInt(responseData.expiresIn) * 1000);
        // const expiresIn = 5000;
        const expirationDate = Date.now() + expiresIn;

        timer = setTimeout(() => {
            context.dispatch('logout');
        }, expiresIn);

        localStorage.setItem('idToken', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        context.commit({
            type: 'setUser',
            idToken: responseData.idToken,
            localId: responseData.localId
        });
    },
    tryLogin(context){
        const idToken = localStorage.getItem('idToken');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = tokenExpiration - Date.now();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(() => {
            context.dispatch('logout');
        }, expiresIn);

        console.log(idToken, userId, tokenExpiration, expiresIn);

        if (idToken && userId) {
            context.commit({
                type: 'setUser',
                idToken: idToken,
                localId: userId
            });
        }else {
            context.dispatch('logout');
        }
    },
    logout(context) {
        localStorage.removeItem('idToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('revokeUser');
    }
}