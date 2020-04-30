import React, {useMemo, useState} from "react";



import {
    AcceptButton,
    AcceptButtons,
    AnnotationWrapper,
    EditReviewBarWrapper,
    EditReviewButtons, RejectButton,
    TopDocumentBar,
    TopDocumentBarColorWrapper
} from "../Tag/Annotation/styles";
import {getEditMode, getSelectedDocument} from "../../store/reducers/DocumentReducer";
import {useDispatch, useSelector} from "react-redux";
import {getTag} from "../../store/reducers/TagReducer";
import {
    getCurrentReview,
    getHighlights, getReviewIndex,
    getReviewLength,
    getStoredReviews
} from "../../store/reducers/HighlightReducer";
import HighlightedTextRender from "../Tag/Annotation/HighlightedTextRender";
import {useFetch} from "../../hooks/useFetch";
import {getConfigAuthorization, highlightURL} from "../../store/fetchConfigUrl";
import {storeHighlightsAction} from "../../store/actions/highlights/storeHighlightsAction";
import ReviewTextRender from "./ReviewTextRender";
import {
    setReviewIndexAction,
    setReviewLengthAction,
    storeReviewsAction
} from "../../store/actions/reviews/storeReviewsAction";
import {changeCurrentReviewAction} from "../../store/actions/reviews/changeCurrentReviewAction";
import {store} from "../../store";
import {acceptReviewFunction} from "../../store/actions/reviews/acceptReviewAction";
import {rejectReviewFunction} from "../../store/actions/reviews/rejectReviewAction";




const Review = () => {
    const currentTag = useSelector(getTag)
    const editMode = useSelector(getEditMode)
    const selectedDocument = useSelector(getSelectedDocument)
    const highlights = useSelector(getHighlights)
    const currentReview = useSelector(getCurrentReview)
    const [textHighlighted, setTextHighlighted] = useState();
    const storedReview = useSelector(getStoredReviews)

    const reviewLength = useSelector(getReviewLength)

    const reviewIndex = useSelector(getReviewIndex)
    const dispatch = useDispatch()
    const [response, error, isLoading] = useFetch(
        highlightURL,
        getConfigAuthorization,
        storeHighlightsAction
    );

    const memoRenderReviewHighlights = useMemo( () => {
        if(response){
        const filterText = highlights.filter(el => {
            return el.id_pdf.id === selectedDocument.id && el.suggested && el.accepted !== false && el.accepted !== true;
            }).sort((a,b) => (a.starting_point > b.starting_point) ? 1 : -1);

            if (filterText){
                dispatch(changeCurrentReviewAction(filterText[0]))
                dispatch(storeReviewsAction(filterText)) //Store document suggestions
                dispatch(setReviewLengthAction(filterText.length-1)) //Set length of documents
                dispatch(setReviewIndexAction(0))
                return setTextHighlighted(filterText)
            }
        }
    }, [selectedDocument,highlights ])

    const storeCurrentReviews = useMemo( ()=> {
        if (storedReview){
            return storedReview[reviewIndex]
        } else {
            return ''
        }
    }, [selectedDocument, reviewIndex])


    const renderAnnotationMessage = () => {
        if (!selectedDocument.title){
            return 'Please choose a document.'
        } else {
            return 'Cycle through selected tags to accept or reject.'
        }
    };

    const currentReviewForwardHandler = () => {
        if(reviewIndex < reviewLength){
            dispatch(changeCurrentReviewAction(storedReview[reviewIndex+1]))
            dispatch(setReviewIndexAction(reviewIndex + 1))
        }
    }

    const currentReviewBackwardHandler = () => {
        if(reviewIndex > 0){
            dispatch(changeCurrentReviewAction(storedReview[reviewIndex-1]))
            dispatch(setReviewIndexAction(reviewIndex -1))
        }


    }

    const acceptReviewHandler = () => {

        if(storeCurrentReviews){
            const data = {
                id: storeCurrentReviews.id,
                accepted: true
            };

            dispatch(acceptReviewFunction(data))

        }



    }
    const rejectReviewHandler = () => {

        if(storeCurrentReviews){
            const data = {
                id: storeCurrentReviews.id,
                accepted: false
            };

            dispatch(rejectReviewFunction(data))

        }



    }




    return (
        <>
            <TopDocumentBar>
                <div>
                    <h1>{`TITLE: ${!selectedDocument.title ? '' : selectedDocument.title}`}</h1>
                </div>
                <div>
                    <h1>{`TAG: ${storeCurrentReviews ? storeCurrentReviews.id_tag.title : ''}`}</h1>
                </div>
                <TopDocumentBarColorWrapper style={{backgroundColor: `${storeCurrentReviews ? storeCurrentReviews.id_tag.color: '#fff'}`}}></TopDocumentBarColorWrapper>
            </TopDocumentBar>
            <EditReviewBarWrapper>
                <div>
                    <EditReviewButtons onClick={() => currentReviewBackwardHandler()} >{'<'}</EditReviewButtons>
                    <EditReviewButtons onClick={() => currentReviewForwardHandler()}>{'>'}</EditReviewButtons>
                    <AcceptButton onClick={() => acceptReviewHandler()}>ACCEPT</AcceptButton>
                    <RejectButton onClick={() => rejectReviewHandler()}>REJECT</RejectButton>
                </div>
                <p>{renderAnnotationMessage()}</p>
            </EditReviewBarWrapper>
            <AnnotationWrapper>
                <ReviewTextRender currentReview={currentReview} reviews={textHighlighted}  document={selectedDocument} reviewIndex={reviewIndex}/>
            </AnnotationWrapper>
        </>
    );
};

export default Review;
