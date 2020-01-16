import React from "react";
import { ServiceCategories } from "../components";
import "./RequestServices.css";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as actionCreators from "../../redux/actionCreators";


class RequestServices extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serviceCategory: "Lawn Care & Landscaping",
      success: false,
    }

    this.setServiceCategory = this.setServiceCategory.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
  }

  setServiceCategory(e){
    this.setState({serviceCategory: e.target.value})
  }

  sendRequest(e){
    e.preventDefault()
    this.props.postRequests(this.state.serviceCategory)
  }

  render() {
    let willRedirect = false;

    if (!this.props.loginState.result) {
      return (
        <Redirect to="/" />
      )
    }
    if(this.props.postRequestsState.result){
      this.props.clearPostRequests()
      willRedirect = true
    }
    return (
      <>
        <div id="header">REQUEST SERVICES</div>
        <div id="requestServices">
          <span id="chooseServices">Choose Services</span>
          <br />
          <form>
          <ServiceCategories onChange={this.setServiceCategory}/>
          <br />
          <br />
            <span id="additionalInformation"> Additional Information</span>
            <br />
            <br />
            <textarea type='text' placeholder="Property details here"/>
            <br />
            <br />
            <hr />
            <br />
            <textarea type='text' placeholder="Special Instructions"/>
            <br />
            <br />
          <input id="submitButton" type="submit" onClick={this.sendRequest}/>
          {willRedirect && <Redirect to={{pathname:"/home", state: {success:true}}}/>}
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  let postRequestsState = { ...state["requests"]["postRequest"] }
  let login = { ...state["auth"]["login"] }
  return { postRequestsState: postRequestsState, loginState: login }
}
let mapDispatchToProps = {
  postRequests: actionCreators["postRequests"],
  clearPostRequests: actionCreators["clearPostRequests"]
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestServices);
