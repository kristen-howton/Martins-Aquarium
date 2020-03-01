/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
    {
        name: "Betty",
        length: "2 feet",
        species: "Longtooth Barracuda",
        food: ["algae"],
        location: "Cumberland River",
        image: "https://i.ytimg.com/vi/z_XlTRYLZ1Q/maxresdefault.jpg"

    },

    {
        name: "Nemo",
        length: "2 inches",
        species: "Clownfish",
        food: ["Plankton"],
        location: "Great Barrier Reef",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1"

    },

    {
        name: "Dory",
        length: "4 inches",
        species: "Blue Tang",
        food: ["Clownfish"],
        location: "New Zealand Sea",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1"
    },

    {
        name: "Bart",
        length: "4 inches",
        species: "Goldfish",
        food: ["dirt"],
        location: "Atlantic Ocean",
        image: "https://www.peta.org/wp-content/uploads/2019/08/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}

