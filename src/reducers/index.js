import playerReducer from "./player";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    player: playerReducer
});

export default allReducers;