import {changeCurrentReview} from "../../types";

export const changeCurrentReviewAction = highlights => ({
    type: changeCurrentReview,
    payload: highlights
});