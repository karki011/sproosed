import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Request.css";
import { RequestList } from "..";
import { connect } from "react-redux";
import * as actionCreators from "../../../redux/actionCreators";
import {Spinner} from "../"

class Request extends React.Component {
  componentDidMount() {
    this.props.getRequests();
  }
  render() {
    if (this.props.getRequestsState.result === null) {
      return (
<h1>hello</h1>
      );
    }
const getRequest = this.props.getRequestsState.result.requests
return getRequest.map(Request => {
      return (
        <div className="wrapper">
          <CardContent>
            <Typography style={{ fontSize: "21px" }}></Typography>
            <Typography style={{ fontSize: "19px" }} color="textSecondary">
              DATE
            </Typography>

            <RequestList />
            <RequestList />
            <RequestList />
          </CardContent>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  let getRequests = { ...state["requests"]["getRequests"] };
  return { getRequestsState: getRequests };
}
let mapDispatchToProps = {
  getRequests: actionCreators["getRequests"]
};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
