import {enableEdit, selectDocument, storeDocuments, uploadDocuments} from "../../types";

const initialState = {
    documents: [],
    editMode: false,
    selectedDocument: {},
};

const DocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case enableEdit: {
            return {
                ...state,
                editMode: !state.editMode,
            };
        }
        case selectDocument: {
            return {
                ...state,
                selectedDocument: {...state.selectedDocument, ...action.payload}
            };
        }
        case storeDocuments: {
            return {
                ...state,
                documents: action.payload
            };
        }
        case uploadDocuments: {
            return {
                ...state,
                documents: [...state.documents, ...action.payload]
            };
        }
        default: {
            return state;
        }
    }
};

export default DocumentReducer;

export const getEditMode = ({ DocumentReducer }) => DocumentReducer.editMode;
export const getSelectedDocument = ({ DocumentReducer }) => DocumentReducer.selectedDocument;
export const getFetchedDocuments = ({ DocumentReducer }) => DocumentReducer.documents;