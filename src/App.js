import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      { userName: "Violet" }
    ]
  }

  newInputHandler = (event) => {
    console.log('Input Received!')
    this.setState({
      users: [
        { userName: event.target.value }
      ]
    })
  }

  render(props) {
    return (
      <div>
        <h1>Hello, is this thing working?</h1>
        <UserInput onChange={this.newInputHandler.bind(this)} />
        <UserOutput
          userName="Anthony"
          changed={this.newInputHandler} />
        <UserOutput userName="Debra" />
        <UserOutput userName={this.state.userName} />
      </div >
    );
  }
}
export default App;