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
            <div className="logo">Lvl 80 Trades!</div>
            <div className="username-display">Username</div>
            <button className="allGamesButton">All Games</button>
        </div>
        )
    }
}  

export default Header;