import { combineReducers } from "redux";
import MineMainR from "./MineMainR";
import WorkMainR from "./WorkMainR";
import StudyMainR from "./StudyMainR";

export default rootReducers = combineReducers({
    mine:MineMainR,
    work:WorkMainR,
    studt:StudyMainR,
})