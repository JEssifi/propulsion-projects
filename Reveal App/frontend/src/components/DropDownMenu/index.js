import React, {useEffect, useRef, useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionSection,
  AccordionText,
  AccordionTitle
} from "./styles";
import Chevron from "./Chevron";
import {useDispatch, useSelector} from "react-redux";
import { getTheme } from "../../store/reducers/DarkModeReducer";
import { dark, light } from "../../styles";
import Times from "./Times";
import {changeTagColorFunction} from "../../store/actions/tags/changeTagColorAction";
import {tagSelectionAction} from "../../store/actions/tags/tagSelectionAction";
import {deleteTagFunction} from "../../store/actions/tags/deleteTagAction";
import {getTag} from "../../store/reducers/TagReducer";

const DropDownMenu = props => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion__icon");
  const [deleteTag, setDeleteTag] = useState(false);
  const dispatch = useDispatch()
  const currentTheme = useSelector(getTheme);
  const currentTag = useSelector(getTag);
  const content = useRef(null);


  const toggleDropDown = () => {
    if (deleteTag) {
      return console.log("delete");
    } else {
      setActive(active === "" ? "active" : "");
      setHeight(
        active === "active" ? "0px" : `${content.current.scrollHeight}px`
      );
      setRotate(
        active === "active" ? "accordion__icon" : "accordion__icon__rotate"
      );
    }
  };
  const setChevronColor = () => {
    if (currentTheme === "dark") {
      return dark.thirdColor;
    } else {
      return light.thirdColor;
    }
  };


  const deleteTagHandler = (id) => {
    const data = {
      id: id,
    };

    dispatch(deleteTagFunction(data));

  }


  return (
    <AccordionSection className="accordion__section">
      <Accordion className="accordion">
        <AccordionTitle
          className={`accordion__${active}`}
          onClick={toggleDropDown}
        >
          {props.title}
        </AccordionTitle>
        <div className={"wrapper__icon"}>
          <div
            className={"accordion__icon__cross"}
            onClick={() => {
              setDeleteTag(true);
              deleteTagHandler(props.id);
            }}
          >
            <Times height={30} fill={`${setChevronColor()}`} />
          </div>
          <div className={"accordion__icon"} onClick={toggleDropDown}>
            <Chevron
              height={30}
              fill={`${setChevronColor()}`}
              className={`${rotate}`}
            />
          </div>
        </div>
      </Accordion>
      <AccordionContent
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <AccordionText className="accordion__text">
          {props.content}
        </AccordionText>
      </AccordionContent>
    </AccordionSection>
  );
};

export default DropDownMenu;
