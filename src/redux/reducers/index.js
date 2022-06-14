import { combineReducers } from "redux";
import character from "./character";
import location from "./location";

export default combineReducers({
    character,
    location
})