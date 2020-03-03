/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
    {
        name: "Finley",
        length: "2 feet",
        species: "Atlantic Blue Marlin",
        food: ["mackerel, tuna"],
        location: "Atlantic Ocean",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atlantic_blue_marlin.jpg/220px-Atlantic_blue_marlin.jpg"
    },

    {
        name: "Bubbles",
        length: "2 inches",
        species: "Big Eye Tuna",
        food: ["crustaceans"],
        location: "Pacific Ocean",
        image: "https://www.pewtrusts.org/-/media/post-launch-images/2018/07/kdx03r/16x9_m.jpg"

    },

    {
        name: "Captain",
        length: "4 inches",
        species: "Brown Trout",
        food: ["zooplankton, insects"],
        location: "Atlantic Ocean",
        image: "https://www.gannett-cdn.com/-mm-/9afb2f172f65b2d22ca128cd9d416f95c1905042/c=1138-0-3730-2592/local/-/media/2017/04/07/Elmira/B9327072164Z.1_20170407191158_000_G8NI0ECV0.1-0.jpg?quality=10"
    },

    {
        name: "Squirt",
        length: "4 inches",
        species: "Wahoo",
        food: ["bill fish"],
        location: "Atlantic Ocean",
        image: "https://www.sosuafishing.com/wp-content/uploads/2018/01/wahoo.jpg"
    },
]


export const useFish = () => {
    return fishCollection.slice()
}

