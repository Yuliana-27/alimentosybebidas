import { useEffect, useState } from "react";
import { getCurrentBrewery } from "../api/breweryapi";
import breweryImages from "../api/breweryImages";

const BreweryCard = ({ brewery }) => {
    const [breweryData, setBreweryData] = useState(null);

    useEffect(() => {
        const getBreweryData = async () => {
            const breweryInfo = await getCurrentBrewery(brewery);
            console.log({ breweryInfo });
            setBreweryData(breweryInfo);
        };

        getBreweryData();
    }, [brewery]);

    const noBreweryStyle = { backgroundColor: '#D8BAC4', color: 'black' };
    const style = !breweryData?.isBrewery ? noBreweryStyle : {};

    // URL de ejemplo si no hay imagen en la API
    const imageUrl = breweryImages[brewery] || "https://via.placeholder.com/200";

    return (
        <div className="card col-3 m-2" style={{ width: "16rem", ...style }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt={breweryData?.name || "Placeholder"}
                style={{ height: '200px', width: '200px', margin: 'auto' }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">
                    {breweryData?.name}
                </h5>
                <p className="card-text">
                    City: {breweryData?.city}
                </p>
                <p className="card-text">
                    Country: {breweryData?.country}
                </p>
                <p className="card-text">
                    Código Postal: {breweryData?.postal_code}
                </p>
                <p className="card-text">
                    ID: {breweryData?.id}
                </p>
            </div>
        </div>
    );
};

export default BreweryCard;

//FIN DEL PROYECTO//
//LISTA DE CERVECERIAS//
