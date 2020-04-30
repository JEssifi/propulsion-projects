import { darkmode } from "../../types";

const initialState = {
  theme: 'light',
};

const DarkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case darkmode:
      return {
        ...state,
        theme: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default DarkModeReducer;

export const getTheme = ({ DarkModeReducer }) => DarkModeReducer.theme;