import React, { useState, useEffect } from 'react';
import './countries.css';
import { Link } from 'react-router-dom';

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }

    useEffect(() => {
        fetchCountryData()
    }, []);

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
        setCountries(newCountry);
    }

    return (
        <>
            <section className='grid'>
                {countries.map((country) => {
                    const { numericCode, name, region, capital, flag, nativeName } = country;
                    return (
                        <article key={numericCode}>
                            <div>
                                <div className='details'>
                                    <img src={flag} alt={name} className='img' />
                                    <h3 className='country-name'>{name}</h3>
                                    <h4>Native Name: <span>{nativeName}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <h4 className='country-region'>Region: <span>{region}</span></h4>
                                    <div className='button'>
                                        <Link to={`/Countries/countries/${name}`} className='btn'>More</Link>
                                        <button className='btn' onClick={() => removeCountry(numericCode)}>Remove Country</button>
                                    </div>
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