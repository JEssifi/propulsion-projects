import {addNewTag} from "../../types";
import {tagURL} from "../../fetchConfigUrl";

export const addNewTagAction = tag => ({
    type: addNewTag,
    payload: tag
});


const URL = tagURL;

export const addNewTagFunction = data => async(dispatch) => {
    const headers = new Headers({
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
    });

    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = await fetch(URL, config)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data, 'New Tag data')
                    dispatch(addNewTagAction(data));
                })
                return true
            } else {
                return false;
            }
        })
    ;

}