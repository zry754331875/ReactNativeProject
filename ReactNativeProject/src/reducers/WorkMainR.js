import { handleActions } from "redux-actions";
import WorkMainTypes from "../contansts/types/WorkMainTypes";
const defaultState = {
    menuData:[
        {title: '美食', icon: require('../img/home/icon_homepage_food_category.png')},
        {title: '电影', icon: require('../img/home/icon_homepage_movie_category.png')},
        {title: '酒店', icon: require('../img/home/icon_homepage_hotel_category.png')},
        {title: 'KTV', icon: require('../img/home/icon_homepage_ktv_category.png')},
        {title: '优惠买单', icon: require('../img/home/icon_homepage_default.png')},
        {title: '周边游', icon: require('../img/home/icon_homepage_foottreat_category.png')},
        {title: '生活服务', icon: require('../img/home/icon_homepage_life_service_category.png')},
        {title: '休闲娱乐', icon: require('../img/home/icon_homepage_entertainment_category.png')},
        {title: '丽人/美发', icon: require('../img/home/icon_homepage_beauty_category.png')},
        {title: '购物', icon: require('../img/home/icon_homepage_shopping_category.png')},

        {title: '丽人/美发', icon: require('../img/home/icon_homepage_beauty_category.png')},
        {title: '电影', icon: require('../img/home/icon_homepage_movie_category.png')},
        {title: '周边游', icon: require('../img/home/icon_homepage_foottreat_category.png')},
        {title: '酒店', icon: require('../img/home/icon_homepage_hotel_category.png')},
        {title: '优惠买单', icon: require('../img/home/icon_homepage_default.png')},
        {title: '休闲娱乐', icon: require('../img/home/icon_homepage_entertainment_category.png')},
        {title: 'KTV', icon: require('../img/home/icon_homepage_ktv_category.png')},
    ],
    menuRowCount:2,
    menuRows:5,
    menuItemData:[]
} 

export default handleActions({
    [WorkMainTypes.FETCH_MENU_ITEMS_START]:(state,action)=>{
        return {
            ...state
        }
    },
    [WorkMainTypes.FETCH_MENU_ITEMS_SUCCESS]:(state,action)=>{
        
        return {
            ...state,
            menuItemData: action.payload,
        }
    },
    [WorkMainTypes.FETCH_MENU_ITEMS_ERROR]:(state,action)=>{
        return {
            ...state
        }
    },
},defaultState)