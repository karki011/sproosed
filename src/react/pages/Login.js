import React from 'react';
import { connect } from "react-redux";
import {LoginForm } from "../components/index";

class LoginPage extends React.Component {
  render(){
    return (
        <LoginForm />
    );
  }
}

export default (LoginPage);
