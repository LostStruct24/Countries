import React from 'react';
import './header.css';
import { BiMoon } from 'react-icons/bi';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div>
                    <h1>Countries</h1>  
                </div>
                <div>
                    <i className='bimoon'></i>Dark Mode <BiMoon /> 
                </div>
            </header>
        </div>
    );
};

export default Header;
