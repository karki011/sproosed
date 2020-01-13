import React from 'react';
import { connect } from "react-redux"
import {Request} from "../components/index"


class History extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
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
