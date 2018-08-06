import React, {Component} from 'react';
import './MyGamesFooter.css';
import Characters from '../Characters/Characters';

class MyGamesFooter extends Component{

constructor(props){
    super(props)

    this.state = {

    }
}

render(){
    let mappedMyTeam = this.props.myTeam.map((character, i) => {
        return <Characters 
        key={i} 
        characterProp={character} 
        deleteTeammate={this.props.deleteTeammate} 
        battleReady={character.battleReady}
        updateBattleReady={this.props.updateBattleReady}
        handleBattleReady={this.props.handleBattleReady}/>
    })
    
    return(
        <div className="footer">
            <button className="myGamesButton">My Team</button>
            <div className="myGamesFooter">
                {mappedMyTeam}
            </div>
        </div>
        )
    }   
}

export default MyGamesFooter;