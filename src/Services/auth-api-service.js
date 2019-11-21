import config from '../config';

const AuthService = {
    postLogin(credentials) {
        console.log('making the credentials post call');
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: `POST`,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(res => 
            (!res.ok) 
                ? res.json().then(e => Promise.reject(e) )
                : res.json()
        );
    },
    createUserCall(user){
        console.log(user);
        return fetch(`${config.API_ENDPOINT}/api/auth/sign-up`, {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e) )
                : res.json()
        );
    },
};


export default AuthService;