import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Request.css"
import { RequestList } from "..";
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom'
import * as actionCreators from "../../../redux/actionCreators"

class Request extends React.Component {
  componentDidMount(){
    if(this.props.loginState.result){
      this.props.getRequests()
    }
  }
  render() {
    if(!this.props.loginState.result){
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="wrapper">
        <CardContent>
          <Typography style={{ fontSize: "21px" }}>Job Information</Typography>
          <Typography style={{ fontSize: "19px" }} color="textSecondary">
            DATE
          </Typography>

          <RequestList />
          <RequestList />
          <RequestList />
        </CardContent>
      </div>
    );
  }
}

function mapStateToProps(state){
  let getRequests = {...state["requests"]["getRequests"]}
  let login = {...state["auth"]["login"]}
  return {getRequestsState: getRequests, loginState: login}
}
let mapDispatchToProps = {
    "getRequests": actionCreators["getRequests"]
}

export default connect(mapStateToProps, mapDispatchToProps)(Request);
