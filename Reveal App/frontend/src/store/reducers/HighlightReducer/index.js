import {
    acceptReview,
    addHighlights, addHighlightsBackend, changeCurrentReview,
    deleteHighlights, deleteHighlightsBackend, rejectReview, resetAddHighlightsBackend, setReviewIndex, setReviewLength,
    storeHighlights, storeReviews
} from "../../types";

const initialState = {
    highlights: [],
    removedHighlights: [],
    addedHighlights: [],
    storedReviews: [],
    currentReview: [],
    reviewLength: 0,
    reviewIndex: 0,
};

const HighlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case storeHighlights: {
            return {
                ...state,
                highlights: action.payload
            };
        }
        case deleteHighlights: {
            return {
                ...state,
                removedHighlights: action.payload
            };
        }
        case addHighlights: {
            return {
                ...state,
                addedHighlights: action.payload
            };
        }
        case deleteHighlightsBackend: {
            return {
                ...state,
                highlights: state.highlights.filter(highlight => highlight.id !== action.payload)
            };
        }
        case addHighlightsBackend: {
                return {
                    ...state,
                    highlights: [...state.highlights, action.payload]
                };
            }
        case resetAddHighlightsBackend: {
            return {
                ...state,
                addedHighlights: []
            };
        }
        case storeReviews: {
            return {
                ...state,
                storedReviews: action.payload
            };
        }
        case changeCurrentReview: {
            return {
                ...state,
                currentReview: action.payload
            }
        }
        case setReviewIndex: {
            return {
                ...state,
                reviewIndex: action.payload
            }
        }
        case setReviewLength: {
            return {
                ...state,
                reviewLength: action.payload
            }
        }
        case acceptReview: {
            return {
                ...state,
                highlights: state.highlights.filter(review => review.id !== action.payload.id)
            }
        }
        case rejectReview: {
            return {
                ...state,
                highlights: state.highlights.filter(review => review.id !== action.payload.id)
            }
        }

        default: {
            return state;
        }
    }
};

export default HighlightReducer;

export const getHighlights = ({ HighlightReducer }) => HighlightReducer.highlights;
export const getDeletedHighlights = ({ HighlightReducer }) => HighlightReducer.removedHighlights;
export const getAddedHighlights = ({ HighlightReducer }) => HighlightReducer.addedHighlights;


export const getCurrentReview = ({ HighlightReducer }) => HighlightReducer.currentReview;
export const getStoredReviews = ({ HighlightReducer }) => HighlightReducer.storedReviews;
export const getReviewLength = ({ HighlightReducer }) => HighlightReducer.reviewLength;
export const getReviewIndex= ({ HighlightReducer }) => HighlightReducer.reviewIndex;

