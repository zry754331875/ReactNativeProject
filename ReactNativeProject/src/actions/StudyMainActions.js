import { createAction } from "redux-actions";
import StudyMainTypes from "../contansts/types/StudyMainTypes";

export function changeCurrentPageIndex(index){
    return dispatch=>{
        dispatch(createAction(StudyMainTypes.CURRENT_PAGE_INDEX_CHANGE)(index))
    }
}