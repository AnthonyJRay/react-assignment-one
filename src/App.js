import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render(props) {
    return (
      <div>
        <h1>Hello, is this thing working?</h1>
        <UserInput />
        <UserOutput userName="Anthony" />
        <UserOutput userName="Debra" />
        <UserOutput />
        <UserOutput />
      </div >
    );
  }
}
export default App;