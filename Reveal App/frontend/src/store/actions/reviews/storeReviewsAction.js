import {setReviewIndex, setReviewLength, storeReviews} from "../../types";

export const storeReviewsAction = highlights => ({
    type: storeReviews,
    payload: highlights
});

export const setReviewIndexAction = index => ({
    type: setReviewIndex,
    payload: index
});

export const setReviewLengthAction = len => ({
    type: setReviewLength,
    payload: len
});


