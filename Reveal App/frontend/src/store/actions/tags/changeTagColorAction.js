import {changeIndividualTagColor} from "../../types";
import {tagURL} from "../../fetchConfigUrl";

export const changeTagColorAction = color =>({
    type: changeIndividualTagColor,
    payload: color
});







export const changeTagColorFunction = (data) => async(dispatch) => {
    const URL = `${tagURL}${data.id}/`;

    const headers = new Headers({
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
    });

    const config = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = await fetch(URL, config)
        .then(res => {
            if(res.ok) {
                dispatch(changeTagColorAction(data))
                return true
            } else {
                return false;
            }
        })
    ;

    if (!apiInformation) {
        return false
    } else {
        return true
    }
};
