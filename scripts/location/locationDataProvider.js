/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const locationCollection = [
    {
        name: "Cairns",
        location: "Australia",
        image: "https://australienexperten.com/wp-content/uploads/2018/05/cns-001-500x332.jpg"
    },

    {
        name: "Azores",
        location: "Australia",
        image: "https://i2.wp.com/thepointsguy.com/wp-content/uploads/2018/02/Lake-of-Sete-Cidades-from-Vista-do-Rei-viewpoint-in-Sao-Miguel-Azores.jpg?resize=480%2C270px&ssl=1"

    },

    {
        name: "Orkney Islands",
        location: "Scotland",
        image: "https://static.onecms.io/wp-content/uploads/sites/28/2017/04/Orkney-Islands-VACAYSCOTS0417.jpg"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}
