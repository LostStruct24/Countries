import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsCaretLeft } from 'react-icons/bs';
import './country.css';

const Country = () => {
    const [country, setCountry] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.eu/rest/v2/name/${name}`
            )
            const country = await response.json()
            setCountry(country)
        }    
        fetchCountryData();
    }, [name]);

    return (
        <>
            <section className='country'>
                <Link to="/Countries" className='homeBtn'><i ><BsCaretLeft /></i> Home</Link>
                {country.map((c) => {
                    const {numericCode, flag, name, nativeName,region, subregion, capital, topLevelDomain, population, currencies, languages } = c;
                    
                    return (
                        <article key={numericCode}>
                            <div className='countryContainer'>
                                <div className='flag'>
                                    <img src={flag} alt={name} />
                                </div>
                                <div className='countryDetails'>
                                    <h2>{name}</h2>
                                    <h4>Native Name: <span>{nativeName}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Sub Region: <span>{subregion}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <h4>Top Level Domain: <span>{topLevelDomain}</span></h4>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Currencies: <span>{currencies[0].name}</span></h4>
                                    <h4>Languages: <span>{languages[0].name}</span></h4>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    );
};

export default Country;
