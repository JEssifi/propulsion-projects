import {logout} from "../types";

const logoutAction = () => {
    return {
        type: logout
    }
}

export const logoutFunction = () => (dispatch) => {
    localStorage.clear();
    dispatch(logoutAction())
};