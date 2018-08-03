import React, {Component} from 'react';
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        
    }

    render(){

        return(
            <div className="login-box">
                <div className="inputs-box">
                    
                    <input className="username" 
                    onChange ={this.props.handleUser}
                    value = {this.props.userInput}
                    placeholder="username"/>
                    
                    <input className="password" 
                    onChange = {this.props.handlePassword}
                    value = {this.props.passwordInput}
                    placeholder="password"/>

                </div>
                <button className="login-button" 
                onClick = {this.props.loginUser}>Login</button>
            </div>
        )
    }
}

export default Login;