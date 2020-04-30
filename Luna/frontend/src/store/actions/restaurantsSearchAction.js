import { getRestaurants } from "../types";
import { BACKEND_URL } from "../../constants.js"

export const restaurantsSearchAction = restaurants => {
  return {
    type: getRestaurants,
    payload: restaurants
  }
};

const URL = `${BACKEND_URL}restaurants/`;

export const restaurantsSearchFunction = () => async dispatch => {
    const headers = new Headers({
        "Content-Type": "application/json",
        //Authorization: "Bearer " + localStorage.getItem('token')
    });

    const config = {
        method: "GET",
        headers
    };

    const response = await fetch(URL, config);
    const restaurants = await response.json();
    dispatch(restaurantsSearchAction(restaurants));
};
