import React from "react";
import { ServiceCategories, PropertyDetails } from "../components";
import { NavBar } from "../components";
import "./RequestServices.css";

class RequestServices extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div id="requestServices">
          <ServiceCategories />
          <br />
          <PropertyDetails />
          <br />
          <input id="submitButton" type="submit" />
        </div>
      </>
    );
  }
}

export default RequestServices;
