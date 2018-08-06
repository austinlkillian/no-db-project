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
      myTeam: [],
      battleReady: 'Yes!',
      battleInput: ''
    }
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.loginUser=this.loginUser.bind(this);
    this.getAllCharacters=this.getAllCharacters.bind(this);
    this.addMyTeam=this.addMyTeam.bind(this);
    this.deleteTeammate=this.deleteTeammate.bind(this);
    this.updateBattleReady=this.updateBattleReady.bind(this);
    this.handleBattleReady=this.handleBattleReady.bind(this);
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
  this.setState({allCharacters: response.data.results})
})
}

addMyTeam(name){
  let characterIndex = this.state.allCharacters.findIndex(character => character.name === name)
  let person = this.state.allCharacters[characterIndex]
  person.battleReady = 'Yes!'
axios.post(`/api/myTeam/`, {teammate: person})
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

updateBattleReady(name){
  let teammateIndex = this.state.myTeam.findIndex(character => character.name === name)
axios.put(`/api/myTeam/`, {teammate: this.state.myTeam[teammateIndex].name,
battleInput: this.state.battleInput})
.then(response =>{
  console.log(response)
  this.setState({myTeam: response.data})
})
}

handleBattleReady(e){
  this.setState({battleInput: e.target.value})
}


  render() {
    let mappedCharacters = this.state.allCharacters.map((character, id) => {
      
      return <Characters 
      key={id} 
      characterProp={character} 
      addMyTeam={this.addMyTeam} 
      deleteTeammate={this.deleteTeammate}
      battleReady={this.state.battleReady}
      updateBattleReady={this.updateBattleReady}
      handleBattleReady={this.handleBattleReady}
      />
    })
  

  
    console.log(this.state)
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
        <MyGamesFooter myTeam={this.state.myTeam} deleteTeammate={this.deleteTeammate}
        battleReady={this.state.battleReady}
        updateBattleReady={this.updateBattleReady}
        handleBattleReady={this.handleBattleReady}/>
      </div>
    )
  }
}

export default App;
