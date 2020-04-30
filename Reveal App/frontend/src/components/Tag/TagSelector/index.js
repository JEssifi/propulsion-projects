import React, { useRef, useState } from "react";
import DropDownMenu from "../../DropDownMenu";
import {
  AddNewSubTagForm,
  AddNewTagContainer,
  AddNewTagForm,
  IndividualTagContainer,
  SubTagDeleteTimesContainer
} from "./styles";
import ColorPicker from "../../ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { getFetchedTags, getTag } from "../../../store/reducers/TagReducer";
import { tagSelectionAction } from "../../../store/actions/tags/tagSelectionAction";
import { useFetch } from "../../../hooks/useFetch";
import { storeTagsAction } from "../../../store/actions/tags/storeTagsAction";
import { getConfigAuthorization, tagURL } from "../../../store/fetchConfigUrl";
import { DonutSpinner } from "../../../styles/donut";
import RenderPlus from "../../../hoc/RenderPlus";
import RenderTickImage from "../../../hoc/RenderTickImage";
import { addNewTagFunction } from "../../../store/actions/tags/addNewTagAction";
import Times from "../../DropDownMenu/Times";
import { dark, light } from "../../../styles";
import { getTheme } from "../../../store/reducers/DarkModeReducer";
import { deleteTagFunction } from "../../../store/actions/tags/deleteTagAction";

const TagSelector = () => {
  const [addTag, setAddTag] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const currentTag = useSelector(getTag);
  const currentFetchedTags = useSelector(getFetchedTags);
  const currentTheme = useSelector(getTheme);
  const dispatch = useDispatch();
  const [response, error, isLoading] = useFetch(
    tagURL,
    getConfigAuthorization,
    storeTagsAction
  );
  const tagForm = useRef(null);
  const subtagForm = useRef(null);

  const setTimesColor = () => {
    if (currentTheme === "dark") {
      return dark.mainColor;
    } else {
      return light.mainColor;
    }
  };

  const newTagHandler = parentTag => async e => {
    e.preventDefault();

    const data = {
      title: newTagName,
      color: "#f3f3f3",
      id_user: JSON.parse(localStorage.user).id,
      parent_tag: parentTag
    };
    const res = await dispatch(addNewTagFunction(data));

    if (!res) {
      setAddTag(false);
      setNewTagName("");
      tagForm.current.reset();
    }
  };

  const deleteTagHandler = id => {
    const data = {
      id: id
    };

    dispatch(deleteTagFunction(data));
  };

  const renderTags = () => {
    if (isLoading) {
      return <DonutSpinner />;
    } else if (error) {
      return <h1>Sorry an error occurred!</h1>;
    } else if (response && currentFetchedTags) {
      const parentArray = currentFetchedTags.filter(el => {
        return !el.parent_tag;
      });
      const childArray = currentFetchedTags.filter(el => {
        return el.parent_tag;
      });
      const parentChildArray = parentArray.map(e => {
        let temp = childArray.filter(el => el.parent_tag === e.id);
        if (temp) {
          e.subtags = temp;
        }
        return e;
      });

      return parentChildArray.map(tag => {
        const getSubTags = () => {
          return tag.subtags.map(sub => {
            return (
              <IndividualTagContainer>
                <ColorPicker key={sub.id} id={sub.id} color={sub.color} />
                <p
                  style={{
                    fontWeight: currentTag.title === sub.title ? "bold" : "",
                    fontSize: currentTag.title === sub.title ? "28px" : ""
                  }}
                  onClick={() => {
                    dispatch(tagSelectionAction(sub));
                  }}
                >
                  {sub.title}
                </p>
                <SubTagDeleteTimesContainer
                  onClick={() => deleteTagHandler(sub.id)}
                >
                  <Times height={30} fill={setTimesColor()} />
                </SubTagDeleteTimesContainer>
              </IndividualTagContainer>
            );
          });
        };
        const tagContent = (
          <>
            <IndividualTagContainer key={tag.id}>
              <ColorPicker key={tag.id} id={tag.id} color={tag.color} />
              <p
                style={{
                  fontWeight: currentTag.title === tag.title ? "bold" : "",
                  fontSize: currentTag.title === tag.title ? "28px" : ""
                }}
                onClick={() => {
                  dispatch(tagSelectionAction(tag));
                }}
              >
                {tag.title}
              </p>
            </IndividualTagContainer>{" "}
            {getSubTags()}{" "}
            <IndividualTagContainer>
              <RenderPlus />
              <AddNewSubTagForm
                ref={subtagForm}
                onSubmit={newTagHandler(tag.id)}
              >
                <input
                  onChange={e => setNewTagName(e.currentTarget.value)}
                  type="text"
                  placeholder="New subtag..."
                />{" "}
                <div onClick={newTagHandler(tag.id)}>
                  <RenderTickImage />{" "}
                </div>
              </AddNewSubTagForm>
            </IndividualTagContainer>
          </>
        );
        return (
          <DropDownMenu id={tag.id} title={tag.title} content={tagContent} />
        );
      });
    }
  };

  return (
    <>
      <AddNewTagContainer>
        <h1>Tags</h1>
        <AddNewTagForm
          ref={tagForm}
          onSubmit={newTagHandler(null)}
          style={{ display: addTag ? "flex" : "none" }}
        >
          <input
            onChange={e => setNewTagName(e.currentTarget.value)}
            type="text"
            placeholder="New tag..."
          />{" "}
          <div onClick={newTagHandler(null)}>
            <RenderTickImage />{" "}
          </div>
        </AddNewTagForm>
        <div
          onClick={() => {
            setAddTag(!addTag);
          }}
        >
          <RenderPlus />
        </div>
      </AddNewTagContainer>
      <div>{renderTags()}</div>
    </>
  );
};

export default TagSelector;
