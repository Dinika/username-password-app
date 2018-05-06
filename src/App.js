import React, { Component } from 'react';
import UserInput from './UserInpiut/UserInput';
import UserOutput from './UserOutput/UserOutput';

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

  updateNameHandler = (event) => {
    this.setState({
      username: [
        {name: event.target.value},
        {name: 'Some other dummy'},
        {name: 'Antonio'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'mintcream',
    }

    return (
      <div className="App" style={style}>
        <button onClick={this.changeNameHandler.bind(this, 'Some dummy')}>These people are changing to</button>
        <br/>
        <UserInput name = {this.state.username[0].name} change={this.updateNameHandler}/>
        <UserOutput name = {this.state.username[0].name} click = {this.changeNameHandler.bind(this, 'facebook guy')}/>

        <UserInput name = {this.state.username[1].name}/>
        <UserOutput name = {this.state.username[1].name}/>

        <UserInput name = {this.state.username[2].name}/>
        <UserOutput name = {this.state.username[2].name}/>
      </div>
    );
  }
}

export default App;
