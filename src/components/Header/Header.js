import React, {Component} from 'react';

import './Header.css'

class Header extends Component{

constructor(props) {
    super(props)

    this.state = {
        
    }
}



render(){
    return(
        <div className="header">
            <div className="logo">Squadron Builder!</div>
            <div className="username-display" >User: {this.props.userDisplay}
            </div>
            <button className="allCharactersButton"
            onClick={this.props.getAllCharacters}>All Soldiers</button>
        </div>
        )
    }
}  

export default Header;