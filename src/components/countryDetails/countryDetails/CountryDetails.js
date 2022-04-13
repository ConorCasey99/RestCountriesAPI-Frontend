import react, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CountryDetails.css";
import { useLocation, Link} from "react-router-dom";

function CountryDetails() {
 
  var country = useParams().name; //country variable stores the country name from url
  const [countryDetails, setCountryDetails] = useState([]); //country details stores the object of the country and the set country details sets the data 
  const api = `https://restcountries.com/v2/name/${country}`; //api endpoint for fetching country

  useEffect(() => { //use effect hook runs when page is opened 
    const getCountries = async () => { //asyncronus function called get countries
      const { data: res } = await axios.get(api); //axios fetches data from the api which is pushed from data to the res variable
      setCountryDetails(res); //countires variable takes in res data
    };
    getCountries(); //function is called
  }, []);

   return (
     <>
       <h1 class="detailsHeader">{country} Details</h1>
       <div></div>
       {countryDetails.map((country) => ( 
         <div>
           <img
             class="countryDetailsFlag" 
             src={country.flags.png}
             alt={country.flag} 
           />
           <div className="detailsCard"> 
             <div class="detailsCardBody">
               <h2 class="detailsCardTitle">{country.name.common}</h2>
               <h4 class="cardAbout">About {country.name.common}</h4>
               <p className="cardDetailsPopulation">
                 The population of {country.name} is {country.population}{" "}
                 People
               </p>
               <p className="cardDetailsCapital">
                 The capital city of {country.name} is {country.capital}
               </p>
               <p className="cardDetailsLanguage">
                 The language of {country.name} is the{" "}
                 {country?.languages.map((lang) => lang.name)}
               </p>
               <p className="cardDetailsCurrency">
                 The currency of {country.name} is the{" "}
                 {country?.currencies.map((cur) => cur.name)}
               </p>
               <p className="cardDetailsBorders">
                 {country.name} borders{" "}
                 {country?.borders?.map((bor) => (
                   <>
                     <i className="borderCountry">{bor}</i>
                   </>
                 ))}
               </p>
             </div>
           </div>
           <Link to="/">
             <button className="backButton">Go Back</button>
           </Link>
         </div>
       ))}
     </>
   );
}

export default CountryDetails;
