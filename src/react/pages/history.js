import React from "react";
import { Request, NavBar } from "../components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class History extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="App">
          <div className="Requests">Past Requests</div>
          <Request isCompleted={true}/>
          <NavLink className="floating-btn" to="/request-services">
            +
          </NavLink>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  let getRequests = { ...state["requests"]["getRequests"] };
  let login = { ...state["auth"]["login"] };
  return { getRequestsState: getRequests, loginState: login };
}

export default connect(mapStateToProps)(History);
