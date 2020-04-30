import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTag} from "../../../store/reducers/TagReducer";
import {
    AnnotationWrapper,
    EditReviewBarWrapper, EditReviewButtons,
    TopDocumentBar,
    TopDocumentBarColorWrapper
} from "./styles";
import {getEditMode, getSelectedDocument} from "../../../store/reducers/DocumentReducer";
import {useFetch} from "../../../hooks/useFetch";
import {getConfigAuthorization, highlightURL} from "../../../store/fetchConfigUrl";
import {toggleEditAction} from "../../../store/actions/highlights/toggleEditAction";
import TextAnnotation from "./TextAnnotation";
import {storeHighlightsAction} from "../../../store/actions/highlights/storeHighlightsAction";
import HighlightedTextRender from "./HighlightedTextRender";
import {getAddedHighlights, getDeletedHighlights, getHighlights} from "../../../store/reducers/HighlightReducer";
import {deleteHighlightFunction} from "../../../store/actions/highlights/deleteHighlightsAction";
import {addHighlightFunction, resetAddHighlightActionBackend} from "../../../store/actions/highlights/addNewHighlightsAction";
import {useHistory} from "react-router";



const Annotation = () => {
    const currentTag = useSelector(getTag)
    const history = useHistory();
    const editMode = useSelector(getEditMode)
    const deletedHighlights = useSelector(getDeletedHighlights)
    const addedHighlights = useSelector(getAddedHighlights)
    const selectedDocument = useSelector(getSelectedDocument)
    const highlights = useSelector(getHighlights)
    const dispatch = useDispatch()
    const [response, error, isLoading] = useFetch(
        highlightURL,
        getConfigAuthorization,
        storeHighlightsAction
    );


    const renderEditSave = () => {
        if(editMode){
            return 'SAVE'
        } else {
            return 'EDIT'
        }
    };

    const renderReviewCancel= () => {
        if(editMode){
            return 'CANCEL'
        } else {
            return 'REVIEW'
        }
    };

    const renderReviewCancelHandler = () => {
        if(editMode){
            dispatch(toggleEditAction);
        } else {
            history.push('/review')
        }
    }



    const renderEditOrDisplayMode = () => {
        if(editMode && currentTag && selectedDocument.title){
            return ( <TextAnnotation
                document={selectedDocument}
                highlight={highlights}
            />)
        } else {
            return (<HighlightedTextRender highlight={highlights} document={selectedDocument} />)
        }
    };

    const renderAnnotationMessage = () => {
        if (!selectedDocument.title){
            return 'Please choose a document.'
        }
        else if(!editMode && !currentTag.color){
            return 'Choose a tag and click edit to continue.'
        } else if (!editMode) {
            return 'Click edit to start tagging.'
        } else if (!currentTag.color){
            return 'Choose a tag on the right to start tagging.'
        } else {
            return 'Ready to tag text! Click save to exit tagging mode.'
        }
    };

    const deleteHighlightHandler = (id) => {
        const data = {
            id: id,
        };

        dispatch(deleteHighlightFunction(data));

    }

    const addHighlightHandler = (addedHighlights,selectedDocument) => {
        const data = {
            "starting_point": addedHighlights.start,
            "ending_point": addedHighlights.end,
            "selection": addedHighlights.text,
            "id_user": JSON.parse(localStorage.user).id,
            "id_pdf": selectedDocument.id,
            "id": selectedDocument.id,
            "tag": addedHighlights.idtag
        };

        dispatch(addHighlightFunction(data));

    }

    const editSaveButtonHandler = () => {
        dispatch(toggleEditAction)

        if(deletedHighlights){
            const deleteHighlights= () => deletedHighlights.map(item =>deleteHighlightHandler(item.id) )
            deleteHighlights()
        }

        if(addedHighlights){
            const addHighlights = () => addedHighlights.map(item =>addHighlightHandler(item, selectedDocument) )
            addHighlights()
            dispatch(resetAddHighlightActionBackend)
        }
    }

  return (
      <>
        <TopDocumentBar>
            <div>
            <h1>{`TITLE: ${!selectedDocument.title ? '' : selectedDocument.title}`}</h1>
            </div>
            <div>
            <h1>{`TAG: ${currentTag ? currentTag.title : ''}`}</h1>
            </div>
            <TopDocumentBarColorWrapper style={{backgroundColor: `${currentTag ? currentTag.color : '#fff'}`}}></TopDocumentBarColorWrapper>
        </TopDocumentBar>
          <EditReviewBarWrapper>
              <div>
              <EditReviewButtons onClick={() =>  editSaveButtonHandler()}>{renderEditSave()}</EditReviewButtons>
              <EditReviewButtons onClick={() => renderReviewCancelHandler()}>{renderReviewCancel()}</EditReviewButtons>
              </div>
              <p>{renderAnnotationMessage()}</p>
          </EditReviewBarWrapper>
        <AnnotationWrapper>
            {renderEditOrDisplayMode()}
        </AnnotationWrapper>
    </>
  );
};

export default Annotation;
