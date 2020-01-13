import React from 'react';
import { connect } from "react-redux"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import "./RequestList.css";
class RequestList extends React.Component {
 

  render(){
    
    return (
      <div className="UnderLine">
      <div className="INFO">
      Grounds keepers information
     </div>
     </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basicReducerState: state.basicReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
