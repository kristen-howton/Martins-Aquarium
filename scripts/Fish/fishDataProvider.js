/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
    {
        name: "Finley",
        length: "2",
        species: "Atlantic Blue Marlin",
        food: ["mackerel, tuna"],
        location: "Atlantic Ocean",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atlantic_blue_marlin.jpg/220px-Atlantic_blue_marlin.jpg"
    },

    {
        name: "Bubbles",
        length: "5",
        species: "Big Eye Tuna",
        food: ["crustaceans"],
        location: "Pacific Ocean",
        image: "https://www.pewtrusts.org/-/media/post-launch-images/2018/07/kdx03r/16x9_m.jpg"

    },

    {
        name: "Captain",
        length: "9",
        species: "Brown Trout",
        food: ["zooplankton, insects"],
        location: "Atlantic Ocean",
        image: "https://www.gannett-cdn.com/-mm-/9afb2f172f65b2d22ca128cd9d416f95c1905042/c=1138-0-3730-2592/local/-/media/2017/04/07/Elmira/B9327072164Z.1_20170407191158_000_G8NI0ECV0.1-0.jpg?quality=10"
    },

    {
        name: "Squirt",
        length: "4",
        species: "Wahoo",
        food: ["bill fish"],
        location: "Atlantic Ocean",
        image: "https://www.sosuafishing.com/wp-content/uploads/2018/01/wahoo.jpg"
    },
]

const useFish = () => {
    return fishCollection.slice()
}

const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}



const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}

export { useFish };
export { mostHolyFish };
export { soldierFish };
export { nonHolyFish };