import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Logo, facebook, google } from '../../images';
import './LoginForm.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/actionCreators';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	state = { username: '', password: '' };

	handleLogin = (e) => {
		e.preventDefault();
		this.props.login(this.state);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { username, password } = this.state;
		const isEnabled = username.length > 0 && password.length > 0;

		return (
			<React.Fragment>
				<div className="imageHolder-login">
					<img src={Logo} alt="logo" className="logo" />
				</div>
				<form className="login-form" onSubmit={this.handleLogin}>
					<TextField
						margin="normal"
						id="Username"
						label="Username"
						name="username"
						autoFocus
						required
						onChange={this.handleChange}
					/>
					<TextField
						margin="normal"
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
						color="default"
						disabled={!isEnabled}
						className="login-submit-btn"
					>
						submit
					</Button>
				</form>
				<div className="sign-up-options">
					<p>or login with</p>
					<img className="facebook " src={facebook} alt="google" />
					<img className="google" src={google} alt="facebook" />
				</div>
				<div className="sign-up-options">
					<p>Need an account?</p>
					<Link to="./register">Sign Up</Link>
				</div>
				{this.props.loginState &&
				this.props.loginState.result &&
				this.props.loginState.result.statusCode === 400 && <h3>{this.props.loginState.result.message}</h3>}
				{this.props.loginState &&
				this.props.loginState.result &&
				this.props.loginState.result.statusCode === 200 && <Redirect to="/home" />}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	let login = { ...state['auth']['login'] };
	return { loginState: login };
}
let mapDispatchToProps = {
	login: actionCreators['login']
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
