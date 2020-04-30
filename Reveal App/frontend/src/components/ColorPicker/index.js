import React, {useState} from "react";
import {CompactPicker, MaterialPicker} from "react-color";
import {OuterColorPicker} from "./styles";
import {loginFunction} from "../../store/actions/loginSignUp/loginAction";
import {changeTagColorFunction} from "../../store/actions/tags/changeTagColorAction";
import {useDispatch, useSelector} from "react-redux";
import {getTag} from "../../store/reducers/TagReducer";
import {tagSelectionAction} from "../../store/actions/tags/tagSelectionAction";

const ColorPicker = (props) => {
    const [color, setColor] = useState(props.color)
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch()
    const currentTag = useSelector(getTag);

    const handleClick = () => {
        setDisplay(!display)
    };
    const handleClose = () => {
        setDisplay(false)
    };

    const colorChangeHandler = (id, color) => {
        const data = {
            id: id,
            color: color
        };

        dispatch(changeTagColorFunction(data));

        if (currentTag.id === id){
            currentTag.color = color
            dispatch(tagSelectionAction(currentTag))
        }


    }



    return(
        <div style={{ width: 'auto',height: 'auto', marginTop: '1%'}}>
            <div style={{padding: '5px',height: 'auto',borderRadius: '50px', backgroundColor: `${color}`, cursor:"pointer", display: 'inline-block',}}  onClick={ handleClick }>
                <div style={{width: '36px',
                    height: '14px', backgroundColor: `${color}` ,borderRadius: '50px'}} />
            </div>
            {display ? <div style={{position: 'absolute',
                zIndex: '2',}}><div style={ {position: 'fixed',
                top: '100px',
                right: '0px',
                bottom: '0px',
                left: '0px', }} onClick={ handleClose }/>
                <CompactPicker color={color} onChangeComplete={ color => {
                    setColor(color.hex)
                    colorChangeHandler(props.id,color.hex)
                }} />
            </div> : null }
        </div>

    )
}

export default ColorPicker;