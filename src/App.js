import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: "Violet"
  }

  newInputHandler = (event) => {
    console.log('Input Received!')
    this.setState({
      userName: event.target.value
    })
  }

  render(props) {
    return (
      <div>
        <UserInput
          changed={this.newInputHandler}
          initialValue={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Vincent" />
      </div >
    );
  }
}
export default App;