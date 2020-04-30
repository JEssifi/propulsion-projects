import {search} from "../types";
import { BACKEND_URL } from "../../constants.js"

export const searchAction = searchText => ({
  type: search,
  payload: searchText
});


export const searchFunction = data => async dispatch => {
    console.log('DATA', data.name);
    const URL = `${BACKEND_URL}restaurants/?search=${data.name}`;
    const headers = new Headers({
        "Content-Type": "application/json",
        //Authorization: "Bearer " + localStorage.getItem("token")
    });

    const config = {
        method: "GET",
        headers
    };

    const response = await fetch(URL, config);
    const searchText = await response.json();
    console.log('SEARCHTEXT', searchText);
    dispatch(searchAction(searchText));
};
