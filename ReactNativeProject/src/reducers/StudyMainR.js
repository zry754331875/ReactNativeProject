import { handleActions } from "redux-actions";
import StudyMainTypes from "../contansts/types/StudyMainTypes";

const defaultState = {
    
} 

export default handleActions({
    [StudyMainTypes.CURRENT_PAGE_INDEX_CHANGE]:(state,action)=>{

        let index = action.payload

        return {
            ...state,
            
        }
    }
},defaultState)