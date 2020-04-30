import { listBestRestaurants } from "../types";
import { BACKEND_URL } from "../../constants.js"

export const listBestRestaurantsAction = posts => ({
    type: listBestRestaurants,
    payload: posts
});

const URL = `${BACKEND_URL}restaurants/best/`;

export const listBestRestaurantsFunction = () => dispatch => {

    const headers = new Headers({
        'Content-Type': 'application/json',
        //"Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'GET',
        headers
    };

    const apiInformation = fetch(URL, config)
        .then(response => response.json())
        .then(result => {
            dispatch(listBestRestaurantsAction(result))
        });
};
