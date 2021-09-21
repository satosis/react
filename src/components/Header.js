import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
            <div className="container">
              <Link className="navbar-brand" to="/">{this.props.appName.toLowerCase()}</Link>
              <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Sign in</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
              </ul>
              {/* react-empty: 12 */}
            </div>
          </nav>
        );
    }
}

export default Header;