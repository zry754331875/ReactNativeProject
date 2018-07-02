import { connect } from "react-redux";
import  WorkMain  from "../components/Work/WorkMain";

const mapStateToProps = (state,ownProps)=>{

    return ownProps
} 
  
const mapDispatchToProps = (dispatch)=>{
    return {
    
    }
} 

const WorkMainC = connect(mapStateToProps,mapDispatchToProps)(WorkMain)

export default WorkMainC