import {getCategories} from "../types";
import { BACKEND_URL } from "../../constants.js"

export const categoriesAction = categories => {
  return {
    type: getCategories,
    payload: categories
  }
};

const URL = `${BACKEND_URL}categories/list/`;

export const categoriesFunction = () => async dispatch => {
    const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
    });

    const config = {
        method: "GET",
        headers
    };

    const response = await fetch(URL, config);
    const categories = await response.json();
    dispatch(categoriesAction(categories));
};
