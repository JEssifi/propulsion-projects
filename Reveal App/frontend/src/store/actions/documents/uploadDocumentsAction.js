import {uploadDocuments} from "../../types";
import {docURL} from "../../fetchConfigUrl";

export const uploadDocumentsAction = document => ({
    type: uploadDocuments,
    payload: document
});


const URL = docURL;

export const uploadDocumentsFunction = data => async(dispatch) => {
    const headers = new Headers({
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
    });

    const config = {
        method: "POST",
        body: data,
        headers,
        redirect: 'follow'
    };

    fetch("https://reveal-app.com/backend/api/document/pdf/", config)
        .then(response => response.text())
        .then(result => {console.log('result',result); dispatch(uploadDocumentsAction(data))})
        .catch(error => console.log('error', error));

    // const apiInformation = await fetch(URL, config)
    //     .then(res => {
    //         if (res.ok) {
    //             res.json().then(data => {
    //                 console.log(data, 'New doc data')
    //                 dispatch(uploadDocumentsAction(data));
    //             })
    //             return true
    //         } else {
    //             return false;
    //         }
    //     })
    // ;

}