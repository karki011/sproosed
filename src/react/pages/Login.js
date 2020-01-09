import React from 'react';
import { connect } from "react-redux";
import { basicAction } from "../../redux/actionCreators";
import {LoginForm } from "../components/index";

class LoginPage extends React.Component {
  render(){
    return (
        <LoginForm />
    );
  }
}

const mapStateToProps = (state) => ({
  basicReducerState: state.basicReducer
})

const mapDispatchToProps = {
  basicAction: basicAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
