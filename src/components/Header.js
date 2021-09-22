'use strict'
import React, { Component } from 'react';
import {Link} from "react-router-dom";
const LoggedOutView = props => {
    if(!props.currentUser){
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="login">Sign in</Link></li>
                <li className="nav-item"><Link className="nav-link" to="signup">Sign up</Link></li>
            </ul>
        )
    }
    return null;
}
const LoggedInView = props => {
    if(props.currentUser){
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="editor">New Post</Link></li>
                <li className="nav-item"><Link className="nav-link" to="settings">Settings</Link></li>
                <li className="nav-item"><Link className="nav-link" to={`@${props.currentUser.username}`}><img src={props.currentUser.image} className="user-pic"/>{props.currentUser.userName}</Link></li>
            </ul>
        )
    }
    return null;
}
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
            <div className="container">
              <Link className="navbar-brand" to="/">{this.props.appName.toLowerCase()}</Link>
              <LoggedOutView currentUser={this.props.currentUser}/>
              <LoggedInView currentUser={this.props.currentUser}/>
              {/* react-empty: 12 */}
            </div>
          </nav>
        );
    }
}

export default Header;