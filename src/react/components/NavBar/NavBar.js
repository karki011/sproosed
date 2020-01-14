import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = 'Navbar'>
      <NavLink className = 'notActive' activeClassName = 'active' exact to = '/profile'>My Profile</NavLink>
      <NavLink className = 'notActive' activeClassName = 'active' to = '/home'>My Requests</NavLink>
      <NavLink className = 'notActive' activeClassName = 'active' to = '/history'>History</NavLink>
      </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
