import React from 'react';
import { connect } from "react-redux"
import { NavBar } from "../components"
import {Request} from "../components/index"
import "./Home.css"

class Home extends React.Component {
  render(){
    return (
      <>
      <NavBar />
      <div className="App">
                <div className="Requests">Open Requests</div>
              
                <Request />

                <a href=" " className="floating-btn">+</a>
      </div>
      </>
    );
  }
}

export default (Home);
