import React from 'react';
import { NavBar } from "../components"
import {Request} from "../components/index"
import {NavLink} from "react-router-dom"
import "./Home.css"

class Home extends React.Component {
  render(){
    if(this.props.location.state && this.props.location.state.success){
      alert("Success posting a request!")
    }
    return (
      <>
      <NavBar />
      <div className="App">
                <div className="Requests">Open Requests</div>
              
                <Request />

                <NavLink className="floating-btn" to="/request-services">+</NavLink>
      </div>

      </>
    );
  }
}

export default Home
