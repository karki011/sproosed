import React from "react";
import {
  Container,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from "@material-ui/core";
// import Link from "."; Will need to switch this to react-router later
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from "..";
import "./LoginForm.css";
import {connect} from 'react-redux'
import * as actionCreators from "../../../redux/actionCreators"
import {Redirect} from 'react-router-dom'

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const useStyles = makeStyles(theme => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <form className={useStyles.form} onSubmit={this.handleLogin} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
            </Button>
          </form>
          {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 400) && <h3>{this.props.loginState.result.message}</h3>}
          {(this.props.loginState && this.props.loginState.result && this.props.loginState.result.statusCode === 200) && <Redirect to="/home"/>}
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

function mapStateToProps(state){
  let login = {...state["auth"]["login"]}
  return {loginState: login}
}
let mapDispatchToProps = {
    "login": actionCreators["login"]
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
