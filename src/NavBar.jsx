import React, { Component } from 'react';

class NavBar extends Component {
    render() {

            return(
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                    <p className="navbar-brand userCount">Users online: {this.props.count}</p>
                </nav>  
            )
        }
}

export default NavBar;