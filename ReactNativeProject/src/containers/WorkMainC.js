import { connect } from "react-redux";
import  WorkMain  from "../components/Work/WorkMain";
import { fetchMenuItems } from "../actions/WorkMainActions";
const mapStateToProps = (state,ownProps)=>{

    return {
        menuData:state.work.menuData,
        menuRowCount:state.work.menuRowCount,
        menuRows:state.work.menuRows,
        menuItemData:state.work.menuItemData,
    }
} 
  
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchMenuItems:()=>{dispatch(fetchMenuItems())}
    }
} 

const WorkMainC = connect(mapStateToProps,mapDispatchToProps)(WorkMain)

export default WorkMainC