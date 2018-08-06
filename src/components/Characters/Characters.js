import React, {Component} from 'react';
import './Characters.css';

class Characters extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        const {name, height, mass} = this.props.characterProp;
        console.log(this.props)
        return(
        <div className='character' >
            <p>Name: {name}</p>
            <p>height: {height}</p>
            <p>mass: {mass}</p>
            <p className="battleReady">Battle Ready: {this.props.battleReady}</p>
            <button onClick={() => this.props.addMyTeam(name)}>Add to Team!</button>
            <button onClick={() => this.props.deleteTeammate(name)}>Retire</button>
            <input onChange={this.props.handleBattleReady} 
            placeholder='Battle Ready?'/>
            <button onClick={() => this.props.updateBattleReady(name)}>update</button>

        </div>
        )
    }
}

export default Characters;