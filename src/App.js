import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header/Header'
import MyGamesFooter from './components/MyGamesFooter/MyGamesFooter';
import Login from './components/Login/Login'

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput: '',
      passwordInput: '',
      userDisplay: ''
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser=this.loginUser.bind(this);
  }

  handleUser(e){
    this.setState({userInput: e.target.value})
}

  handlePassword(e){
    this.setState({passwordInput: e.target.value})
}

  loginUser(){
    this.setState({
      userDisplay: this.state.userInput,
      userInput: '',
      passwordInput: ''
    })
}

  render() {
    console.log(this.state.userInput, this.state.passwordInput)
    return (
      <div className="App">
        <Header userDisplay={this.state.userDisplay}/>
        <Login 
            handleUser={this.handleUser}
            handlePassword={this.handlePassword}
            loginUser={this.loginUser}
            userInput={this.state.userInput}
            passwordInput={this.state.passwordInput}/>
        <MyGamesFooter />
      </div>
    );
  }
}

export default App;
