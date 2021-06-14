import React from 'react';
import './filter.css';

const Filter = () => {
    window.addEventListener ('DOMContentLoaded', () => {
        const search = document.getElementById('search');

        search.addEventListener('input', (e) => {
            const value = e.target.value;
    
            const countryName = document.querySelectorAll('.country-name');
    
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
            <section className='filter'>
                <form className='form-control'>
                    <input type='search' name='search' id='search' placeholder="Seach for a country" />
                </form>

                <div className='region-filter'>
                    <select type='select 'name='select' id='select' className='select'>
                        <option value='Filter by Region'>Filter by Region</option>
                        <option value='Africa'>Africa</option>
                        <option value='America'>America</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
            </section>
    );
};

export default Filter;
