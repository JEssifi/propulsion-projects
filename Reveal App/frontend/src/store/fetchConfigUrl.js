
//URLS
export const tagURL = 'https://reveal-app.com/backend/api/tag/' // Get all tags, or add id to get individual tag
export const docURL = 'https://reveal-app.com/backend/api/document/pdf/' // Get all PDF documents
export const highlightURL = 'https://www.reveal-app.com/backend/api/highlight/' // Get all highlights

    //CONFIG


const headersStandard = new Headers({
    "Content-Type": "application/json"
});

const headers = new Headers({
    "Authorization": `Bearer ${localStorage.token}`,
    "Content-Type": "application/json"
});

export const getConfigAuthorization = {
    method: "GET",
    headers
};

export const patchConfigAuthorization = {
    method: "PATCH",
    headers
};

export const postConfigAuthorization = {
    method: "POST",
    headers
};
