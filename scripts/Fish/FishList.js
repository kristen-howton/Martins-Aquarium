import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./fishDataProvider.js"
import Fish from "./Fish.js"

const FishList = () => {

    //goes into index.html and finds and selects first class of fishList
    const contentElement = document.querySelector(".fishList")

    //calls the function useFish() and stores it in the variable fishObjectArray
    let fishObjectsArray = mostHolyFish()

    // Iterate the array
    for (const fishObject of fishObjectsArray) {
        // Convert each object to HTML representation
        const fishHTMLRepresentation = mostHolyFish(fishObject)

        // Put HTML in DOM
        contentElement.innerHTML += fishHTMLRepresentation

    }

}

fishObjectsArray = soldierFish()  

// Iterate the array
for (const fishObject of fishObjectsArray) {
    // Convert each object to HTML representation
    const fishHTMLRepresentation = soldierFish(fishObject)

    // Put HTML in DOM
    contentElement.innerHTML += fishHTMLRepresentation

}


fishObjectsArray = nonHolyFish() 

// Iterate the array
for (const fishObject of fishObjectsArray) {
    // Convert each object to HTML representation
    const fishHTMLRepresentation = nonHolyFish(fishObject)

    // Put HTML in DOM
    contentElement.innerHTML += fishHTMLRepresentation

}

export default FishList

