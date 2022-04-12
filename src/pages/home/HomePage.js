import react ,{useState, useEffect} from "react";
import axios from 'axios';
import './HomePage.css';
import { Link } from "react-router-dom"; 

function HomePage() {

    const [countries, setCountries] = useState([]);
    const api = "https://restcountries.com/v3.1/all";

    useEffect(() => {
        const getCountries = async() => {
            const {data:res} = await axios.get(api);
            setCountries(res);
        }
        getCountries();
    }, [])

  return (
    <>
    <h1>Countries App</h1>
      {countries.map((country) => (
        <Link to={`/${country.name.common}`}>
          <div className="card">
            <img
              class="countryFlag"
              src={country.flags.png}
              alt={country.flag}
            />
            <div class="cardBody">
              <h2 class="cardTitle">{country.name.common}</h2>
              <h4 class="cardFacts">About {country.name.common}</h4>
              <p className="cardPopulation">
                The population of {country.name.common} is {country.population}{" "}
                People
              </p>
              <p className="cardCapital">
                The capital city of {country.name.common} is {country.capital}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default HomePage;
