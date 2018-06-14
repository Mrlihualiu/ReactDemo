import React, { Component } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick} className="login">
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} className="logout">
      Logout
    </button>
  );
}
class LoginControl extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {isLoginIn: false};

	  this.handleLoginClick = this.handleLoginClick.bind(this);
	  this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}
	
	handleLogoutClick() {
		this.setState({isLoginIn: false});
	}
	handleLoginClick() {
		this.setState({isLoginIn: true});
	}

	render() {
		const isLoginIn = this.state.isLoginIn;

		let button = null;
		if(isLoginIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
		}else{
			button = <LoginButton onClick={this.handleLoginClick} />;
		}
		return (
			<div>	
				{button}
			</div>
		);
	}
}

export default LoginControl;