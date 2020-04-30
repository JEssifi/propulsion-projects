import { login } from "../types";
import { BACKEND_URL } from "../../constants.js"

export const registrationAction = email => ({
    type: "registration",
    payload: email
});

const URL = `${BACKEND_URL}registration/`;

export const registrationFunction = (email) => async (dispatch) => {
console.log("THIS IS THE EMAIL", email)
    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(email),
        headers
    };
    console.log("Hello", config.body)
    const apiInformation = await fetch(URL, config);
    const response = await apiInformation.json();
    dispatch(registrationAction(email.email));
    console.log("Heloo", response)
    return response.emailverification;

};

