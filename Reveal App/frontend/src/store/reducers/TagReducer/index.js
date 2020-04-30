import {addNewTag, changeIndividualTagColor, changeTag,  deleteTag, storeTags} from "../../types";

const initialState = {
    tags: {},
    currentTag: '',
    changeIndividualTagColor: false,
};

const TagReducer = (state = initialState, action) => {
    switch (action.type) {
        case changeTag: {
            return {
                ...state,
                currentTag: action.payload,
            };
        }
        case storeTags: {
            return {
                ...state,
                tags: action.payload
            };
        }
        case changeIndividualTagColor: {
            return {
                ...state,
                tags: state.tags.map(tag => tag.id === action.payload.id ? {...tag, color: action.payload.color}: tag)
            };
        }
        case addNewTag: {
            return {
                ...state,
                tags: [...state.tags, action.payload]
            };
        }
        case deleteTag: {
            return {
                ...state,
                tags: state.tags.filter(tag => tag.id !== action.payload.id)
            };
        }
        default: {
            return state;
        }
    }
};

export default TagReducer;

export const getTag = ({ TagReducer }) => TagReducer.currentTag;
export const getFetchedTags = ({ TagReducer }) => TagReducer.tags;
export const getChangeIndividualTagColor = ({ TagReducer }) => TagReducer.changeIndividualTagColor;