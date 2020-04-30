import React, {useMemo, useState} from "react";
import { TextAnnotator } from "react-text-annotate";
import {useDispatch, useSelector} from "react-redux";
import {getFetchedTags, getTag} from "../../../../store/reducers/TagReducer";
import {deleteHighlightsAction} from "../../../../store/actions/highlights/deleteHighlightsAction";
import {addHighlightAction} from "../../../../store/actions/highlights/addNewHighlightsAction";

const TextAnnotation = props => {
    const dispatch = useDispatch()
    const currentTag = useSelector(getTag)
    const tags = useSelector(getFetchedTags);

    const createCurrentHighlightedArr = () => {
        const filterText = props.highlight.filter(el => {
            return el.id_pdf.id === props.document.id;
        });

        const filterTextColors = filterText.map(el => {
            const tag = tags.filter(tag => tag.id === el.id_tag.id)
            el.color = tag[0].color
            el.tag_title = tag[0].title
            return {"id": el.id,"start": el.starting_point, "end": el.ending_point, "text": el.selection,"tag": el.tag_title, "color": el.color, 'id_user': el.id_user.id, "id_pdf": el.id_pdf.id, "id_tag": el.id_tag.id}

        })


        return filterTextColors
    }

    const [state, setState] = useState({ value: createCurrentHighlightedArr()  })
    const onChangeHandler = (value) => {
        setState({ value });
    }


    const startingState = createCurrentHighlightedArr()

    const removeMemo = useMemo(() =>{const removed = [startingState, state.value].sort((a,b)=> b.length - a.length)
        .reduce((a,b)=>a.filter(o => !b.some(v => v.id === o.id))).filter(v => v.id);

        dispatch(deleteHighlightsAction(removed))} ,[state])

    const addedMemo = useMemo(() =>{const added = state.value.filter(v => !v.id);
        if(added[added.length-1]){
            added[added.length-1].idtag = currentTag.id
        }
        dispatch(addHighlightAction(added))} ,[state])




    return (
        <>
        <TextAnnotator

            content={props.document.content_text}
            value={state.value}
            onChange={value => {
                onChangeHandler(value)


            }}
            getSpan={span => ({
                ...span,
                tag: currentTag.title,
                color: currentTag.color,
            })}
        />
    </>
    )
};

export default TextAnnotation;