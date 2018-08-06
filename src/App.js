import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header/Header'
import MyGamesFooter from './components/MyGamesFooter/MyGamesFooter';
import Login from './components/Login/Login'
import Characters from './components/Characters/Characters'

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput: '',
      passwordInput: '',
      userDisplay: '',
      allCharacters: [],
      battleReady: true
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser=this.loginUser.bind(this);
    this.getAllCharacters=this.getAllCharacters.bind(this);
  }

  handleUser(e){
    this.setState({userInput: e.target.value})
}

  handlePassword(e){
    this.setState({passwordInput: e.target.value})
}

  loginUser(){
    axios
      .post('/api/userInfo', {
        user: this.state.userInput,
        pass: this.state.passwordInput
      })
      .then(response => {
      this.setState({
          userDisplay: response.data,
          userInput: '',
          passwordInput: ''
        })
      })
}

getAllCharacters(){
  axios.get(`https://swapi.co/api/people/`)
  .then((response) => this.setState({allCharacters: response.data.results})
)}

addMyTeam(){

}

  render() {
    let mappedCharacters = this.state.allCharacters.map((character, i) => {
      return <Characters key={i} characterProp={character} battleReady={this.state.battleReady}/>
    })

    console.log(this.state.userInput, this.state.passwordInput)
    return (
      <div className="App">
        <Header 
        userDisplay={this.state.userDisplay}
        getAllCharacters={this.getAllCharacters}/>
        <Login 
            handleUser={this.handleUser}
            handlePassword={this.handlePassword}
            loginUser={this.loginUser}
            userInput={this.state.userInput}
            passwordInput={this.state.passwordInput}/>
            <div className="allCharactersDisplay">
            {mappedCharacters}
            </div>
        <MyGamesFooter />
      </div>
    );
  }
}

export default App;
