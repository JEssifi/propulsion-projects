import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import {BaseContainer} from "../../styles/containers";
import {dark, light} from "../../styles";
import {getTheme} from "../../store/reducers/DarkModeReducer";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import LoginSignUp from "../LoginSignUp";
import Search from "../Search/";
import {HOCWrapper} from "../../hoc/authorizationHoc";
import Upload from "../Upload";
import Tag from "../Tag";
import NotFound from "../NotFound";

function App() {
    const themes = {
        light,
        dark,
    };

    const currentTheme = useSelector(getTheme);

  return (
      <ThemeProvider theme={themes[currentTheme]}>
    <Router>
      <BaseContainer>
          <Nav/>
        <Switch>
            <Route exact path="/" component={LoginSignUp} />
            <Route exact path="/signup" component={LoginSignUp} />
            <Route exact path="/congratulations" component={LoginSignUp} />
            <Route exact path="/registration" component={LoginSignUp} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/tag" component={Tag} />
            <Route exact path="/review" component={Tag} />
            <Route path="*" component={NotFound}/>
        </Switch>
      </BaseContainer>
    </Router>
      </ThemeProvider>
  );
}

export default App;
