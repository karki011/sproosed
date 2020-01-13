import React from 'react';
import { connect } from "react-redux"
import {Request} from "../components/index"
import "./Home.css"

class Home extends React.Component {
  render(){
    return (
      <>
      <div className="App">
                <div className="Requests">Open Requests</div>
              
                <Request />
                <Request />
                <Request />
                <a href=" " className="floating-btn">+</a>
      </div>
      </>
    );
  }
}

export default (Home);
