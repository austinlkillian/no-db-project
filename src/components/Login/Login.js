import React, {Component} from 'react';
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        this.handleUser = this.handleUser.bind(this);
    }

    handleUser(e){
        let {userInput} = this.props;
        this.setState({userInput: e.target.value})
        console.log(e.target.value)
    }

    handlePassword(e){
        let {passwordInput} = this.props;
        this.setState({passwordInput: e.target.value})
        console.log(e.target.value)
    }

    render(){

        return(
            <div className="login-box">
                <div className="inputs-box">
                    <input className="username" onChange ={(e) => this.handleUser(e)}
                    placeholder="username"/>
                    <input className="password" onChange = {(e) => this.handlePassword(e)}
                    placeholder="password"/>
                </div>
                <button className="login-button">Login</button>
            </div>
        )
    }
}

export default Login;