import React from 'react'
import { useParams } from 'react-router';

function CountryDetailsPage() {
    let {countryName} = useParams().name;

    console.log(countryName);








  return <h1>{countryName}</h1>;
}

export default CountryDetailsPage