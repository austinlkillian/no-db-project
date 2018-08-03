import React, {Component} from 'react';
import './MyGamesFooter.css';

class MyGamesFooter extends Component{

constructor(props){
    super(props)

    this.state = {

    }
}

render(){
    return(
        <div className="footer">
            <button className="myGamesButton">My Games</button>
            <div className="myGamesFooter"></div>
        </div>
        )
    }   
}

export default MyGamesFooter;