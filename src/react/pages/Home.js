import React from 'react';
import { NavBar } from "../components"
import {Request} from "../components/index"
import {NavLink} from "react-router-dom"
import "./Home.css"

class Home extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar />
      <div className="App">
                <div className="Requests">Open Requests</div>
              
                <Request isCompleted={false}/>

                <NavLink className="floating-btn" to="/request-services">+</NavLink>
      </div>

      </>
    );
  }
}

export default Home
