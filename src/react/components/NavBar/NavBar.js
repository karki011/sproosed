import React, { Component } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class NavBar extends Component {
  render() {
    return (
      <>
        <Tabs
          centered
        >
          <Tab label = 'My Profile' />
          <Tab label='My Requests' />
          <Tab label='History' />
        </Tabs>
      </>
    );
  }
}

export default NavBar;
