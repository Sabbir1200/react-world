import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(country.area)
    console.log(handleVisitedCountries);
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
    //   if(visited){
    //     setVisited(false);
    //   }
    //   else{
    //     setVisited(true);
    //   }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <h4>Officials Name : {country.name.official}</h4>
            <h4>flags : <img src={country.flags.flags.png} alt={country.flags.flags.alt} /></h4>
            <p>population : {country.population.population} people</p>
            <p>Area : {country.area.area} {country.area.area > 30000 ? 
            "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : "Not Visited"}
            </button>
            <button onClick={() =>{handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;