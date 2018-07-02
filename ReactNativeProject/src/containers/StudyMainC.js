import { connect } from "react-redux";
import  StudyMain  from "../components/Study/StudyMain";

const mapStateToProps = (state,ownProps)=>{

    return ownProps
} 
  
const mapDispatchToProps = (dispatch)=>{
    return {
    
    }
} 

const StudyMainC = connect(mapStateToProps,mapDispatchToProps)(StudyMain)

export default StudyMainC