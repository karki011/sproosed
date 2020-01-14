import React from 'react';
import { NavBar } from "../components"
import "./Profile.css"

class Profile extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar />
      </>
    );
  }
}

export default Profile