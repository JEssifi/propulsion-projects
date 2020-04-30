import React from "react";
import SearchBarTop from "../SearchBarTop";
import {
    LeftDocumentContainer,
    MiddleAnnotationContainer,
    RightTagsContainer,
    TagBottomContainer,
    UnderSearchContainer
} from "./styles";
import Annotation from "./Annotation";
import DocumentRender from "./DocumentRender";
import TagSelector from "./TagSelector";
import {Route, Switch} from "react-router-dom";
import NavLoggedOut from "../Nav/NavLoggedOut";
import NavLoggedIn from "../Nav/NavLoggedIn";
import Review from "../Review";
import ReviewSidebar from "../Review/ReviewSidebar";

const Tag = () => {
    return (
        <TagBottomContainer>
            <UnderSearchContainer>
                <LeftDocumentContainer>
                        <DocumentRender />
                </LeftDocumentContainer>
                <MiddleAnnotationContainer>

                    <Switch>
                        <Route exact path="/tag" component={Annotation} />
                        <Route exact path="/review" component={Review} />
                    </Switch>

                </MiddleAnnotationContainer>
                <RightTagsContainer>
                    <Switch>
                        <Route exact path="/tag" component={TagSelector} />
                        <Route exact path="/review" component={ReviewSidebar} />
                    </Switch>
                </RightTagsContainer>
            </UnderSearchContainer>
        </TagBottomContainer>

    )
};

export default Tag;