import React from 'react';
import './filter.css';

const Filter = () => {

    window.addEventListener('DOMContentLoaded', () => {
        const search = document.getElementById('search');

        search.addEventListener('input', (e) => {
            const { value } = e.target
    
            const countryName = document.querySelectorAll('.country-name')
    
            countryName.forEach((name) => {
                if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
                    name.parentElement.parentElement.style.display = 'block'
                } else {
                    name.parentElement.parentElement.style.display = 'none'
                }
            })
        });    
    })

    return (
        <div>
            <section className='filter'>
                <form className='form-control'>
                    <input type='search' name='search' id='search' placeholder="Seach for a country" />
                </form>
            </section>
        </div>
    );
};

export default Filter;
