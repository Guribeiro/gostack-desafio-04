import React, { Component } from 'react';
import './style.scss';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className="container">
                    <span>Facebook</span>
                    <a href="/">Meu perfil</a>
                </div>
            </div>
        );
    }
}
export default Header;
