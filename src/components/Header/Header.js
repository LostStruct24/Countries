import React from 'react';
import './header.css';
import { ImEarth } from 'react-icons/im';
import { BiMoon } from 'react-icons/bi';


const Header = () => {
    const theme = () => {
        const biMoon = document.querySelector('.biMoon');
        const header = document.querySelector('.header');
        const details = document.querySelectorAll('.details');
        const btn = document.querySelectorAll('.btn');

        biMoon.addEventListener('click', () => {
            document.body.classList.toggle('lightTheme')
            header.classList.toggle('lightTheme')
      
            details.forEach((detail) => {
              detail.classList.toggle('lightTheme')
            })

            btn.forEach((btn) => {
                btn.classList.toggle('lightTheme')
              })
        })
    }

    return (
        <div>
            <header className="header">
                <div>
                    <h1><i className='earth'><ImEarth /></i> Countries  </h1>  
                </div>

                
                <div>
                    <button className="biMoon" onClick={() => theme()}>
                        <i className="biMoon"><BiMoon /></i>
                    </button>
                </div>
            </header>

        </div>
    );
};

export default Header;
