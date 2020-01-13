import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Request.css"
import { RequestList } from "..";

class Request extends React.Component {
  render() {
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

export default Request;
