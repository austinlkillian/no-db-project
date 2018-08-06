import React, {Component} from 'react';
import './Characters.css';

class Characters extends Component{
    constructor(props){
        super(props)

        this.state = {
            battleReady: 'Yes!'
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
            <p className="battleReady">Battle Ready: {this.state.battleReady}</p>
            <button onClick={() => this.props.addMyTeam(name)}>Add to Team!</button>
            <button onClick={() => this.props.deleteTeammate(name)}>Retire</button>

        </div>
        )
    }
}

export default Characters;