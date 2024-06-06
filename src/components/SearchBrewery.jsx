import { useForm } from "../Hooks/UseForm";

const SearchBrewery = ({ setBreweries }) => {
    const [values, handleInputChange, reset] = useForm({
        brewery: ''
    });

    const handleSearchBrewery = () => {
        if (values.brewery.trim() === '') {
            return;
        }

        fetch(`https://api.openbrewerydb.org/v1/breweries/${values.brewery}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setBreweries([data]); // Convertimos el objeto en un array con un solo elemento
                } else {
                    setBreweries([]);
                }
            })
            .catch(error => console.error("Error fetching brewery:", error));
        
        reset();
    };

    return (
        <div className="input-group">
            <span className="input-group-text">Brewery</span>
            <input
                className="form-control"
                type="text"
                name="brewery"
                onChange={handleInputChange}
                id="brewery"
                value={values.brewery}
                placeholder="Enter brewery ID"
                aria-label="Brewery ID"
            />
            <button
                type="button"
                onClick={handleSearchBrewery}
                className="btn btn-primary">
                Search
            </button>
        </div>
    );
};

export default SearchBrewery;
