import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar" id="header">
                <span className="navbar-brand"><a href="/">Forum</a></span>
            </nav>
        );
    }
}
