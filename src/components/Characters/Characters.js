import React, {Component} from 'react';

class Characters extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        const {name, eye_color, hair_color, starships} = this.props.characterProp;
        
        return(
        <div className={name} onClick={this.props.addMyTeam}>
            <div>Name: {name}</div>
            <div>Eyes: {eye_color}</div>
            <div>Hair: {hair_color}</div>
            <div className="battleReady">Battle Ready: {this.props.battleReady}</div>
            <div></div>
            <hr/>
        </div>
        )
    }
}

export default Characters;