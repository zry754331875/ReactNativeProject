import { connect } from "react-redux";
import  WorkMain  from "../components/Work/WorkMain";

const mapStateToProps = (state,ownProps)=>{

    return {
        menuData:state.work.menuData,
        menuRowCount:state.work.menuRowCount,
        menuRows:state.work.menuRows,
    }
} 
  
const mapDispatchToProps = (dispatch)=>{
    return {
    
    }
} 

const WorkMainC = connect(mapStateToProps,mapDispatchToProps)(WorkMain)

export default WorkMainC