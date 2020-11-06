import {combineReducers} from "redux";
import userReducer from "./userReducer";
import statReducer from "./statReducer";
export default combineReducers({
    user: userReducer,
    stats: statReducer
})