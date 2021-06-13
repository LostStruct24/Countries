import React from 'react';
import './header.css';
import { ImEarth } from 'react-icons/im';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div>
                    <h1><ImEarth /> Countries  </h1>  
                </div>
            </header>
        </div>
    );
};

export default Header;
