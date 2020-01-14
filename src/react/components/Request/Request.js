import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Request.css";
import { BidsList } from "../index";
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import * as actionCreators from "../../../redux/actionCreators"
import moment from "moment";

class Request extends React.Component {
  componentDidMount() {
    if (this.props.loginState.result) {
      this.props.getRequests()
    }
  }
  render() {
    if (!this.props.loginState.result) {
      return (
        <Redirect to="/" />
      )
    }
    if (this.props.getRequestsState.result === null) {
      //Loading
      return (
        <h1>hello</h1>
      );
    }
    if (this.props.getRequestsState.result.requests.length === 0){
      //No Requests
      return <h1>No requests found!</h1>
    }
    const getRequest = this.props.getRequestsState.result.requests
    return getRequest.map(request => {
      return (

        <div className="requestwrapper">
          <CardContent>
            <Typography style={{ fontSize: "21px" }}>{request.text}</Typography>
            <Typography style={{ fontSize: "19px" }} color="textSecondary">
              {moment(request.createdAt).format("MMM Do YYYY")}
            </Typography>
            {request.bids.length > 0 && <BidsList bids={request.bids} />}
          </CardContent>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  let getRequests = { ...state["requests"]["getRequests"] }
  let login = { ...state["auth"]["login"] }
  return { getRequestsState: getRequests, loginState: login }
}
let mapDispatchToProps = {
  getRequests: actionCreators["getRequests"]
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
