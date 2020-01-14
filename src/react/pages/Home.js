import React from 'react';
import { NavBar } from "../components"
import {Request} from "../components/index"
import "./Home.css"

class Home extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar />
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

export default Home
