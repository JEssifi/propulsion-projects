import { combineReducers } from 'redux';
import LogInReducer from './LogInReducer';
import DarkModeReducer from './DarkModeReducer';
import TagReducer from "./TagReducer";
import DocumentReducer from "./DocumentReducer";
import HighlightReducer from "./HighlightReducer";

const rootReducer = combineReducers({
    LogInReducer,
    DarkModeReducer,
    TagReducer,
    DocumentReducer,
    HighlightReducer
});

export default rootReducer;

