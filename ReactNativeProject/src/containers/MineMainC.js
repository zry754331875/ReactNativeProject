import { connect } from "react-redux";
import  MineMain  from "../components/Mine/MineMain";

const mapStateToProps = (state,ownProps)=>{

    return ownProps
} 
  
const mapDispatchToProps = (dispatch)=>{
    return {
    
    }
} 

const MineMainC = connect(mapStateToProps,mapDispatchToProps)(MineMain)

export default MineMainC