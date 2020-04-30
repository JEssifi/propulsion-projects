import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { tokenCheckFunction } from "../store/actions/loginSignUp/tokenCheckAction";
import { getToken } from "../store/reducers/LogInReducer";

export const HOCWrapper = WrappedComponent => {
  const AuthComponent = props => {
    const token = useSelector(getToken);

    useEffect(() => {
      redirectUser();
    }, [token, localStorage.token]);

    const history = useHistory();

    const redirectUser = async () => {
      if (
        (await tokenCheckFunction(token)) &&
        (await tokenCheckFunction(localStorage.token))
      ) {
        history.push("/search");
      } else {
        history.push("/");
      }
    };

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};
