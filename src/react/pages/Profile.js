import React from 'react';
import { NavBar, CustomerCard } from "../components"
import "./Profile.css"

class Profile extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar />
      <CustomerCard />
      </>
    );
  }
}

export default Profile