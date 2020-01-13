import React from 'react';
import { connect } from "react-redux";
import { basicAction } from "../../redux/actionCreators";
import { RegisterForm } from "../components/index";

class Register extends React.Component {
  render(){
    return (
        <RegisterForm />
    );
  }
}

const mapStateToProps = (state) => ({
  basicReducerState: state.basicReducer
})

const mapDispatchToProps = {
  basicAction: basicAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
