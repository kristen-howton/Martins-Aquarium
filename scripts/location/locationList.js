import { useLocation } from "./locationDataProvider.js"
import Location from "./location.js"

const locationList = () => {
    const contentElement = document.querySelector(".locationList")

    // Get the data from the provider
    const locationObjectsArray = useLocation()

    // Iterate the array
    for (const locationObject of locationObjectsArray) {
        // Convert each object to HTML representation
        const locationHTMLRepresentation = Location(locationObject)

        // Put HTML in DOM
        contentElement.innerHTML += locationHTMLRepresentation

    }

}

export default locationList