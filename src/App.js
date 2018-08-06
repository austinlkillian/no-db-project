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
      myTeam: []
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser=this.loginUser.bind(this);
    this.getAllCharacters=this.getAllCharacters.bind(this);
    this.addMyTeam=this.addMyTeam.bind(this);
    this.deleteTeammate=this.deleteTeammate.bind(this)
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
  .then((response) => { 
  console.log(response)
  this.setState({allCharacters: response.data.results})
})
}

addMyTeam(name){
  let characterIndex = this.state.allCharacters.findIndex(character => character.name === name)
axios.post(`/api/myTeam/`, {teammate: this.state.allCharacters[characterIndex]})
.then(response =>{
  console.log(response)
  this.setState({myTeam: response.data})
})
}

deleteTeammate(name){
  let teammateIndex = this.state.myTeam.findIndex(character => character.name === name)
  axios.delete(`/api/myTeam/`, {deletedMate: this.state.myTeam[teammateIndex]})
  .then(response => 
    this.setState({ myTeam: response.data})
)}

  render() {
    let mappedCharacters = this.state.allCharacters.map((character, id) => {
      console.log(character)
      return <Characters key={id} characterProp={character} addMyTeam={this.addMyTeam} deleteTeammate={this.deleteTeammate}/>
    })

    console.log(this.state.userInput, this.state.passwordInput)
    console.log(this.state.myTeam)
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
        <MyGamesFooter myTeam={this.state.myTeam} deleteTeammate={this.deleteTeammate}/>
      </div>
    );
  }
}

export default App;
