import React, {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {getFetchedTags} from "../../../../store/reducers/TagReducer";
import {getAddedHighlights, getDeletedHighlights} from "../../../../store/reducers/HighlightReducer";

const HighlightedTextRender = props => {
    const [textHighlighted, setTextHighlighted] = useState();


    const memoRenderHighlights = useMemo( () => {
        const originalDocumentText = props.document.content_text;
        let documentText = props.document.content_text;

        if(props.document && props.highlight) {
            const filterText = props.highlight.filter(el => {
                return el.id_pdf.id === props.document.id && ((!el.suggested) || (el.suggested && el.accepted));
            });

            if (documentText) {
                filterText.map(item => {
                    documentText = documentText.replace(originalDocumentText.slice(item.starting_point, item.ending_point), `<span style="background-color: ${item.id_tag.color}">${originalDocumentText.slice(item.starting_point, item.ending_point)}</span><span style="background-color: ${item.id_tag.color};"><span style="font-size: 15px;">  ${item.id_tag.title}</span></span>`)

                })
            }
            return setTextHighlighted(documentText)
        }


    },[props.document, props.highlight ])

    return(<>
            <p dangerouslySetInnerHTML={{__html:
                textHighlighted}}></p>
        </>
    )
}

export default HighlightedTextRender;