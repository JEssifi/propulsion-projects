import {acceptReview, addHighlights, addHighlightsBackend, rejectReview, resetAddHighlightsBackend} from "../../types";
import {highlightURL} from "../../fetchConfigUrl";

export const rejectReviewAction = (data) => ({
    type: rejectReview,
    payload: data
});


export const rejectReviewFunction = data => async(dispatch) => {
    const URL = `${highlightURL}${data.id}/`;
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
            if (res.ok) {
                res.json().then(data => {
                    console.log(data, 'Accept OK')
                    dispatch(rejectReviewAction(data));
                })
                return true
            } else {
                return false;
            }
        })
    ;

}