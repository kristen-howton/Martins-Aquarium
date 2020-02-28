const fishCollection = [
    {
        name: "Betty",
        length: "2 feet",
        species: "Longtooth Barracuda",
        food: ["algae"],
        location: "Cumberland River"

    },

    {
        name: "Nemo",
        length: "2 inches",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef"

    },

    {
        name: "Dory",
        length: "4 inches",
        species: "Blue Tang",
        food: ["Clownfish"],
        location: "New Zealand Sea"
    },

    {
        name: "Bart",
        length: "4 inches",
        species: "Goldfish",
        food: ["dirt"],
        location: "Atlantic Ocean"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}

