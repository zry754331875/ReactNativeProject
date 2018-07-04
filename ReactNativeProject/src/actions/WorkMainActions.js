import { createAction } from "redux-actions";
import WorkMainTypes from "../contansts/types/WorkMainTypes";
import API from "../common/API";

export function fetchMenuItems(){
    return async (dispatch)=>{
        dispatch(createAction(WorkMainTypes.FETCH_MENU_ITEMS_START)())

        try {
            let resopnse = await fetch(API.API_CAI_DAN)

            let json = await resopnse.json()
            console.log(json.data)
            dispatch(createAction(WorkMainTypes.FETCH_MENU_ITEMS_SUCCESS)(json.data))
        } catch (error) {
            dispatch(createAction(WorkMainTypes.FETCH_MENU_ITEMS_ERROR)(error))
        }
    }
}