import {deleteHighlights, deleteHighlightsBackend} from "../../types";
import {highlightURL} from "../../fetchConfigUrl";

export const deleteHighlightsAction = highlight => ({
    type: deleteHighlights,
    payload: highlight
});

export const deleteHighlightsBackendAction  = id => ({
    type: deleteHighlightsBackend,
    payload: id
});



export const deleteHighlightFunction = data => async(dispatch) => {
    const URL = `${highlightURL}${data.id}/`;

    const headers = new Headers({
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
    });

    const config = {
        method: "DELETE",
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = await fetch(URL, config)
        .then(res => {
            if (res.ok) {
                dispatch(deleteHighlightsBackendAction(data.id));

                return true
            } else {
                return false;
            }
        })
    ;

}