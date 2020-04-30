// import {getRestaurants} from "../types";
// import { BACKEND_URL } from "../../constants.js"
//
// export const restaurantsSearchAction = restaurants => {
//   return {
//     type: newRestaurant,
//     payload: restaurants
//   }
// };
//
// const URL = `https://sagi-luna.propulsion-learn.ch/backend/api/restaurants/`;
//
// export const restaurantsSearchFunction = () => async dispatch => {
//     const headers = new Headers({
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem('token')
//     });
//
//     const config = {
//         method: "POST",
//         headers
//     };
//
//     const response = await fetch(URL, config);
//     const restaurants = await response.json();
//     dispatch(restaurantsSearchAction(restaurants));
// };