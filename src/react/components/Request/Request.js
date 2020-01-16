import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Request.css";
import { BidsList, PacmanLoader } from "../index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionCreators from "../../../redux/actionCreators";
import moment from "moment";
import { trees, arrow } from "../../images";

class Request extends React.Component {
  constructor(props){
    super(props);

    this.acceptBid = this.acceptBid.bind(this)
  }
  componentDidMount() {
    if (this.props.loginState.result && !this.props.getRequestsState.result) {
      this.props.getRequests();
    }
  }

  acceptBid(requestID, bidID){
    this.props.acceptBid(requestID, bidID)
  }

  render() {
    if (!this.props.loginState.result) {
      return <Redirect to="/" />;
    }
    if (this.props.getRequestsState.result === null) {
      //Loading
      return (
        <div className="spinner">
          <PacmanLoader color={"#2AB397"} />
        </div>
      );
    }
    if (this.props.getRequestsState.result.statusCode === 404 || (this.props.getRequestsState.result && this.props.getRequestsState.result.requests.every(request => request.isCompleted) && !this.props.isCompleted)) {
      //No Requestsgit
      return (
        <div>
        <div className="afterLoginPage">Sproose up your yard</div>
      <img src={trees} alt="trees" className="trees" />
      <div className= "afterLoginPage">Request a service</div> 
      <img src={arrow} alt="arrow" className="arrow"/>
      </div>
      )
    }
    const getRequest = this.props.getRequestsState.result.requests;
    const fileteredRequests = getRequest.reverse().filter(request => this.props.isCompleted === request.isCompleted)
    return fileteredRequests.map(request => {
        return (
          <div className="requestwrapper" key={request.id}>
            <CardContent>
              <Typography style={{ fontSize: "21px" }}>{request.text}</Typography>
              <Typography style={{ fontSize: "19px" }} color="textSecondary">
                {moment(request.createdAt).format("MMM Do YYYY")}
              </Typography>
              {request.bids.length > 0 && <BidsList bids={request.bids} isCompleted={request.isCompleted} acceptBid={this.acceptBid} requestID={request.id}/>}
            </CardContent>
          </div>
        );
      });
  }
}

function mapStateToProps(state) {
  let getRequests = { ...state["requests"]["getRequests"] };
  let acceptBid = {...state["requests"]["acceptBid"]}
  let login = { ...state["auth"]["login"] };
  return { getRequestsState: getRequests, loginState: login, acceptBidState: acceptBid };
}
let mapDispatchToProps = {
  getRequests: actionCreators["getRequests"],
  acceptBid: actionCreators["acceptBid"]
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
