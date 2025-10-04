import React, {use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log("handleVisitedCountries clicked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag = (flag) =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries)
    return (
        <div >
            <h1 style={{ textAlign: "center" }}>
                In the Countries {countries.length}
            </h1>
            <h3>Total country VIsited : {visitedCountries.length}</h3>
            <h3>Total Flags Visited : {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}/>)
                }
            </div>
            <div id='countries'>
                { 
                countries.map(country =><Country key={country.cca3.cca3} country={country} 
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag ={handleVisitedFlag} ></Country>)
            }
            </div>
            
        </div>
    );
};

export default countries;