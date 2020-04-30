//USED TO STORE DIFFERENT REDUCER ACTION TYPES

//DARK MODE
export const darkmode = "TOGGLEDARKMODE";

//LOGIN/SIGNUP
export const login = "LOGIN";
export const logout = "LOGOUT";
export const signup = "SIGNUP";
export const validation = "VALIDATIONSUCCESS";

//TAGS
export const changeTag = "CHANGETAG";
export const storeTags = "STORETAGS";
export const changeIndividualTagColor = "CHANGEINVTAGCOLOR";
export const addNewTag = "ADDNEWTAG";
export const deleteTag = "DELETETAG";

//DOCUMENTS
export const storeDocuments = "STOREDOCUMENTS";
export const enableEdit = "ENABLEEDIT";
export const selectDocument = "SELECTDOCUMENT";
export const uploadDocuments = "UPLOADDOCUMENTS"

//HIGHLIGHTS
export const storeHighlights = "STOREHIGHLIGHTS";
export const deleteHighlights = "DELETEHIGHLIGHTS";
export const addHighlights = "ADDHIGHLIGHTS";
export const deleteHighlightsBackend = "DELETEHIGHLIGHTSBACKEND"
export const addHighlightsBackend = "ADDHIGHLIGHTSBACKEND"
export const resetAddHighlightsBackend = "RESETHIGHLIGHTSBACKEND"

//REVIEW HIGHLIGHTS
export const storeReviews = 'STOREREVIEWS';
export const changeCurrentReview = 'CHANGECURRENTREVIEW';
export const setReviewIndex = 'SETREVIEWINDEX';
export const setReviewLength = 'SETREVIEWLENGTH'
export const acceptReview = 'ACCEPTREVIEW'
export const rejectReview = 'REJECTREVIEW'