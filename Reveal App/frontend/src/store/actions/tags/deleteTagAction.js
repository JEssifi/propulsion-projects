import { deleteTag} from "../../types";
import { tagURL} from "../../fetchConfigUrl";

export const deleteTagAction = id => ({
    type: deleteTag,
    payload: id
});




export const deleteTagFunction = data => async(dispatch) => {
    const URL = `${tagURL}${data.id}/`;

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
                    dispatch(deleteTagAction(data));
                    return true
            } else {
                return false;
            }
        })
    ;

}