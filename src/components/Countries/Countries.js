import React, { useState, useEffect } from 'react';
import './countries.css';

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, []);

    return (
        <>
            <section className='grid'>
                {countries.map((country) => {
                    const { numericCode, name, population, region, capital, flag, nativeName } = country

                    return (
                        <article idkey={numericCode}>
                            <div>
                                <div className='details'>
                                    <img src={flag} alt={name} className='img' />
                                    <h3>{name}</h3>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Native Name: <span>{nativeName}</span></h4>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    );
};

export default Countries;