import {getReviews} from "../types";
import { BACKEND_URL } from "../../constants.js"

export const restaurantsSearchAction = reviews => {
  return {
    type: getReviews,
    payload: reviews
  }
};

const URL = `${BACKEND_URL}reviews/`;

export const reviewsSearchFunction = () => async dispatch => {
    const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
    });

    const config = {
        method: "GET",
        headers
    };

    const response = await fetch(URL, config);
    const reviews = await response.json();
    dispatch(restaurantsSearchAction(reviews));
};
