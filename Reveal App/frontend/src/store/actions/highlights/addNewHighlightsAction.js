import {addHighlights, addHighlightsBackend, resetAddHighlightsBackend} from "../../types";
import {highlightURL} from "../../fetchConfigUrl";

export const addHighlightAction = (highlight) => ({
    type: addHighlights,
    payload: highlight
});

export const addHighlightActionBackend = data => ({
    type: addHighlightsBackend,
    payload: data
});

export const resetAddHighlightActionBackend =  ({
    type: resetAddHighlightsBackend,
});




export const addHighlightFunction = data => async(dispatch) => {
    const URL = `${highlightURL}pdf/${data.id_pdf}/`;
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
                    dispatch(addHighlightActionBackend(data));
                })
                return true
            } else {
                return false;
            }
        })
    ;

}