import React, { Component } from 'react';
import UserInput from './UserInpiut/UserInput';
import UserOutput from './UserOutput/UserOutput';
import logo from './logo.svg';

class App extends Component {
  
  state = {
    username : [
      {name: 'David'},
      {name: 'Jacopo'},
      {name: 'Antonio'}
    ]
  }

  changeNameHandler = (newName) => {
    this.setState({
      username : [
        {name: newName},
        {name: 'Some other dummy'},
        {name: 'Antonio'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler.bind(this, 'Some dummy')}>These people are changing to</button>
        <br/>
        <UserInput/>
        <UserOutput name = {this.state.username[0].name} click = {this.changeNameHandler.bind(this, 'facebook guy')}/>

        <UserInput/>
        <UserOutput name = {this.state.username[1].name}/>

        <UserInput/>
        <UserOutput name = {this.state.username[2].name}/>
      </div>
    );
  }
}

export default App;
