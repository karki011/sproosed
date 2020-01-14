import React from 'react';
import { connect } from "react-redux";
import { RegisterForm } from "../components/index";

class Register extends React.Component {
  render(){
    return (
        <RegisterForm />
    );
  }
}

export default (Register);
