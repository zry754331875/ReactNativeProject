import { handleActions } from "redux-actions";
import StudyMainTypes from "../contansts/types/StudyMainTypes";

const defaultState = {
    previousPageIndex:0,
    currentPageIndex:0,
} 

export default handleActions({
    [StudyMainTypes.CURRENT_PAGE_INDEX_CHANGE]:(state,action)=>{

        let index = action.payload

        return {
            ...state,
            currentPageIndex:index,
            previousPageIndex:state.currentPageIndex,
        }
    }
},defaultState)