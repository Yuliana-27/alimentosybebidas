import { useState, useEffect } from "react";
import BreweryCard from "./components/BreweryCard";
import SearchBrewery from "./components/SearchBrewery";
import './assets/css/index.css';

const App = () => {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        fetch("https://api.openbrewerydb.org/v1/breweries")
            .then(response => response.json())
            .then(data => setBreweries(data))
            .catch(error => console.error("Error fetching breweries:", error));
    }, []);

    return (
        <div className="container">
            <h1>Breweries</h1>
            <hr />
            <SearchBrewery setBreweries={setBreweries} />
            <hr />
            <div className="row">
                {breweries.map((brewery, index) => (
                    <BreweryCard key={index} brewery={brewery.id} />
                ))}
            </div>
        </div>
    );
};

export default App;


//FIN DEL PROYECTO//
//LISTA DE CERVECERIAS//