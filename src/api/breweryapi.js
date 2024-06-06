export const getCurrentBrewery = async (breweryId) => {
    const url = import.meta.env.VITE_BREWERYAPI_CURRENT_URL;
    try {
        const response = await fetch(`${url}/${breweryId}`);
        if (!response.ok) {
            throw new Error(`Error fetching brewery with ID ${breweryId}`);
        }
        const breweryData = await response.json();

        // Asignar una imagen de ejemplo si no hay imagen en la API
        breweryData.image_url = breweryData.image_url || "https://via.placeholder.com/200";

        return breweryData;
    } catch (error) {
        console.error("Error fetching brewery:", error);
        return null;
    }
};


