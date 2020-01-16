import React from 'react';
import { NavBar, CustomerCard } from "../components"
import "./Profile.css"
import { NavLink } from "react-router-dom";


class Profile extends React.Component {
  render(){
    return (
      <>
      <NavBar />
      <CustomerCard />
      <NavLink className="floating-btn" to="/request-services"></NavLink>
      </>
    );
  }
}

export default Profile