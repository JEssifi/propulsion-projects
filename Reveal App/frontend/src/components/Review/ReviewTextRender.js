import React, {useMemo, useState} from "react";
import { useSelector} from "react-redux";
import {getCurrentReview, getStoredReviews} from "../../store/reducers/HighlightReducer";

const ReviewTextRender = props => {

    const [textHighlighted, setTextHighlighted] = useState();

    const storedReview = useSelector(getStoredReviews)


    const memoRenderReviewHighlights = useMemo( () => {
        const originalDocumentText = props.document.content_text;
        let documentText = props.document.content_text;

        if(documentText && props.currentReview && props.reviews) {
            props.reviews.map(item => {
                if (props.currentReview.id === item.id){
                    documentText = documentText.replace(originalDocumentText.slice(item.starting_point,item.ending_point),`<span style="background-color: #3d6af2; font-size: 25px; font-weight: bold;">${originalDocumentText.slice(item.starting_point,item.ending_point)}</span><span style="background-color: #3d6af2; font-size: 25px; font-weight: bold;"><span style="font-size: 15px;">  ${item.id_tag.title}</span></span>`)
                } else {

                documentText = documentText.replace(originalDocumentText.slice(item.starting_point,item.ending_point),`<span style="background-color: ${item.id_tag.color}">${originalDocumentText.slice(item.starting_point,item.ending_point)}</span><span style="background-color: ${item.id_tag.color};"><span style="font-size: 15px;">  ${item.id_tag.title}</span></span>`)
                }
            })
        }
        return setTextHighlighted(documentText)


    },[props.currentReview, props.document,storedReview])


    return(<>
            <p dangerouslySetInnerHTML={{__html:
                textHighlighted}}></p>

        </>
    )

}

export default ReviewTextRender;