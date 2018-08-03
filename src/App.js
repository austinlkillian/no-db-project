import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import MyGamesFooter from './components/MyGamesFooter/MyGamesFooter';
import Login from './components/Login/Login'

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput: '',
      passwordInput: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Login 
            userInput={this.state.userInput}
            passwordInput={this.state.passwordInput}/>
        <MyGamesFooter />
      </div>
    );
  }
}

export default App;
