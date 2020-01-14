import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./LoginForm.css";
import { connect } from 'react-redux'
import * as actionCreators from "../../../redux/actionCreators"
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    console.log('hello')
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={this.handleLogin}>
          <TextField
            margin='normal'
            id="email"
            label="Username"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <TextField
            margin='normal'
            name="password"
            label="Password"
            type="password"
            id="password"
            required
            onChange={this.handleChange}
          />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          >
          submit
              </Button>
          </form>
        {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 400) && <h3>{this.props.loginState.result.message}</h3>}
        {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 200) && <Redirect to="/home" />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let login = { ...state["auth"]["login"] }
  return { loginState: login }
}
let mapDispatchToProps = {
  "login": actionCreators["login"]
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
