import { login } from "../types";
import { BACKEND_URL } from "../../constants.js"

export const loginAction = token => ({
    type: login,
    payload: token
});

const URL = `${BACKEND_URL}auth/token/`;

export const loginFunction = (credentials) => (dispatch) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers
    };

    const apiInformation = fetch(URL, config)
        .then(response => response.json())
        .then(data => {
            dispatch(loginAction(data.access))
            localStorage.setItem('token', data.access)
        });
};
