import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(){
	return (
		<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
	);
}

class IndexHeader extends Component {
	render() {
		return(
			<Header />
		);
	}
}

export default IndexHeader;