import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, is this thing working?</h1>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div >
    );
  }
}
export default App;