import React, {useMemo} from "react";
import {AddNewTagContainer} from "../../Tag/TagSelector/styles";
import ReviewScore from "../ReviewScore";
import {useSelector} from "react-redux";
import {getCurrentReview, getReviewIndex, getStoredReviews} from "../../../store/reducers/HighlightReducer";
import {getSelectedDocument} from "../../../store/reducers/DocumentReducer";

const ReviewSidebar = () => {
    const selectedDocument = useSelector(getSelectedDocument)
    const storedReviews= useSelector(getStoredReviews);
    const reviewIndex = useSelector(getReviewIndex);


    const storeCurrentReviews = useMemo( ()=> {
        if (storedReviews){
            return storedReviews[reviewIndex]
        } else {
            return ''
        }
    }, [selectedDocument, reviewIndex])


    return(
        <>
        <AddNewTagContainer>
            <h1>Reviews</h1>
        </AddNewTagContainer>

    <ReviewScore storedReviews = {storeCurrentReviews}/>
    </>
    )

};

export default ReviewSidebar;