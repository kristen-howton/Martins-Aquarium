import { useFish } from "./fishDataProvider.js"
import Fish from "./Fish.js"

const FishList = () => {
    const contentElement = document.querySelector(".fishList")

    // Get the data from the provider
    const fishObjectsArray = useFish()

    // Iterate the array
    for (const fishObject of fishObjectsArray) {
        // Convert each object to HTML representation
        const fishHTMLRepresentation = Fish(fishObject)

        // Put HTML in DOM
        contentElement.innerHTML += fishHTMLRepresentation

    }

}

export default FishList