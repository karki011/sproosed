import React from 'react';
import { connect } from "react-redux"
import {Request, NavBar } from "../components"

class History extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar/>
      <div className="App">
                <div className="Requests">Past Requests</div>
              
                <Request />
                <a href=" " className="floating-btn">+</a>
      </div>
      </>
    );
  }
}

export default (History);
