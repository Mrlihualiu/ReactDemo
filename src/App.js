import React, { Component } from 'react';
import IndexHeader from './header';
import ClockTime from './clock';
import ToggleButton from './button';
import LoginControl from './loginControl';

function formatName(user){
    return user.firstName+' '+user.lastName;
}

const tt = {
    firstName: 'TAYLOR',
    lastName: 'SWIFT'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexHeader />
        <h1>{formatName(tt)}</h1>
        <ClockTime />
        <ToggleButton />
        <LoginControl />
      </div>
    );
  }
}

export default App;
