import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Logo } from '../../images'
import "./RegisterForm.css";
import { connect } from 'react-redux'
import * as actionCreators from "../../../redux/actionCreators"
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
  state = { username: "", password: "",};

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className='imageHolder-register'>
          <img src={Logo} alt='logo' className='logo' />
        </div>
        <form className='login-form' onSubmit={this.handleLogin}>
          <TextField
            margin='normal'
            id="Username"
            label="Username"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
            <TextField
              margin='normal'
              name="email"
              label="email"
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
              <TextField
              margin='normal'
              name="Address"
              label="Address"
              type="Address"
              id="Address"
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
          <TextField
            margin='normal'
            name="password"
            label="Confirm-Password"
            type="password"
            id="password"
            required
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="default"
          >
            SIGN UP
              </Button>
        </form>
        {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 400) && <h3>{this.props.loginState.result.message}</h3>}
        {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 200) && <Redirect to="/home" />}
      </React.Fragment>
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
